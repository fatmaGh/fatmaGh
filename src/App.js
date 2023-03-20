import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About2 from "./components/About/About2";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
// import Contact from './components/Home/Contact';
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About2 />} />
          <Route exact path="/resume" render={() => <Resume />} />
          <Route exact path="/portfolio" render={() => <Portfolio />} />
          <Route path="/" component={Footer} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
