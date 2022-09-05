import React, { Fragment, useState } from 'react'
import DetailPage from '../Pages/DetailPage';
import ButtonBack from './ButtonBack';
import classes from './List.module.css'

const List = (list) => {
    const [laptopId, setLaptopId] = useState();
    const [clicked, setClicked] = useState(false);
    

const data=list.list;

const seeMore=(event)=>{
    event.preventDefault();

    setLaptopId(event.target.value);
    setClicked(true);
}

    const content = (
        <div className={classes.frame}>
<div className={classes.coverTitle}>
            <ButtonBack />
          <h1>ჩანაწერების სია</h1>
          </div>
          {data.map((data) => {
            return (
              <div key={data.laptop.id} className={classes.listRow}>
                <div className={classes.listItem}>

                  <img
                    src={`https://pcfy.redberryinternship.ge${data.laptop.image} `}
                    alt="not found"
                  ></img>
                  
                <div className={classes.listTitle}>
                  <p>
                    {data.user.name} {data.user.surname}
                  </p>
                  <p>{data.laptop.name}</p>
                
                <button value={data.laptop.id} onClick={seeMore}>
                  მეტის ნახვა
                </button>
                </div>
                </div>
              </div>
              
            );
          })}
        </div>
        
      );

//here Would be better build a seperate page of laptop detailed info but didn't have time and here is the dummy

      return (
        <Fragment>
            <ButtonBack/>
          {!clicked && content}
          {clicked&&<DetailPage laptopId={laptopId}/>}
        </Fragment>
      );
    };

export default List