import styled from "@emotion/styled";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing ";
import Login from "./pages/login";
import Notepad from "./pages/notepad";
import RegisterPage from "./pages/register";
import HomeIcon from "@mui/icons-material/Home";

const Root = styled(Box)(() => ({
  height: "100vh",
}));
const HomeStyle = styled(Box)(() => ({}));
const AuthStyle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  marginLeft: 15,
  marginRight: 15,
  paddingLeft: 15,
  paddingRight: 15,
}));
const HeaderStyle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: 20,
  paddingRight: 20,
  borderBottom: "5px solid #00000091",
  borderBottomLeftRadius: "25%",
  borderBottomRightRadius: "25%",
}));
function App() {
  const [darkMode, setDarkMode] = useState();
  const darkTheme = createTheme({
    typography: { body1: "#727077", fontFamily: "cursive" },
    palette: {
      primary: { main: "#b6b5b5" },
      secondary: { main: "#fff" },
      background: { main: "#2A2438", light: "#352F44" },
    },
  });
  const LightTheme = createTheme({
    typography: { body1: "#727077", fontFamily: "cursive" },
    palette: {
      primary: { main: "#727077" },
      secondary: { main: "#000" },
      background: { main: "#e6e4eb", light: "#DBD8E3" },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : LightTheme}>
      <BrowserRouter>
        <HeaderStyle>
          <HomeStyle>
            <Link to="/">
              <IconButton>
                <HomeIcon />
              </IconButton>
            </Link>
          </HomeStyle>
          <AuthStyle>
            <Typography sx={{ cursor: "pointer", fontWeight: "bold" }}>
              <Link to="/login">Sign in</Link>
            </Typography>
            <Typography sx={{ pl: 1, pr: 1 }}> / </Typography>
            <Typography sx={{ cursor: "pointer", fontWeight: "bold" }}>
              <Link to="/register">Sign up</Link>
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightModeIcon /> : <Brightness3Icon />}
            </IconButton>
          </AuthStyle>
        </HeaderStyle>
        <Root backgroundColor="background.main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/notepad" element={<Notepad />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
