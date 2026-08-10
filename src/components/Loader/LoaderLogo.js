import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="loader-container">
        <img
          src={require("../../assets/images/aldi_v1.png")}
          alt="Loading Logo"
          className="raw_logo"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center 25%",
            border: `5px solid ${theme.body}`,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    );
  }
}

export default LogoLoader;
