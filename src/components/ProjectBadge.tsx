import { cn } from "@/lib/utils";

interface ProjectBadgeProps {
  category: 'personal' | 'school' | 'work';
  formats: ('visual' | 'audio' | 'installation' | 'interactive' | 'film')[];
  className?: string;
}

export default function ProjectBadge({ category, formats, className }: ProjectBadgeProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="text-white text-[10px] uppercase tracking-wider whitespace-nowrap">{formats.join(' • ')}</span>
      <span className="text-white text-[10px]">•</span>
      <span className="text-white text-[10px] uppercase tracking-wider whitespace-nowrap">{category}</span>
    </div>
  );
}