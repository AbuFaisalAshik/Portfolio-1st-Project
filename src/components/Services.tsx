import { Code, Palette, Smartphone, Search, Globe, Database, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Performance Optimized", "SEO Friendly"],
      gradient: "from-violet-600 via-purple-600 to-blue-600",
      hoverGradient: "from-violet-400 via-purple-400 to-blue-400",
      size: "large"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that create engaging experiences.",
      features: ["User Research", "Wireframing", "Prototyping"],
      gradient: "from-pink-600 via-rose-600 to-red-600",
      hoverGradient: "from-pink-400 via-rose-400 to-red-400",
      size: "medium"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native Performance"],
      gradient: "from-cyan-600 via-teal-600 to-emerald-600",
      hoverGradient: "from-cyan-400 via-teal-400 to-emerald-400",
      size: "medium"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO strategies.",
      features: ["Keyword Research", "Technical SEO"],
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
      hoverGradient: "from-orange-400 via-amber-400 to-yellow-400",
      size: "small"
    },
    {
      icon: Globe,
      title: "E-Commerce",
      description: "Complete online store solutions with payment integration.",
      features: ["Shopping Cart", "Payment Gateway"],
      gradient: "from-green-600 via-lime-600 to-emerald-600",
      hoverGradient: "from-green-400 via-lime-400 to-emerald-400",
      size: "small"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Robust server-side solutions and database management.",
      features: ["API Development", "Database Design"],
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
      hoverGradient: "from-slate-400 via-gray-400 to-zinc-400",
      size: "medium"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Comprehensive security audits and implementation.",
      features: ["Security Audits", "SSL Implementation"],
      gradient: "from-red-600 via-rose-600 to-pink-600",
      hoverGradient: "from-red-400 via-rose-400 to-pink-400",
      size: "small"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Speed optimization and performance enhancement.",
      features: ["Speed Optimization", "Caching"],
      gradient: "from-indigo-600 via-blue-600 to-cyan-600",
      hoverGradient: "from-indigo-400 via-blue-400 to-cyan-400",
      size: "small"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Uniform 2-row layout: 4 items per row on lg screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            // Normalize item size to avoid lonely last row
            const getMosaicClass = (_size: string) => 'col-span-1 min-h-[300px]';

            return (
              <div 
                key={service.title}
                className={`
                  ${getMosaicClass(service.size)}
                  relative overflow-hidden rounded-3xl cursor-pointer group
                  transition-all duration-700 ease-out
                  ${isHovered ? 'scale-105 -translate-y-4' : 'hover:scale-[1.02] hover:-translate-y-1'}
                  shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Smooth Color-Shifting Background */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${isHovered ? service.hoverGradient : service.gradient}
                  transition-all duration-1000 ease-in-out
                `}>
                  {/* Dazzling Color Overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/5
                    transition-all duration-800 ease-in-out
                    ${isHovered ? 'opacity-80' : 'opacity-40'}
                  `}></div>
                  
                  {/* Soft Color Waves */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                    transition-all duration-1200 ease-in-out
                    ${isHovered ? 'opacity-60 scale-110' : 'opacity-20 scale-100'}
                  `}></div>
                  
                  {/* Floating Gradient Orbs */}
                  <div className={`
                    absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl
                    transition-all duration-1000 ease-out
                    ${isHovered ? 'scale-150 opacity-40' : 'scale-100 opacity-20'}
                  `}></div>
                  <div className={`
                    absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl
                    transition-all duration-1000 ease-out delay-200
                    ${isHovered ? 'scale-125 opacity-30' : 'scale-100 opacity-15'}
                  `}></div>
                </div>

                {/* Enhanced Text Overlay for Better Visibility */}
                <div className={`
                  absolute inset-0 bg-black/20 backdrop-blur-[1px]
                  transition-all duration-500
                  ${isHovered ? 'bg-black/40 backdrop-blur-sm' : ''}
                `}></div>

                {/* Content */}
                <div className="relative z-20 p-6 lg:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className={`
                      w-14 h-14 lg:w-18 lg:h-18 rounded-2xl bg-white/90 backdrop-blur-md
                      flex items-center justify-center mb-6 
                      border border-white/50 shadow-xl
                      transition-all duration-500 ease-out
                      ${isHovered ? 'scale-110 rotate-12 bg-white shadow-2xl' : 'group-hover:scale-105 group-hover:rotate-6'}
                    `}>
                      <Icon className={`
                        h-7 w-7 lg:h-9 lg:w-9 text-gray-700
                        transition-all duration-300
                        ${isHovered ? 'scale-110 text-gray-800' : ''}
                      `} />
                    </div>

                    <h3 className={`
                      ${service.size === 'large' ? 'text-2xl lg:text-3xl' : service.size === 'medium' ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'}
                      font-bold text-white mb-3 lg:mb-4 
                      transition-all duration-300
                      ${isHovered ? 'text-white drop-shadow-2xl text-shadow-lg' : 'drop-shadow-lg'}
                    `}
                    style={{
                      textShadow: isHovered ? '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' : '1px 1px 4px rgba(0,0,0,0.5)'
                    }}>
                      {service.title}
                    </h3>

                    <p className={`
                      text-white leading-relaxed mb-4 font-medium
                      ${service.size === 'large' ? 'text-base lg:text-lg' : 'text-sm lg:text-base'}
                      ${service.size === 'small' ? 'line-clamp-3' : ''}
                      transition-all duration-300
                      ${isHovered ? 'text-white drop-shadow-xl' : 'text-white/95 drop-shadow-md'}
                    `}
                    style={{
                      textShadow: isHovered ? '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' : '1px 1px 3px rgba(0,0,0,0.4)'
                    }}>
                      {service.description}
                    </p>

                    {service.size !== 'small' && (
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={feature} className={`
                            flex items-center text-sm text-white font-medium
                            transition-all duration-300 delay-${featureIndex * 100}
                            ${isHovered ? 'text-white translate-x-1 drop-shadow-lg' : 'text-white/90 drop-shadow-md'}
                          `}
                          style={{
                            textShadow: isHovered ? '1px 1px 4px rgba(0,0,0,0.7)' : '1px 1px 2px rgba(0,0,0,0.4)'
                          }}>
                            <div className={`
                              w-2 h-2 bg-white rounded-full mr-3 
                              transition-all duration-300
                              ${isHovered ? 'scale-150 shadow-xl shadow-white/70' : 'shadow-lg shadow-white/40'}
                            `}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Interactive Arrow */}
                  <div className="flex justify-end">
                    <div className={`
                      w-10 h-10 rounded-full bg-white/20 backdrop-blur-md
                      flex items-center justify-center border border-white/30
                      transition-all duration-500 ease-out
                      ${isHovered ? 'bg-white/30 scale-110 rotate-45 shadow-lg' : 'group-hover:scale-105 group-hover:rotate-12'}
                    `}>
                      <span className={`
                        text-lg font-bold text-white
                        transition-all duration-300
                        ${isHovered ? 'scale-110' : ''}
                      `}>→</span>
                    </div>
                  </div>
                </div>

                {/* Animated Border Glow */}
                <div className={`
                  absolute inset-0 rounded-3xl border-2 border-white/20
                  transition-all duration-500
                  ${isHovered ? 'border-white/40 shadow-2xl shadow-white/20' : ''}
                `}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;