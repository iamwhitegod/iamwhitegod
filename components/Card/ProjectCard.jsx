import { Card, Image } from ".";
import Text from "../Text";

const ProjectCard = () => {
  return (
    <Card className="card" gap="1.2rem">
      <Image
        src="/portfolio_thumbnail_01.png"
        alt="Description of blog thumbnail"
      />

      <div className="card__details">
        <Text as="span">Google Lens</Text>
        <Text as="span" size="1.2rem">
          Branding + UI/UX + Website
        </Text>
      </div>
    </Card>
  );
};

export default ProjectCard;
