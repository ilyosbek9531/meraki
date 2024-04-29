import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Routes } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { amber, deepOrange, grey } from "@mui/material/colors";
import createCustomTheme from "mui-theme";
import Starfield from "react-starfield";

function App() {
  const mode = useSelector((store) => store.theme.theme);
  const theme = createCustomTheme({
    mode,
    amber,
    grey,
    deepOrange,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Starfield
        starCount={4000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
      />
      <Navbar />
      {Routes()}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
