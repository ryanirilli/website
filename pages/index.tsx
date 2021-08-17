import { useRef } from "react";
import Head from "next/head";
import {
  Container,
  Box,
  useBreakpointValue,
  AspectRatio,
  useBoolean,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { ScaleLinear, scaleLinear } from "d3-scale";

import Lottie, { LottiePLayerOptions } from "../components/Lottie";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";
import { useEffect, useMemo } from "react";
import YearsExperience from "../components/YearsExeprience";
import DesignAndDevelopment from "../components/DesignAndDevelopment";
import SystemThinking from "../components/SystemThinking";
import AboutMe from "../components/AboutMe";
import useWindowScroll from "../hooks/use-window-scroll";

let scale: ScaleLinear<number, number>;
const handleScroll = (scrollVal: number, el?: HTMLDivElement | null) => {
  scale =
    scale ||
    scaleLinear()
      .domain([0, window.innerHeight / 4])
      .range([1, 0]);
  const val = scale(scrollVal);
  if (el) {
    el.style.opacity = `${val}`;
  }
};

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useBoolean(false);
  const introAnimationPath = useBreakpointValue({
    base: "/mobile-intro-animation2.json",
    md: "/desktop-intro-animation2.json",
  });

  const downArrowRef = useRef<HTMLDivElement>(null);
  useWindowScroll((val) => handleScroll(val, downArrowRef.current));

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
      loop: false,
      renderer: "canvas",
    }),
    [introAnimationPath]
  );

  const content = (
    <>
      <YearsExperience />
      <DesignAndDevelopment />
      <SystemThinking />
      <AboutMe />
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
        <PageContainer bg="#EDF2F7" color="#4A5568" position="relative">
          <Box
            display="none"
            position="absolute"
            top={64}
            left={64}
            zIndex={1}
            background="gray.100"
            py={4}
            px={8}
          >
            <Text as="h1" textStyle="h1">
              Let&apos;s Build That
            </Text>
          </Box>
          <AspectRatio ratio={[9 / 16, null, 16 / 9]}>
            <Lottie
              onComplete={setIsIntroComplete.on}
              lottiePlayerOptions={introPlayerOptions}
            />
          </AspectRatio>
          <Box
            position="absolute"
            bottom={[8, null, 32]}
            left="50%"
            transform="translateX(-50%)"
            transition="opacity 1s ease"
            opacity={isIntroComplete ? 1 : 0}
          >
            <Box ref={downArrowRef}>
              {isIntroComplete && (
                <motion.div
                  animate={{ y: [0, -20, 20, -20, 20, 0] }}
                  transition={{ duration: 2 }}
                >
                  <Icon w={[8, null, 16]} h={[8, null, 10]} as={FiArrowDown} />
                </motion.div>
              )}
            </Box>
          </Box>
        </PageContainer>
        {isIntroComplete && content}
      </main>
    </div>
  );
}
