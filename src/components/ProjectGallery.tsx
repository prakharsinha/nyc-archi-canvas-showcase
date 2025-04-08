
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Urban Loft Conversion",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2023"
  },
  {
    id: 2,
    title: "Glass Tower",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2022"
  },
  {
    id: 3,
    title: "Cultural Center",
    type: "Public",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2021"
  },
  {
    id: 4,
    title: "Modern Museum Extension",
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2023"
  },
  {
    id: 5,
    title: "Manhattan Penthouse",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2022"
  },
  {
    id: 6,
    title: "Brooklyn Bridge Park Pavilion",
    type: "Public",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2021"
  }
];

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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
  
  const categories = ['All', 'Residential', 'Commercial', 'Public', 'Cultural'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="bg-white py-24"
    >
      <div className="container-custom">
        <div className={cn(
          'opacity-0 transition-opacity duration-700',
          visible && 'opacity-100'
        )}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="subtitle">Explore our diverse portfolio of innovative architectural projects across New York City.</p>
        
          <div className="flex flex-wrap justify-center gap-2 mb-12 mt-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  'px-4 py-2 rounded-sm border text-sm md:text-base transition-all duration-300',
                  activeFilter === category 
                    ? 'bg-architect-dark text-white border-architect-dark' 
                    : 'border-architect-gray/30 text-architect-gray hover:border-architect-dark hover:text-architect-dark'
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={cn(
                  'portfolio-item group overflow-hidden rounded-sm opacity-0',
                  visible && 'animate-fade-in'
                )}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="portfolio-overlay group-hover:opacity-100">
                  <p className="text-architect-accent mb-2 text-sm tracking-wider uppercase">{project.type} | {project.year}</p>
                  <h3 className="text-white text-xl md:text-2xl font-display font-medium">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
