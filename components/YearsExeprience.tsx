import {
  AspectRatio,
  Box,
  Button,
  Container,
  useBreakpointValue,
  Text,
  Icon,
  Flex,
  useBoolean,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";
import SectionHeading from "./SectionHeading";
import Lottie, { LottiePLayerOptions } from "./Lottie";
import { useMemo } from "react";
import { FaRegLightbulb } from "react-icons/fa";

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
    <>
      <Container maxW="container.lg" border={[0, null, "1px"]}>
        <Box position="relative">
          <Box position="absolute" top={[0, null, 8]} left={[0, null, 4]}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <SectionHeading>10+ Years Experience</SectionHeading>
              <motion.div variants={fadeIn}>
                <Text maxW={80}>
                  I have help build applications that scale and adapt to the
                  business, by using tools and frameworks made for modern web
                  development.
                </Text>
              </motion.div>
            </motion.div>
          </Box>
          <AspectRatio ratio={[9 / 16, null, 16 / 9]}>
            <Lottie lottiePlayerOptions={lottiePlayerOptions} />
          </AspectRatio>
        </Box>
      </Container>
      <Container py={4} mt={4} maxW="container.lg">
        <Flex
          align={["flex-start", null, "center"]}
          direction={["column", null, "row"]}
          mb={[32, null, 0]}
        >
          <Link
            passHref
            href="/case-studies/building-a-web-architecture-optimized-for-speed"
          >
            <Button
              leftIcon={<Icon as={FaRegLightbulb} />}
              variant="outline"
              colorScheme="white"
              mb={[2, null, 0]}
            >
              Read my post
            </Button>
          </Link>
          <Text pl={[0, null, 2]} maxW={["75%", null, "none"]}>
            on building a web architecture optimized for developer happiness and
            product growth
          </Text>
        </Flex>
      </Container>
    </>
  );
  return (
    <PageContainer bg="black" color="white" onActivate={setIsActivated.on}>
      {content}
    </PageContainer>
  );
}
