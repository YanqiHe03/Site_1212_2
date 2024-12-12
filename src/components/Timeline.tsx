import ProjectPreview from './Timeline/ProjectPreview';
import TimelineHeader from './TimelineHeader';
import TimelineContent from './Timeline/TimelineContent';
import { projects } from '../data/projects';
import { useAutoPreview } from '../hooks/useAutoPreview';
import { useBackgroundState } from '../hooks/useBackgroundState';

export default function Timeline() {
  const { 
    activeProject, 
    handleProjectHover, 
    handleProjectLeave,
    isAutoPreviewActive 
  } = useAutoPreview(projects);
  const showBackground = useBackgroundState();

  return (
    <div className="relative">
      <ProjectPreview 
        project={activeProject} 
        showDefaultBackground={!activeProject && showBackground}
      />
      
      <TimelineHeader />
      <TimelineContent
        projects={projects}
        activeProject={activeProject}
        onProjectHover={handleProjectHover}
        onProjectLeave={handleProjectLeave}
        isAutoPreviewActive={isAutoPreviewActive}
      />
    </div>
  );
}