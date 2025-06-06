
import { Mail, Phone, Linkedin, Github, Award } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
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

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    "AWS Certified (2022) – Infosys",
    "Databases and SQL for Data Science with Python – IBM",
    "NCC Best Cadet – 23 PB BN", 
    "Research Paper Published – Weather Forecast Application"
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-50"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '0.3s' }}>
              {/* Contact image */}
              <div className="mb-8 rounded-lg overflow-hidden h-48 hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop" 
                  alt="Professional workspace"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:deepanshunegi029@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    deepanshunegi029@gmail.com
                  </span>
                </a>
                
                <a 
                  href="tel:+917455078930"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                >
                  <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    +91 7455078930
                  </span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/deepanshu-negi-687a70251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
                
                <a 
                  href="https://github.com/22BCS16773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                >
                  <Github className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    GitHub Profile
                  </span>
                </a>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-10'
            }`} style={{ animationDelay: '0.6s' }}>
              {/* Achievements image */}
              <div className="mb-8 rounded-lg overflow-hidden h-48 hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=300&fit=crop" 
                  alt="Achievement celebration"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">{achievement}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20 hover:scale-105 transition-transform duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">Coding Profiles</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">GeeksforGeeks • LeetCode • CodeChef</p>
                  <p className="text-gray-400">Active problem solver across multiple platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
