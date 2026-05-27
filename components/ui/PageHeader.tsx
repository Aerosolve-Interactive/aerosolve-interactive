import type { ReactNode } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  meta?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  meta,
}: PageHeaderProps) {
  return (
    <section className="section-shell border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 md:pb-16 md:pt-24">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={meta}
        />
      </div>
    </section>
  );
}
