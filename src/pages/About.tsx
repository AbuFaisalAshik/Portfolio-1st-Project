import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin, Calendar, Award, Code, Briefcase } from 'lucide-react';
import profileImage from '@/assets/Md Abu Faisal.jpg';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Next.js',
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built responsive web applications and collaborated with design teams to create engaging user experiences.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Co.',
      period: '2019 - 2020',
      description: 'Developed features for mobile and web applications while learning modern development practices.'
    }
  ];

  const achievements = [
    'Built 50+ successful web applications',
    'Certified AWS Solutions Architect',
    'Speaker at 3 tech conferences',
    'Mentored 10+ junior developers'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Passionate full-stack developer with 5+ years of experience creating 
              innovative digital solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Personal Info */}
            <div className="lg:col-span-1">
              <Card className="card-organic mb-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                      <img 
                        src={profileImage} 
                        alt="Md. AbuFaisal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Md. AbuFaisal</h2>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-sm">md.abufaisal@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-sm">New York, USA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm">Available for projects</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 btn-organic bg-gradient-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="card-organic">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About Story */}
              <div>
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    Hello! I'm Abu Faisal, a passionate full-stack developer based in New York. 
                    My journey in web development started 5 years ago when I discovered the power 
                    of creating digital experiences that can impact people's lives.
                  </p>
                  <p className="mb-4">
                    I specialize in building modern, scalable web applications using cutting-edge 
                    technologies like React, TypeScript, and Node.js. My approach combines technical 
                    expertise with creative problem-solving to deliver solutions that not only work 
                    flawlessly but also provide exceptional user experiences.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community through 
                    blog posts and speaking engagements.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="w-8 h-8 text-primary" />
                  Experience
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <Card key={index} className="card-organic">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                        </div>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-8 h-8 text-primary" />
                  Achievements
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="card-organic">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Award className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium">{achievement}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="card-organic bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
                  <p className="text-muted-foreground mb-6">
                    Ready to bring your ideas to life? I'm always excited to work on new projects 
                    and collaborate with amazing people.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-organic bg-gradient-primary">
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Button>
                    <Button variant="outline" className="btn-organic">
                      View My Work
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
