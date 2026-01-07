import { Link } from 'react-router-dom';
import { Zap, Lightbulb, Shield, FileCheck, Cpu, BatteryCharging, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Zap,
      title: t('services.electrical.title'),
      description: t('services.electrical.desc'),
      features: [
        'Nyinstallation',
        'Renovering',
        'Felsökning',
        'Säkerhetssystem',
      ],
    },
    {
      icon: Lightbulb,
      title: t('services.lighting.title'),
      description: t('services.lighting.desc'),
      features: [
        'Kontor & butik',
        'Bostäder',
        'Utomhusbelysning',
        'LED-uppgradering',
      ],
    },
    {
      icon: Shield,
      title: t('services.inspection.title'),
      description: t('services.inspection.desc'),
      features: [
        'Elrevision',
        'Termografering',
        'Protokoll',
        'Åtgärdsförslag',
      ],
    },
    {
      icon: FileCheck,
      title: t('services.planning.title'),
      description: t('services.planning.desc'),
      features: [
        'Ritningar',
        'Beräkningar',
        'Offertunderlag',
        'Projektledning',
      ],
    },
    {
      icon: Cpu,
      title: t('services.control.title'),
      description: t('services.control.desc'),
      features: [
        'KNX/DALI',
        'Smarta hem',
        'Tidsstyrning',
        'Fjärrstyrning',
      ],
    },
    {
      icon: BatteryCharging,
      title: t('services.energy.title'),
      description: t('services.energy.desc'),
      features: [
        'Energianalys',
        'Optimering',
        'Solenergi',
        'Laddstationer',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.subtitle')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button size="lg" asChild>
            <Link to="/kontakt">
              {t('nav.getQuote')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
