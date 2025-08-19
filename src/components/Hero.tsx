import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 hero-gradient opacity-40"></div>
      
      <div className="relative z-10 text-center mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Hi, I'm{' '}
            <span className="text-gradient block sm:inline">Bahareh Viani</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 animate-slide-in drop-shadow-md">
            Full Stack Developer
          </p>
          
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            I am a passionate developer and creative problem solver.
            I build modern, beautiful, functional, user-friendly applications and
            bring ideas to life through clean code, design and scalable backend systems.
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/20 text-white border-white/30 hover:bg-white/10 hover:border-white/50 glow transition-smooth hover:scale-105 backdrop-blur-sm"
              asChild
            >
              <a href="https://github.com/BaharehViani" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/20 text-white border-white/30 hover:bg-white/10 hover:border-white/50 glow transition-smooth hover:scale-105 backdrop-blur-sm"
              asChild
            >
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="hero-gradient text-black glow transition-smooth hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-float mx-auto block"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;