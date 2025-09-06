import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Eye,
  Leaf,
  Wind,
  Sparkles
} from 'lucide-react';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features",
      image: "/src/assets/project-banking.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI Dashboard",
      category: "UI/UX Design",
      description: "Intelligent analytics dashboard with real-time data",
      image: "/src/assets/project-ai-dashboard.jpg",
      technologies: ["TypeScript", "D3.js", "Python", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure banking application for iOS and Android",
      image: "/src/assets/project-banking.jpg",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Creative portfolio with smooth animations",
      image: "/src/assets/hero-portrait.jpg",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Task Management",
      category: "Full Stack",
      description: "Collaborative project management platform",
      image: "/src/assets/project-ai-dashboard.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Weather App",
      category: "Mobile Development",
      description: "Beautiful weather app with location services",
      image: "/src/assets/project-banking.jpg",
      technologies: ["Flutter", "OpenWeather API", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design", "Full Stack"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Nature-inspired background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300BCD4' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'leafFloat 15s ease-in-out infinite'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent-leaf/10 text-accent-leaf px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Creative Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Gallery of
              <br />
              <span className="relative">
                Creations
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-nature rounded-full animate-float" />
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
              Explore a curated collection of my digital creations. Each project tells a unique story 
              of innovation, creativity, and technical excellence.
            </p>
          </div>
        </div>
        
        {/* Floating nature elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent-leaf/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`btn-organic ${index === 0 ? 'bg-gradient-nature text-white' : 'border-primary/30 hover:bg-primary/5'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="project-card group cursor-pointer border-0 shadow-soft hover:shadow-organic overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-soft">
                  <div className="absolute inset-0 bg-gradient-nature opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" className="btn-organic bg-white text-primary hover:bg-white/90">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="btn-organic border-white text-white hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Category Badge */}
                  <Badge className="bg-primary/10 text-primary mb-3">
                    {project.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-accent/10 text-accent-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="btn-organic bg-gradient-primary flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="btn-organic border-primary/30"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed", icon: <Sparkles className="w-6 h-6" /> },
              { number: "30+", label: "Happy Clients", icon: <Wind className="w-6 h-6" /> },
              { number: "5+", label: "Years Experience", icon: <Leaf className="w-6 h-6" /> },
              { number: "15+", label: "Technologies", icon: <Sparkles className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center text-white mx-auto mb-4 animate-float">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-nature opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Card className="card-organic bg-gradient-to-r from-accent-leaf/5 to-primary/5 border-0">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's Create Something Beautiful
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Every great project starts with a conversation. Share your vision with me, 
                  and let's bring it to life with creativity and technical excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-organic bg-gradient-nature text-white hover:shadow-hover">
                    <Leaf className="w-4 h-4 mr-2" />
                    Start a Project
                  </Button>
                  <Button variant="outline" className="btn-organic border-primary/30 hover:bg-primary/5">
                    View More Work
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

export default Gallery;
