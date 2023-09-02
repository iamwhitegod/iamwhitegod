import { Card, Image } from ".";
import Text from "../Text";
import Heading from "../Heading";

const BlogCard = () => {
  return (
    <Card className="card">
      <Image src="/blog_thumbnail_01.png" alt="Description of blog thumbnail" />

      <div className="card__content">
        <Heading as="h3" className="card__title">
          Software Architecture Decisions: Focus on the Facts and Don't Make
          Guesses.
        </Heading>

        <div className="card__published">
          <Text as="span" color="#454545">
            Dec 6, 2020
          </Text>
          <Text as="span" color="#454545">
            5mins read
          </Text>
        </div>

        <Text className="card__summary">
          Next Billion Creators. My name is Whitegod Kingsley. At the time of
          this writing, I am locked up someplace in PortHarcourt, with my hands
          sanitized, convincing myself every day to do more social distancing,
          and struggling with my change of pace because the world outside has
          become an unfamiliar place, a reflection of how quickly life can
          transform in the face of unforeseen challenges.
        </Text>
      </div>
    </Card>
  );
};

export default BlogCard;
