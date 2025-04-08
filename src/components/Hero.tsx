
import { Building, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 bg-architect-light"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-architect-dark/80 to-architect-dark/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="NYC Skyline" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white backdrop-blur-sm bg-architect-dark/10 p-8 md:p-12 rounded-sm animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center space-x-2 mb-4">
            <Building size={20} className="text-architect-accent" />
            <h2 className="font-display text-lg tracking-wider uppercase text-architect-accent">
              Architecture Studio
            </h2>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Creating Spaces<br />That Inspire
          </h1>
          
          <p className="font-serif text-lg md:text-xl mb-8 text-white/80">
            Award-winning architectural design studio based in the heart of New York City, 
            creating innovative, sustainable structures that push boundaries.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm bg-architect-accent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-architect-accent/90 transition-colors"
            >
              View Projects
            </a>
            
            <div className="flex items-center space-x-2 text-white/80">
              <MapPin size={16} className="text-architect-accent" />
              <span>Manhattan, New York City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
