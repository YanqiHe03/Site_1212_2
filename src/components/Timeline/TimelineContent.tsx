import { Project } from '@/data/projects';
import TimelineItem from './TimelineItem';

interface TimelineContentProps {
  projects: Project[];
  activeProject: Project | null;
  onProjectHover: (project: Project) => void;
  onProjectLeave: () => void;
  isAutoPreviewActive: boolean;
}

export default function TimelineContent({
  projects,
  activeProject,
  onProjectHover,
  onProjectLeave,
  isAutoPreviewActive
}: TimelineContentProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="absolute left-1/2 transform -translate-x-px h-full">
        <div className="absolute h-full w-[1px] bg-white/20"></div>
      </div>
      <div className="space-y-32">
        {projects.map((project, index) => (
          <TimelineItem
            key={project.id}
            index={index}
            {...project}
            onHover={() => onProjectHover(project)}
            onLeave={onProjectLeave}
            isActive={activeProject?.id === project.id}
            isAutoPreviewActive={isAutoPreviewActive}
          />
        ))}
      </div>
    </div>
  );
}