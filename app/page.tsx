'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  ShoppingCart, 
  MessageCircle, 
  Bot, 
  Wrench, 
  HeartHandshake,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Send
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    {
      icon: Monitor,
      title: 'Landing Page / Website',
      price: 'from $2,500',
      description: 'Modern responsive websites that convert visitors into customers with optimized user experience',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'CMS Integration'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Store',
      price: 'from $7,500',
      description: 'Full-featured e-commerce solutions with payment systems and inventory management',
      features: ['Product Catalog', 'Shopping Cart & Payments', 'Admin Dashboard', 'CRM Integrations'],
      gradient: 'from-green-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Chatbot Development',
      price: 'from $2,000',
      description: 'Smart bots for Slack/Discord/WhatsApp that automate customer communication and support',
      features: ['Automated Responses', 'Lead Capture', 'CRM Integration', 'Analytics Dashboard'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Bot,
      title: 'AI Agent/Automation',
      price: 'from $3,500',
      description: 'Intelligent automation systems for business processes using cutting-edge AI technology',
      features: ['Data Processing', 'Smart Notifications', 'API Integrations', 'Machine Learning'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Wrench,
      title: 'Full-Stack Solution',
      price: 'from $10,000',
      description: 'Complete solutions: web platform + AI integrations tailored for your business needs',
      features: ['End-to-End Development', 'AI Integrations', 'Scalable Architecture', 'Technical Support'],
      gradient: 'from-teal-500 to-green-600'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      price: '$500-1,000/month',
      description: 'Continuous technical support and development of your projects with 24/7 monitoring',
      features: ['24/7 Monitoring', 'Regular Updates', 'Backup Solutions', 'Technical Consulting'],
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const cases = [
    {
      title: 'TasteBud Restaurant Chain',
      before: 'Phone orders only, losing 60% of potential customers due to busy lines',
      after: 'Online ordering system increased orders by 400%, automated order management',
      result: '+400% online orders',
      technology: 'Website + AI Chatbot'
    },
    {
      title: 'FitLife Gym Network',
      before: 'Manual class bookings, constant scheduling conflicts and member complaints',
      after: 'Automated booking system with member notifications and waitlist management',
      result: '+250% new memberships',
      technology: 'Web App + AI Assistant'
    },
    {
      title: 'StyleHub E-commerce',
      before: 'Outdated website builder platform, 2% conversion rate, poor mobile experience',
      after: 'Modern e-commerce platform with AI-powered product recommendations',
      result: '+350% conversion rate',
      technology: 'E-commerce + AI Engine'
    }
  ];

  const workSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'You submit a request, we connect within 1 hour to discuss your needs'
    },
    {
      step: '02', 
      title: 'Strategy Meeting',
      description: 'We analyze your requirements and propose the optimal solution approach'
    },
    {
      step: '03',
      title: 'Prototype & Design',
      description: 'Create mockups and prototypes to visualize the final result'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Build your solution with regular updates and milestone reviews'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Deploy your project and provide ongoing technical support'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация формы
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields');
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    // Простая валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Показать уведомление об успехе
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setErrorMessage('Failed to send message. Please try again.');
        setSubmitStatus('error');
        console.error('Email sending failed:', result.error);
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TechCraft Solutions</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Process</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rapid Solutions
              </span>
              <br />
              for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Websites, applications, and AI bots delivered fast. We stand out with our speed of development 
              and personalized approach to every project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-2 hover:bg-gray-50"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete range of IT solutions to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit text-lg font-semibold">
                      {service.price}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 text-base">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results we've achieved together with our business partners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {caseItem.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {caseItem.technology}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <p className="font-medium text-red-900 mb-1">Before:</p>
                    <p className="text-red-700 text-sm">{caseItem.before}</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <p className="font-medium text-green-900 mb-1">After:</p>
                    <p className="text-green-700 text-sm">{caseItem.after}</p>
                  </div>
                  
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-bold">{caseItem.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent process from idea to finished solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < workSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-8" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Submit your request and we'll connect with you within an hour to discuss the details
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-lg">hello@techcraftsolutions.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-lg">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Get Free Quote</CardTitle>
                <CardDescription className="text-gray-300">
                  Tell us about your project and we'll propose the optimal solution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-white/10 border-gray-600 text-white placeholder-gray-400 min-h-32"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
                      ✓ Your message has been sent successfully! We'll get back to you within an hour.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center">
                      {errorMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TechCraft Solutions</span>
            </div>
            
            <p className="text-gray-400 text-center md:text-right">
              © 2025 TechCraft Solutions. Rapid solutions for your business.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}