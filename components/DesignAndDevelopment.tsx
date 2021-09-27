import {
  AspectRatio,
  Box,
  Container,
  useBreakpointValue,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import Lottie from "./Lottie";
import { useMemo } from "react";
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

export default function DesignAndDevelopment() {
  const [isActivated, setIsActivated] = useBoolean();
  const animationPath = useBreakpointValue({
    base: "/mobile-product-design-animation.json",
    md: "/desktop-product-design-animation.json",
  });

  const lottiePlayerOptions = useMemo(
    () => ({
      path: animationPath,
      loop: false,
    }),
    [animationPath]
  );

  const content = isActivated && (
    <Container maxW="container.lg" border={[0, null, "1px"]}>
      <Box position="relative">
        <Box
          position="absolute"
          top={[0, null, 8]}
          left={[0, null, 4]}
          zIndex="1"
        >
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <SectionHeading>Design & Development</SectionHeading>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Text maxW={80}>
                I take a principled approach to Product Design and frontend
                engineering, bringing together both disciplines to craft a
                consistent and scalable user experience.
              </Text>
            </motion.div>
          </motion.div>
        </Box>
        <AspectRatio ratio={[9 / 16, null, 16 / 9]}>
          <Lottie lottiePlayerOptions={lottiePlayerOptions} />
        </AspectRatio>
      </Box>
    </Container>
  );
  return (
    <PageContainer bg="#413ED8" color="white" onActivate={setIsActivated.on}>
      {content}
    </PageContainer>
  );
}
