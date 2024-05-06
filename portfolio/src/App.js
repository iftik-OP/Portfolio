import Devider from "./components/Devider";
import Landing from "./components/landing";
import AboutMe from "./components/AboutMe";
import DeviderProject from "./components/Devider-Project";
import './App.css';

function App() {
  return (
    <div className="App">
    <div style={{ position: "relative", zIndex: "1", marginBottom: "-115px"}}>
      <Landing />
    </div>
    <div style={{ position: "relative", zIndex: "2" }}>
      <Devider className="Divider" text={"About Me"} />
    </div>
    <AboutMe/>
    <div style={{position: "relative", marginTop: '-130px'}}>
      <DeviderProject text="Projects"/>
    </div>
    <div className="BOX">

    </div>
  </div>
  );
}

export default App;
