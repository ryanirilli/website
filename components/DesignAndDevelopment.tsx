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
};

export default function DesignAndDevelopment() {
  const [isActivated, setIsActivated] = useBoolean();

  const content = isActivated && (
    <Container pt={16} maxW="container.lg">
      <Flex direction={["column", null, "row"]}>
        <Box flexBasis={["60%", null, "100%"]} pt={16}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <Text textStyle="h3">Design & Development</Text>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Text maxW={80}>
                I take a principled approach to both visual design and software
                engineering, bringing together both disciplines to craft a
                consistent and scalable user experience.
              </Text>
            </motion.div>
          </motion.div>
        </Box>
        <Flex justify="center">
          {/* <Lottie lottiePlayerOptions={animationOptions} /> */}
        </Flex>
      </Flex>
    </Container>
  );
  return (
    <PageContainer bg="#413ED8" color="white" onActivate={setIsActivated.on}>
      {content}
    </PageContainer>
  );
}
