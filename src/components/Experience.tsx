
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Work <span className="text-blue-400">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="relative pl-20 pb-12">
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white mb-2 md:mb-0">
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
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Built responsive UIs using HTML, CSS, JavaScript, and React.js
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Increased user engagement by 30% and reduced bounce rate by 25%
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Added animations and interactivity to improve user experience
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-20">
              <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900"></div>
              
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-blue-400 mb-2">
                      BTech in Computer Science & Engineering
                    </h4>
                    <p className="text-gray-300 mb-1">Chandigarh University</p>
                    <p className="text-gray-400 text-sm">CGPA: 8.0</p>
                  </div>
                  
                  <div>
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
