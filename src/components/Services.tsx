import { Code, Palette, Smartphone, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Performance Optimized", "SEO Friendly"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that create engaging experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
      features: ["React Native", "Flutter", "Native Performance"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO strategies and technical optimization.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"],
      color: "from-orange-500/20 to-red-500/20"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className={`service-card bg-background border border-border-light p-8 shadow-soft hover:shadow-organic group ${
                  index % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className={`w-16 h-16 rounded-soft bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-border-light">
                  <button className="text-primary font-medium hover:text-hover transition-colors group-hover:translate-x-2 inline-flex items-center">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;