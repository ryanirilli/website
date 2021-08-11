import Head from "next/head";
import Lottie from "../components/Lottie";
import { Container, useBreakpointValue } from "@chakra-ui/react";

export default function Home() {
  const introAnimationPath = useBreakpointValue({
    base: "/intro-animation.json",
    md: "/intro-animation.json",
  });
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
        <Container maxW="container.lg">
          <Lottie
            lottiePlayerOptions={{
              path: introAnimationPath,
              // @ts-ignore
              renderer: "canvas",
              loop: false,
            }}
          />
        </Container>
      </main>
    </div>
  );
}
