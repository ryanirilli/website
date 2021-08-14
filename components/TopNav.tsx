import { Box, Text, Flex, Icon, IconButton, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { BackgroundContext } from "./BackgroundContext";

const icons = [
  {
    DisplayIcon: FiLinkedin,
    label: "linkedin link",
  },
  {
    DisplayIcon: FiTwitter,
    label: "twitter link",
  },
  {
    DisplayIcon: FiInstagram,
    label: "instagram link",
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
        <HStack>
          <Text textStyle="h3">Ryan Irilli</Text>
          {icons.map(({ DisplayIcon, label }, i) => (
            <IconButton
              key={i}
              isRound
              variant="outline"
              aria-label={label}
              icon={<Icon as={DisplayIcon} />}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
