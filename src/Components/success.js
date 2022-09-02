import React from 'react'
import { Link } from 'react-router-dom'
import classes from './success.module.css'



const Success = (setShowSuccess) => {

}

  return (
    <div className={classes.backdrop}>
        <div className={classes.modal}>
    <div className={classes.img}></div>
    <h1>ჩანაწერი დამატებულია!</h1>
    <div className={classes.buttons}>
    
    <button onClick={popupCloseHandler}>სიაში გადაყვანა</button>
    
    <button>მთავარი</button>
    </div>
    </div>
   
    </div>
  )


export default Success