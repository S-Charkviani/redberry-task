import React, { useCallback, useEffect, useState } from "react";
import FormFrame from "./FormFrame";
import classes from "./LaptopInfo.module.css";

const Backend = "https://pcfy.redberryinternship.ge/api";

const LaptopInfo = () => {
    const[brand, setBrand]=useState([]);
const [cpu, setCpu]=useState([]);

const fetchBrandHandler = useCallback(async () => {
    const response = await fetch(`${Backend}/brands`, {
      headers: {
        Accept: "application/json",
      },
    });
    const brandData = await response.json();
    const loadedBrands = [];

    for (const key in brandData.data) {
      loadedBrands.push({
        id: brandData.data[key].id,
        name: brandData.data[key].name,
      });
    }
    setBrand(loadedBrands);
  }, []);

  useEffect(() => {
    fetchBrandHandler();
  }, [fetchBrandHandler]);



const fetchCpuHandler = useCallback(async () => {
    const response = await fetch(`${Backend}/cpus`, {
      headers: {
        Accept: "application/json",
      },
    });
    const cpuData = await response.json();
    const loadedCpu = [];

    for (const key in cpuData.data) {
      loadedCpu.push({
        id: cpuData.data[key].id,
        name: cpuData.data[key].name,
      });
    }
    setCpu(loadedCpu);
  }, []);

  useEffect(() => {
    fetchCpuHandler();
  }, [fetchCpuHandler]);


  return (
    <div className={classes.main}>
      <button>
        <div className={classes.arrowButton}></div>
        <div className={classes.arrow}></div>
      </button>

      <FormFrame />
    
      <form className={classes.form}>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
<div className={classes.imageBox}>
<p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
<button>ატვირთე</button>
</div>

<div className={classes.laptopName}>
    <label>ლეპტოპის სახელი</label>
    <input type='text'  placeholder="HP"></input>
    <small>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</small>
</div>
<div className={classes.cpu}>
    <select>
        <option disabled selected>CPU</option>
        {cpu.map((cpuList)=>{
                return(
 <option>{cpuList.name}</option>)
              })}
    </select>
</div>

<div className={classes.core}>
    <label>CPU-ს ბირთვი</label>
    <input type='number' placeholder="14"></input>
    <small>მხოლოდ ციფრები</small>
</div>

<div className={classes.flow}>
    <label>CPU-ს ნაკადი</label>
    <input type='number' placeholder="365"></input>
    <small>მხოლოდ ციფრები</small>
</div>

<div className={classes.ram}>
    <label>ლეპტოპის Ram (GB)</label>
    <input type='number' placeholder='16'></input>
    <small>მხოლოდ ციფრები</small>
</div>

<div className={classes.memoryType}>
<label>მეხსიერების ტიპი</label>
</div>

<div className={classes.laptopBrand}>
    <select>
        <option disabled selected>ლეპტოპის ბრენდი</option>
        {brand.map((brandList)=>{
                return(
 <option>{brandList.name}</option>)
              })}
    </select>
</div>

<div className={classes.memoryTypeSSD}>
<input type="radio" id="SSD" name="SSD" value="SSD" />
<label for="SSD">SSD</label><br></br>
</div>

<div className={classes.memoryTypeHDD}>

<input type="radio" id="HDD" name="HDD" value="HDD" />
<label for="HDD">HDD</label><br></br>
</div>

<div className={classes.date}>
    <label>შეძენის რიცხვი(არჩევითი)</label>
    <input  placeholder="დდ/თთ/წწწწ"></input>
</div>

<div className={classes.price}>
    <label>ლეპტოპის ფასი</label>
    <input type='price' placeholder='0000'></input>
    <small>მხოლოდ ციფრები</small>
</div>

<div className={classes.condition}>
    <label>ლეპტოპის მდგომარეობა</label>
</div>

<div className={classes.conditionNew}>
<input type="radio" id="New" name="New" value="New" />
<label for="New">ახალი</label><br></br>
</div>
<div className={classes.conditionSecondhand}>
<input type="radio" id="New" name="New" value="New" />
<label for="New">მეორადი</label><br></br>
</div>
<div className={classes.back}>
<p>უკან</p>
</div>
<div className={classes.save}>
    <button>შენახვა</button>
</div>
      </form>

      <div className={classes.logo2}></div>
    </div>
  );
};

export default LaptopInfo;
