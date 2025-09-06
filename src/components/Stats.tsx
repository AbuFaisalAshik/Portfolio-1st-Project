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
      <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-sky-600 to-blue-600">
        {Math.floor(current)}{suffix}
      </span>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden mx-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(16,185,129,0.15) 2px, transparent 0),
                           radial-gradient(circle at 75px 75px, rgba(59,130,246,0.15) 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Floating blobs */}
      <div className="absolute -top-10 -left-10 w-56 h-56 bg-emerald-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 left-1/3 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-16 top-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-6 relative">
        <div 
          ref={statsRef}
          className="relative p-12 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-emerald-100"
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
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 bg-white/80 ring-2 ring-emerald-200 shadow-md">
                      <Icon className="h-10 w-10 text-emerald-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-sky-400 rounded-full opacity-80 group-hover:animate-bounce"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <CountingNumber 
                      target={stat.number} 
                      suffix={stat.suffix}
                    />
                    <p className="text-slate-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-emerald-300 rounded-3xl opacity-10 -z-10"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-sky-300 rounded-3xl opacity-10 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;