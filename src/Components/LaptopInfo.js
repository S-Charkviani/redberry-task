import React from "react";
import FormFrame from "./FormFrame";
import classes from "./LaptopInfo.module.css";

const LaptopInfo = () => {
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
<div className={classes.imageInstruction}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</div>
<button className={classes.imageButton}>ატვირთე</button>
</div>

<div className={classes.laptopName}>
    <label>ლეპტოპის სახელი</label>
    <input type='text'  placeholder="HP"></input>
    <p>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</p>
</div>
<div className={classes.cpu}>
    <select>
        <option disabled selected>CPU</option>
    </select>
</div>

<div className={classes.core}>
    <label>CPU-ს ბირთვი</label>
    <input type='number' placeholder="14"></input>
    <p>მხოლოდ ციფრები</p>
</div>

<div className={classes.flow}>
    <label>CPU-ს ნაკადი</label>
    <input type='number' placeholder="365"></input>
    <p>მხოლოდ ციფრები</p>
</div>

<div className={classes.ram}>
    <label>ლეპტოპის Ram (GB)</label>
    <input type='number' placeholder='16'></input>
    <p>მხოლოდ ციფრები</p>
</div>

<div className={classes.memoryType}>
<label>მეხსიერების ტიპი</label>
</div>

<div className={classes.laptopBrand}>
    <select>
        <option disabled selected>ლეპტოპის ბრენდი</option>
        <option>HP</option>
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
    <p>მხოლოდ ციფრები</p>
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

      </form>

      <div className={classes.logo2}></div>
    </div>
  );
};

export default LaptopInfo;
