import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;