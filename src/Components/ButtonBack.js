import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from "./ButtonBack.module.css"

const ButtonBack = (page, setPage) => {
const history=useHistory();


  return (
    <div className={classes.arrowButton}>
      <button
            onClick={() => {
                if(page===1){
                  setPage(page - 1);
                }if(page===0){
                history.goBack();
                }
              }}
            >
              <div className={classes.arrow}></div>
            </button>
    </div>
  )
}

export default ButtonBack