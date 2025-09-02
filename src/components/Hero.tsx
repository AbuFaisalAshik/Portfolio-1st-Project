import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-portrait.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Creative Developer', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayText('');
    const currentTitle = titles[currentIndex];
    let i = 0;
    
    const typeWriter = setInterval(() => {
      if (i < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-jetbrains">
                Hello, I'm
              </p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Md. Abu</span>
                <span className="block text-gradient">Faisal</span>
              </h1>

              <div className="h-16 flex items-center">
                <span className="text-2xl md:text-3xl font-jetbrains text-primary-light">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Passionate about creating beautiful, functional digital experiences 
                that make a difference. Let's bring your ideas to life with clean code 
                and stunning design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="btn-organic bg-gradient-primary text-primary-foreground hover:shadow-hover group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-organic border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-border-light">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-organic transform rotate-3 scale-95"></div>
              <div className="relative overflow-hidden rounded-organic shadow-organic">
                <img 
                  src={heroImage} 
                  alt="Md. Abu Faisal - Creative Developer & Designer"
                  className="w-full h-auto object-cover animate-float"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-organic opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-accent rounded-organic opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;