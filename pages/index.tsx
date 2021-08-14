import Head from "next/head";
import {
  Container,
  Box,
  useBreakpointValue,
  AspectRatio,
  useBoolean,
  Icon,
} from "@chakra-ui/react";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

import Lottie, { LottiePLayerOptions } from "../components/Lottie";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";
import { useEffect, useMemo } from "react";
import YearsExperience from "../components/YearsExeprience";
import DesignAndDevelopment from "../components/DesignAndDevelopment";

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useBoolean();
  const introAnimationPath = useBreakpointValue({
    base: "/mobile-intro-animation.json",
    md: "/desktop-intro-animation.json",
  });

  useEffect(() => {
    if (!isIntroComplete) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isIntroComplete]);

  const introPlayerOptions = useMemo<LottiePLayerOptions>(
    () => ({
      path: introAnimationPath,
      renderer: "canvas",
      loop: false,
    }),
    [introAnimationPath]
  );

  const content = (
    <>
      <YearsExperience />
      <DesignAndDevelopment />

      <PageContainer bg="#F7DF1E" color="blue">
        <p>two</p>
      </PageContainer>

      <Box h="100vh">
        <p>three</p>
      </Box>

      <Box h="100vh">
        <p>four</p>
      </Box>
    </>
  );

  return (
    <div>
      <Head>
        <title>
          Ryan Irilli - Javascript, Node, React developer and designer
        </title>
        <meta
          name="description"
          content="10+ years experience building web applications that perform on all devices"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopNav />
        <PageContainer bg="#fff" color="black" position="relative">
          <Container
            px={[0, null, 4]}
            maxW={["container.xl", null, "container.md"]}
          >
            <AspectRatio ratio={1}>
              <Lottie
                onComplete={setIsIntroComplete.on}
                lottiePlayerOptions={introPlayerOptions}
              />
            </AspectRatio>
          </Container>
          <Box
            position="absolute"
            bottom={[24, null, 32]}
            left="50%"
            transform="translateX(-50%)"
            transition="opacity 1s ease"
            opacity={isIntroComplete ? 1 : 0}
          >
            {isIntroComplete && (
              <motion.div
                animate={{ y: [0, -20, 20, -20, 20, 0] }}
                transition={{ duration: 2 }}
              >
                <Icon w={[8, null, 16]} h={[8, null, 16]} as={FiArrowDown} />
              </motion.div>
            )}
          </Box>
        </PageContainer>
        {isIntroComplete && content}
      </main>
    </div>
  );
}
