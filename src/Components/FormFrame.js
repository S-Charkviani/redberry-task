import React, { useState } from "react";
import classes from "./FormFrame.module.css";
import LaptopInfo from "./LaptopInfo";
import WorkerInfo from "./WorkerInfo";

const FormFrame = (props) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    team: "",
    position: "",
    mail: "",
    number: "",
    laptopName: "",
    brand: "",
    cpu: "",
    core: "",
    flow: "",
    ram: "",
    SSD: "",
    HDD: "",
    date: "",
    price: "",
    new: "",
    secondhand: "",
  });

  const formPages = [
    <WorkerInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <LaptopInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  ];

  return (
    <div className={classes.frame}>
      <div className={classes.arrowButton}>
        <button>
          <div className={classes.arrow}></div>
        </button>
      </div>

      <div className={classes.title}>
        <p> თანამშრომლის ინფო</p>

        <p>ლეპტოპის მახასიათებლები</p>
      </div>

      <div className={classes.formCard}>{formPages[page]}</div>
      <div className={classes.logo}></div>
    </div>
  );
};

export default FormFrame;
