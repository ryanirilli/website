import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Icon, IconButton, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { BackgroundContext } from "./BackgroundContext";

import { socialIcons } from "../utils/contants";

const fadeIn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

interface ITopNav {
  shouldShow?: boolean;
}

export default function TopNav({ shouldShow = true }: ITopNav): JSX.Element {
  const { colors } = useContext(BackgroundContext);
  return (
    <Box
      position="sticky"
      top={0}
      width="100%"
      zIndex="docked"
      bg={colors.bg}
      transition="background 1s ease"
    >
      {shouldShow && (
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Box px={[4, null, 8]} py={[2, null, 4]}>
            <Flex>
              <Link href="/">
                <a>
                  <Image
                    alt="ryan irilli logo"
                    src="/logo.svg"
                    width={68}
                    height={57}
                  />
                </a>
              </Link>
              <HStack ml={2}>
                {socialIcons.map(({ DisplayIcon, label, url }, i) => (
                  <IconButton
                    key={i}
                    isRound
                    variant="outline"
                    borderColor={colors.color}
                    aria-label={label}
                    icon={<Icon as={DisplayIcon} />}
                    onClick={() => window.open(url)}
                    _hover={{
                      bg: "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </HStack>
            </Flex>
          </Box>
        </motion.div>
      )}
    </Box>
  );
}
