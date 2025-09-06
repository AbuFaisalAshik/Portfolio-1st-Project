import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Zap,
  ArrowRight,
  Waves,
  Anchor
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Framework"],
      price: "Starting at $2,500",
      gradient: "bg-gradient-ocean"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that provide seamless user experiences across all devices.",
      features: ["iOS & Android", "React Native", "App Store Ready", "Push Notifications"],
      price: "Starting at $3,500",
      gradient: "bg-gradient-wave"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,500",
      gradient: "bg-gradient-nature"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, databases, and cloud integration.",
      features: ["API Development", "Database Design", "Cloud Deployment", "Security"],
      price: "Starting at $2,000",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and analytics.",
      features: ["Payment Gateway", "Inventory System", "Analytics", "Mobile Optimized"],
      price: "Starting at $4,000",
      gradient: "bg-gradient-ocean"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed up your existing applications with advanced optimization techniques.",
      features: ["Speed Analysis", "Code Optimization", "CDN Setup", "Monitoring"],
      price: "Starting at $1,000",
      gradient: "bg-gradient-wave"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your project requirements and goals"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Strategic planning and technical architecture design"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and feedback"
    },
    {
      step: "04",
      title: "Launch",
      description: "Deployment, testing, and ongoing support"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Ocean Theme */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Animated Wave Background */}
        <div className="absolute inset-0 bg-gradient-ocean opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234FC3F7' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'wave 20s ease-in-out infinite'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Waves className="w-4 h-4" />
              <span className="text-sm font-medium">Professional Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ocean of
              <br />
              <span className="relative">
                Possibilities
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-wave rounded-full animate-float" />
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
              Dive into a world of innovative digital solutions. From web development to mobile apps, 
              I create experiences that flow seamlessly like ocean waves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button className="btn-organic bg-gradient-ocean text-white hover:shadow-hover">
                <Anchor className="w-4 h-4 mr-2" />
                Explore Services
              </Button>
              <Button variant="outline" className="btn-organic border-primary/30 hover:bg-primary/5">
                View Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-ocean/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-leaf/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services That Make
              <span className="text-gradient block">Waves</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each service is crafted with precision and creativity, designed to help your business 
              navigate the digital ocean successfully.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="service-card group cursor-pointer border-0 shadow-soft hover:shadow-organic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Service Icon with Gradient Background */}
                  <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button 
                      size="sm" 
                      className="btn-organic bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  {/* Ripple Effect on Hover */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Creative
              <span className="text-gradient block">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Like the rhythm of ocean waves, my process flows smoothly from concept to completion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-wave opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Card className="card-organic bg-gradient-to-r from-primary/5 to-accent-ocean/5 border-0">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Dive In?
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Let's create something amazing together. Whether you need a simple website or a 
                  complex application, I'm here to bring your vision to life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-organic bg-gradient-ocean text-white hover:shadow-hover">
                    <Waves className="w-4 h-4 mr-2" />
                    Start Your Project
                  </Button>
                  <Button variant="outline" className="btn-organic border-primary/30 hover:bg-primary/5">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
