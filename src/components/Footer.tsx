import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    explore: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Courses", href: "#courses" },
      { label: "Blog", href: "#blog" },
      { label: "Contact Us", href: "#contact" }
    ],
    quickLinks: [
      { label: "Contact Us", href: "#contact" },
      { label: "Pricing", href: "#pricing" },
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Recent Posts", href: "#blog" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
  ];

  const paymentMethods = [
    { name: "Visa", icon: CreditCard },
    { name: "Mastercard", icon: CreditCard },
    { name: "PayPal", icon: CreditCard }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Abu Faisal</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Creating beautiful, functional digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-soft flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Explore</h4>
            <ul className="space-y-3">
              {footerSections.explore.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {footerSections.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Have Questions?</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">Email</p>
                  <a 
                    href="mailto:abu.faisal@example.com" 
                    className="text-primary-foreground hover:text-accent transition-colors"
                  >
                    abu.faisal@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">Phone</p>
                  <a 
                    href="tel:+8801234567890" 
                    className="text-primary-foreground hover:text-accent transition-colors"
                  >
                    +880 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">Location</p>
                  <p className="text-primary-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('#newsletter')}
              className="btn-organic bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h5 className="font-semibold mb-3">Payment Methods</h5>
              <div className="flex gap-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.name}
                      className="w-12 h-8 bg-primary-foreground/10 rounded-sm flex items-center justify-center"
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-primary-foreground/60 text-sm">
                Secure payments powered by industry standards
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/80">
            <p>
              © {currentYear} Abu Faisal. All rights reserved.
            </p>
            <p>
              Developed by{' '}
              <a 
                href="https://github.com/zakirhossbd268en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Zakir Hossbd268en
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;