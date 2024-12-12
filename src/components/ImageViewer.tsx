import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ImageViewerProps {
  images: string[];
  selectedImage: string | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageViewer({ 
  images, 
  selectedImage, 
  onClose, 
  onNext, 
  onPrevious 
}: ImageViewerProps) {
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, onPrevious, onNext, onClose]);

  if (!selectedImage) return null;

  const viewer = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="fixed top-6 right-8 text-white hover:text-white/80 z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="fixed left-8 top-1/2 -translate-y-1/2 text-white hover:text-white/80 z-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="fixed right-8 top-1/2 -translate-y-1/2 text-white hover:text-white/80 z-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image */}
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="p-8 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={selectedImage}
            alt="Selected gallery image"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </motion.div>

        {/* Image Counter */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white">
          {images.indexOf(selectedImage) + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );

  // Use createPortal to render the viewer at the root level
  return createPortal(viewer, document.body);
}