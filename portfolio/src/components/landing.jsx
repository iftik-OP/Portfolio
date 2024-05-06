import "./Landing.css";
function Landing() {
  return (
    <header className="App-header">
      <div className="Header-image">
        <div className="thinker">
          <h3>
            <span className="title">Thinker.</span>
          </h3>
          <p>
            Besides being cool <br></br> I'm a{" "}
            <span style={{ fontFamily: "secondaryFontItalic" }}>
              Developer.
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Landing;
