import React, { useCallback, useEffect, useState } from "react";
import classes from "../Pages/FormPage.module.css";


const Backend = "https://pcfy.redberryinternship.ge/api";

const WorkerInfo = ({ page, setPage, formData, setFormData,}) => {
  const [teams, setTeams] = useState([]);
  const [position, setPosition] = useState([]);
  const [selectedTeam, setSelectedTeam]=useState();

  const fetchTeamsHandler = async () => {
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
  };

  useEffect(() => {
    fetchTeamsHandler();
  }, []);

  const fetchPositionHandler = async () => {
    const response = await fetch(`${Backend}/positions`, {
      headers: {
        Accept: "application/json",
      },
    });
    const positionData = await response.json();
    const loadedPositions = [];

    for (const key in positionData.data) {
        if(selectedTeam ==positionData.data[key].team_id){
          loadedPositions.push({
          id: positionData.data[key].id,
          name: positionData.data[key].name,
        })
      };
    }
    setPosition(loadedPositions);
  };

  useEffect(() => {
    fetchPositionHandler();
  }, [selectedTeam]);

  

  return (
  <div>
      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">სახელი</label>
          <input
            required
            type="text"
            id="name"
            placeholder="გრიშა"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <small>მინიმუმ ორი სიმბოლო, ქართული ასოები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">გვარი</label>
          <input
            required
            type="text"
            id="lastName"
            placeholder="ბაგრატიონი"
            value={formData.surname}
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
          />
          <small>მინიმუმ ორი სიმბოლო, ქართული ასოები</small>
        </div>
      </div>
      <div className={classes.generalInfoWhole}>
        <div className={classes.selectTypeInfo}>
          <select
            required
        onChange={(e) => {setSelectedTeam(e.target.value);
          setFormData({ ...formData, team_id: e.target.value })}}
          >
            <option disabled value={"default"}>
              თიმი
            </option>
            {teams.map((teamsList) => {
              return (<option value={teamsList.id}>{teamsList.name}</option>);
            })}
          </select>
        </div>

        <div className={classes.selectTypeInfo}>
          <select
            required
            onChange={(e) =>
              setFormData({ ...formData, position_id: e.target.value })
            }
          >
            <option value={"default"} disabled>
              პოზიცია
            </option>
            {position.map((positionList) => {
              return <option value={positionList.id}>{positionList.name}</option>;
            })}
          </select>
        </div>

        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">მეილი</label>
          <input
            required
            type="text"
            id="email"
            placeholder="grish666@redberry.ge"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <small>უნდა მთავრდებოდეს @redberry.ge-ით</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">ტელეფონის ნომერი</label>
          <input
            required
            type="number"
            id="number"
            placeholder="+995 598 00 07 01"
            value={formData.phone_number}
            onChange={(e) =>
              setFormData({ ...formData, phone_number: e.target.value })
            }
          />
          <small>უნდა აკმაყოფილებდეს ქართული მობ.ნომრის ფორმატს</small>
        </div>
      </div>

      <div className={classes.cornerButton}>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          შემდეგი
        </button>
      </div>
      </div>
  );
};

export default WorkerInfo;
