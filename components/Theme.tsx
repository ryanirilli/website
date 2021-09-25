import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fontFamilies = {
  sans: "Poppins",
};

const fontWeights = {
  regular: 400,
  bold: 700,
};

const textStyles = {
  h1: {
    fontSize: ["36.62px", null, "48.83px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
  },
  h2: {
    fontSize: ["29.3px", null, "39.06px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
  },
  h3: {
    fontSize: ["23.44px", null, "31.25px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
  },
  h4: {
    fontSize: ["18.75px", null, "25px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
  },
  h5: {
    fontSize: ["15px", null, "20px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
  },
  bodyLarge: {
    fontSize: ["15px", null, "16px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
  },
  body: {
    fontSize: ["12px", null, "12.8px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
  },
  bodySmall: {
    fontSize: ["9.6px", null, "10.24px"],
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
  },
};

const buttonStyles = {
  baseStyle: {
    borderRadius: "none",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        minHeight: "100%",
        fontFamily: fontFamilies.sans,
        background: "black",
        color: "white",
        "::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
  components: {
    Button: buttonStyles,
  },
  textStyles,
});

interface ITheme {
  children: React.ReactNode;
}

export default function Theme({ children }: ITheme): JSX.Element {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
