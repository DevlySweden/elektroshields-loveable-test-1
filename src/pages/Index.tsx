import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Lightbulb, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const { t } = useLanguage();

  const featuredServices = [
    {
      icon: Zap,
      title: t('services.electrical.title'),
      description: t('services.electrical.desc'),
    },
    {
      icon: Lightbulb,
      title: t('services.lighting.title'),
      description: t('services.lighting.desc'),
    },
    {
      icon: Shield,
      title: t('services.inspection.title'),
      description: t('services.inspection.desc'),
    },
  ];

  const featuredProjects = [
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
      title: 'Modern Kontorsbelysning',
      category: 'Ljusdesign',
      description: 'Komplett ljusdesign för modernt kontor i Stockholm.',
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      title: 'Villa Elinstallation',
      category: 'Elinstallation',
      description: 'Helhetslösning för exklusiv villa i skärgården.',
    },
    {
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
      title: 'Restaurang Automation',
      category: 'Styrsystem',
      description: 'Smart belysningsstyrning för restaurang.',
    },
  ];

  const trustPoints = [
    'Certifierade elektriker',
    '15+ års erfarenhet',
    'Stockholm & skärgård',
    'Fullservice-partner',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" asChild>
                <Link to="/kontakt">
                  {t('hero.cta')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/tjanster">{t('hero.learnMore')}</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/tjanster">
                {t('common.learnMore')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projekt">
                {t('projects.viewAll')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.subtitle')}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/kontakt">
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;