
import { Code, Database, Cloud, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
      color: "blue"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Web Development", 
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML/CSS"],
      color: "green"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Tools",
      skills: ["AWS", "Azure", "Git", "VS Code", "IntelliJ"],
      color: "purple"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Science",
      skills: ["NumPy", "Pandas", "Matplotlib", "NLP", "Machine Learning"],
      color: "orange"
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
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-gray-300 text-sm py-1 px-3 bg-white/5 rounded-full inline-block mr-2 mb-2"
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
