
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { PROJECTS, SERVICES, PROCESS_STEPS, INDUSTRIES } from './constants';
import Scene3D from './components/Scene3D';
import PortfolioCard from './components/PortfolioCard';
import CustomCursor from './components/CustomCursor';
import AssistantBot from './components/AssistantBot';
import { OrderSystem } from './components/OrderSystem';
import { 
  Mail, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  Play, 
  Camera, 
  Film, 
  Layers,
  Users,
  ShoppingBag,
  Briefcase,
  Megaphone,
  Home,
  CheckCircle2,
  Cpu,
  Monitor,
  Zap,
  ShoppingCart,
  MessageCircle
} from 'lucide-react';

const IconMap: { [key: string]: any } = {
  Users: Users,
  ShoppingBag: ShoppingBag,
  Briefcase: Briefcase,
  Megaphone: Megaphone,
  Home: Home
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    return smoothScroll.onChange(setCurrentProgress);
  }, [smoothScroll]);

  // Parallax for About Section
  const aboutImageY = useTransform(aboutScrollProgress, [0, 1], [-50, 50]);
  const aboutTextY = useTransform(aboutScrollProgress, [0, 1], [30, -30]);

  // Section specific transformations
  const heroOpacity = useTransform(smoothScroll, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothScroll, [0, 0.15], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-[500vh] bg-black text-white selection:bg-blue-500/30">
      <CustomCursor />
      <Scene3D scrollProgress={currentProgress} />
      <AssistantBot />
      <OrderSystem 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)}
        brandName="KOUSHIK MOTION"
        email="koushikbusiness009@gmail.com"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[1000] p-8 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          KOUSHIK MOTION<span className="text-blue-600">.</span>
        </motion.div>
        <div className="flex gap-8 text-xs font-medium tracking-[0.2em] uppercase text-white/50">
          {['Works', 'About', 'Industries', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="sticky top-0 h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Digital Narrative Architect
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 cinematic-text leading-tight"
          >
            TRANSFORMING PIXELS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400">INTO EMOTION.</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <motion.button
              onClick={() => setIsOrderModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 interactive hover:bg-blue-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
            >
              ORDER PROJECT <Zap size={20} className="fill-black group-hover:scale-110 transition-transform" />
            </motion.button>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[8px] font-bold">
                    {i === 1 ? 'Ae' : i === 2 ? 'Pr' : 'Ai'}
                  </div>
                ))}
              </div>
              <span className="text-white/40 font-bold uppercase text-[9px] tracking-widest">Mastery of After Effects & Premiere Pro</span>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Enter</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-12 bg-white/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500" />
          </motion.div>
        </div>
      </section>

      {/* Re-envisioned About Me Section */}
      <section id="about" ref={aboutRef} className="relative py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-32">
             <motion.span 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs block mb-4"
             >
               Behind the Motion
             </motion.span>
             <h2 className="text-6xl md:text-8xl font-black cinematic-text leading-none">
               Meet Koushik.<br />
               <span className="text-white/20 hover:text-white/40 transition-colors duration-500">The Editor Behind the Brand.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                style={{ y: aboutImageY }}
                className="relative aspect-[1/1] rounded-[3rem] overflow-hidden glass border-white/20 shadow-2xl group"
              >
                <img 
                  src="image_3.png" 
                  alt="Koushik Motion Portrait" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Float badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-8 right-8 p-4 glass rounded-2xl flex items-center gap-3 border-white/10"
                >
                  <Cpu className="text-blue-400" size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">High Performance</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div style={{ y: aboutTextY }}>
                <h3 className="text-3xl font-bold mb-6 text-blue-400">Expert in SaaS Motion Graphics</h3>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
                  I don't just put clips together. I build visual ecosystems for software. 
                  My expertise lies in translating complex user interfaces into <span className="text-white font-bold border-b-2 border-blue-600">breathtaking motion stories</span> that convert users and explain value.
                </p>
                <p className="text-lg text-white/50 leading-relaxed mb-12">
                  With a deep mastery of <strong>After Effects</strong> for surgical precision and <strong>Premiere Pro</strong> for narrative flow, I've helped over 50 startups and creators define their visual identity in the digital space.
                </p>

                {/* Toolkit Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-colors group">
                    <Monitor className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-2">After Effects</h4>
                    <p className="text-sm text-white/40">Complex UI animations, VFX, and high-end motion design systems.</p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-colors group">
                    <Layers className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-2">Premiere Pro</h4>
                    <p className="text-sm text-white/40">Cinematic storytelling, pacing, and professional color grading.</p>
                  </div>
                </div>

                {/* Call to action */}
                <div className="pt-12">
                   <motion.button 
                     onClick={() => setIsOrderModalOpen(true)}
                     whileHover={{ x: 10 }}
                     className="inline-flex items-center gap-4 text-blue-400 font-bold uppercase text-xs tracking-[0.3em] group"
                   >
                     Let's start your project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                   </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="works" className="relative py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 cinematic-text">Selected Works</h2>
          <p className="text-white/40 max-w-xl">A collection of premium SaaS motion graphics and commercial video edits.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Brands & Industries Section */}
      <section id="industries" className="relative py-32 px-6 overflow-hidden bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4"
            >
              Collaborations & Markets
            </motion.p>
            <h2 className="text-5xl md:text-7xl font-bold cinematic-text">Who I Work With</h2>
            <p className="text-white/40 mt-6 max-w-2xl mx-auto">I partner with innovators across industries to create visual assets that define their market presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, i) => {
              const IconComponent = IconMap[industry.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/20 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-colors">
                    <IconComponent size={32} className="text-white/80 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 cinematic-text">{industry.title}</h3>
                  <ul className="space-y-3">
                    {industry.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                        <CheckCircle2 size={14} className="text-blue-500/50" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Showcase */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden glass border-white/10"
        >
          <img 
            src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=1280,height=640/gallery-images/yv/634be94e-28b3-4679-b873-6701df928a3f" 
            alt="Koushik Motion Workspace" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent flex items-center px-12 md:px-20">
            <div className="max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={20} className="text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Pro Toolkit</span>
                </div>
                <h3 className="text-4xl font-bold mb-4 cinematic-text">Precision Workflow</h3>
                <p className="text-white/60">Every project is handled with 4K standards, high-bitrate exports, and a focus on high-retention editing techniques.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Frictionless Order CTA Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />
          
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
              <Zap size={32} className="fill-blue-500" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold mb-8 cinematic-text">Ready to Order?</h2>
          <p className="text-white/50 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
            Forget long forms. Click below to instantly send a professional project inquiry through your favorite platform.
          </p>
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.button 
              onClick={() => setIsOrderModalOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(37, 99, 235, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-blue-600 text-white rounded-2xl font-black text-lg tracking-widest shadow-2xl shadow-blue-500/20 interactive transition-all"
            >
              ORDER PROJECT NOW
            </motion.button>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Responds in under 5 seconds</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-white/50 pt-16 mt-16 border-t border-white/5">
            <a href="mailto:koushikbusiness009@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors"><Mail size={20} className="text-blue-500" /> koushikbusiness009@gmail.com</a>
            <a href="https://wa.me/8801999553177" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors"><MessageCircle size={20} className="text-blue-500" /> WhatsApp</a>
            <a href="#" className="flex items-center gap-3 hover:text-white transition-colors"><Instagram size={20} className="text-blue-500" /> Instagram</a>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center">
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/10 mb-4">KOUSHIK MOTION &copy; 2024</div>
        <div className="text-[8px] uppercase tracking-[0.3em] text-white/5">Designed for SaaS Excellence</div>
      </footer>
    </div>
  );
};

export default App;
