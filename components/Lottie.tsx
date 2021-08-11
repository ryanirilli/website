import React, { useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import lottie, {
  AnimationConfigWithPath,
  AnimationConfigWithData,
} from "lottie-web";

interface Props extends BoxProps {
  onComplete?: () => void;
  lottiePlayerOptions:
    | Omit<AnimationConfigWithData, "container">
    | Omit<AnimationConfigWithPath, "container">;
}

function Lottie({
  lottiePlayerOptions,
  onComplete,
  ...rest
}: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const animation = lottie.loadAnimation({
      container: containerRef.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      ...lottiePlayerOptions,
    });
    onComplete && animation.addEventListener("complete", onComplete);
    return () => {
      animation.destroy();
    };
  }, [lottiePlayerOptions, onComplete]);
  return <Box {...rest} ref={containerRef} />;
}

export default Lottie;
