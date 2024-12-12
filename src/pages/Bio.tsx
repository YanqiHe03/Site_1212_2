import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail,
  Instagram,
  ExternalLink,
  MessageCircle,
  Download,
} from 'lucide-react';
import { useScrollNavigation } from '../hooks/useScrollNavigation';
import ScrollIndicator from '../components/ScrollIndicator';
import TouchNavigationWrapper from '../components/TouchNavigationWrapper';

export default function Bio() {
  const { isThresholdReached, progress } = useScrollNavigation({ 
    nextRoute: '/'
  });

  return (
    <TouchNavigationWrapper nextRoute="/" previousRoute="/works">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-[150vh] bg-black"
      >
        <div className="pt-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="space-y-12 relative"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-sans text-4xl md:text-6xl text-white font-bold">Bio</h1>
                <a
                  href="/YanqiHe_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <Link to="/project/starlights" state={{ from: 'bio' }}>
                    <div className="group flex items-baseline gap-4">
                      <span className="font-stretch text-xl md:text-3xl text-white/60 group-hover:text-white transition-colors duration-75">I CREATE</span>
                      <span className="font-stretch text-xl md:text-3xl text-white group-hover:text-[#EDCF75] group-hover:scale-110 transition-all duration-75 origin-left">
                        VISUALS
                      </span>
                    </div>
                  </Link>

                  <Link to="/project/un-project" state={{ from: 'bio' }}>
                    <div className="group flex items-baseline gap-4">
                      <span className="font-stretch text-xl md:text-3xl text-white/60 group-hover:text-white transition-colors duration-75">I CREATE</span>
                      <span className="font-stretch text-xl md:text-3xl text-white group-hover:text-white group-hover:scale-110 transition-all duration-75 origin-left">
                        SOUNDS
                      </span>
                    </div>
                  </Link>

                  <Link to="/project/the-dawn" state={{ from: 'bio' }}>
                    <div className="group flex items-baseline gap-4">
                      <span className="font-stretch text-xl md:text-3xl text-white/60 group-hover:text-white transition-colors duration-75">I CREATE</span>
                      <span className="font-stretch text-xl md:text-3xl text-white group-hover:text-[#1F2D56] group-hover:scale-110 transition-all duration-75 origin-left">
                        EXPERIENCES
                      </span>
                    </div>
                  </Link>

                  <Link to="/project/bd8634" state={{ from: 'bio' }}>
                    <div className="group flex items-baseline gap-4">
                      <span className="font-stretch text-xl md:text-3xl text-white/60 group-hover:text-white transition-colors duration-75">I</span>
                      <span className="font-stretch text-xl md:text-3xl text-white group-hover:text-[#E68629] group-hover:scale-110 transition-all duration-75 origin-left">
                        CONNECT
                      </span>
                      <span className="font-stretch text-xl md:text-3xl text-white/60 group-hover:text-white transition-colors duration-75 translate-x-0 group-hover:translate-x-5 transition-transform duration-75">
                        THINGS TOGETHER
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl text-white font-bold">Contact & Links</h2>
                  <div className="space-y-4">
                    <a
                      href="mailto:Yanqi.He03@gmail.com"
                      className="flex items-center group p-4 rounded-lg hover:bg-white/5"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white/20">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div className="ml-6 flex-1">
                        <p className="text-sm text-white">Email</p>
                        <p className="text-white text-lg">Yanqi.He03@gmail.com</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white" />
                    </a>

                    <a
                      href="https://www.instagram.com/gr4mdhe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group p-4 rounded-lg hover:bg-white/5"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white/20">
                        <Instagram className="w-6 h-6" />
                      </div>
                      <div className="ml-6 flex-1">
                        <p className="text-sm text-white">Instagram</p>
                        <p className="text-white text-lg">@gr4mdhe</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white" />
                    </a>

                    <div className="flex items-center group p-4 rounded-lg hover:bg-white/5">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white/20">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div className="ml-6 flex-1">
                        <p className="text-sm text-white">WeChat</p>
                        <p className="text-white text-lg">GRMDHE</p>
                        <img
                          src="/WECHAT.webp"
                          alt="WeChat QR Code"
                          className="w-48 mt-4 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-32 mb-16">
            <ScrollIndicator 
              message="Scroll down to return to portfolio"
              isThresholdReached={isThresholdReached}
              progress={progress}
            />
          </div>
        </div>
      </motion.div>
    </TouchNavigationWrapper>
  );
}