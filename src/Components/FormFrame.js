import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./FormFrame.module.css";
import LaptopInfo from "./LaptopInfo";
import WorkerInfo from "./WorkerInfo";

const FormFrame = (props) => {
  const history = useHistory();
  let backHandler;

  // if(WorkerInfo(props)){
  //   backHandler=()=>history.push('/welcome');
  //   }if (LaptopInfo(props)){
  //     backHandler=()=>history.push('/worker-info');
  //   };

  return (
    <div className={classes.frame}>
      <div className={classes.arrowButton}>
        <button >
          <div className={classes.arrow}></div>
        </button>
        </div>

        <div className={classes.title}>
          <p> თანამშრომლის ინფო</p>

          <p>ლეპტოპის მახასიათებლები</p>
        </div>
        
      <div className={classes.formCard}>
        <WorkerInfo/>
        </div>
      <div className={classes.logo}></div>
    </div>
  );
};

export default FormFrame;
