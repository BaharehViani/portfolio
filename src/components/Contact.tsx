import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaTelegram, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'baharehviani@gmail.com',
      href: 'mailto:baharehviani@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+98 935 860 0347',
      href: 'tel:+98 9358600347'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Tabriz, Iran',
      href: '/'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/BaharehViani', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTelegram, href: 'https://t.me/baharehviani', label: 'Telegram' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always open to
                discussing new opportunities and interesting projects.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="project-card">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              {info.detail}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.detail}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="glow transition-smooth hover:scale-105"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="project-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstname" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full hero-gradient text-black glow transition-smooth hover:scale-105 disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;