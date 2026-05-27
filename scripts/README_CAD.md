# AeroKits CAD Generation

This repository includes a CadQuery-based generator for optional AeroKits STEP files used by the advanced build guides.

These generated CAD files are starter educational parts for outreach and classroom use. They are not certified mechanical parts, and they should be reviewed, tested, and adjusted before any demanding or safety-critical use.

## Command Prompt setup

Use these exact Command Prompt commands:

```bat
cd /d "C:\Users\Smayan Rav\aerosolve-interactive"
.venv-cad\Scripts\activate.bat
pip install -r requirements-cad.txt
python scripts\generate_cad.py
```

## What the script does

- Uses CadQuery to generate real STEP files
- Creates output folders automatically when needed
- Writes generated files into `public/cad/kits/[kitSlug]/`
- Prints a success message for every exported part

## Output folders

Generated STEP files are written to:

```text
public/cad/kits/[kitSlug]/[fileName].step
```

These files are then available on the website through:

```text
/cad/kits/[kitSlug]/[fileName].step
```

## Editing dimensions

All dimensions in `scripts/generate_cad.py` are in millimeters.

To modify a part:

1. Open `scripts/generate_cad.py`
2. Find the function for the part you want to change
3. Adjust the dimension variables near the top of that function
4. Run the generator again

Each part has its own function so changes stay localized and easier to test.

## Using the STEP files

You can open the generated `.step` files in:

- Onshape
- Autodesk Fusion
- SolidWorks
- FreeCAD

Typical workflow:

1. Generate the STEP files locally
2. Import the file into your CAD tool
3. Inspect dimensions and clearances
4. Adjust the script if needed
5. Regenerate and re-import

## Notes on printability

The generated parts are designed to stay simple, printable, and easy to edit. They are intended as optional helpers for educational activities, not as production-ready hardware.

If you add tighter tolerances, heavier loads, or custom hardware, re-check the model in your CAD tool before printing or using it in a workshop.
