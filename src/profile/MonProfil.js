import React, { Children } from "react";
import Profile from "./Profile.css";
import PropTypes from "prop-types";

const MonProfil = (props) => {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div>
      <h1>Mon nom est {fullName} </h1>
      <h1>Je suis {bio} </h1>
      <h1>Je travaille etant {profession} </h1> <br />
      <button onClick={() => handleName(alert(`Je suis ${fullName}`))}>
        Clique moi{" "}
      </button>
    </div>
  );
};

MonProfil.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default MonProfil;
