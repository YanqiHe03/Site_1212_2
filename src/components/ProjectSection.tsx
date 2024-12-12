import ProjectGallery from './ProjectGallery';

interface ProjectSectionProps {
  title: string;
  content: string | { text: string; images?: string[] }[];
  images?: string[];
  isOutcomeSection?: boolean;
}

export default function ProjectSection({ title, content, images, isOutcomeSection }: ProjectSectionProps) {
  const isMultiSection = Array.isArray(content);

  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-sans font-bold text-white">{title}</h2>
      
      {isMultiSection ? (
        <div className="space-y-12">
          {content.map((section, index) => (
            <div key={index} className="space-y-8">
              <p className="text-white text-lg leading-relaxed">{section.text}</p>
              {section.images && section.images.length > 0 && (
                <ProjectGallery images={section.images} layout="grid" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-white text-lg leading-relaxed">{content}</p>
          {images && images.length > 0 && (
            <ProjectGallery 
              images={images} 
              layout={isOutcomeSection ? "single" : "grid"} 
            />
          )}
        </>
      )}
    </section>
  );
}