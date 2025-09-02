import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import taskManagerImg from '@/assets/project-taskmanager.jpg';
import portfolioImg from '@/assets/project-portfolio.jpg';
import bankingImg from '@/assets/project-banking.jpg';
import aiDashboardImg from '@/assets/project-ai-dashboard.jpg';
import socialImg from '@/assets/project-social.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, cart functionality, and secure payments.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: taskManagerImg,
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative design and smooth animations. Built with modern web technologies for optimal performance.",
      image: portfolioImg,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image: bankingImg,
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    },
    {
      id: 5,
      title: "AI Dashboard",
      description: "An analytics dashboard with AI-powered insights, data visualization, and real-time reporting capabilities for business intelligence.",
      image: aiDashboardImg,
      technologies: ["Vue.js", "Python", "TensorFlow", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    },
    {
      id: 6,
      title: "Social Media Platform",
      description: "A modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: socialImg,
      technologies: ["React", "GraphQL", "AWS", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Social"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Latest Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-soft mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-soft font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border-light flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="btn-organic border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;