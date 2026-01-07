import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  sv: {
    // Navigation
    'nav.home': 'Startsida',
    'nav.services': 'Tjänster',
    'nav.projects': 'Projekt',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'nav.getQuote': 'Kontakta oss',

    // Hero
    'hero.title': 'Elektriska lösningar med precision',
    'hero.subtitle': 'Professionell elinstallation, ljusdesign och säkerhetslösningar för krävande projekt i Stockholm med omnejd',
    'hero.cta': 'Kontakta oss',
    'hero.learnMore': 'Läs mer',

    // Services
    'services.title': 'Våra tjänster',
    'services.subtitle': 'Komplett elektrisk expertis för alla behov',
    'services.electrical.title': 'Elinstallation',
    'services.electrical.desc': 'Professionell elinstallation för bostäder, kontor och industri med högsta säkerhetsstandard.',
    'services.lighting.title': 'Ljusdesign',
    'services.lighting.desc': 'Skräddarsydd ljusdesign som förhöjer atmosfär och funktionalitet i varje rum.',
    'services.inspection.title': 'Besiktning',
    'services.inspection.desc': 'Grundlig elektrisk besiktning för att säkerställa säkerhet och regelefterlevnad.',
    'services.planning.title': 'Projektering',
    'services.planning.desc': 'Noggrann planering och projektering för effektiva elektriska system.',
    'services.control.title': 'Styrsystem',
    'services.control.desc': 'Moderna styrsystem för belysning, värme och automation.',
    'services.energy.title': 'Energioptimering',
    'services.energy.desc': 'Smarta lösningar för att minska energiförbrukning och kostnader.',

    // Projects
    'projects.title': 'Utvalda projekt',
    'projects.subtitle': 'Se exempel på vårt arbete',
    'projects.viewAll': 'Se alla projekt',

    // About
    'about.title': 'Om Elektroshields',
    'about.subtitle': 'Din partner för elektriska lösningar',
    'about.story.title': 'Vår historia',
    'about.story.text': 'Elektroshields grundades med en vision att leverera elektriska lösningar av högsta kvalitet. Med gedigen erfarenhet och passion för hantverk har vi byggt ett rykte för pålitlighet och excellens.',
    'about.mission.title': 'Vårt uppdrag',
    'about.mission.text': 'Vi strävar efter att leverera säkra, effektiva och estetiskt tilltalande elektriska installationer som överträffar våra kunders förväntningar.',
    'about.team.title': 'Vårt team',
    'about.area.title': 'Vårt verksamhetsområde',
    'about.area.text': 'Vi är verksamma i Stockholm med omnejd, inklusive skärgården.',

    // Contact
    'contact.title': 'Kontakta oss',
    'contact.subtitle': 'Vi ser fram emot att höra från dig',
    'contact.form.name': 'Namn',
    'contact.form.email': 'E-post',
    'contact.form.phone': 'Telefon (valfritt)',
    'contact.form.service': 'Tjänst',
    'contact.form.selectService': 'Välj tjänst',
    'contact.form.message': 'Meddelande',
    'contact.form.submit': 'Skicka meddelande',
    'contact.form.success': 'Tack för ditt meddelande! Vi återkommer snart.',
    'contact.info.title': 'Kontaktinformation',
    'contact.info.address': 'Adress',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-post',
    'contact.info.hours': 'Öppettider',
    'contact.info.hoursValue': 'Mån-Fre 07:00-16:00',

    // Footer
    'footer.description': 'Professionella elektriska lösningar för krävande projekt.',
    'footer.quickLinks': 'Snabblänkar',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alla rättigheter förbehållna.',

    // Common
    'common.learnMore': 'Läs mer',
    'common.readMore': 'Läs mer',
    'common.viewProject': 'Se projekt',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Contact us',

    // Hero
    'hero.title': 'Electrical Solutions with Precision',
    'hero.subtitle': 'Professional electrical installation, lighting design and safety solutions for demanding projects in Stockholm and surrounding areas',
    'hero.cta': 'Contact Us',
    'hero.learnMore': 'Learn More',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete electrical expertise for all needs',
    'services.electrical.title': 'Electrical Installation',
    'services.electrical.desc': 'Professional electrical installation for residential, office and industrial projects with the highest safety standards.',
    'services.lighting.title': 'Lighting Design',
    'services.lighting.desc': 'Custom lighting design that enhances atmosphere and functionality in every space.',
    'services.inspection.title': 'Inspection',
    'services.inspection.desc': 'Thorough electrical inspection to ensure safety and regulatory compliance.',
    'services.planning.title': 'Project Planning',
    'services.planning.desc': 'Meticulous planning and engineering for efficient electrical systems.',
    'services.control.title': 'Control Systems',
    'services.control.desc': 'Modern control systems for lighting, heating and automation.',
    'services.energy.title': 'Energy Optimization',
    'services.energy.desc': 'Smart solutions to reduce energy consumption and costs.',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'See examples of our work',
    'projects.viewAll': 'View All Projects',

    // About
    'about.title': 'About Elektroshields',
    'about.subtitle': 'Your partner for electrical solutions',
    'about.story.title': 'Our Story',
    'about.story.text': 'Elektroshields was founded with a vision to deliver electrical solutions of the highest quality. With solid experience and passion for craftsmanship, we have built a reputation for reliability and excellence.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'We strive to deliver safe, efficient and aesthetically pleasing electrical installations that exceed our customers\' expectations.',
    'about.team.title': 'Our Team',
    'about.area.title': 'Our Service Area',
    'about.area.text': 'We operate in Stockholm and surrounding areas, including the archipelago.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We look forward to hearing from you',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.service': 'Service',
    'contact.form.selectService': 'Select service',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you for your message! We will get back to you soon.',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Business Hours',
    'contact.info.hoursValue': 'Mon-Fri 07:00-16:00',

    // Footer
    'footer.description': 'Professional electrical solutions for demanding projects.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    // Common
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.viewProject': 'View Project',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('sv');

  useEffect(() => {
    const saved = localStorage.getItem('elektroshield-language') as Language;
    if (saved && (saved === 'sv' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('elektroshield-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};