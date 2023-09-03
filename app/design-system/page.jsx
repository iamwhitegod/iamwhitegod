"use client";

import GridContainer from "@/components/Grid";
import FlexContainer from "@/components/Flex";
import Logo from "@/components/Logo";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Section from "@/components/Section";
import BlogCard from "@/components/Card/BlogCard";
import ProjectCard from "@/components/Card/ProjectCard";
import InputField from "@/components/InputField";
import Blockquote from "@/components/Blockquote";

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
        {/* <Navigation /> */}
      </FlexContainer>

      <Header>
        <Heading as={"h3"}>Projects</Heading>
        <Text width="54.1rem">
          My single goal is to impact the company's vision by delivering quality
          frontend that influences user engagement, and consequently, the
          success of the company's product or service.
        </Text>
      </Header>

      <FlexContainer>
        <InputField
          type={"text"}
          id={"fullname"}
          name={"fullname"}
          placeholder={"Fullname"}
        />
        <InputField
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"Email address"}
        />

        <Button variant="secondary">Subscribe</Button>
      </FlexContainer>

      <FlexContainer>
        <Blockquote>
          <Text size="2.4rem" weight="600" lineHeight="3.2rem">
            Guys, if you like my articles, please share them. Also, I am
            planning on getting serious with this thing called Twitter, and I
            would really appreciate it if you follow me there.
          </Text>
        </Blockquote>

        <Blockquote>
          <Text>
            Guys, if you like my articles, please share them. Also, I am
            planning on getting serious with this thing called Twitter, and I
            would really appreciate it if you follow me there.
          </Text>
        </Blockquote>
      </FlexContainer>
    </GridContainer>
  );
};

export default DesignSystem;
