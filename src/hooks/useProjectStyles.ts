export function useProjectStyles(projectId: string) {
  const getHoverColor = () => {
    switch (projectId) {
      case 'db8634':
        return '#db8634';
      case 'the-dawn':
        return '#1F2D56';
      case 'starlights':
        return '#EDCF75';
      case 'ta':
        return '#FE6469';
      default:
        return 'white';
    }
  };

  const getTextShadow = () => {
    const color = getHoverColor();
    return `0 0 20px ${color}40, 0 0 40px ${color}20`;
  };

  return {
    getHoverColor,
    getTextShadow
  };
}