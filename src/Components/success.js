import React from 'react'
import classes from './success.module.css'



const Success = () => {
  return (
    <div className={classes.backdrop}>
        <div className={classes.modal}>
    <div className={classes.img}></div>
    <h1>ჩანაწერი დამატებულია!</h1>
    <div className={classes.buttons}>
    <button>სიაში გადაყვანა</button>
    <button>მთავარი</button>
    </div>
    </div>
   
    </div>
  )
}

export default Success