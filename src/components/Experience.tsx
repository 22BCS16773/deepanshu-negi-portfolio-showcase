
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop" 
          alt="Office workspace"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          Work <span className="text-blue-400">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>
            
            <div className={`relative pl-20 pb-12 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '0.3s' }}>
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
              
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                {/* Experience image */}
                <div className="mb-6 rounded-lg overflow-hidden h-32 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=200&fit=crop" 
                    alt="Web development workspace"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white mb-2 md:mb-0 group-hover:text-blue-400 transition-colors duration-300">
                    Web Developer Intern
                  </h3>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    June 2024 – July 2024
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  Bharat Intern
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                    Built responsive UIs using HTML, CSS, JavaScript, and React.js
                  </li>
                  <li className="flex items-start hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse delay-200"></span>
                    Increased user engagement by 30% and reduced bounce rate by 25%
                  </li>
                  <li className="flex items-start hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse delay-400"></span>
                    Added animations and interactivity to improve user experience
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`relative pl-20 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '0.6s' }}>
              <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 animate-pulse delay-500"></div>
              
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                {/* Education image */}
                <div className="mb-6 rounded-lg overflow-hidden h-32 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=200&fit=crop" 
                    alt="University campus"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="hover:scale-105 transition-transform duration-300">
                    <h4 className="text-lg font-medium text-blue-400 mb-2">
                      BTech in Computer Science & Engineering
                    </h4>
                    <p className="text-gray-300 mb-1">Chandigarh University</p>
                    <p className="text-gray-400 text-sm">CGPA: 8.0</p>
                  </div>
                  
                  <div className="hover:scale-105 transition-transform duration-300">
                    <h4 className="text-lg font-medium text-purple-400 mb-2">
                      Higher Secondary Education
                    </h4>
                    <p className="text-gray-300 mb-1">HGS SVM IC (CBSE)</p>
                    <p className="text-gray-400 text-sm">Class XII: 89% | Class X: 93%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
