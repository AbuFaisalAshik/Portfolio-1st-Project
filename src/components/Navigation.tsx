import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/web logo/faisal-logo.png';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', type: 'route' },
    { label: 'About', href: '/about', type: 'route' },
    { label: 'Services', href: '/services', type: 'route' },
    { label: 'Gallery', href: '/gallery', type: 'route' },
    { label: 'Contact', href: '/contact', type: 'route' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: { label: string; href: string; type: string }) => {
    if (item.type === 'route') {
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#E1FAF0] backdrop-blur-md shadow-soft border-b border-border-light' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="Md. AbuFaisal Logo" 
              className="h-16 w-auto object-contain drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="nav-link text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link text-foreground hover:text-primary"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-organic bg-gradient-primary text-primary-foreground hover:shadow-hover"
            >
              Let's Work Together
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block w-full text-left nav-link text-foreground hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left nav-link text-foreground hover:text-primary py-2"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-4 btn-organic bg-gradient-primary text-primary-foreground"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;