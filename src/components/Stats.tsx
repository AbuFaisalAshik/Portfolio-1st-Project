import { useEffect, useState, useRef } from 'react';
import { Users, Briefcase, Calendar, Trophy } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      number: 150,
      label: "Happy Clients",
      suffix: "+"
    },
    {
      icon: Briefcase,
      number: 200,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      icon: Calendar,
      number: 5,
      label: "Years of Experience",
      suffix: "+"
    },
    {
      icon: Trophy,
      number: 25,
      label: "Awards Won",
      suffix: "+"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountingNumber = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        setCurrent((prev) => {
          const next = prev + increment;
          if (next >= target) {
            clearInterval(timer);
            return target;
          }
          return next;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {Math.floor(current)}{suffix}
      </span>
    );
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div 
          ref={statsRef}
          className="stats-container p-12 shadow-organic border border-border-light"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="text-center space-y-4 group"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-accent rounded-organic flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-80 group-hover:animate-bounce"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <CountingNumber 
                      target={stat.number} 
                      suffix={stat.suffix}
                    />
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-primary rounded-organic opacity-5 -z-10"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-accent rounded-organic opacity-10 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;