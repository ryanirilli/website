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
import SectionHeading from "./SectionHeading";
import Lottie, { LottiePLayerOptions } from "./Lottie";
import { useMemo } from "react";

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

export default function YearsExperience() {
  const [isActivated, setIsActivated] = useBoolean();
  const animationPath = useBreakpointValue({
    base: "/mobile-experience-animation.json",
    md: "/desktop-experience-animation.json",
  });

  const lottiePlayerOptions: LottiePLayerOptions = useMemo(
    () => ({
      path: animationPath,
      loop: false,
    }),
    [animationPath]
  );

  const content = isActivated && (
    <Container maxW="container.lg" border={[0, null, "1px"]}>
      <Box position="relative">
        <Box position="absolute" top={[0, null, 8]} left={[0, null, 4]}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <SectionHeading>10+ Years Experience</SectionHeading>
            <motion.div variants={fadeIn}>
              <Text maxW={80}>
                From Zero-to-One startups to Facebook, Uber, and Zillow, I have
                dedicated my career to building the modern web.
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
    <PageContainer bg="black" color="white" onActivate={setIsActivated.on}>
      {content}
    </PageContainer>
  );
}
