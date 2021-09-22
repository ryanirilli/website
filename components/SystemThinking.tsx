import Image from "next/image";
import { Box, Flex, Container, Text, useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import ComparisonSlider from "./ComparisonSlider";
import SectionHeading from "./SectionHeading";

const fadeIn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      staggerChildren: 0.2,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

export default function SystemThinking() {
  const [isActivated, setIsActivated] = useBoolean();
  const content = (
    <Container pt={[0, null, 8]} maxW="container.lg" border={[0, null, "1px"]}>
      <Flex direction={["column", null, "row"]}>
        <Box flexBasis={["100%", null, "33%"]} mb={8} pl={[0, null, 2]}>
          {isActivated && (
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <motion.div variants={fadeIn}>
                <SectionHeading>System Thinking</SectionHeading>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Text maxW={80} pr={4}>
                  I focus on Design Systems, UX Heuristics, and Information
                  Architecture to optimize for usability on all surfaces.
                </Text>
              </motion.div>
            </motion.div>
          )}
        </Box>
        <Box
          flex={1}
          px={[0, null, 4]}
          transition="opacity 1s ease"
          opacity={isActivated ? 1 : 0}
        >
          <ComparisonSlider
            leftImageUrl="/zillow-hdp-complete.jpg"
            rightImageUrl="/zillow-hdp-wire.jpg"
          />
          <Flex justify="center">
            <Box mt={4} mb={[4, null, 8]}>
              <Image
                alt="zillow logo"
                src="/zillow-logo.svg"
                width={132}
                height={29}
              />
              <Text textAlign="center" textStyle="bodySmall">
                Home Details Page
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
  return (
    <PageContainer bg="#1C5DF8" color="white" onActivate={setIsActivated.on}>
      {content}
    </PageContainer>
  );
}
