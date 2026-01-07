import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
      title: language === 'sv' ? 'Modern Kontorsbelysning' : 'Modern Office Lighting',
      category: language === 'sv' ? 'Ljusdesign' : 'Lighting Design',
      description: language === 'sv' 
        ? 'Komplett ljusdesign för modernt kontor i Stockholms innerstad. Smart belysningsstyrning med DALI-system.'
        : 'Complete lighting design for modern office in central Stockholm. Smart lighting control with DALI system.',
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      title: language === 'sv' ? 'Exklusiv Villa' : 'Exclusive Villa',
      category: language === 'sv' ? 'Elinstallation' : 'Electrical Installation',
      description: language === 'sv'
        ? 'Helhetslösning för exklusiv villa i skärgården med smart hemautomation och säkerhetssystem.'
        : 'Complete solution for exclusive villa in the archipelago with smart home automation and security systems.',
    },
    {
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
      title: language === 'sv' ? 'Restaurang Automation' : 'Restaurant Automation',
      category: language === 'sv' ? 'Styrsystem' : 'Control Systems',
      description: language === 'sv'
        ? 'Smart belysningsstyrning för restaurang med scenariobaserade ljussättningar.'
        : 'Smart lighting control for restaurant with scenario-based lighting setups.',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      title: language === 'sv' ? 'Bostadsrättsförening' : 'Housing Association',
      category: language === 'sv' ? 'Elinstallation' : 'Electrical Installation',
      description: language === 'sv'
        ? 'Omfattande elrenovering av fastighet från 1920-talet med bevarad charm.'
        : 'Extensive electrical renovation of 1920s property with preserved charm.',
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
      title: language === 'sv' ? 'Butikslokaler' : 'Retail Spaces',
      category: language === 'sv' ? 'Ljusdesign' : 'Lighting Design',
      description: language === 'sv'
        ? 'Butikbelysning designad för att framhäva produkter och skapa köpupplevelse.'
        : 'Retail lighting designed to highlight products and create buying experience.',
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
      title: language === 'sv' ? 'Kontorshotell' : 'Office Hotel',
      category: language === 'sv' ? 'Projektering' : 'Project Planning',
      description: language === 'sv'
        ? 'Komplett elprojektering för nybyggt kontorshotell med flexibla arbetsplatser.'
        : 'Complete electrical planning for newly built office hotel with flexible workspaces.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('projects.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'sv' ? 'Har du ett projekt i åtanke?' : 'Have a project in mind?'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {language === 'sv' 
              ? 'Kontakta oss för att diskutera hur vi kan hjälpa dig med ditt nästa elektriska projekt.'
              : 'Contact us to discuss how we can help you with your next electrical project.'}
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

export default Projects;
