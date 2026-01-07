import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, MapPin, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Award,
      title: language === 'sv' ? 'Kvalitet' : 'Quality',
      description: language === 'sv'
        ? 'Vi levererar alltid arbete av högsta kvalitet med fokus på hållbarhet och säkerhet.'
        : 'We always deliver work of the highest quality with focus on durability and safety.',
    },
    {
      icon: Users,
      title: language === 'sv' ? 'Partnerskap' : 'Partnership',
      description: language === 'sv'
        ? 'Vi bygger långsiktiga relationer med våra kunder genom öppen kommunikation och tillit.'
        : 'We build long-term relationships with our clients through open communication and trust.',
    },
    {
      icon: Target,
      title: language === 'sv' ? 'Precision' : 'Precision',
      description: language === 'sv'
        ? 'Noggrann planering och professionellt utförande i varje projekt, oavsett storlek.'
        : 'Careful planning and professional execution in every project, regardless of size.',
    },
  ];

  const team = [
    {
      name: 'Jocke Shields',
      role: language === 'sv' ? 'Grundare & VD' : 'Founder & CEO',
      description: language === 'sv'
        ? 'Med över 15 års erfarenhet inom elbranschen driver Jocke företaget med passion för kvalitet och kundnöjdhet.'
        : 'With over 15 years of experience in the electrical industry, Jocke runs the company with passion for quality and customer satisfaction.',
    },
    {
      name: 'Alexander Domar',
      role: language === 'sv' ? 'Ledande montör' : 'Lead Electrician',
      description: language === 'sv'
        ? 'Alexander ansvarar för teknisk kvalitet och kompetensutveckling inom företaget.'
        : 'Alexander is responsible for technical quality and competence development within the company.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.story.text')}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>
            <div className="bg-muted rounded-2xl aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop"
                alt="Elektriker at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {language === 'sv' ? 'Våra värderingar' : 'Our Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t('about.team.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-muted rounded-full mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 font-sans">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('about.area.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('about.area.text')}
            </p>
            <Button size="lg" asChild>
              <Link to="/kontakt">
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
