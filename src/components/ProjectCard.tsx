import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ProjectCard = ({ image, title, category, description }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-lg font-semibold mt-1 mb-2 font-sans">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
