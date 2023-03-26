import { extendTheme } from "@chakra-ui/react";

import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility to set light and dark mode props
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const capitalCoastVariant = definePartsStyle((props) => {
  return {
    tab: {
      bg: "#064663",

      borderColor: "transparent",
      _selected: {
        bg: "#2476F1",

        color: "#fff",
        borderColor: "inherit",
      },
    },
  };
});

const variants = {
  capitalCoast: capitalCoastVariant,
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ variants });
const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Tabs: tabsTheme,
  },
});

export default theme;
