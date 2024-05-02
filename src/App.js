import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Routes } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { amber, deepOrange, grey } from "@mui/material/colors";
import createCustomTheme from "mui-theme";
import Starfield from "react-starfield";
import { useState } from "react";

function App() {
  const mode = useSelector((store) => store.theme.theme);
  const theme = createCustomTheme({
    mode,
    amber,
    grey,
    deepOrange,
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="navbar">
        <Navbar />
      </div>
      {Routes()}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
