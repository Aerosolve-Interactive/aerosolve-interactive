from __future__ import annotations

from pathlib import Path

import cadquery as cq
from cadquery import exporters


# All dimensions in this file are in millimeters.
ROOT = Path(__file__).resolve().parents[1]
OUTPUT_ROOT = ROOT / "public" / "cad" / "kits"


def safe_fillet(shape: cq.Workplane, selector: str, radius: float) -> cq.Workplane:
    try:
        return shape.edges(selector).fillet(radius)
    except Exception:
        return shape


def export_part(shape: cq.Workplane, kit_slug: str, file_name: str) -> Path:
    output_dir = OUTPUT_ROOT / kit_slug
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / f"{file_name}.step"
    exporters.export(shape, str(output_path))
    print(f"Generated {output_path.relative_to(ROOT)}")
    return output_path


def make_angle_bracket() -> cq.Workplane:
    base_length = 80
    height = 60
    thickness = 5
    hole_diameter = 4

    bracket = (
        cq.Workplane("XZ")
        .polyline([(-base_length / 2, -height / 2), (base_length / 2, -height / 2), (-base_length / 2, height / 2)])
        .close()
        .extrude(thickness)
    )
    bracket = safe_fillet(bracket, "|Y", 1.2)

    try:
        bracket = (
            bracket.faces(">Y")
            .workplane(centerOption="CenterOfMass")
            .pushPoints([(-18, -8), (0, 8), (18, 22)])
            .hole(hole_diameter)
        )
    except Exception:
        pass

    return bracket


def make_glider_cradle() -> cq.Workplane:
    length = 70
    width = 25
    height = 12
    groove_width = 14
    groove_depth = 9

    cradle = cq.Workplane("XY").box(length, width, height)
    cradle = (
        cradle.faces(">Z")
        .workplane()
        .rect(length - 6, groove_width)
        .cutBlind(-groove_depth)
    )
    cradle = safe_fillet(cradle, "|Z", 1.0)
    return cradle


def make_fin_collar() -> cq.Workplane:
    outer_diameter = 32
    inner_diameter = 24
    height = 12
    slot_width = 2.5
    slot_depth = 6

    collar = (
        cq.Workplane("XY")
        .circle(outer_diameter / 2)
        .circle(inner_diameter / 2)
        .extrude(height)
    )

    collar = (
        collar.faces(">Z")
        .workplane(centerOption="CenterOfMass")
        .pushPoints([(13, 0), (-13, 0)])
        .rect(slot_depth, slot_width)
        .cutBlind(-height)
    )
    collar = (
        collar.faces(">Z")
        .workplane(centerOption="CenterOfMass")
        .pushPoints([(0, 13), (0, -13)])
        .rect(slot_width, slot_depth)
        .cutBlind(-height)
    )
    collar = safe_fillet(collar, "|Z", 0.7)
    return collar


def make_interchangeable_fin_slot() -> cq.Workplane:
    length = 30
    width = 12
    height = 6
    slot_width = 2

    part = cq.Workplane("XY").box(length, width, height)
    part = (
        part.faces(">Z")
        .workplane()
        .rect(length - 6, slot_width)
        .cutBlind(-(height - 1.2))
    )
    part = safe_fillet(part, "|Z", 0.8)
    return part


def make_capsule_shell() -> cq.Workplane:
    outer_diameter = 45
    height = 35
    wall_thickness = 2

    shell = cq.Workplane("XY").circle(outer_diameter / 2).extrude(height)
    shell = safe_fillet(shell, "<Z", 6)

    try:
        shell = shell.faces(">Z").shell(-wall_thickness)
    except Exception:
        inner_height = height - wall_thickness
        shell = (
            shell.faces(">Z")
            .workplane()
            .circle((outer_diameter / 2) - wall_thickness)
            .cutBlind(-inner_height)
        )

    return shell


def make_parachute_attachment_ring() -> cq.Workplane:
    outer_diameter = 45
    inner_diameter = 35
    thickness = 3
    tie_hole_diameter = 3
    tie_hole_radius = 19

    ring = (
        cq.Workplane("XY")
        .circle(outer_diameter / 2)
        .circle(inner_diameter / 2)
        .extrude(thickness)
    )
    ring = (
        ring.faces(">Z")
        .workplane(centerOption="CenterOfMass")
        .pushPoints([(tie_hole_radius, 0), (-tie_hole_radius, 0), (0, tie_hole_radius), (0, -tie_hole_radius)])
        .hole(tie_hole_diameter)
    )
    ring = safe_fillet(ring, "|Z", 0.6)
    return ring


