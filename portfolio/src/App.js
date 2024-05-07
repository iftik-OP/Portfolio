import Devider from "./components/Devider";
import Landing from "./components/landing";
import AboutMe from "./components/AboutMe";
import DeviderProject from "./components/Devider-Project";
import Project from "./components/project";
import paybit from "./assets/paybit.png";
import raw from "./assets/RAW.png";
import unevent from "./assets/unevent.png";
import './App.css';
import ContactMe from "./components/ContactMe";

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
    <div className="projects">
      <Project title="PAYBIT" image={paybit}/>
      <Project title="RAW CONNECT" image={raw}/>
      <Project title="UnEvent" image={unevent}/>
    </div>
    <div>
      <ContactMe/>
    </div>
    <div className="contactCardBg"></div>
    <h4 className="endLine">Made with Love and peer pressure. <span>&#10084;</span></h4>
  </div>
  );
}

export default App;
