import Image from "next/image";
import {
  Container,
  Flex,
  Box,
  Text,
  useBoolean,
  Link as Anchor,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
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

export default function AboutMe() {
  const [isActivated, setIsActivated] = useBoolean();
  const [isShowingImage, setIsShowingImage] = useBoolean();

  const content = isActivated && (
    <Flex direction={["column", null, "row"]} border="1px" pb={[4, null, 0]}>
      <Box
        flexBasis="50%"
        overflow="hidden"
        position="relative"
        borderRight={[0, null, "1px"]}
      >
        <Box
          transform="scale(1.05)"
          transition="opacity 1s ease"
          opacity={isShowingImage ? 1 : 0}
        >
          <Image
            alt="Ryan and Lillian at Banff National park"
            width={2048}
            height={1365}
            src="/hero-photo.jpeg"
            onLoadingComplete={setIsShowingImage.on}
          />
        </Box>
      </Box>
      <Box flexBasis="50%" px={[4, null, 8]} pt={4}>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <SectionHeading>Location</SectionHeading>
          <motion.div variants={fadeIn}>
            <Text maxW={80}>
              I live in Seattle, Washington with my wife and copilot{" "}
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
    <PageContainer bg="black" color="white" onActivate={setIsActivated.on}>
      <Flex direction="column" justify="center" minH="100vh">
        <Container maxW="container.lg">{content}</Container>
      </Flex>
    </PageContainer>
  );
}
