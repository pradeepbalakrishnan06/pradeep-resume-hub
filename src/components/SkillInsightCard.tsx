
import { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface SkillInsightCardProps {
  title: string;
  insight: string;
  chart: ReactNode;
}

const SkillInsightCard = ({ title, insight, chart }: SkillInsightCardProps) => {
  return (
    <Card className="my-24 first:mt-8 w-[90%] mx-auto opacity-0 animate-fade-in hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            {chart}
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <h3 className="text-3xl font-bold text-resume-dark-gray">
              {title}
            </h3>
            <p className="text-xl text-resume-medium-gray leading-relaxed">
              {insight}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillInsightCard;
