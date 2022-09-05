import React, { useCallback, useEffect, useState } from "react";
import classes from "../Pages/FormPage.module.css";

const Backend = "https://pcfy.redberryinternship.ge/api";

const LaptopForm = ({
  page,
  setPage,
  formData,
  setFormData,
  setShowSuccess,
}) => {
  const [brand, setBrand] = useState([]);
  const [cpu, setCpu] = useState([]);
  const [valid, setValid]=useState();

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

  const clickHandler = (event) => {
    event.preventDefault();
  };

  const showSuccessHandler = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  const imageUpload = (event) => {
    const image = event.target.files[0];

    setFormData({
      ...formData,
      laptop_image: image,
    });
  };

  
  

  return (
    <div>
      <div className={classes.imageBox}>
        <input onChange={imageUpload} type='file'/>
        <div className={classes.boxTitle}>
        <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
        <button >ატვირთე</button>
        </div>
      </div>

      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის სახელი</label>
          <input
            type="text"
            placeholder="HP"
            value={formData.laptop_name}
            onChange={(e) =>
              setFormData({ ...formData, laptop_name: e.target.value })
            }
          ></input>
          <small>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</small>
        </div>

        <div className={classes.selectTypeInfo}>
          <select
            onChange={(e) =>
              setFormData({ ...formData, laptop_brand_id: e.target.value })
              
            }
          >
            <option selected disabled>ლეპტოპის ბრენდი</option>
            {brand.map((brandList) => {
              return <option value={brandList.id} key={brandList.id}>{brandList.name}</option>;
            })}
          </select>
        </div>
      </div>

      <hr/>

      <div className={classes.generalInfo}>
        <div className={classes.selectTypeInfo}>
          <select
            onChange={(e) =>
              setFormData({ ...formData, laptop_cpu: e.target.value })
            }
          >
            <option selected disabled>CPU</option>
            {cpu.map((cpuList) => {
              return <option value={cpuList.name} key={cpuList.id}>{cpuList.name}</option>;
            })}
          </select>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>CPU-ს ბირთვი</label>
          <input
            type="number"
            placeholder="14"
            onChange={(e) =>
              setFormData({ ...formData, laptop_cpu_cores: e.target.value })
            }
          ></input>
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>CPU-ს ნაკადი</label>
          <input
            type="number"
            placeholder="365"
            onChange={(e) =>
              setFormData({ ...formData, laptop_cpu_threads: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, laptop_ram: e.target.value })
            }
          ></input>
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>მეხსიერების ტიპი</label>

          <div className={classes.radioInfo}>
            <input
              type="radio"
              value="SSD"
              name="memory"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  laptop_hard_drive_type: e.target.value,
                })
              }
            />
            <label>SSD</label>

            <input
              type="radio"
              value="HDD"
              name="memory"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  laptop_hard_drive_type: e.target.value,
                })
              }
            />
            <label>HDD</label>
          </div>
          <small></small>
        </div>
      </div>

      <hr/>

      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input
            placeholder="დდ/თთ/წწწწ"
            onChange={(e) =>
              setFormData({
                ...formData,
                laptop_purchase_date: e.target.value,
              })
            }
          ></input>
          <small> </small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label>ლეპტოპის ფასი</label>
          <span>
            ₾
            <input
              type="price"
              placeholder="0000"
              onChange={(e) =>
                setFormData({ ...formData, laptop_price: e.target.value })
              }
            ></input>
          </span>

          <small>მხოლოდ ციფრები</small>
        </div>
      </div>

      <div className={classes.inputTypeInfo}>
        <label>ლეპტოპის მდგომარეობა</label>

        <div className={classes.radioInfo}>
          <input
            type="radio"
            value="new"
            name="state"
            onChange={(e) =>
              setFormData({ ...formData, laptop_state: e.target.value })
            }
          />
          <label>ახალი</label>

          <input
            type="radio"
            value="used"
            name="state"
            onChange={(e) =>
              setFormData({ ...formData, laptop_state: e.target.value })
            }
          />
          <label>მეორადი</label>
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
          <button onClick={showSuccessHandler} type='submit'>შენახვა</button>
        </div>
      </div>
    </div>
  );
};

export default LaptopForm;
