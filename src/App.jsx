import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen snap-y snap-proximity scroll-smooth overflow-y-scroll bg-gray-100">
      <Navbar />
      <div id="Home" className="snap-start min-h-screen">
        <Home />
      </div>
      <div id="Projects" className="snap-start min-h-screen">
        <Projects />
      </div>
      <div className="snap-start min-h-fit">
        <Footer />
      </div>
    </div>
  );
}

export default App;
