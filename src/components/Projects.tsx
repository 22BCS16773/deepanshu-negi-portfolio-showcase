
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Recommendation System",
      description: "Built a content-based recommender using NLP (BoW, TF-IDF, Word2Vec) with real-time suggestions for 1M+ products and <100ms latency.",
      tech: ["Python", "NLP", "Machine Learning"],
      color: "blue"
    },
    {
      title: "Swadesi Aawas – Housing Platform", 
      description: "Frontend in React + TypeScript for browsing housing schemes with role-based login system using JWT authentication.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      color: "green"
    },
    {
      title: "Weather Forecast Application",
      description: "Real-time weather data using OpenWeatherMap API with clean, responsive UI. Published research paper on this project.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      color: "purple"
    },
    {
      title: "QR Code Generator",
      description: "Instantly generate and download QR codes with a responsive and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "orange"
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl border bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${getColorClasses(project.color)}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
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
