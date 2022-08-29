import React from "react";
import classes from "./CoverPage.module.css";

const CoverPage = () => {
  return (
    <div className={classes.mainPage}>
      {/* Redberry Logo */}
      <div className={classes.logo02}></div>

      {/* vector pic and round logo */}
      <div className={classes.frame}>
        <div className={classes.cover}></div>
        <div className={classes.logo01}></div>
      </div>
<div className={classes.buttons}>
  <button>ჩანაწერის დამატება</button>
  <button>ჩანაწერების სია</button>
</div>

     
    </div>
  );
};

export default CoverPage;
