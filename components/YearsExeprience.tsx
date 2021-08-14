import { Box, Container, Flex, Text, useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import Lottie from "./Lottie";

const fadeIn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

const animationOptions = {
  path: "/screens-animation.json",
  loop: false,
};

export default function YearsExperience() {
  const [isActivated, setIsActivated] = useBoolean();
  const content = isActivated && (
    <Container pt={16} maxW="container.lg">
      <Flex direction={["column", null, "row"]}>
        <Box flexBasis={["60%", null, "100%"]} pt={16}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <Text mb={2} textStyle="h3">
                10+ Years Experience
              </Text>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Text maxW={80}>
                From Zero-to-One startups to Facebook, Uber, and Zillow, I have
                dedicated my career to building the modern web.
              </Text>
            </motion.div>
          </motion.div>
        </Box>
        <Flex justify="center">
          <Lottie lottiePlayerOptions={animationOptions} />
        </Flex>
      </Flex>
    </Container>
  );
  return (
    <PageContainer bg="#000" color="white" onActivate={setIsActivated.on}>
      {content}
    </PageContainer>
  );
}
