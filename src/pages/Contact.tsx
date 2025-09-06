import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  Calendar,
  Wind,
  Leaf,
  Flower
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "abu.faisal@example.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call for urgent projects"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "New York, USA",
      description: "Available for remote work"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Quick turnaround guaranteed"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Wind pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2366BB6A' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'windSway 12s ease-in-out infinite'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent-leaf/10 text-accent-leaf px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Wind className="w-4 h-4" />
              <span className="text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Get in
              <br />
              <span className="relative">
                Touch
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-nature rounded-full animate-float" />
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
              Ready to bring your ideas to life? Let's start a conversation and create something 
              amazing together. I'm here to help turn your vision into reality.
            </p>
          </div>
        </div>
        
        {/* Floating nature elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent-leaf/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="card-organic border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      <MessageCircle className="w-8 h-8 text-primary" />
                      Send a Message
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John"
                          className="rounded-soft border-border-light focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe"
                          className="rounded-soft border-border-light focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com"
                        className="rounded-soft border-border-light focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Project Inquiry"
                        className="rounded-soft border-border-light focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="rounded-soft border-border-light focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    
                    <Button className="w-full btn-organic bg-gradient-nature text-white hover:shadow-hover">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Let's Start a Conversation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, need technical consultation, or just want to 
                  say hello, I'm always excited to connect with new people and explore opportunities.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="card-organic border-0 shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-nature rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-primary font-medium mb-1">{info.value}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Additional Info */}
              <Card className="card-organic border-0 shadow-soft bg-gradient-to-r from-accent-leaf/5 to-primary/5 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Flower className="w-6 h-6 text-accent-leaf" />
                    <h3 className="font-semibold text-lg">Why Work With Me?</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      5+ years of professional experience
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-leaf rounded-full" />
                      Dedicated to quality and innovation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-ocean rounded-full" />
                      Clear communication throughout
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      On-time delivery guaranteed
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="text-gradient block">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some common questions I get from clients. Don't see yours? Feel free to ask!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most websites take 2-4 weeks, while larger applications can take 2-3 months."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! I offer maintenance packages and ongoing support to ensure your project continues to perform optimally."
              },
              {
                question: "What technologies do you work with?",
                answer: "I specialize in React, TypeScript, Node.js, and modern web technologies. I'm always learning new tools to serve you better."
              },
              {
                question: "How do you handle project communication?",
                answer: "I believe in transparent communication with regular updates, scheduled check-ins, and always being available for questions."
              }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="card-organic border-0 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
