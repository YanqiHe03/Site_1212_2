import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Timeline' },
    { path: '/works', label: 'Works' },
    { path: '/bio', label: 'Bio' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="hidden md:flex fixed right-8 top-0 h-screen items-center z-50"
    >
      <div className="space-y-6">
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={item.path}
              className={`text-lg flex items-center gap-3 ${
                location.pathname === item.path ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              <div className="w-2 h-4 relative flex items-center">
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navDot"
                    className="absolute w-2 h-2 bg-white rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}