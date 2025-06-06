
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = () => {
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

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Ecommerce Recommendation System",
      description: "Built a content-based recommender using NLP (BoW, TF-IDF, Word2Vec) with real-time suggestions for 1M+ products and <100ms latency.",
      tech: ["Python", "NLP", "Machine Learning"],
      color: "blue",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
    },
    {
      title: "Swadesi Aawas – Housing Platform", 
      description: "Frontend in React + TypeScript for browsing housing schemes with role-based login system using JWT authentication.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      color: "green",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop"
    },
    {
      title: "Weather Forecast Application",
      description: "Real-time weather data using OpenWeatherMap API with clean, responsive UI. Published research paper on this project.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      color: "purple",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop"
    },
    {
      title: "QR Code Generator",
      description: "Instantly generate and download QR codes with a responsive and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "orange",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500/20 hover:border-blue-500/40 group-hover:bg-blue-500/5",
      green: "border-green-500/20 hover:border-green-500/40 group-hover:bg-green-500/5",
      purple: "border-purple-500/20 hover:border-purple-500/40 group-hover:bg-purple-500/5", 
      orange: "border-orange-500/20 hover:border-orange-500/40 group-hover:bg-orange-500/5"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl border bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl ${getColorClasses(project.color)} ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Project image */}
              <div className="mb-6 rounded-lg overflow-hidden h-48 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
