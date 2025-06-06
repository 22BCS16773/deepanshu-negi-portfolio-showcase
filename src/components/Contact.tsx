
import { Mail, Phone, Linkedin, Github, Award } from "lucide-react";

const Contact = () => {
  const achievements = [
    "AWS Certified (2022) – Infosys",
    "Databases and SQL for Data Science with Python – IBM",
    "NCC Best Cadet – 23 PB BN", 
    "Research Paper Published – Weather Forecast Application"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:deepanshunegi029@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    deepanshunegi029@gmail.com
                  </span>
                </a>
                
                <a 
                  href="tel:+917455078930"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    +91 7455078930
                  </span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/deepanshu-negi-687a70251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
                
                <a 
                  href="https://github.com/22BCS16773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    GitHub Profile
                  </span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-2" />
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20">
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
