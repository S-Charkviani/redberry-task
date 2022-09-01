import React, { useCallback, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import classes from "./Form.module.css";

const Backend = "https://pcfy.redberryinternship.ge/api";

const LaptopInfo = () => {
  const history = useHistory();
  const [brand, setBrand] = useState([]);
  const [cpu, setCpu] = useState([]);

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
    <form className={classes.form}>
      <div className={classes.imageBox}>
        <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
        <button>ატვირთე</button>
      </div>

      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის სახელი</label>
          <input type="text" placeholder="HP"></input>
          <small>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</small>
        </div>

        <div className={classes.selectTypeInfo}>
          <select>
            <option disabled selected>
              ლეპტოპის ბრენდი
            </option>
            {brand.map((brandList) => {
              return <option>{brandList.name}</option>;
            })}
          </select>
        </div>
      </div>

      <div className={classes.line}></div>

      <div className={classes.generalInfo}>
        <div className={classes.selectTypeInfo}>
          <select>
            <option disabled selected>
              CPU
            </option>
            {cpu.map((cpuList) => {
              return <option>{cpuList.name}</option>;
            })}
          </select>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>CPU-ს ბირთვი</label>
          <input type="number" placeholder="14"></input>
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>CPU-ს ნაკადი</label>
          <input type="number" placeholder="365"></input>
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>

      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის Ram (GB)</label>
          <input type="number" placeholder="16"></input>
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>მეხსიერების ტიპი</label>

          <div className={classes.radioInfo}>
            <input type="radio" id="SSD" name="SSD" value="SSD" />
            <label for="SSD">SSD</label>

            <input type="radio" id="HDD" name="HDD" value="HDD" />
            <label for="HDD">HDD</label>
          </div>
          <small></small>
        </div>
      </div>

      <div className={classes.line}></div>

      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input placeholder="დდ/თთ/წწწწ"></input>
          <small> </small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის ფასი</label>
          <input type="price" placeholder="0000"></input>
          <i>₾</i>
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>

      <div className={classes.inputTypeInfo}>
        <label>ლეპტოპის მდგომარეობა</label>

        <div className={classes.radioInfo}>
          <input type="radio" id="New" name="New" value="New" />
          <label for="New">ახალი</label>
          <br></br>

          <input type="radio" id="New" name="New" value="New" />
          <label for="New">მეორადი</label>
          <br></br>
        </div>
      </div>

      <div className={classes.buttonSpace}>
        <div className={classes.back}>
          <p>უკან</p>
        </div>
        <div className={classes.save}>
          <button>შენახვა</button>
        </div>
      </div>
    </form>
  );
};

export default LaptopInfo;
