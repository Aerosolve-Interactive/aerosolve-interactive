import type { CadFile } from "@/data/kits";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { AppIcon } from "@/components/ui/AppIcon";

interface CADFilesPanelProps {
  kitSlug: string;
  cadFiles: CadFile[];
}

export default function CADFilesPanel({ kitSlug, cadFiles }: CADFilesPanelProps) {
  return (
    <section id="cad-files">
      <p className="eyebrow mb-5">CAD / 3D Printing Files</p>
      <div className="premium-panel-strong rounded-[28px] p-6 md:p-7">
        <p className="text-sm leading-7 text-slate-300">
          Some advanced guides include optional 3D-printable parts. STEP files can be opened in CAD tools such as
          Onshape, Fusion, SolidWorks, or FreeCAD. These parts are optional; the kit should still be buildable with
          cardboard or common materials.
        </p>
        <p className="mt-4 text-xs leading-6 text-slate-500">
          {/* To enable downloads, place real .step files in: public/cad/kits/[kitSlug]/[fileName].step */}
          {/* Then set status to "Available" in data/kits.ts. */}
          Expected folder for this guide: <code>/public/cad/kits/{kitSlug}/</code>
        </p>

        <div className="mt-6 space-y-3">
          {cadFiles.map((file) => (
            <article key={file.fileName} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <IconBadge tone={file.status === "Available" ? "cyan" : "indigo"} className="h-10 w-10 rounded-xl">
                    <AppIcon name="boxes" className="h-4 w-4" />
                  </IconBadge>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <p className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-50">
                        {file.label}
                      </p>
                      <Badge tone={file.status === "Available" ? "green" : "indigo"}>{file.status}</Badge>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{file.description}</p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      {file.fileName}.step
                    </p>
                  </div>
                </div>

                {file.status === "Available" ? (
                  <a href={file.filePath} download className="btn-primary px-5 py-3">
                    Download STEP file
                    <AppIcon name="clipboard" className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    STEP file coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
