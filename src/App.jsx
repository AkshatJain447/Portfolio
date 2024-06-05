import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll bg-gray-100">
      <div className="snap-start h-screen">
        <Home />
      </div>
      <div className="snap-start min-h-screen">
        <Projects />
      </div>
      <div className="snap-start min-h-fit">
        <Footer />
      </div>
    </div>
  );
}

export default App;
