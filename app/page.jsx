"use client";

import { Fragment } from "react";

import { H1 } from "@/components/Heading";
import Logo from "@/components/Logo";
import GridContainer from "@/components/Grid";

export default function Home() {
  return (
    <Fragment>
      <GridContainer>
        <Logo />

        <H1>I am Whitegod</H1>
      </GridContainer>
    </Fragment>
  );
}
