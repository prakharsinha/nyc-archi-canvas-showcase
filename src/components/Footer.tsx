
import { Building } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white/70 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Building size={24} className="text-architect-accent" />
            <span className="text-white font-display text-xl font-bold tracking-tight">
              ARCH<span className="text-architect-accent">NYC</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-sm">
            &copy; {currentYear} ARCHNYC Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
