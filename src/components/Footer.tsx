import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  MessageCircle,
  HelpCircle,
  Instagram,
  Facebook,
  Youtube,
  Dribbble,
  Twitch
} from 'lucide-react';
import amexIcon from '../assets/Payment Method icon/amex.png';
import banglaQrIcon from '../assets/Payment Method icon/bangla qr.png';
import bkashIcon from '../assets/Payment Method icon/Bkash-Logo.png';
import mastercardIcon from '../assets/Payment Method icon/master card.png';
import nagadIcon from '../assets/Payment Method icon/nagad.png';
import payoneerIcon from '../assets/Payment Method icon/payoneer.webp';
import westernUnionIcon from '../assets/Payment Method icon/westrun union.png';
import footerBg from '../assets/footer bg.png';
import { Button } from '@/components/ui/button';
import webLogo from '@/assets/web logo/faisal-logo.png';

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

  // Custom X (Twitter) icon component
  const XIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  // Custom TikTok icon component
  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  // Custom Behance icon component
  const BehanceIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M6.5 4.7h3.9c1.8 0 3.2 1.3 3.2 2.9 0 1.1-.6 2.1-1.5 2.5 1.3.4 2.2 1.6 2.2 3 0 2-1.6 3.6-3.6 3.6H6.5V4.7zm2.1 4.6h1.6c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1H8.6v2.2zm0 4.8h1.9c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4H8.6v2.8zM15.1 6.9h4.7v1.3h-4.7V6.9zm1.8 2.1c2.4 0 4.3 1.9 4.3 4.3 0 .3 0 .5-.1.8h-6.7c.2 1.1 1.1 1.9 2.2 1.9.8 0 1.5-.4 1.9-1h2.2c-.6 1.9-2.4 3.2-4.4 3.2-2.6 0-4.7-2.1-4.7-4.7s2.1-4.5 4.3-4.5zm2.1 3.2c-.2-1.1-1.1-1.9-2.2-1.9s-2 .8-2.2 1.9h4.4z"/>
    </svg>
  );

  // Custom payment method icon components using imported images with optimized size for single line
  const AmexIcon = () => (
    <img src={amexIcon} alt="American Express" className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3" />
  );

  const BanglaQrIcon = () => (
    <img src={banglaQrIcon} alt="Bangla QR" className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3" />
  );

  const BkashIcon = () => (
    <img src={bkashIcon} alt="bKash" className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2" />
  );

  const MastercardIcon = () => (
    <img src={mastercardIcon} alt="Mastercard" className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2" />
  );

  const NagadIcon = () => (
    <img src={nagadIcon} alt="Nagad" className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1" />
  );

  const PayoneerIcon = () => (
    <img src={payoneerIcon} alt="Payoneer" className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1" />
  );

  const WesternUnionIcon = () => (
    <img src={westernUnionIcon} alt="Western Union" className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3" />
  );

  // Cute cartoon question mark icon
  const CuteQuestionIcon = () => (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      {/* Question mark bubble */}
      <circle cx="24" cy="24" r="20" fill="#FFE4E1" stroke="#FF69B4" strokeWidth="2"/>
      
      {/* Cute face */}
      <circle cx="18" cy="18" r="2" fill="#FF1493"/>
      <circle cx="30" cy="18" r="2" fill="#FF1493"/>
      <path d="M20 28c2 2 6 2 8 0" stroke="#FF1493" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Question mark */}
      <g transform="translate(22, 8)">
        <path d="M2 4c0-2 1.5-3 3-3s3 1 3 3c0 1.5-1 2-2 3v1" stroke="#4169E1" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="4" cy="12" r="1" fill="#4169E1"/>
      </g>
      
      {/* Sparkles around */}
      <circle cx="8" cy="12" r="1" fill="#FFD700"/>
      <circle cx="40" cy="16" r="1" fill="#FFD700"/>
      <circle cx="12" cy="36" r="1" fill="#FFD700"/>
      <circle cx="36" cy="32" r="1" fill="#FFD700"/>
    </svg>
  );

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/abufaisalashik", 
      label: "GitHub",
      color: "hover:bg-gray-800",
      bgColor: "bg-gray-700"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/abufaisalashik", 
      label: "LinkedIn",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500"
    },
    { 
      icon: XIcon, 
      href: "https://x.com/abufaisalashik", 
      label: "X (Twitter)",
      color: "hover:bg-gray-900",
      bgColor: "bg-black"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/abufaisalashik", 
      label: "Instagram",
      color: "hover:bg-pink-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/abufaisalashik", 
      label: "Facebook",
      color: "hover:bg-blue-700",
      bgColor: "bg-blue-600"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/@abufaisalashik", 
      label: "YouTube",
      color: "hover:bg-red-600",
      bgColor: "bg-red-500"
    },
    { 
      icon: TikTokIcon, 
      href: "https://tiktok.com/@abufaisalashik", 
      label: "TikTok",
      color: "hover:bg-gray-900",
      bgColor: "bg-black"
    },
    { 
      icon: BehanceIcon, 
      href: "https://behance.net/abufaisalashik", 
      label: "Behance",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500"
    },
    { 
      icon: Dribbble, 
      href: "https://dribbble.com/abufaisalashik", 
      label: "Dribbble",
      color: "hover:bg-pink-600",
      bgColor: "bg-pink-500"
    },
    { 
      icon: Twitch, 
      href: "https://twitch.tv/abufaisalashik", 
      label: "Twitch",
      color: "hover:bg-purple-700",
      bgColor: "bg-purple-600"
    }
  ];

  const paymentMethods = [
    { 
      name: "American Express", 
      icon: AmexIcon, 
      color: "text-white",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
      nameBgColor: "bg-blue-600",
      nameTextColor: "text-white",
      nameHoverBg: "group-hover:bg-blue-700"
    },
    { 
      name: "Bangla QR", 
      icon: BanglaQrIcon, 
      color: "text-white",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
      nameBgColor: "bg-green-600",
      nameTextColor: "text-white",
      nameHoverBg: "group-hover:bg-green-700"
    },
    { 
      name: "bKash", 
      icon: BkashIcon, 
      color: "text-white",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
      nameBgColor: "bg-pink-600",
      nameTextColor: "text-white",
      nameHoverBg: "group-hover:bg-pink-700"
    },
    { 
      name: "Mastercard", 
      icon: MastercardIcon, 
      color: "text-white",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
      nameBgColor: "bg-orange-600",
      nameTextColor: "text-white",
      nameHoverBg: "group-hover:bg-orange-700"
    },
    { 
      name: "Nagad", 
      icon: NagadIcon, 
      color: "text-white",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
      nameBgColor: "bg-red-600",
      nameTextColor: "text-white",
      nameHoverBg: "group-hover:bg-red-700"
    },
    { 
      name: "Payoneer", 
      icon: PayoneerIcon, 
      color: "text-white",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
      nameBgColor: "bg-purple-600",
      nameTextColor: "text-white",
      nameHoverBg: "group-hover:bg-purple-700"
    },
    { 
      name: "Western Union", 
      icon: WesternUnionIcon, 
      color: "text-white",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
      nameBgColor: "bg-yellow-600",
      nameTextColor: "text-black",
      nameHoverBg: "group-hover:bg-yellow-700"
    }
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
              <img src={webLogo} alt="Md. AbuFaisal logo" className="h-12 w-auto mb-4 select-none" draggable={false} />
              <p className="text-primary-foreground/80 leading-relaxed">
                Creating beautiful, functional digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 ${social.bgColor} ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg transform animate-fade-in-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      title={social.label}
                    >
                      <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
              <p className="text-primary-foreground/60 text-sm">
                Connect with me on social media for updates and insights
              </p>
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
            <div className="flex items-center gap-3">
              <CuteQuestionIcon />
              <h4 className="text-xl font-semibold">Have Questions?</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">Email</p>
                  <a 
                    href="mailto:md.abufaisal@example.com" 
                    className="text-primary-foreground hover:text-accent transition-colors"
                  >
                    md.abufaisal@example.com
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

        {/* Payment Methods - unified mint section */}
        <div className="mt-0 pt-8 relative overflow-hidden bg-[#E1FAF0] rounded-t-3xl p-6">
          {/* Subtle radial pattern */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 24px 24px, rgba(16,185,129,0.15) 2px, transparent 0),
                               radial-gradient(circle at 72px 72px, rgba(59,130,246,0.15) 2px, transparent 0)`,
              backgroundSize: '96px 96px'
            }}
          />
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold mb-2 text-gray-800">
              Secure Payment Methods
            </h4>
            <p className="text-gray-600 text-sm">
              Multiple secure payment options for your convenience
            </p>
          </div>
          <div className="flex flex-nowrap justify-between items-center w-full px-1 overflow-x-auto md:overflow-visible">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.name}
                  className={`group relative flex items-center justify-center px-0.5 lg:px-1 py-2 ${method.bgColor} ${method.hoverColor} rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg transform animate-fade-in-up cursor-pointer overflow-hidden`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  title={method.name}
                >
                  {/* Animated background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Logo only */}
                  <div className="relative z-10">
                    <Icon />
                  </div>
                  
                  {/* Pulse animation on hover */}
                  <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500 animate-pulse">
              🔒 All transactions are secured with SSL encryption
            </p>
          </div>
        </div>

        {/* Bottom Footer - attached with same mint bg and pattern */}
        <div className="relative text-gray-800 py-16 px-4 overflow-hidden bg-[#E1FAF0]">
          {/* Subtle radial pattern */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 24px 24px, rgba(16,185,129,0.15) 2px, transparent 0),
                               radial-gradient(circle at 72px 72px, rgba(59,130,246,0.15) 2px, transparent 0)`,
              backgroundSize: '96px 96px'
            }}
          />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-green-200/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-32 w-28 h-28 bg-purple-200/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 right-10 w-20 h-20 bg-pink-200/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>    
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700 px-6 relative z-10">
            <p className="font-medium">
              &copy; {currentYear} Md. AbuFaisal. All rights reserved.
            </p>
            <p className="font-medium">
              Developed by{' '}
              <span className="text-blue-600 font-semibold">
                Md. Abu Faisal
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;