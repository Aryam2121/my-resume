export default function SkillCard(props) {
    // Style object for inline styles
    const cardStyle = {
      borderRadius: "20px",
      border: "0.5px solid #334155",
      minWidth: "8rem",
      maxWidth: "8rem",
      height: "8rem",
    };
  
    const imageStyle = {
      height: "3rem",
      width: "3rem",
      margin: "8px auto",
    };
  
    return (
      <div
        className="container flex flex-col align-center p-5 justify-center"
        style={cardStyle}
      >
        <img
          src={props.path}
          alt={props.name ? `${props.name} logo` : "Skill logo"}
          className="text-white mb-2"
          style={imageStyle}
        />
        <p className="skill-name text-white text-center">{props.name}</p>
      </div>
    );
  }
  