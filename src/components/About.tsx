
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="bg-architect-light py-24"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            'opacity-0 transition-all duration-1000 transform translate-x-10',
            visible && 'opacity-100 translate-x-0'
          )}>
            <h2 className="section-title">About the Studio</h2>
            <p className="text-architect-gray text-lg mb-6 font-serif">
              Founded in 2010, our architectural practice is built on the belief that thoughtful design 
              can transform experiences and communities. Based in Manhattan, we bring a distinctly New York 
              perspective to projects of all scales, from urban interventions to intimate residential spaces.
            </p>
            <p className="text-architect-gray text-lg mb-8 font-serif">
              We approach each project as a unique opportunity to create spaces that are functional, 
              beautiful, and responsive to both their users and urban context. Our collaborative process 
              engages clients, communities, and consultants to deliver architecture that is both innovative 
              and deeply considered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-architect-dark mb-1">12+</div>
                <p className="text-architect-gray text-sm">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-architect-dark mb-1">78</div>
                <p className="text-architect-gray text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-architect-dark mb-1">18</div>
                <p className="text-architect-gray text-sm">Design Awards</p>
              </div>
            </div>
            
            <div className="bg-white p-6 border-l-4 border-architect-accent">
              <p className="text-architect-gray italic font-serif">
                "Architecture is not just about building. It's about creating spaces that enhance the human experience."
              </p>
              <p className="text-architect-dark font-medium mt-3">Jane Smith, Principal Architect</p>
            </div>
          </div>
          
          <div className={cn(
            'grid grid-cols-2 gap-4 opacity-0 transition-all duration-1000 delay-300',
            visible && 'opacity-100'
          )}>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Architectural detail" 
                className="w-full h-64 object-cover rounded-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Building exterior" 
                className="w-full h-80 object-cover rounded-sm"
              />
            </div>
            <div className="pt-10 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern architecture" 
                className="w-full h-80 object-cover rounded-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Interior design" 
                className="w-full h-64 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
