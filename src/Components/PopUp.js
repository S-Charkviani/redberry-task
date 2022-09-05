import React from 'react'
import { Link } from 'react-router-dom'


import classes from './PopUp.module.css'

const PopUp = () => {


  return (
    <div className={classes.backdrop}>
        <div className={classes.modal}>
    <div className={classes.img}></div>
    <h1>ჩანაწერი დამატებულია!</h1>
    <div className={classes.buttons}>
    <Link to="/list">
    <button >სიაში გადაყვანა</button>
    </Link>
    <Link to="/welcome">
    <button>მთავარი</button>
    </Link>
    </div>
    </div>
   
    </div>
  )
}

export default PopUp