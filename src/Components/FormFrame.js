import React, { useEffect, useState } from "react";
import classes from "./FormFrame.module.css";
import LaptopInfo from "./LaptopInfo";
import Success from "./success";
import WorkerInfo from "./WorkerInfo";

const FormFrame = (props) => {
  const [showSuccess, setShowSuccess]=useState(false);

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    team_id: "",
    position_id: "",
    email: "",
    phone_number: "",
    laptop_image:"",
    laptop_name: "",
    laptop_brand_id: "",
    laptop_cpu: "",
    laptop_cpu_cores: "",
    laptop_cpu_threads: "",
    laptop_ram: "",
    laptop_hard_drive_type:"",
    laptop_purchase_date: "",
    laptop_price: "",
    laptop_state:"",
    token:"432db06872e4e66009d4636e383c03a7",
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

      
      <div className={classes.formCard}>{formPages[page]}</div>
      <div>{showSuccess&&<Success/>}</div>
      <div className={classes.logo}></div>
    </div>
  
    </div>
  );
};

export default FormFrame
