import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/Md Abu Faisal.jpg';

// Simple in-view count up component
const CountUpNumber = ({ end, duration = 1500, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const r = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(r);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

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
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16">
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

            {/* Colorful Animated Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border-light">
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200/50 group-hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-bounce">
                      <CountUpNumber end={150} suffix="+" />
                    </div>
                    <div className="text-sm text-emerald-700/80 font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200/50 group-hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '0.2s'}}>
                      <CountUpNumber end={200} suffix="+" />
                    </div>
                    <div className="text-sm text-blue-700/80 font-medium">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200/50 group-hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '0.4s'}}>
                      <CountUpNumber end={5} suffix="+" />
                    </div>
                    <div className="text-sm text-purple-700/80 font-medium">Years of Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200/50 group-hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-bounce" style={{animationDelay: '0.6s'}}>
                      <CountUpNumber end={25} suffix="+" />
                    </div>
                    <div className="text-sm text-orange-700/80 font-medium">Awards Won</div>
                  </div>
                </div>
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