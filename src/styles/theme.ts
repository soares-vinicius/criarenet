import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    black: {
      "500": "#333333",
    },
    blue: {
      "500": "#3e4c6e",
    },
    gray: {
      "300": "#d0d6de",
      "500": "#888888",
    },
    orange: {
      "500": "#faa61a",
    },
  },

  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
      h1: {
        color: "blue.500",
      },
    },
  },
});

export default Theme;
