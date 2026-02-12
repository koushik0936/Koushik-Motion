
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, MessageSquare, X, Check, Copy, ArrowRight, Zap } from 'lucide-react';

interface OrderSystemProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  email: string;
}

const MESSAGE_TEMPLATE = `Hello! I want to order a video editing service.

Project Type:
(YouTube Video / Reels / Advertisement / Documentary / Podcast)

Video Length:

Deadline:

Budget:

Reference Link:

Additional Details:`;

export const OrderSystem: React.FC<OrderSystemProps> = ({ isOpen, onClose, brandName, email }) => {
  const [copied, setCopied] = useState(false);
  
  // Updated with your actual WhatsApp number (formatted with country code)
  const WHATSAPP_NUMBER = "8801999553177"; 
  const FACEBOOK_USERNAME = "KOUSHIKMOTION"; // Updated to reflect brand

  const handlePlatformClick = async (platform: 'whatsapp' | 'email' | 'messenger') => {
    const encodedMessage = encodeURIComponent(MESSAGE_TEMPLATE);
    
    // Auto-copy to clipboard for all platforms
    await navigator.clipboard.writeText(MESSAGE_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    } else if (platform === 'email') {
      window.location.href = `mailto:${email}?subject=Video%20Editing%20Project%20Inquiry&body=${encodedMessage}`;
    } else if (platform === 'messenger') {
      window.open(`https://m.me/${FACEBOOK_USERNAME}`, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[20000] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* RGB Glow border simulation */}
            <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none border border-white/5 shadow-[0_0_40px_rgba(37,99,235,0.1)]" />

            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={18} className="text-blue-500 fill-blue-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">1-Click Order</span>
                  </div>
                  <h2 className="text-3xl font-bold cinematic-text">Start Your Project</h2>
                  <p className="text-white/40 text-sm mt-2">Select your preferred platform to send the brief instantly.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                {/* WhatsApp */}
                <PlatformButton 
                  icon={<MessageCircle size={24} />}
                  title="WhatsApp"
                  description="Fastest for direct communication"
                  color="hover:border-green-500/50 hover:bg-green-500/5"
                  onClick={() => handlePlatformClick('whatsapp')}
                />

                {/* Email */}
                <PlatformButton 
                  icon={<Mail size={24} />}
                  title="Email"
                  description="Best for detailed professional briefs"
                  color="hover:border-blue-500/50 hover:bg-blue-500/5"
                  onClick={() => handlePlatformClick('email')}
                />

                {/* Messenger */}
                <PlatformButton 
                  icon={<MessageSquare size={24} />}
                  title="Messenger"
                  description="Chat via Facebook Business"
                  color="hover:border-purple-500/50 hover:bg-purple-500/5"
                  onClick={() => handlePlatformClick('messenger')}
                />
              </div>

              {/* Clipboard Info */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 relative group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Auto-Generated Message</span>
                  {copied ? (
                    <span className="text-[9px] font-bold text-green-500 flex items-center gap-1">
                      <Check size={10} /> COPIED TO CLIPBOARD
                    </span>
                  ) : (
                    <Copy size={14} className="text-white/20" />
                  )}
                </div>
                <div className="text-[11px] text-white/50 font-mono line-clamp-3 leading-relaxed">
                  {MESSAGE_TEMPLATE}
                </div>
                {/* Info Text */}
                <p className="mt-4 text-[10px] text-white/30 italic">
                  * For Messenger: The message is copied to your clipboard. Simply paste it when the chat opens.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PlatformButton: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string;
  onClick: () => void;
}> = ({ icon, title, description, color, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02, x: 5 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full flex items-center gap-5 p-5 rounded-2xl glass border border-white/5 transition-all duration-300 text-left group ${color}`}
  >
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-xs text-white/40 group-hover:text-white/60">{description}</p>
    </div>
    <ArrowRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
  </motion.button>
);
