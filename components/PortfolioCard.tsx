
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { Play, X } from 'lucide-react';

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={`card-${project.id}`}
        onClick={() => setIsOpen(true)}
        className="relative group aspect-video rounded-2xl overflow-hidden cursor-pointer interactive glass"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <p className="text-sm font-medium text-blue-400 mb-1">{project.category}</p>
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Play size={16} fill="white" />
            <span>Watch Preview</span>
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-blue-500/0 via-white/20 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-sm pointer-events-none transition-opacity duration-500" />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[11000] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
          >
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[11001]"
            >
              <X size={40} />
            </motion.button>
            
            <motion.div
              layoutId={`card-${project.id}`}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <video
                src={project.videoUrl}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none">
                <h2 className="text-4xl font-bold mb-2 cinematic-text">{project.title}</h2>
                <p className="text-white/60 max-w-2xl">{project.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioCard;
