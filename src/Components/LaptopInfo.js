import React, { useCallback, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import classes from "./Form.module.css";
import Dropzone from "./dropZone";
import Modal from 'react-overlays/Modal'

const Backend = "https://pcfy.redberryinternship.ge/api";

const LaptopInfo = ({ page, setPage, formData, setFormData, setShowSuccess}) => {
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


  const showSuccessHandler=(event)=>{
    event.preventDefault()
    setShowSuccess(true);
  }

  return (
    <div>
    <form className={classes.form}> 
        <Dropzone />
    
      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის სახელი</label>
          <input
            type="text"
            placeholder="HP"
            value={formData.laptopName}
            onChange={(e) =>
              setFormData({ ...formData, laptopName: e.target.value })
            }
          ></input>
          <small>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</small>
        </div>

        <div className={classes.selectTypeInfo}>
          <select
            onChange={(e) =>
              setFormData({ ...formData, brand: e.target.value })
            }
          >
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
          <select
            onChange={(e) => setFormData({ ...formData, cpu: e.target.value })}
          >
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
          <input
            type="number"
            placeholder="14"
            value={formData.core}
            onChange={(e) => setFormData({ ...formData, core: e.target.value })}
          ></input>
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>CPU-ს ნაკადი</label>
          <input
            type="number"
            placeholder="365"
            value={formData.flow}
            onChange={(e) => setFormData({ ...formData, flow: e.target.value })}
          ></input>
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>

      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის Ram (GB)</label>
          <input
            type="number"
            placeholder="16"
            value={formData.ram}
            onChange={(e) => setFormData({ ...formData, ram: e.target.value })}
          ></input>
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>მეხსიერების ტიპი</label>

          <div className={classes.radioInfo}>
            <input
              type="radio"
              id="SSD"
              name="SSD"
              value={formData.SSD}
              onChange={(e) =>
                setFormData({ ...formData, SSD: e.target.value })
              }
            />
            <label for="SSD">SSD</label>

            <input
              type="radio"
              id="HDD"
              name="HDD"
              value={formData.HDD}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <label for="HDD">HDD</label>
          </div>
          <small></small>
        </div>
      </div>

      <div className={classes.line}></div>

      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input
            placeholder="დდ/თთ/წწწწ"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          ></input>
          <small> </small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის ფასი</label>
          <input
            type="price"
            placeholder="0000"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          ></input>
          <i>₾</i>
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>

      <div className={classes.inputTypeInfo}>
        <label>ლეპტოპის მდგომარეობა</label>

        <div className={classes.radioInfo}>
          <input
            type="radio"
            id="New"
            name="New"
            value={formData.new}
            onChange={(e) => setFormData({ ...formData, new: e.target.value })}
          />
          <label for="New">ახალი</label>
          <br></br>

          <input
            type="radio"
            id="New"
            name="New"
            value={formData.secondhand}
            onChange={(e) =>
              setFormData({ ...formData, secondhand: e.target.value })
            }
          />
          <label for="New">მეორადი</label>
          <br></br>
        </div>
      </div>

      <div className={classes.buttonSpace}>
        <div className={classes.backButton}>
          <button 
            onClick={() => {
              setPage(page - 1);
            }}
          >
            უკან
          </button>

        </div>
        <div className={classes.save}>
          <button onClick={showSuccessHandler}>
            შენახვა</button>
        </div>
      </div>
    </form>
    
    </div>
  );
};

export default LaptopInfo;
