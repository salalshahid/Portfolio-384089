import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./MainStyles";

const handleClick = (props) => {
  return <Link href="#contact"></Link>;
};

const Main = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Salal Shahid
          <br /> - Master's Student
        </SectionTitle>
        <SectionText>
          I'm a Master's Computer Science student who loves to develop
          web applications entirely from scratch making use
          of latest Web Technologies.
        </SectionText>
        <Button onClick={() => (window.location = "#contact")}>
          Contact Me
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Main;
