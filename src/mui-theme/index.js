// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";
import { rem } from "utils/pxToRem";

const createCustomTheme = ({ mode, amber, grey, deepOrange }) => {
  return createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#DC143C",
            },
            divider: { main: "#DC143C" },
            background: {
              default: "#FBFBFB",
              paper: "#FBFBFB",
            },
            text: {
              primary: "#000",
              secondary: "#000",
            },
          }
        : {
            // palette values for dark mode
            primary: { main: "#FF8C00" },
            divider: { main: "#FF8C00" },
            background: {
              default: "#0D0D0D",
              paper: "#0D0D0D",
            },
            text: {
              primary: "#fff",
              secondary: "#fff",
            },
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "@media (max-width: 768px)": {},
            "&:hover": {},
            svg: {
              maxWidth: "20px",
              minWidth: "20px",
              maxHeight: "20px",
              minHeight: "20px",
              marginRight: 0,
            },
          },
          outlined: {
            fontFamily: "sans-serif",
            "&:hover": {},
          },
          contained: {
            fontFamily: "sans-serif",
            "&:hover": {},
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: rem(16),
            paddingRight: rem(16),
            "@media (min-width:1440px)": {
              maxWidth: "1024px",
              width: "100%",
            },
            "@media (min-width:1024px)": {
              paddingLeft: rem(16),
              paddingRight: rem(16),
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            maxWidth: "none",
          },
        },
      },
    },
    typography: {
      fontFamily: "Inter",
      h1: {
        fontSize: rem(56),
        fontWeight: 700,
        lineHeight: rem(64),
        color: "#fff",
        "@media (max-width: 768px)": {
          fontSize: rem(16),
          fontWeight: 400,
          lineHeight: rem(20),
          color: "#fff",
        },
      },
    },
  });
};

export default createCustomTheme;
