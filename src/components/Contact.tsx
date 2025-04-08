
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
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
      id="contact" 
      ref={sectionRef}
      className="bg-architect-dark text-white py-24"
    >
      <div className="container-custom">
        <div className={cn(
          'opacity-0 transition-opacity duration-700',
          visible && 'opacity-100'
        )}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">Get in Touch</h2>
          <p className="font-serif text-lg md:text-xl text-white/70 mb-16 max-w-2xl">
            Ready to start your architectural journey? Contact us to discuss your project needs and vision.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={cn(
              'space-y-8 opacity-0 transition-all duration-700 transform translate-y-10',
              visible && 'opacity-100 translate-y-0'
            )}>
              <div>
                <h3 className="text-xl font-display font-medium mb-6 text-architect-accent">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-architect-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Our Studio</p>
                      <p className="text-white/70">120 E 23rd St, New York, NY 10010</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-architect-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-white/70">hello@archnyc.studio</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-architect-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-white/70">+1 (212) 555-1234</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-medium mb-6 text-architect-accent">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-display font-medium mb-6 text-architect-accent">Studio Hours</h3>
                <p className="text-white/70 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-white/70">Weekends: By appointment only</p>
              </div>
            </div>
            
            <div className={cn(
              'opacity-0 transition-all duration-700 delay-300 transform translate-y-10',
              visible && 'opacity-100 translate-y-0'
            )}>
              <h3 className="text-xl font-display font-medium mb-6 text-architect-accent">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-architect-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-architect-accent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-architect-accent"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-architect-accent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-architect-accent text-white font-medium rounded-sm hover:bg-architect-accent/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
