'use client';

import { AppIcon } from '@/components/ui/AppIcon';

interface PrintGuideButtonProps {
  className?: string;
  label?: string;
}

export default function PrintGuideButton({
  className = '',
  label = 'Print Guide',
}: PrintGuideButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`btn-primary px-5 py-3 ${className}`.trim()}
    >
      {label}
      <AppIcon name="clipboard" className="h-3.5 w-3.5" />
    </button>
  );
}
