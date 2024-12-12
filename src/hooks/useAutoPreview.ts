import { useState, useEffect, useCallback } from 'react';
import { Project } from '../data/projects';

// Constants for timing configuration
const INACTIVITY_TIMEOUT = 5000; // 5 seconds before auto-preview starts
const PROJECT_DISPLAY_TIME = 8000; // 8 seconds per project
const INACTIVITY_CHECK_INTERVAL = 1000; // Check every second

export function useAutoPreview(projects: Project[]) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [autoPreviewIndex, setAutoPreviewIndex] = useState(0);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());

  const handleProjectHover = useCallback((project: Project) => {
    setActiveProject(project);
    setIsUserInteracting(true);
    setLastInteractionTime(Date.now());
  }, []);

  const handleProjectLeave = useCallback(() => {
    setIsUserInteracting(false);
    setLastInteractionTime(Date.now());
    setActiveProject(null);
  }, []);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    let inactivityTimeoutId: ReturnType<typeof setTimeout>;

    const startAutoPreview = () => {
      if (!isUserInteracting) {
        setAutoPreviewIndex(0);
        setActiveProject(projects[0]);
        
        intervalId = setInterval(() => {
          setAutoPreviewIndex(prev => {
            const nextIndex = (prev + 1) % projects.length;
            setActiveProject(projects[nextIndex]);
            return nextIndex;
          });
        }, PROJECT_DISPLAY_TIME);
      }
    };

    const handleInactivity = () => {
      const timeSinceLastInteraction = Date.now() - lastInteractionTime;
      if (timeSinceLastInteraction > INACTIVITY_TIMEOUT) {
        startAutoPreview();
      } else {
        inactivityTimeoutId = setTimeout(handleInactivity, INACTIVITY_CHECK_INTERVAL);
      }
    };

    if (!isUserInteracting) {
      inactivityTimeoutId = setTimeout(handleInactivity, INACTIVITY_TIMEOUT);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(inactivityTimeoutId);
    };
  }, [isUserInteracting, projects, lastInteractionTime]);

  return {
    activeProject,
    handleProjectHover,
    handleProjectLeave,
    isAutoPreviewActive: !isUserInteracting,
    currentIndex: autoPreviewIndex
  };
}