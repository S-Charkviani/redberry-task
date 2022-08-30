import React, { useCallback, useEffect, useState } from "react";
import FormFrame from "./FormFrame";
import classes from "./WorkerInfo.module.css";

const Backend = "https://pcfy.redberryinternship.ge/api";

const WorkerInfo = () => {
  const [teams, setTeams] = useState([]); 
  const [position, setPosition]=useState([]);

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

  const fetchPositionHandler = useCallback(async () => {
    const response = await fetch(`${Backend}/positions`, {
      headers: {
        Accept: "application/json",
      },
    });
    const teamPosition = await response.json();
    const loadedPositions = [];

    for (const key in teamPosition.data) {
      loadedPositions.push({
        id: teamPosition.data[key].id,
        name: teamPosition.data[key].name,
      });
    }
    setPosition(loadedPositions);
  }, []);


  useEffect(() => {
    fetchPositionHandler();
  }, [fetchPositionHandler]);

  return (
    <div className={classes.main}>
      <FormFrame />
      <form className={classes.form}>
        <div>
          <div className={classes.inputName}>
            <label htmlFor="name">სახელი</label>
            <input required type="text" id="name" placeholder="გრიშა" />
            <small>მინიმუმ ორი სიმბოლო, ქართული ასოები</small>
          </div>

          <div className={classes.inputLastName}>
            <label htmlFor="name">გვარი</label>
            <input
              required
              type="text"
              id="lastName"
              placeholder="ბაგრატიონი"
            />
            <small>მინიმუმ ორი სიმბოლო, ქართული ასოები</small>
          </div>
          <div className={classes.inputTeam}>
            <select required>
            <option disabled selected >
                თიმი
              </option>
              {teams.map((teamsList)=>{
                return(
 <option>{teamsList.name}</option>)
              })}
             
            </select>
          </div>

          <div className={classes.inputPosition}>
            <select required>
              <option hidden>პოზიცია</option>
              {position.map((positionList)=>{
                return(
 <option>{positionList.name}</option>)
              })}
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
            <small>უნდა მთავრდებოდეს @redberry.ge-ით</small>
          </div>

          <div className={classes.inputNumber}>
            <label htmlFor="name">ტელეფონის ნომერი</label>
            <input
              required
              type="number"
              id="number"
              placeholder="+995 598 00 07 01"
            />
            <small>უნდა აკმაყოფილებდეს ქართული მობ.ნომრის ფორმატს</small>
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
