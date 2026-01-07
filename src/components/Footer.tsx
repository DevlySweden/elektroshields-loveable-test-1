import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold font-sans">Elektroshields</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-sans">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-background text-sm transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/tjanster" className="text-background/70 hover:text-background text-sm transition-colors">
                {t('nav.services')}
              </Link>
              <Link to="/projekt" className="text-background/70 hover:text-background text-sm transition-colors">
                {t('nav.projects')}
              </Link>
              <Link to="/om-oss" className="text-background/70 hover:text-background text-sm transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/kontakt" className="text-background/70 hover:text-background text-sm transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 font-sans">{t('nav.services')}</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-background/70 text-sm">{t('services.electrical.title')}</span>
              <span className="text-background/70 text-sm">{t('services.lighting.title')}</span>
              <span className="text-background/70 text-sm">{t('services.inspection.title')}</span>
              <span className="text-background/70 text-sm">{t('services.planning.title')}</span>
              <span className="text-background/70 text-sm">{t('services.control.title')}</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-sans">{t('footer.contact')}</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+46XXXXXXXX"
                className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+46 XX XXX XX XX</span>
              </a>
              <a
                href="mailto:info@elektroshields.se"
                className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@elektroshields.se</span>
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Elektro J. Shields AB. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;