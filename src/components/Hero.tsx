
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Profile image */}
      <div className="absolute top-10 right-10 hidden lg:block animate-fade-in delay-700">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop&crop=face" 
            alt="Developer workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Deepanshu Negi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light animate-fade-in delay-300">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
            Passionate about building scalable web applications and solving complex problems. 
            Experienced in MERN stack, cloud technologies, and data science.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in delay-700">
          <a href="mailto:deepanshunegi029@gmail.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Mail size={20} />
            <span>Get in touch</span>
          </a>
          <a href="https://github.com/22BCS16773" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-gray-400 hover:border-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 animate-fade-in delay-1000">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-bold text-blue-400 animate-pulse">8.0</div>
            <div className="text-sm text-gray-400">CGPA</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-bold text-purple-400 animate-pulse delay-200">3+</div>
            <div className="text-sm text-gray-400">Years Coding</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-bold text-green-400 animate-pulse delay-400">5+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
