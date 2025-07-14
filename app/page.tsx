'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

// Абстрактные киберпанк иконки
const CyberBrainIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="50%" stopColor="#ff00ff" />
        <stop offset="100%" stopColor="#ffff00" />
      </linearGradient>
    </defs>
    <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5l-2 3c0 2 2 3 4 3h6c2 0 4-1 4-3l-2-3c1-1 2-3 2-5 0-4-3-7-7-7z" 
          fill="none" stroke="url(#brain-gradient)" strokeWidth="1.5"/>
    <circle cx="9" cy="8" r="1" fill="#00ffff"/>
    <circle cx="15" cy="8" r="1" fill="#ff00ff"/>
    <path d="M8 12h8M9 14h6M10 16h4" stroke="url(#brain-gradient)" strokeWidth="1"/>
  </svg>
);

const NeuralNetworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff0080" />
        <stop offset="50%" stopColor="#8000ff" />
        <stop offset="100%" stopColor="#0080ff" />
      </linearGradient>
    </defs>
    <circle cx="4" cy="6" r="2" fill="#ff0080"/>
    <circle cx="4" cy="18" r="2" fill="#ff0080"/>
    <circle cx="12" cy="4" r="2" fill="#8000ff"/>
    <circle cx="12" cy="12" r="2" fill="#8000ff"/>
    <circle cx="12" cy="20" r="2" fill="#8000ff"/>
    <circle cx="20" cy="8" r="2" fill="#0080ff"/>
    <circle cx="20" cy="16" r="2" fill="#0080ff"/>
    <path d="M6 6l4-2M6 18l4-6M6 6l4 6M6 18l4 2M14 4l4 4M14 12l4-4M14 12l4 4M14 20l4-4" 
          stroke="url(#neural-gradient)" strokeWidth="1" opacity="0.7"/>
  </svg>
);

const DataFlowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ff80" />
        <stop offset="50%" stopColor="#0080ff" />
        <stop offset="100%" stopColor="#8000ff" />
      </linearGradient>
    </defs>
    <rect x="2" y="4" width="4" height="2" fill="#00ff80" rx="1"/>
    <rect x="2" y="10" width="4" height="2" fill="#00ff80" rx="1"/>
    <rect x="2" y="16" width="4" height="2" fill="#00ff80" rx="1"/>
    <rect x="18" y="8" width="4" height="2" fill="#8000ff" rx="1"/>
    <rect x="18" y="14" width="4" height="2" fill="#8000ff" rx="1"/>
    <path d="M6 5h6l2 2-2 2H6M6 11h8l2 2-2 2H6M6 17h6l2 2-2 2H6" 
          stroke="url(#data-gradient)" strokeWidth="1.5" fill="none"/>
  </svg>
);

const QuantumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="quantum-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff8000" />
        <stop offset="50%" stopColor="#ff0080" />
        <stop offset="100%" stopColor="#8000ff" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="8" fill="none" stroke="url(#quantum-gradient)" strokeWidth="1" opacity="0.3"/>
    <circle cx="12" cy="12" r="5" fill="none" stroke="url(#quantum-gradient)" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="12" cy="12" r="2" fill="url(#quantum-gradient)"/>
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="url(#quantum-gradient)" strokeWidth="2"/>
    <circle cx="12" cy="4" r="1" fill="#ff8000"/>
    <circle cx="12" cy="20" r="1" fill="#ff8000"/>
    <circle cx="4" cy="12" r="1" fill="#ff0080"/>
    <circle cx="20" cy="12" r="1" fill="#8000ff"/>
  </svg>
);

const CyberSecurityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="security-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="50%" stopColor="#0080ff" />
        <stop offset="100%" stopColor="#8000ff" />
      </linearGradient>
    </defs>
    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-8-4z" 
          fill="none" stroke="url(#security-gradient)" strokeWidth="1.5"/>
    <circle cx="12" cy="10" r="2" fill="#00ffff"/>
    <path d="M10 14h4v4h-4z" fill="none" stroke="#00ffff" strokeWidth="1.5"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="url(#security-gradient)" strokeWidth="0.5" opacity="0.5"/>
  </svg>
);

const AlgorithmIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="algo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffff00" />
        <stop offset="50%" stopColor="#ff8000" />
        <stop offset="100%" stopColor="#ff0080" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="6" height="6" fill="none" stroke="url(#algo-gradient)" strokeWidth="1.5" rx="1"/>
    <rect x="16" y="2" width="6" height="6" fill="none" stroke="url(#algo-gradient)" strokeWidth="1.5" rx="1"/>
    <rect x="9" y="16" width="6" height="6" fill="none" stroke="url(#algo-gradient)" strokeWidth="1.5" rx="1"/>
    <path d="M8 5h8M19 8v8M12 16V8" stroke="url(#algo-gradient)" strokeWidth="2"/>
    <circle cx="5" cy="5" r="1" fill="#ffff00"/>
    <circle cx="19" cy="5" r="1" fill="#ff8000"/>
    <circle cx="12" cy="19" r="1" fill="#ff0080"/>
  </svg>
);

