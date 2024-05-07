import "./project.css";

function Project(props) {
  return (
    <div className="Project">
      <h4 className="Title">{props.title}</h4>
      <div className="image">
        <img src={props.image} style={{ width: "100vw" }} />
      </div>
    </div>
  );
}

export default Project;
