import React, { useCallback, useEffect, useState } from "react";
import FormFrame from "./FormFrame";
import classes from "./WorkerInfo.module.css";

const Backend = "https://pcfy.redberryinternship.ge/api";

const WorkerInfo = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeamsHandler = useCallback(async () => {
    const response = await fetch(`${Backend}/teams`, {
      headers: {
        Accept: "application/json",
      },
    });
    const teamData = await response.json();
    const loadedTeams = [];

    for (const key in teamData.data) {
      loadedTeams.push({
        id: teamData.data[key].id,
        name: teamData.data[key].name,
      });
    }
    setTeams(loadedTeams);
  }, []);

  useEffect(() => {
    fetchTeamsHandler();
  }, [fetchTeamsHandler]);

  return (
    <div className={classes.main}>
      <FormFrame />
      <form className={classes.form}>
        <div>
          <div className={classes.inputName}>
            <label htmlFor="name">სახელი</label>
            <input required type="text" id="name" placeholder="გრიშა" />
            <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
          </div>

          <div className={classes.inputLastName}>
            <label htmlFor="name">გვარი</label>
            <input
              required
              type="text"
              id="lastName"
              placeholder="ბაგრატიონი"
            />
            <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
          </div>
          <div className={classes.inputTeam}>
            <select required>
              <option disabled selected>
                თიმი
              </option>
              <option>მარკეტინგი</option>
            </select>
          </div>

          <div className={classes.inputPosition}>
            <select required>
              <option hidden>პოზიცია</option>
              <option>მენეჯერი</option>
            </select>
          </div>

          <div className={classes.inputEmail}>
            <label htmlFor="name">მეილი</label>
            <input
              required
              type="text"
              id="email"
              placeholder="grish666@redberry.ge"
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </div>

          <div className={classes.inputNumber}>
            <label htmlFor="name">ტელეფონის ნომერი</label>
            <input
              required
              type="number"
              id="number"
              placeholder="+995 598 00 07 01"
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობ.ნომრის ფორმატს</p>
          </div>
        </div>

        <div>
          <button className={classes.button}>შემდეგი</button>
        </div>
      </form>
    </div>
  );
};

export default WorkerInfo;