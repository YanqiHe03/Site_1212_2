import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projects';

export default function Navbar() {
  const { scrollY } = useScroll();
  const { visible } = useScrollDirection();
  const translateY = useTransform(scrollY, [0, 100], [0, -100]);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Portfolio' },
    { path: '/works', label: 'Works' },
    { path: '/bio', label: 'Bio' }
  ];
  
  const isPortfolioPage = location.pathname === '/';

  return (
    <motion.nav 
      style={{ y: translateY }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center ${
        isMenuOpen ? 'bg-transparent' : 'bg-gradient-to-b from-black via-black/80 to-transparent'
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Link to="/" className="text-2xl md:text-3xl font-stretch text-white">
          YANQI HEEE
        </Link>
      </motion.div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center relative">
        <div className="absolute -right-4 -top-8 -z-10 opacity-10">
          <span className="font-lot text-[8rem] text-white select-none">HE</span>
        </div>
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={item.path}
              className={`text-lg ${
                location.pathname === item.path ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="navIndicator"
                  className="h-0.5 bg-white mt-1"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white/60 hover:text-white p-2 -mr-2 z-50"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          backdropFilter: isMenuOpen ? "blur(20px)" : "blur(0px)"
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed inset-0 bg-black/80 z-40 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-20">
          {/* Main Navigation */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl ${
                    location.pathname === item.path ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Navigator (only show on portfolio page) */}
          {isPortfolioPage && (
            <div className="pb-16 px-8">
              <h3 className="text-white/40 uppercase tracking-wider text-sm mb-4">Projects</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/project/${project.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 font-chillpixels-mono text-sm [image-rendering:pixelated]">
                        {project.year}
                      </span>
                      <h4 
                        className="text-white/60 group-hover:text-white transition-colors font-sans"
                        dangerouslySetInnerHTML={{ __html: project.title }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
}