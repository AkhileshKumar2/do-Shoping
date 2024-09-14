import "./App.css";
import Cards from "./Cards";
import Home from "./Home";
import Footer from "./theme/Footer";
import Header from "./theme/Header";
import Navbar from "./theme/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
