"use client";

import GridContainer from "@/components/Grid";
import FlexContainer from "@/components/Flex";
import Logo from "@/components/Logo";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Button from "@/components/Button";
import BlogCard from "@/components/Card/BlogCard";
import ProjectCard from "@/components/Card/ProjectCard";

const DesignSystem = () => {
  return (
    <GridContainer>
      <FlexContainer justify="space-between" align="center">
        <Logo />

        <Heading as="h3">Design System</Heading>
      </FlexContainer>

      <FlexContainer direction="column">
        <Heading as="h1">Whitegod</Heading>
        <Heading as="h2">Whitegod</Heading>
        <Heading as="h3">Whitegod</Heading>

        <Text weight="light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
          Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
          dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
          viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
          Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
          dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
          viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
        </Text>

        <FlexContainer>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer>
        <BlogCard />
        <ProjectCard />
      </FlexContainer>
    </GridContainer>
  );
};

export default DesignSystem;
