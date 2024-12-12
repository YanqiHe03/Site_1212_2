import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageViewer from './ImageViewer';

interface ProjectGalleryProps {
  images: string[];
  layout?: 'grid' | 'single';
}

export default function ProjectGallery({ images, layout = 'grid' }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      <div className={layout === 'grid' ? "grid grid-cols-1 md:grid-cols-3 gap-4" : "space-y-4"}>
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative cursor-pointer group bg-black ${
              layout === 'grid' ? 'aspect-[4/3]' : 'aspect-[16/9]'
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <ImageViewer
        images={images}
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
}