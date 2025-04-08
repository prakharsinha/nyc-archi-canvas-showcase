
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  year: string;
  location: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Urban Loft Conversion",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2023",
    location: "NYC"
  },
  {
    id: 2,
    title: "Glass Tower",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2022",
    location: "NYC"
  },
  {
    id: 3,
    title: "Cultural Center",
    type: "Public",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2021",
    location: "NYC"
  },
  {
    id: 4,
    title: "Modern Museum Extension",
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2023",
    location: "NYC"
  },
  {
    id: 5,
    title: "Manhattan Penthouse",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2022",
    location: "NYC"
  },
  {
    id: 6,
    title: "Brooklyn Bridge Park Pavilion",
    type: "Public",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2021",
    location: "NYC"
  }
];

const upcomingProjects: Project[] = [
  {
    id: 7,
    title: "Chicago Riverside Tower",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2025",
    location: "Chicago"
  },
  {
    id: 8,
    title: "Millennium Park Extension",
    type: "Public",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2026",
    location: "Chicago"
  },
  {
    id: 9,
    title: "Lakefront Condominiums",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2025",
    location: "Chicago"
  },
  {
    id: 10,
    title: "Urban Innovation Hub",
    type: "Office",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    year: "2026",
    location: "Chicago"
  }
];

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("featured");
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
  
  const categories = ['All', 'Residential', 'Commercial', 'Public', 'Cultural', 'Office'];
  
  const getFilteredProjects = () => {
    const currentProjects = activeTab === "featured" ? featuredProjects : upcomingProjects;
    return activeFilter === 'All' 
      ? currentProjects 
      : currentProjects.filter(project => project.type === activeFilter);
  };

  const filteredProjects = getFilteredProjects();

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
          <h2 className="section-title">Our Projects</h2>
          <p className="subtitle">Explore our diverse portfolio of innovative architectural projects.</p>
        
          <Tabs defaultValue="featured" className="w-full mt-8 mb-10" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8 font-comic">
              <TabsTrigger value="featured">Featured NYC Projects</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Chicago Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="mt-4">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.filter(cat => cat === 'All' || featuredProjects.some(p => p.type === cat)).map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(category)}
                    className={cn(
                      'px-4 py-2 rounded-sm border text-sm md:text-base transition-all duration-300 font-comic',
                      activeFilter === category 
                        ? 'bg-architect-dark text-white border-architect-dark' 
                        : 'border-architect-gray/30 text-architect-gray hover:border-architect-dark hover:text-architect-dark'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-4">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.filter(cat => cat === 'All' || upcomingProjects.some(p => p.type === cat)).map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(category)}
                    className={cn(
                      'px-4 py-2 rounded-sm border text-sm md:text-base transition-all duration-300 font-comic',
                      activeFilter === category 
                        ? 'bg-architect-dark text-white border-architect-dark' 
                        : 'border-architect-gray/30 text-architect-gray hover:border-architect-dark hover:text-architect-dark'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
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
                  <div className="text-center p-4">
                    <p className="text-architect-accent mb-2 text-sm tracking-wider uppercase font-comic">{project.type} | {project.year}</p>
                    <h3 className="text-white text-xl md:text-2xl font-comic font-medium">{project.title}</h3>
                    <p className="text-white/80 mt-2 font-comic">{project.location}</p>
                  </div>
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
