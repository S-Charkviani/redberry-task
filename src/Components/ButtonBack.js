import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./ButtonBack.module.css";

const ButtonBack = () => {
  const history = useHistory();

  return (
    <div className={classes.arrowButton}>
      <button onClick={history.goBack}>
        <div className={classes.arrow}></div>
      </button>
    </div>
  );
};

export default ButtonBack;
