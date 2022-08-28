import React from "react";
import classes from "./CoverPage.module.css";
import WorkerInfo from "./WorkerInfo"

const CoverPage = () => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.logo02}></div>
      <div className={classes.cover}></div>
      <button className={classes.button1}> ჩანაწერის დამატება</button>
      <button className={classes.button2}>ჩანაწერების სია</button>
    </div>
  );
};

export default CoverPage;