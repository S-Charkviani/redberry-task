import React from 'react'
import classes from './FormFrame.module.css'

const FormFrame = () => {
  return (
    <div className={classes.main}>
          <div className={classes.page1}>
          
            <h1> თანამშრომლის ინფო</h1>
            <div className={classes.line1}></div>
            <h2>ლეპტოპის მახასიათებლები</h2>
            <div className={classes.line2}></div>
          </div>
          <div className={classes.logo}></div>
          </div>
  )
}

export default FormFrame;