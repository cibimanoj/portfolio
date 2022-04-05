import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello<br />
          I am Cibi manoj
        </SectionTitle>
        <SectionText>
          Full-stack developer with a passion for developing scalable web
          applications. Iam looking forward to join
          the IT organizations to continue to grow my skill set while
          contributing a positive outcome for myself  the company.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
