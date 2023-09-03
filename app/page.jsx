"use client";

import Section from "@/components/Section";
import GridContainer from "@/components/Grid";
import Navigation from "@/components/Navigation";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <GridContainer>
      <Navigation />

      <Section>
        <Heading as={"h3"}>Hello 👋</Heading>
        <Heading as={"h1"}>
          <span>I am</span> <span>Whitegod</span>
        </Heading>
      </Section>

      <Section>
        <Heading as={"h3"}>Developer 👨‍💻</Heading>
        <Heading as={"h2"} className="heading--main">
          About Me
        </Heading>
        <Text size="2.2rem" width="70.4rem" lineHeight="2.8rem">
          I believe in diverse skill sets and people as they make products and
          communities unique.
        </Text>
      </Section>

      <Section>
        <Heading as={"h3"}>My works 👨‍💻</Heading>
        <Heading as={"h2"} className="heading--main">
          Portfolio
        </Heading>
        <Text size="2.2rem" width="61.8rem" lineHeight="2.8rem">
          Discover a curated collection of my work and achievements, showcasing
          my passion and dedication in various projects.
        </Text>
      </Section>

      <Logos />

      <Footer>
        <Text>2023 © Whitegod Kingsley. All rights reserved.</Text>
        <BackToTop />
      </Footer>
    </GridContainer>
  );
}
