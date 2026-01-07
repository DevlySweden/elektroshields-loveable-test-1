import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/tjanster', label: t('nav.services') },
    { path: '/projekt', label: t('nav.projects') },
    { path: '/om-oss', label: t('nav.about') },
    { path: '/kontakt', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground font-sans">
              Elektroshields
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-secondary rounded-full p-1">
              <button
                onClick={() => setLanguage('sv')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                  language === 'sv'
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                SV
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            <Button asChild>
              <Link to="/kontakt">{t('nav.getQuote')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
              <div className="flex items-center bg-secondary rounded-full p-1">
                <button
                  onClick={() => setLanguage('sv')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    language === 'sv'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground'
                  }`}
                >
                  Svenska
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    language === 'en'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="px-4 mt-4">
              <Button asChild className="w-full">
                <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.getQuote')}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;