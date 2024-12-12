import { motion } from 'framer-motion';

interface VideoEmbedProps {
  src: string;
  title: string;
}

export default function VideoEmbed({ src, title }: VideoEmbedProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto aspect-[16/9] w-full mb-8"
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title={title}
        className="w-full h-full"
      />
    </motion.div>
  );
}