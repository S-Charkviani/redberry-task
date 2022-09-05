import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./FormPage.module.css";
import LaptopForm from "../Components/LaptopForm";

import WorkerForm from "../Components/WorkerForm";
import PopUp from "../Components/PopUp";


const FormPage= (props) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const history=useHistory();

  const [page, setPage] = useState(0);

  
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    team_id: "",
    position_id: "",
    email: "",
    phone_number: "",
    laptop_image: "",
    laptop_name: "",
    laptop_brand_id: "",
    laptop_cpu: "",
    laptop_cpu_cores: "",
    laptop_cpu_threads: "",
    laptop_ram: "",
    laptop_hard_drive_type: "",
    laptop_purchase_date: "",
    laptop_price: "",
    laptop_state: "",
    token: "432db06872e4e66009d4636e383c03a7",
  });

  const formPages = [
    <WorkerForm
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <LaptopForm
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      setShowSuccess={setShowSuccess}
    />,
  ];

  const uploadData = new FormData();
  uploadData.append("name", formData.name);
  uploadData.append("surname", formData.surname);
  uploadData.append("team_id", formData.team_id);
  uploadData.append("position_id", formData.position_id);
  uploadData.append("phone_number", formData.phone_number);
  uploadData.append("email", formData.email);
  uploadData.append("laptop_name", formData.laptop_name);
  uploadData.append("laptop_brand_id", formData.laptop_brand_id);
  uploadData.append("laptop_cpu", formData.laptop_cpu);
  uploadData.append("laptop_cpu_cores", formData.laptop_cpu_cores);
  uploadData.append("laptop_cpu_threads", formData.laptop_cpu_threads);
  uploadData.append("laptop_ram", formData.laptop_ram);
  uploadData.append("laptop_hard_drive_type", formData.laptop_hard_drive_type);
  uploadData.append("laptop_price", formData.laptop_price);
  uploadData.append("laptop_purchase_date", formData.laptop_purchase_date);
  uploadData.append("laptop_state", formData.laptop_state);
  uploadData.append("token", "432db06872e4e66009d4636e383c03a7");
  uploadData.append("laptop_image", formData.laptop_image);

  const uploadHandler=()=>{
  fetch("https://pcfy.redberryinternship.ge/api/laptop/create", {
    body: uploadData,
    headers: {
      Accept: "application/json",
    },
    method: "POST",
  });
};

useEffect(()=>{
uploadHandler();
}, [showSuccess])

const submitHandler=(event)=>{
  event.preventDefault();
  setFormData("");
}
console.log(showSuccess)
  return (

      <div className={classes.frame}>
        <div className={classes.coverTitle}>
        <div className={classes.arrowButton}>
          <button
            onClick={() => {
              if(page===1){
                setPage(page - 1);
              }if(page===0){
              history.replace('/welcome');
              }
            }}
          >
            <div className={classes.arrow}></div>
          </button>
        </div> 
        <div className={classes.title}>
          <p> თანამშრომლის ინფო</p>

          <p>ლეპტოპის მახასიათებლები</p>
        </div>
        </div>
        <div className={classes.formCard}>
        <form  className={classes.form}>
         {formPages[page]}
         </form>
        </div>
        
        <div>{showSuccess && <PopUp/>}</div>
        <div className={classes.logo}></div>
      </div>
    
  );
};

export default FormPage;
