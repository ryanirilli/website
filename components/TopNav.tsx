import { Box, Flex, Text, Icon, IconButton, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { BackgroundContext } from "./BackgroundContext";

const icons = [
  {
    DisplayIcon: FiLinkedin,
    label: "linkedin link",
    url: "https://www.linkedin.com/in/ryanirilli/",
  },
  {
    DisplayIcon: FiGithub,
    label: "github link",
    url: "https://github.com/ryanirilli",
  },
  {
    DisplayIcon: FiTwitter,
    label: "twitter link",
    url: "https://twitter.com/ryanirilli",
  },
];

export default function TopNav(): JSX.Element {
  const { colors } = useContext(BackgroundContext);
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="docked"
      bg={colors.bg}
      transition="background 500ms ease"
    >
      <Box px={[4, null, 8]} py={[2, null, 4]}>
        <Flex>
          <Box pr={4} flexGrow={[1, null, 0]}>
            <Text textStyle="h3">Ryan Irilli</Text>
          </Box>
          <HStack>
            {icons.map(({ DisplayIcon, label, url }, i) => (
              <IconButton
                key={i}
                isRound
                variant="outline"
                borderColor={colors.color}
                aria-label={label}
                icon={<Icon as={DisplayIcon} />}
                onClick={() => window.open(url)}
              />
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
