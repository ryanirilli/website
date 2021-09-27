import React, { useCallback, useContext, useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import IntersectionObserver from "./IntersectionObserver";
import { BackgroundContext } from "./BackgroundContext";

interface IPageContainer extends BoxProps {
  children: React.ReactNode;
  bg: string;
  color: string;
  onActivate?: () => void;
  observerOptions?: IntersectionObserverInit;
}

const defaultObserverOptions = {
  threshold: 0.5,
};

export default function PageContainer({
  children,
  bg,
  color,
  onActivate,
  observerOptions = {},
  ...rest
}: IPageContainer): JSX.Element {
  const { setBackground, colors } = useContext(BackgroundContext);
  const hasActivatedRef = useRef(false);
  const observerCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && bg !== colors.bg) {
        setBackground(bg, color);
      }
      if (entries[0].isIntersecting && !hasActivatedRef.current) {
        hasActivatedRef.current = true;
        onActivate?.();
      }
    },
    [setBackground, colors, bg, color, onActivate]
  );

  return (
    <>
      <IntersectionObserver
        observerOptions={{ ...defaultObserverOptions, ...observerOptions }}
        observerCallback={observerCallback}
      />
      <Box minH="100vh" {...rest}>
        {children}
      </Box>
    </>
  );
}
