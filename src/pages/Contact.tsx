import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = [
    { value: 'electrical', label: t('services.electrical.title') },
    { value: 'lighting', label: t('services.lighting.title') },
    { value: 'inspection', label: t('services.inspection.title') },
    { value: 'planning', label: t('services.planning.title') },
    { value: 'control', label: t('services.control.title') },
    { value: 'energy', label: t('services.energy.title') },
    { value: 'other', label: language === 'sv' ? 'Övrigt' : 'Other' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: language === 'sv' ? 'Meddelande skickat!' : 'Message sent!',
      description: t('contact.form.success'),
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+46 XX XXX XX XX',
      href: 'tel:+46XXXXXXXX',
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'info@elektroshields.se',
      href: 'mailto:info@elektroshields.se',
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: 'Stockholm, Sverige',
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: t('contact.info.hoursValue'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 font-sans">
                      {language === 'sv' ? 'Tack!' : 'Thank you!'}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contact.form.success')}
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                    >
                      {language === 'sv' ? 'Skicka nytt meddelande' : 'Send new message'}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        {t('contact.form.service')}
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange('service', value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={t('contact.form.selectService')} />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          {language === 'sv' ? 'Skickar...' : 'Sending...'}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          {t('contact.form.submit')}
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {t('contact.info.title')}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="block p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-card transition-all"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-border/50 bg-card"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden bg-muted aspect-video flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Stockholm, Sverige</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;