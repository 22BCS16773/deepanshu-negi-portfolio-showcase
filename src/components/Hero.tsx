
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Deepanshu Negi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications and solving complex problems. 
            Experienced in MERN stack, cloud technologies, and data science.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in delay-300">
          <a href="mailto:deepanshunegi029@gmail.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Mail size={20} />
            <span>Get in touch</span>
          </a>
          <a href="https://github.com/22BCS16773" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-gray-400 hover:border-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 animate-fade-in delay-500">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">8.0</div>
            <div className="text-sm text-gray-400">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">3+</div>
            <div className="text-sm text-gray-400">Years Coding</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">5+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
