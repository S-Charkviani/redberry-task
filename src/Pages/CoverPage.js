import React from "react";
import { Link } from "react-router-dom";
import classes from "./CoverPage.module.css";

const CoverPage = (page, setPage) => {
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
  <Link to='/form'>
  <button  >ჩანაწერის დამატება</button>
  </Link>
  <button>ჩანაწერების სია</button>
</div>

     
    </div>
  );
};

export default CoverPage;
