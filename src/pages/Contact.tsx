import { motion } from 'framer-motion';
import { Mail, Instagram, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'Yanqi.He03@gmail.com',
      link: 'mailto:Yanqi.He03@gmail.com'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@gr4mdhe',
      link: 'https://www.instagram.com/gr4mdhe/'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <h1 className="text-6xl font-display font-bold text-white">Contact</h1>
          
          <div className="space-y-8">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center group p-4 rounded-lg hover:bg-white/5"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white/20">
                  {contact.icon}
                </div>
                <div className="ml-6 flex-1">
                  <p className="text-sm text-white/60">{contact.label}</p>
                  <p className="text-white text-lg">{contact.value}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}