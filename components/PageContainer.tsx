import React, { useCallback, useContext, useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import IntersectionObserver from "./IntersectionObserver";
import { BackgroundContext } from "./BackgroundContext";

interface IPageContainer extends BoxProps {
  children: React.ReactNode;
  bg: string;
  color: string;
  onActivate?: () => void;
}

const defaultObserverOptions = { threshold: 0.5 };

export default function PageContainer({
  children,
  bg,
  color,
  onActivate,
  ...rest
}: IPageContainer): JSX.Element {
  const { setBackground } = useContext(BackgroundContext);
  const hasActivatedRef = useRef(false);
  const observerCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        setBackground(bg, color);
        if (!hasActivatedRef.current) {
          hasActivatedRef.current = true;
          onActivate?.();
        }
      }
    },
    [setBackground, bg, color, onActivate]
  );

  return (
    <IntersectionObserver
      observerOptions={defaultObserverOptions}
      observerCallback={observerCallback}
    >
      <Box minH="100vh" {...rest}>
        {children}
      </Box>
    </IntersectionObserver>
  );
}
