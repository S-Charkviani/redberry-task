import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './DetailPage.module.css'

const LaptopInfoPage = () => {
    const [info, setInfo]=useState([]);
    const [laptopId, setLaptopId] = useState();
    const [pressed, setPressed] = useState(false);

const fetchInfoHandler=async()=>{
    const response=await fetch('https://pcfy.redberryinternship.ge/api/laptops/${laptopId.laptopId}?token=432db06872e4e66009d4636e383c03a7',{
    headers: {
        Accept: "application/json",
      },
    });
    const laptopInfo = await response.json();
    const loadedInfo = [];

    for (const key in laptopInfo.data) {
        loadedInfo.push({
          laptop: laptopInfo.data[key].laptop,
          user: laptopInfo.data[key].user,
        });
      }
      setInfo(loadedInfo); 
}

useEffect(() => {
    fetchInfoHandler();
  }, []);


  const buttonhandler = (event) => {
    event.preventDefault();

    setLaptopId(event.target.value);
    setPressed(true);
  };
  const content = (
    <div className={classes.card}>
      <h1>ჩანაწერების სია</h1>
      {info.map((data) => {
        return (
          <div key={info.laptop.id} className={classes.listRow}>
            <div className={classes.images}>
              <img
                src={`https://pcfy.redberryinternship.ge${info.laptop.image} `}
                alt="not found"
              ></img>
            </div>
            <div className={classes.mapedText}>
              <h1>
                {data.user.name} {data.user.surname}
              </h1>
              <h1>{data.laptop.name}</h1>
            </div>
            <Link to={`/detail-info/${laptopId}`} query={data.laptop.id} onClick={buttonhandler}>
           
              მეტის ნახვა
            
            </Link>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      {" "}
      
      {!pressed && content}
    </div>
  );
};


export default LaptopInfoPage