def make_servo_mount() -> cq.Workplane:
    plate_length = 40
    plate_width = 25
    plate_thickness = 4
    cutout_length = 23
    cutout_width = 12.5
    support_height = 12
    support_width = 3

    plate = cq.Workplane("XY").box(plate_length, plate_width, plate_thickness)
    plate = (
        plate.faces(">Z")
        .workplane()
        .rect(cutout_length, cutout_width)
        .cutBlind(-plate_thickness)
    )
    plate = (
        plate.faces(">Z")
        .workplane()
        .pushPoints([(-14, -8), (14, -8), (-14, 8), (14, 8)])
        .hole(2)
    )

    side_supports = (
        cq.Workplane("XY")
        .pushPoints([(0, 11), (0, -11)])
        .box(plate_length, support_width, support_height)
        .translate((0, 0, (support_height + plate_thickness) / 2))
    )

    mount = plate.union(side_supports)
    mount = safe_fillet(mount, "|Z", 0.8)
    return mount


def make_platform_slider_bracket() -> cq.Workplane:
    base_length = 60
    base_width = 20
    base_thickness = 5
    rail_height = 8
    rail_width = 4

    base = cq.Workplane("XY").box(base_length, base_width, base_thickness)
    rails = (
        cq.Workplane("XY")
        .pushPoints([(0, 6), (0, -6)])
        .box(base_length, rail_width, rail_height)
        .translate((0, 0, (rail_height + base_thickness) / 2))
    )

    bracket = base.union(rails)
    bracket = safe_fillet(bracket, "|Z", 0.8)
    return bracket


def make_airfoil_test_mount() -> cq.Workplane:
    base_length = 60
    base_width = 40
    base_thickness = 5
    post_width = 8
    post_depth = 10
    post_height = 50
    slot_width = 3

    base = cq.Workplane("XY").box(base_length, base_width, base_thickness)
    post = (
        cq.Workplane("XY")
        .box(post_width, post_depth, post_height)
        .translate((0, 0, (post_height + base_thickness) / 2))
    )
    mount = base.union(post)

    mount = (
        mount.faces(">Z")
        .workplane(centerOption="CenterOfMass")
        .center(0, 0)
        .rect(slot_width, post_depth - 2)
        .cutBlind(-12)
    )
    mount = safe_fillet(mount, "|Z", 0.8)
    return mount


def make_sample_airfoil_wing() -> cq.Workplane:
    span = 80
    chord = 30

    upper = [
        (0, 0),
        (4, 2.6),
        (10, 4.8),
        (18, 6),
        (25, 3.2),
        (chord, 0),
    ]
    lower = [
        (24, -0.7),
        (15, -0.6),
        (7, -0.35),
        (0, 0),
    ]

    wing = (
        cq.Workplane("XZ")
        .moveTo(*upper[0])
        .spline(upper[1:])
        .spline(lower)
        .close()
        .extrude(span)
    )
    wing = safe_fillet(wing, "|Y", 0.6)
    return wing


def main() -> None:
    parts = [
        ("glider-launcher-stand", "angle-bracket", make_angle_bracket),
        ("glider-launcher-stand", "glider-cradle", make_glider_cradle),
        ("adjustable-rocket-fin-test-fixture", "fin-collar", make_fin_collar),
        ("adjustable-rocket-fin-test-fixture", "interchangeable-fin-slot", make_interchangeable_fin_slot),
        ("payload-parachute-capsule-challenge", "capsule-shell", make_capsule_shell),
        ("payload-parachute-capsule-challenge", "parachute-attachment-ring", make_parachute_attachment_ring),
        ("arduino-shake-table-structural-test-rig", "servo-mount", make_servo_mount),
        ("arduino-shake-table-structural-test-rig", "platform-slider-bracket", make_platform_slider_bracket),
        ("mini-wind-tunnel-flow-visualizer", "airfoil-test-mount", make_airfoil_test_mount),
        ("mini-wind-tunnel-flow-visualizer", "sample-airfoil-wing", make_sample_airfoil_wing),
    ]

    failures: list[tuple[str, str, str]] = []

    for kit_slug, file_name, factory in parts:
        try:
            shape = factory()
            export_part(shape, kit_slug, file_name)
        except Exception as error:
            failures.append((kit_slug, file_name, str(error)))
            print(f"Failed to generate public/cad/kits/{kit_slug}/{file_name}.step: {error}")

    if failures:
        raise SystemExit(f"{len(failures)} CAD export(s) failed.")


if __name__ == "__main__":
    main()
