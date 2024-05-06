import "./AboutMe.css";
import profile from "../assets/profile.jpg";
import flutter from "../assets/flutter.png";
import Firebase from "../assets/Firebase.png";
import react from "../assets/react.png";
import figma from "../assets/figma.png";

function AboutMe() {
  return (
    <div className="About-card">
      <div className="intro">
        <div className="I-am">
          I am <br></br>
          <span>
            Iftikhar<br></br>Ahmad
          </span>
          <h4>and I am a developer and a UI/UX Designer</h4>
        </div>
        <div className="Profile-image">
          <img src={profile} height={500} style={{ borderRadius: "45px" }} />
        </div>
      </div>
      <h1>Skills</h1>
      <div className="skill-sets">
        <div className="Flutter">
            <img src={flutter} height={80}/>
            <h2>Flutter</h2>
        </div>
        <div className="Flutter">
            <img src={Firebase} height={80}/>
            <h2>Firebase</h2>
        </div>
        <div className="Flutter">
            <img src={react} height={80}/>
            <h2>ReactJS</h2>
        </div>
        <div className="Flutter">
            <img src={figma} height={80}/>
            <h2>Figma</h2>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
