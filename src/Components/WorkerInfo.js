import React from 'react'
import classes from './WorkerInfo.module.css'

const WorkerInfo = () => {
  return (
        <div className={classes.main}>
          <div className={classes.title}>
            <h1> თანამშრომლის ინფო</h1>
            <h2>ლეპტოპის მახასიათებლები</h2>
          </div>
          <form className={classes.form}>
            <div>
              <div className={classes.inputName}>
                <label htmlFor="name">სახელი</label>
                <input
                  type="text"
                  id="name"
                  placeholder="გრიშა"
                />
                <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
              </div>
    
              <div className={classes.inputLastName}>
                <label htmlFor="name">გვარი</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="ბაგრატიონი"
                />
                <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
              </div>
              <div className={classes.inputTeam}>
                <select>
                  <option hidden>თიმი</option>
                </select>
              </div>
    
              <div className={classes.inputPosition}>
                <select>
                  <option hidden>პოზიცია</option>
                </select>
              </div>
    
              <div className={classes.inputEmail}>
                <label htmlFor="name">მეილი</label>
                <input
                  type="text"
                  id="email"
                  placeholder="grish666@redberry.ge"
                />
                <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
              </div>
    
              <div className={classes.inputNumber}>
                <label htmlFor="name">ტელეფონის ნომერი</label>
                <input
                  type="number"
                  id="number"
                  placeholder="+995 598 00 07 01"
                />
                <p>უნდა აკმაყოფილებდეს ქართული მობ.ნომრის ფორმატს</p>
              </div>
            </div>
    
            <div>
              <button className={classes.button}>
                <p className={classes.next}>შემდეგი</p>
              </button>
            </div>
          </form>
          <div className={classes.logo}></div>
        </div>
      );
    };

export default WorkerInfo