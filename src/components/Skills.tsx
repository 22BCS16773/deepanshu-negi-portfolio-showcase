
import { Code, Database, Cloud, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const Skills = () => {
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

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
      color: "blue",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Web Development", 
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML/CSS"],
      color: "green",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Tools",
      skills: ["AWS", "Azure", "Git", "VS Code", "IntelliJ"],
      color: "purple",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Science",
      skills: ["NumPy", "Pandas", "Matplotlib", "NLP", "Machine Learning"],
      color: "orange",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40 text-blue-400",
      green: "bg-green-500/10 border-green-500/20 hover:border-green-500/40 text-green-400", 
      purple: "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40 text-purple-400",
      orange: "bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40 text-orange-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop" 
          alt="Technology background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${getColorClasses(category.color)} ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Skill category image */}
              <div className="mb-4 rounded-lg overflow-hidden h-32 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-gray-300 text-sm py-1 px-3 bg-white/5 rounded-full inline-block mr-2 mb-2 hover:bg-white/10 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
