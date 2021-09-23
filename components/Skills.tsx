import React, { FunctionComponent } from "react";
import { Container, Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FiFigma } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import {
  SiNextDotJs,
  SiApollographql,
  SiTypescript,
  SiAdobeaftereffects,
  SiFirebase,
} from "react-icons/si";
import { AiFillBuild } from "react-icons/ai";
import PageContainer from "./PageContainer";
import SectionHeading from "./SectionHeading";

interface ISKillRow {
  SkillIcon: FunctionComponent;
  name: string;
}

function SkillRow({ SkillIcon, name }: ISKillRow): JSX.Element {
  return (
    <HStack mb={4} border="1px">
      <Box borderRight="1px" px={2} py={4}>
        <Icon as={SkillIcon} w={8} h={8} />
      </Box>
      <Box px={2} py={4}>
        <Text>{name}</Text>
      </Box>
    </HStack>
  );
}

export default function Skills(): JSX.Element {
  const content = (
    <Container>
      <Text textStyle="h1" textAlign="center" mb={16}>
        A Complete Toolkit to Tackle Any Project
      </Text>
      <Box mb={16}>
        <SectionHeading>Client</SectionHeading>
        <SkillRow name="Typescript" SkillIcon={SiTypescript} />
        <SkillRow name="React" SkillIcon={FaReact} />
        <SkillRow name="Next.js" SkillIcon={SiNextDotJs} />
      </Box>
      <Box mb={16}>
        <SectionHeading>Server</SectionHeading>
        <SkillRow name="Node" SkillIcon={GrNode} />
        <SkillRow name="Apollo Graphql" SkillIcon={SiApollographql} />
        <SkillRow name="Firebase" SkillIcon={SiFirebase} />
      </Box>
      <Box mb={16}>
        <SectionHeading>Design</SectionHeading>
        <SkillRow name="Figma" SkillIcon={FiFigma} />
        <SkillRow name="After Effects" SkillIcon={SiAdobeaftereffects} />
      </Box>
      <SectionHeading>Tooling</SectionHeading>
      <SkillRow
        name="NPM, Webpack, Rollup, Github Actions, GCP"
        SkillIcon={AiFillBuild}
      />
    </Container>
  );
  return (
    <PageContainer bg="black" color="white">
      {content}
    </PageContainer>
  );
}
