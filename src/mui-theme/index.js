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
              main: "#2B2D42",
            },
            divider: { main: "#DC143C" },
            background: {
              default: "#F6F6F6",
              paper: "#F6F6F6",
            },
            text: {
              primary: "#2B2D42",
              secondary: "#2B2D42",
            },
          }
        : {
            // palette values for dark mode
            primary: { main: "#EC3B3B" },
            divider: { main: "#FF8C00" },
            background: {
              default: "#2A2A2A",
              paper: "#2A2A2A",
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
            padding: "7px 30px",
            borderRadius: "15px",
            letterSpacing: "2px",
            svg: {
              maxWidth: "20px",
              minWidth: "20px",
              maxHeight: "20px",
              minHeight: "20px",
              marginRight: 0,
            },
          },
          outlined: {
            fontFamily: "Poppins !important",
            border: "1px solid #606389",
            background: "#fff",
            "&:hover": {
              ...(mode === "light"
                ? {
                    background: "#EC3B3B",
                    color: "#fff",
                    border: "1px solid #EC3B3B",
                  }
                : {
                    background: "#2B2D42",
                    color: "#fff",
                    border: "1px solid #2B2D42",
                  }),
            },
          },
          contained: {
            fontFamily: "Poppins !important",
            "&:hover": {
              ...(mode === "light"
                ? {
                    background: "#EC3B3B",
                    color: "#fff",
                  }
                : {
                    background: "#2B2D42",
                    color: "#fff",
                  }),
            },
          },
          lighted: {
            fontFamily: "Poppins !important",
            border: "1px solid #606389",
            background: "#fff",
            color: "#2B2D42",
            "&:hover": {
              ...(mode === "light"
                ? {
                    background: "#2B2D42",
                    color: "#fff",
                  }
                : {
                    background: "#EC3B3B",
                    color: "#fff",
                    border: "1px solid #2B2D42",
                  }),
            },
          },
          hovered: {
            fontFamily: "Poppins",

            "&:hover": {
              ...(mode === "light"
              ? {
                  background: "#EC3B3B",
                  color: "#fff",
                }
              : {
                  background: "#2B2D42",
                  color: "#fff",
                }),
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: rem(16),
            paddingRight: rem(16),
            "@media (min-width:1440px)": {
              maxWidth: "1440px",
              width: "100%",
            },
            "@media (max-width:1024px)": {
              paddingLeft: rem(12),
              paddingRight: rem(12),
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
      fontFamily: "Poppins !important",
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
