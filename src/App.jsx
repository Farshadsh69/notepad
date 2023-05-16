import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Landing from "./pages/landing ";
import Notepad from "./pages/notepad";
function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/notepad" element={<Notepad />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
