import { useRef } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
  AspectRatio,
  useBoolean,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiApollographql, SiTypescript, SiCsswizardry } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { ScaleLinear, scaleLinear } from "d3-scale";

import Lottie, { LottiePLayerOptions } from "../components/Lottie";
import PageContainer from "../components/PageContainer";
import TopNav from "../components/TopNav";
import { useEffect, useMemo } from "react";
import YearsExperience from "../components/YearsExeprience";
import DesignAndDevelopment from "../components/DesignAndDevelopment";
import SystemThinking from "../components/SystemThinking";
import Skills from "../components/Skills";
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
  const [isIntroComplete, setIsIntroComplete] = useBoolean(true);
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
      <Skills />
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
        <TopNav shouldShow={isIntroComplete} />
        <PageContainer bg="black" color="white" position="relative">
          <Flex
            minH="100vh"
            direction="column"
            justify="flex-start"
            mt={[0, null, 16]}
          >
            <Container maxW="container.lg">
              <AspectRatio ratio={[9 / 16, null, 16 / 9]}>
                <Lottie
                  onComplete={setIsIntroComplete.on}
                  lottiePlayerOptions={introPlayerOptions}
                />
              </AspectRatio>
            </Container>
            <Container pb={[4, null, 32]} maxW="container.lg">
              <Flex
                border="1px"
                direction={["column", null, "row"]}
                py={[2, null, 0]}
                mb={[16, null, 0]}
              >
                <Box borderRight={["0px", null, "1px"]} px={4}>
                  <Text
                    as="h1"
                    textStyle="h1"
                    bgGradient="linear(to-l, #FF5F6D, #FFC371)"
                    bgClip="text"
                  >
                    Hi
                  </Text>
                </Box>
                <Box px={4} py={2} borderRight={["0px", null, "1px"]}>
                  <Text>
                    I&apos;m Ryan, a Frontend Engineer & Web Designer with
                    experience using modern tools like Typescript, React,
                    Graphql, Next.js, and Figma to build first class web apps.
                  </Text>
                </Box>
                <HStack px={4} py={2}>
                  <Icon as={SiTypescript} />
                  <Icon as={FaReact} />
                  <Icon as={SiApollographql} />
                  <Icon as={SiCsswizardry} />
                  <Icon as={IoLogoVercel} />
                </HStack>
              </Flex>
            </Container>
          </Flex>
        </PageContainer>
        {isIntroComplete && content}
      </main>
    </div>
  );
}
