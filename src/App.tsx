import { ThemeProvider } from "next-themes";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;