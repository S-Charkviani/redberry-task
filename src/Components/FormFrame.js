import React, { useState } from "react";
import CoverPage from "./CoverPage";
import classes from "./FormFrame.module.css";
import LaptopInfo from "./LaptopInfo";
import Success from "./success";
import WorkerInfo from "./WorkerInfo";

const FormFrame = (props) => {
  const [showSuccess, setShowSuccess]=useState(false);

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
      setShowSuccess={setShowSuccess}
    />,
  ];

  return (
    <div>
    <div className={classes.frame}>
      <div className={classes.arrowButton}>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <div className={classes.arrow}></div>
        </button>
      </div>

      <div className={classes.title}>
        <p> თანამშრომლის ინფო</p>

        <p>ლეპტოპის მახასიათებლები</p>
      </div>

      
      <div className={classes.formCard}>{!showSuccess&&formPages[page]}</div>
      
      <div className={classes.logo}></div>
    </div>
  
    </div>
  );
};

export default FormFrame
