import React, { useEffect, useRef } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import type { AnimationConfig } from "lottie-web";

type LottieRenderer = "svg" | "canvas" | "html";

type AnimationConfigWithPath<T extends LottieRenderer = "svg"> =
  AnimationConfig<T> & {
    path?: string;
  };

type AnimationConfigWithData<T extends LottieRenderer = "svg"> =
  AnimationConfig<T> & {
    animationData?: any;
  };

export type LottiePlayerOptions =
  | Omit<AnimationConfigWithData<"svg">, "container">
  | Omit<AnimationConfigWithPath<"svg">, "container">
  | Omit<AnimationConfigWithData<"canvas">, "container">
  | Omit<AnimationConfigWithPath<"canvas">, "container">;

interface Props extends BoxProps {
  onComplete?: () => void;
  onLoopComplete?: () => void;
  lottiePlayerOptions: LottiePlayerOptions;
}

function Lottie({
  lottiePlayerOptions,
  onComplete,
  onLoopComplete,
  ...rest
}: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: any;
    let isDestroyed = false;

    // Dynamically import lottie-web
    import("lottie-web").then((module) => {
      if (isDestroyed) {
        return;
      }
      const lottie = module.default;
      if (!containerRef.current) {
        return;
      }
      animation = lottie.loadAnimation({
        container: containerRef.current,
        // @ts-ignore
        renderer: "svg",
        loop: true,
        autoplay: true,
        ...lottiePlayerOptions,
      });

      onComplete && animation.addEventListener("complete", onComplete);
      onLoopComplete &&
        animation.addEventListener("loopComplete", onLoopComplete);
    });

    return () => {
      isDestroyed = true;
      if (animation) {
        animation.destroy();
      }
    };
  }, [lottiePlayerOptions, onComplete, onLoopComplete]);

  return <Box {...rest} ref={containerRef} />;
}

export default Lottie;
