import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface ISectionHeading {
  children: string;
}
export default function SectionHeading({
  children,
}: ISectionHeading): JSX.Element {
  return (
    <Box display="inline-block">
      <Box h={1} mb={2} bg="white" maxW="25%" borderRadius="full" />
      <Text mb={2} textStyle="h3">
        {children}
      </Text>
    </Box>
  );
}
