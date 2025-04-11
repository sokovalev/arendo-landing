import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  number?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  number,
}: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] flex flex-col items-start relative overflow-hidden group">
      {number && (
        <div className="absolute -right-4 -top-4 text-6xl font-bold text-gray-50 group-hover:text-gray-100 transition-colors">
          {number}
        </div>
      )}
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 relative z-10">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
    </div>
  );
};

export default FeatureCard;
