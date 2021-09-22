import { useState } from "react";
import Image from "next/image";
import {
  Box,
  BoxProps,
  AspectRatio,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { FiCode } from "react-icons/fi";

const absoluteFill: BoxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

interface IComparisonSlider {
  leftImageUrl: string;
  rightImageUrl: string;
}

export default function ComparisonSlider({
  leftImageUrl,
  rightImageUrl,
}: IComparisonSlider): JSX.Element {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <AspectRatio ratio={16 / 9} bg="red.500" overflow="hidden">
        <Box>
          <Box
            {...absoluteFill}
            userSelect="none"
            bg="gray.200"
            zIndex={1}
            sx={{
              clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
            }}
          >
            <Image
              priority
              alt="left comparison image"
              src={leftImageUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Box
            w="16px"
            h="100%"
            bgGradient="linear(to-r,rgba(0,0,0,0.3), rgba(0,0,0,0))"
            position="absolute"
            left={`${sliderValue}%`}
            top={0}
            opacity={0.5}
            zIndex={2}
          />
          <Box {...absoluteFill} userSelect="none" bg="gray.100">
            <Image
              priority
              alt="right comparison image"
              src={rightImageUrl}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </Box>
      </AspectRatio>
      <Box mt={8} px={[4, null, 16]} pb={0} pt={1}>
        <Slider
          value={sliderValue}
          onChange={setSliderValue}
          aria-label="screen comparison slider"
          size="lg"
          defaultValue={50}
        >
          <SliderTrack>
            <SliderFilledTrack bg="white" />
          </SliderTrack>
          <SliderThumb boxSize={8}>
            <Box color="#1C5DF8" w={4} h={4} as={FiCode} />
          </SliderThumb>
        </Slider>
      </Box>
    </>
  );
}
