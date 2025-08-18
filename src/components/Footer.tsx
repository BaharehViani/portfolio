import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Copyright */}
          <div className="flex flex-wrap items-center space-x-2 text-muted-foreground mb-6 md:mb-0">
            <span>© {currentYear} Bahareh Viani.</span>
            <span className="whitespace-nowrap flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current mx-1" /> using React & Tailwind CSS
            </span>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="glow transition-smooth hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            Thank you for visiting my portfolio. Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;