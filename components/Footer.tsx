import {
  Box,
  Flex,
  Container,
  Text,
  HStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { SocialIcon, socialIcons } from "../utils/contants";

export default function Footer(): JSX.Element {
  return (
    <Box bg={"rgba(255,255,255,0.05)"} py={16}>
      <Container maxW="container.lg">
        <Flex align="flex-start">
          <Box flex={1}>
            <Text>
              <strong>Ryan Irilli</strong>
            </Text>
            <Text textStyle="body">Frontend Engineer</Text>
            <Text textStyle="body">Seattle, WA</Text>
          </Box>
          <HStack border="1px" py={2}>
            {socialIcons.map(({ DisplayIcon, label, url }: SocialIcon, i) => (
              <IconButton
                size="lg"
                key={i}
                isRound
                colorScheme="white"
                variant="link"
                aria-label={label}
                icon={<Icon as={DisplayIcon} />}
                onClick={() => window.open(url)}
              />
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
