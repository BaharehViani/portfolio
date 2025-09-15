import { Code, Zap, Database, Cloud, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import myImage from '@/assets/my-photo.jpg';

const About = () => {
  const skills = [
    'React', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Responsive Design',
    'Node.js', 'Express.js', 'Laravel', 'PHP', 'Java', 'Python', 'Go',
    'MySQL', 'MongoDB',
    'Docker', 'Git', 'SEO',
    'Android'
  ];


  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks and libraries.'
    },
    {
      icon: Zap,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs with optimal performance and scalability.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Architecting efficient database schemas and optimizing queries for high-performance applications.'
    },
    {
      icon: Cloud,
      title: 'DevOps & Deployment',
      description: 'Managing cloud infrastructure, CI/CD pipelines, and automated deployment processes.'
    }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'baharehviani-resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate junior Full Stack Developer with one year of experience building all kinds of applications and APIs.
            I love turning complex problems into elegant, scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Journey Text */}
          <div className="lg:col-span-3 animate-slide-in text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                My journey in tech began during my computer science studies, where I discovered
                my passion for building complete web applications from frontend to backend. Since then, I've been
                dedicated to crafting full-stack solutions that deliver exceptional user experiences.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies.
                Whether it's exploring new frameworks, database optimizations, or cloud architectures,
                I'm always eager to expand my knowledge and skills.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects,
                mentoring fellow developers, or exploring the latest in tech innovation.
              </p>
            </div>
            <Button
              onClick={downloadResume}
              className="mt-6"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-center">
            <div className="w-80 h-80 overflow-hidden shadow-lg border-4 border-primary/20 rounded-xl">
              <img
                src={myImage}
                alt="Bahareh Viani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="project-card">
                <CardContent className="p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>


        {/* Skills Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-badge"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
