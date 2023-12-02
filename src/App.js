import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import AllProjects from "./components/AllProjects";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Routes>
          {/* <Route path={"/"} element={<WelcomePage />} /> */}
          <Route path={"/all-projects"} element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
