import Image from "next/image";
import { Flex, Box, Text, useBoolean, Link as Anchor } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";

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

export default function AboutMe() {
  const [isActivated, setIsActivated] = useBoolean();
  const [isShowingImage, setIsShowingImage] = useBoolean();

  const content = isActivated && (
    <Flex direction={["column", null, "row"]}>
      <Box
        transition="opacity 1s ease"
        opacity={isShowingImage ? 1 : 0}
        flexBasis="50%"
        overflow="hidden"
        borderRightRadius={[0, null, 8]}
        position="relative"
      >
        <Image
          alt="Ryan and Lillian at Banff National park"
          width={2048}
          height={1365}
          src="/hero-photo.jpeg"
          onLoadingComplete={setIsShowingImage.on}
        />
      </Box>
      <Box flexBasis="50%" pl={[4, null, 8]}>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <motion.div variants={fadeIn}>
            <Text mb={2} textStyle="h3">
              Location
            </Text>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Text maxW={80}>
              I live in Seattle, Washington with my partner and co-pilot{" "}
              <Anchor href="https://twitter.com/enjoylillian">
                @enjoylillian
              </Anchor>
            </Text>
            <Text mt={8} maxW={80}>
              We routinely explore the Pacific Northwest.
            </Text>
          </motion.div>
        </motion.div>
      </Box>
    </Flex>
  );
  return (
    <PageContainer bg="#003B55" color="white" onActivate={setIsActivated.on}>
      <Flex direction="column" justify="center" minH="100vh">
        {content}
      </Flex>
    </PageContainer>
  );
}
