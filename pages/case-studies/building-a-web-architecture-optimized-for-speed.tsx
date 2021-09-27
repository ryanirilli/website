import { useMemo } from "react";
import Link from "next/link";
import {
  AspectRatio,
  Box,
  Container,
  Text,
  Icon,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import Head from "next/head";
import Lottie, { LottiePLayerOptions } from "../../components/Lottie";
import SectionHeading from "../../components/SectionHeading";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

export default function CaseStudyArchitecture(): JSX.Element {
  const animationPath = useBreakpointValue({
    base: "/articles/web-architecture/mobile-architecture.json",
    md: "/articles/web-architecture/desktop-architecture.json",
  });

  const introPlayerOptions = useMemo<LottiePLayerOptions>(
    () => ({
      path: animationPath,
    }),
    [animationPath]
  );

  return (
    <>
      <Head>
        <title>
          Ryan Irilli - Building a Web Architecture Optimized for developer
          happiness and product growth.
        </title>
      </Head>
      <TopNav />
      <Container maxW="container.lg" mb={32}>
        <Box pt={32}>
          <Link passHref href="/">
            <Button
              variant="link"
              colorScheme="white"
              leftIcon={<Icon as={BsArrowLeft} />}
            >
              Back
            </Button>
          </Link>
          <Text as="h1" textStyle="h1">
            Building a Web Architecture
          </Text>
          <Text as="h1">
            Optimized for developer happiness and product growth
          </Text>
        </Box>
        <AspectRatio ratio={[9 / 16, null, 16 / 9]} py={16}>
          <Lottie lottiePlayerOptions={introPlayerOptions} />
        </AspectRatio>
        <Box maxW={["auto", null, "50%"]} mb={32}>
          <SectionHeading>Overview</SectionHeading>
          <Text mb={4}>
            The web platform is constantly evolving along with the tools,
            libraries and patterns that developers use to build on top of it. In
            this article, I highlight the core technologies that I consider to
            be essential for building modern web apps.
          </Text>
        </Box>
        <Container mt={16} px={0}>
          <Text as="h3" textStyle="h3" mb={2}>
            Vercel, Next.js and React
          </Text>
          <Text mb={4}>
            It&apos;s arguably the most powerful trifecta in a web
            developer&apos;s toolbelt today. Prior to Vercel&apos;s Next
            framework, teams were straddled with configuirng and maintaining
            build systems and dev environments from scratch with long Webpack
            configs. Not only is this a huge effort to design and implement,
            it&apos;s also difficult to maintain as plugins evolve and
            performance changes over time.
          </Text>
          <Text mb={16}>
            Along with a dev environment, page routing, built in JSON API, image
            optimization and serverside rendering in Next, Vercel as a platform
            offers an incredibly easy to use hosting solution that has CI/CD
            built in, environment variables, and DNS configuration. By
            connecting your repository to your project, Vercel triggers a
            production deployment on every commit to your main branch and a
            preview environment for every feature branch.
          </Text>

          <Text as="h3" textStyle="h3" mb={2}>
            Chakra UI
          </Text>
          <Text mb={4}>
            Every modern application needs a token based Design System and a
            core library of UI components. By creating a standard visual
            language and a set of reusable components, developers can move fast
            by focusing more on the user <i>journey</i> rather than the user{" "}
            <i>experience</i>. Since the UX can be codified into the system, you
            can easily compose and configure components for any use case without
            having to invent interaction models.
          </Text>
          <Text mb={16}>
            Chakra does this incredibly well by leveraging Styled-System, a
            css-in-js based solution. Your application is provided a custom
            Theme and React components that accept token values as props.
            Additionally, values can be passed as an array that corresponds to
            breakpoint values, making responsive design extremely easy to
            implement.
          </Text>

          <Text as="h3" textStyle="h3" mb={2}>
            Storybook
          </Text>
          <Text mb={16}>
            Gone are the days of developing UI for your application directly in
            the app itself. That process can be excruciatingly slow for
            developers to iterate on. With Storybook, you can build components
            in isolation and create a deployable UI library that can serve as
            both a development environment and a documentation site. This is
            great for teams looking to maintain a consistent core experience
            across their product(s).
          </Text>

          <Text as="h3" textStyle="h3" mb={2}>
            Graphql with Apollo
          </Text>
          <Text mb={16}>
            Data management in single page applications has long been a tricky
            challenge. A developer might start by making API requests using
            Fetch and combining or transofrming responses to fit specific UI
            requirements. Apollo Server and Client alleviate that pain by making
            it easy for frontend developers to specify a schema and a
            standardized approach for fetching only the fields you need in a
            single request. On the serverside, data can be resolved by numerous
            data sources.
          </Text>

          <Text as="h3" textStyle="h3" mb={2}>
            Firebase
          </Text>
          <Text mb={16}>
            Having a web framework and environments to build apps is great, but
            of course real applications also need authentication and a
            persistence layer for user data. Firebase makes that simple by
            providing a comprehensive NoSQL realtime cloud database (Firestore)
            and an Authentication service that provides standard login methods,
            third party integrations (Google, Facebook etc.) as well as
            multi-factor authentication.
          </Text>

          <Text as="h3" textStyle="h3" mb={2}>
            Sanity CMS
          </Text>
          <Text mb={4}>
            Aside from user data, site content is another area developers have
            traditionally spent a lot of time creating. Everyone wins when a
            website or application can be maintained by non engineers, so having
            a Content Managament System (CMS) that is flexible and easy to use
            is very important. Sanity provides a paradigm for building out
            content models by declaratively specifying document structure, data
            types and relationships between pieces of content in their open
            source project Sanity Studio.
          </Text>
          <Text mb={16}>
            Rather than having an all encompassing kitchen sink admin dashboard
            like Wordpress, Sanity allows the product owners decide what control
            they actually need. This allows developers to easily provide that
            control and nothing more, making it easy for non technical folks to
            easily understand the interface and not be burdened by an
            overhwelming admin UI.
          </Text>
          <SectionHeading>Conclusion</SectionHeading>
          <Text mb={4}>
            This list represents a very powerful stack at a high level. I
            believe they address a wide array of project requirements and work
            very well together. By using these tools, teams can truly focus on
            building what&apos;s important for the business. They abstract away
            a huge amount of boilerplate and glue code that make things work
            while still providing a considerable amount of flexibility not yet
            available in low-code solutions.
          </Text>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
