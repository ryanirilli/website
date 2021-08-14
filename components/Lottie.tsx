import React, { useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import lottie, { AnimationConfig } from "lottie-web";

type LottieRenderer = "svg" | "canvas" | "html";

type AnimationConfigWithPath<T extends LottieRenderer = "svg"> =
  AnimationConfig<T> & {
    path?: string;
  };

type AnimationConfigWithData<T extends LottieRenderer = "svg"> =
  AnimationConfig<T> & {
    animationData?: any;
  };

export type LottiePLayerOptions =
  | Omit<AnimationConfigWithData<"svg">, "container">
  | Omit<AnimationConfigWithPath<"svg">, "container">
  | Omit<AnimationConfigWithData<"canvas">, "container">
  | Omit<AnimationConfigWithPath<"canvas">, "container">;
interface Props extends BoxProps {
  onComplete?: () => void;
  lottiePlayerOptions: LottiePLayerOptions;
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
      // @ts-ignore - lottie package types this incorrectly with generics, does not allow consumer to set renderer
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
