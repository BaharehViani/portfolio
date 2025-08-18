import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import poemImage from '@/assets/poem.png';
import weatherImage from '@/assets/weather.png';
import clockImage from '@/assets/clock.png';
import barcelonaImage from '@/assets/barcelona.png';
import dictionaryImage from '@/assets/dictionary.png';
import portfolioImage from '@/assets/portfolio.png';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimal performance.',
      technologies: ['React', 'Tailwind CSS', 'Motion', 'Vite'],
      image: portfolioImage,
      github: 'https://github.com/BaharehViani/portfolio',
      demo: 'https://baharehviani.netlify.app/'
    },
    {
      title: 'Travel to Barcelona',
      description: 'A landing page about traveling to Barcelona, highlighting attractions, restaurants, and travel tips with responsive design.',
      technologies: ['HTML', 'CSS', 'Responsive', 'Design'],
      image: barcelonaImage,
      github: 'https://github.com/BaharehViani/barcelona-travel',
      demo: 'https://barcelona-travel-baharehviani.netlify.app/'
    },
    {
      title: 'Dictionary App',
      description: 'A dictionary application that allows users to search words, view definitions, synonyms and example sentences.',
      technologies: ['React', 'Bootstrap', 'Dictionary API'],
      image: dictionaryImage,
      github: 'https://github.com/BaharehViani/dictionary-app',
      demo: 'https://dictionary-app-baharehviani.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'A weather app providing real-time forecasts and current conditions for any city with a user friendly interface and weather icons.',
      technologies: ['HTML', 'JavaScript', 'CSS', 'API'],
      image: weatherImage,
      github: 'https://github.com/BaharehViani/Weather-app',
      demo: 'https://weather-app-baharehviani.netlify.app/'
    },
    {
      title: 'Poem Generator',
      description: 'An AI powered poem generator that creates unique poetry based on user input, using modern technique for interactive UI.',
      technologies: ['AI API', 'HTML', 'CSS', 'JavaScript'],
      image: poemImage,
      github: 'https://github.com/BaharehViani/AI-poem-generator',
      demo: 'https://poem-generator-baharehviani.netlify.app/'
    },
    {
      title: 'World Clock',
      description: 'A real-time world clock application showing multiple time zones simultaneously, with clean design and accurate time updates.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: clockImage,
      github: 'https://github.com/BaharehViani/World-Clock',
      demo: 'https://world-clock-baharehviani.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent public projects that showcase my skills and passion for creating 
            innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="glow"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="view code">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="hero-gradient text-black glow"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="view project">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glow transition-smooth hover:scale-105"
            asChild
          >
            <a href="https://github.com/BaharehViani" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;