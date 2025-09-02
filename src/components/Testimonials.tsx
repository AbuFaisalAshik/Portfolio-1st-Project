import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sarahAvatar from '@/assets/testimonial-sarah.jpg';
import mikeAvatar from '@/assets/testimonial-mike.jpg';
import emilyAvatar from '@/assets/testimonial-emily.jpg';
import davidAvatar from '@/assets/testimonial-david.jpg';
import lisaAvatar from '@/assets/testimonial-lisa.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      avatar: sarahAvatar,
      rating: 5,
      text: "Abu Faisal delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
      project: "E-Commerce Platform"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Product Manager at InnovateCorp",
      avatar: mikeAvatar, 
      rating: 5,
      text: "Working with Abu was a game-changer for our project. His creative problem-solving skills and ability to translate complex requirements into elegant solutions is remarkable.",
      project: "Task Management App"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director at GrowthCo",
      avatar: emilyAvatar,
      rating: 5,
      text: "The website Abu created for us has significantly improved our conversion rates. His understanding of both design and user experience is outstanding. Highly recommended!",
      project: "Corporate Website"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO at FinanceFlow",
      avatar: davidAvatar,
      rating: 5,
      text: "Abu's mobile app development skills are top-notch. The banking app he built for us is secure, user-friendly, and has received excellent feedback from our customers.",
      project: "Mobile Banking App"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Founder at DataInsights",
      avatar: lisaAvatar,
      rating: 5,
      text: "The AI dashboard Abu developed has transformed how we analyze our data. His ability to integrate complex algorithms with intuitive interfaces is impressive.",
      project: "AI Analytics Dashboard"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-border'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Client Feedback & Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="testimonial-card p-8 md:p-12 shadow-organic relative overflow-hidden">
            <Quote className="absolute top-6 right-6 h-16 w-16 text-border opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-organic object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <span className="px-4 py-2 bg-accent text-accent-foreground rounded-soft text-sm font-medium">
                  Project: {testimonials[currentIndex].project}
                </span>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={goToPrev}
                    className="rounded-full w-10 h-10 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={goToNext}
                    className="rounded-full w-10 h-10 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`flex items-center gap-3 p-3 rounded-soft border transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role.split(' ')[0]}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;