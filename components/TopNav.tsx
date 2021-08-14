import { Box, Text, Flex, Icon, IconButton, HStack } from "@chakra-ui/react";
import { FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

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
  return (
    <Box position="sticky" top={0} zIndex="docked">
      <Box px={[4, null, 8]} pt={[2, null, 4]}>
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
