import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Carousel from './components/slider/Carousel'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <br />
      <Carousel />
      <br />
    </div>
  );
}

export default App;
