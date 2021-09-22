import { Box, Container, Text } from "@chakra-ui/react";
import SectionHeading from "../../components/SectionHeading";

export default function CaseStudyZillow(): JSX.Element {
  return (
    <>
      <Container maxW="container.lg">
        <Box py={32}>
          <Text as="h1" textStyle="h1">
            Building a Web Architecture
          </Text>
          <Text as="h1">
            Optimized for developer velocity <i>and</i> quality
          </Text>
        </Box>
        <Box maxW={[0, null, "50%"]}>
          <SectionHeading>Overview</SectionHeading>
          <Text mb={4}>The web platform is constantly evolving.</Text>
        </Box>
      </Container>
    </>
  );
}
