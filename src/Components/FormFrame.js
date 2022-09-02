import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import LaptopInfo from "./LaptopInfo";
import Success from "./success";
import WorkerInfo from "./WorkerInfo";

const FormFrame = (props) => {
  const [showSuccess, setShowSuccess] = useState(false);

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

  useEffect(()=>{


  fetch("https://pcfy.redberryinternship.ge/api/laptop/create", {
    body: uploadData,
    headers: {
      Accept: "application/json",
    },
    method: "POST",
  });
}, [showSuccess]);

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
      
        <div className={classes.formCard}>
        <form className={classes.form}>
         {formPages[page]}
         </form>
        </div>
        
        {/* <div>{showSuccess && <Success />}</div> */}
        <div className={classes.logo}></div>
      </div>
    </div>
  );
};

export default FormFrame;
