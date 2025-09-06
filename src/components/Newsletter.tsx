import { useState, useEffect } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [typed, setTyped] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your dsds email",
        description: "We need your email address to send you updates.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: "Successfully subscribed! 🎉",
        description: "Thank you for joining our newsletter. You'll receive updates soon!",
      });
    }, 1500);
  };

  // Typewriter setup
  const typeText = "Stay Updated with Me";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(typeText.slice(0, i));
      if (i >= typeText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "Latest project updates and case studies",
    "Web development tips and best practices", 
    "Exclusive tutorials and resources",
    "Early access to new services",
    "Industry insights and trends"
  ];

  return (
    <section id="newsletter" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#E3F5FE] text-black rounded-organic p-12 md:p-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-organic transform rotate-12 translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-organic transform -rotate-12 -translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10 text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-black/10 rounded-organic mb-6 text-black">
                  <Mail className="h-10 w-10" />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-black flex items-center justify-center gap-3">
                  <Mail className="h-8 w-8" />
                  <span>{typed}</span>
                  <span className="ml-1 animate-pulse">|</span>
                </h2>
                
                <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
                  Subscribe to my newsletter and get the latest updates about my projects, 
                  web development insights, and exclusive resources delivered to your inbox.
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="newsletter-input h-12 text-black placeholder:text-black/50 border-black/20"
                        disabled={isLoading}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="btn-organic bg-white text-black hover:bg-white/90 h-12 px-6"
                    >
                      {isLoading ? (
                        <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                      ) : (
                        <>
                          <Mail className="h-5 w-5 mr-2" />
                          Subscribe
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-black/70 mt-4">
                    No spam, unsubscribe at any time. Your privacy is important to me.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-organic">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Welcome aboard! 🎉</h3>
                  <p className="text-primary-foreground/90">
                    Thank you for subscribing! You'll start receiving updates soon.
                  </p>
                </div>
              )}

              {/* Benefits List */}
              <div className="border-t border-black/20 pt-8">
                <h4 className="text-lg font-semibold mb-6 text-black">What you'll get:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-black">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-black/80 text-sm">
                  Join <span className="font-semibold">500+</span> developers already subscribed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;