// Анимированный фон с частицами
const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({length: 50}, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + window.innerWidth) % window.innerWidth,
        y: (p.y + p.vy + window.innerHeight) % window.innerHeight,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
          style={{
            left: particle.x,
            top: particle.y,
            boxShadow: '0 0 4px #00ffff',
          }}
        />
      ))}
    </div>
  );
};

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
      icon: CyberBrainIcon,
      title: 'Neural AI Systems',
      price: 'от ₽150,000',
      description: 'Разработка интеллектуальных систем с использованием нейронных сетей и машинного обучения',
      features: ['Deep Learning', 'Computer Vision', 'NLP Processing', 'Predictive Analytics'],
      gradient: 'from-cyan-500 via-purple-500 to-pink-500'
    },
    {
      icon: NeuralNetworkIcon,
      title: 'Quantum Computing',
      price: 'от ₽300,000',
      description: 'Квантовые алгоритмы и вычисления для решения сложных задач оптимизации',
      features: ['Quantum Algorithms', 'Optimization', 'Cryptography', 'Simulation'],
      gradient: 'from-purple-500 via-blue-500 to-cyan-500'
    },
    {
      icon: DataFlowIcon,
      title: 'Data Augmentation',
      price: 'от ₽80,000',
      description: 'Обработка и анализ больших данных с использованием передовых технологий',
      features: ['Big Data Processing', 'Real-time Analytics', 'Data Mining', 'Visualization'],
      gradient: 'from-green-400 via-blue-500 to-purple-600'
    },
    {
      icon: QuantumIcon,
      title: 'Cyber Intelligence',
      price: 'от ₽200,000',
      description: 'Системы кибербезопасности с элементами искусственного интеллекта',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Forensics'],
      gradient: 'from-orange-500 via-pink-500 to-purple-600'
    },
    {
      icon: CyberSecurityIcon,
      title: 'Blockchain AI',
      price: 'от ₽250,000',
      description: 'Интеграция блокчейн технологий с системами искусственного интеллекта',
      features: ['Smart Contracts', 'Decentralized AI', 'Token Economics', 'DeFi Integration'],
      gradient: 'from-cyan-400 via-blue-500 to-purple-600'
    },
    {
      icon: AlgorithmIcon,
      title: 'Algorithmic Trading',
      price: 'от ₽180,000',
      description: 'Автоматизированные торговые системы с использованием машинного обучения',
      features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'High-Frequency Trading'],
      gradient: 'from-yellow-400 via-orange-500 to-pink-600'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Заполните все поля');
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Введите корректный email');
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
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setErrorMessage('Ошибка отправки. Попробуйте снова.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setErrorMessage('Ошибка сети. Проверьте соединение.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Cyber grid overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/80 backdrop-blur-sm border-b border-cyan-500/30 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <CyberBrainIcon />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                NEURAL SYSTEMS
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-cyan-400 hover:text-purple-400 transition-colors font-medium">Услуги</a>
              <a href="#portfolio" className="text-cyan-400 hover:text-purple-400 transition-colors font-medium">Проекты</a>
              <a href="#contact" className="text-cyan-400 hover:text-purple-400 transition-colors font-medium">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 shadow-lg shadow-cyan-500/25">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                FUTURE
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                IS NOW
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Передовые решения в области искусственного интеллекта, нейронных сетей и квантовых вычислений. 
              Создаем технологии будущего уже сегодня.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-10 py-6 border-0 shadow-xl shadow-cyan-500/25"
            >
              Начать проект
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-purple-400 hover:text-purple-400 transition-all"
            >
              Наши работы
            </Button>
          </div>

          {/* Cyber stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-400">AI моделей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Точность</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400">Мониторинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                НАШИ ТЕХНОЛОГИИ
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Революционные решения на стыке искусственного интеллекта и квантовых технологий
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent />
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">{service.title}</CardTitle>
                    <Badge variant="secondary" className={`w-fit text-lg font-semibold bg-gradient-to-r ${service.gradient} text-black border-0`}>
                      {service.price}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-6 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-cyan-600 hover:to-purple-600 border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-300">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  ПОДКЛЮЧИТЬСЯ
                </span>
                <br />
                <span className="text-white">К БУДУЩЕМУ</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Отправьте запрос и мы свяжемся с вами в течение часа для обсуждения вашего проекта
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <span className="text-lg text-gray-300">neural@systems.ai</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">QC</span>
                  </div>
                  <span className="text-lg text-gray-300">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">ML</span>
                  </div>
                  <span className="text-lg text-gray-300">Москва, Сколково</span>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Запрос на разработку</CardTitle>
                <CardDescription className="text-gray-300">
                  Расскажите о вашем проекте и мы предложим оптимальное решение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-purple-500/50 focus:ring-purple-500/25"
                  />
                  <Input
                    type="email"
                    placeholder="Email адрес"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-purple-500/50 focus:ring-purple-500/25"
                  />
                  <Textarea
                    placeholder="Опишите ваш проект..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-gray-800/50 border-cyan-500/30 text-white placeholder-gray-400 min-h-32 focus:border-purple-500/50 focus:ring-purple-500/25"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg py-6 border-0 shadow-xl shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить запрос
                        <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                          →
                        </div>
                      </>
                    )}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
                      ✓ Сообщение отправлено! Мы свяжемся с вами в течение часа.
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
      <footer className="relative bg-black/60 backdrop-blur-sm border-t border-cyan-500/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <CyberBrainIcon />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                NEURAL SYSTEMS
              </span>
            </div>
            
            <p className="text-gray-400 text-center md:text-right">
              © 2025 Neural Systems. Технологии будущего уже сегодня.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}