import React, { useCallback, useEffect, useState } from "react";
import classes from "../Pages/FormPage.module.css";

const Backend = "https://pcfy.redberryinternship.ge/api";

const WorkerForm = ({ page, setPage, formData, setFormData }) => {
  const [teams, setTeams] = useState([]);
  const [position, setPosition] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState();
  const [nameReg, setNameReg] = useState();
  const [emailReg, setEmailReg] = useState();
  const [numReg, setNumReg] = useState();

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
      if (selectedTeam == positionData.data[key].team_id) {
        loadedPositions.push({
          teamId: positionData.data[key].team_id,
          id: positionData.data[key].id,
          name: positionData.data[key].name,
        });
      }
    }
    setPosition(loadedPositions);
  };

  useEffect(() => {
    fetchPositionHandler();
  }, [selectedTeam]);

  const geRegex = new RegExp(/^([\u10D0-\u10F0]{2,})$/);
  const mailRegex = new RegExp("[a-z0-9]+@redberry.ge");
  const numRegex = new RegExp(/^(\+?995)(5)[0-9]{8}/);

 
  const nameValid= (event) => {
    if (geRegex.test(event.target.value)) {
      setNameReg(true);
      setFormData({ ...formData, name: event.target.value });
    } else {
      setNameReg(false);
    }
  };
const surnameValid=(event) => {
  if (geRegex.test(event.target.value)) {
    setNameReg(true);
    setFormData({ ...formData, surname: event.target.value });
  } else {
    setNameReg(false);
  }
};

const teamsValid = (event) => {
  setSelectedTeam(event.target.value);

  setFormData({ ...formData, team_id: event.target.value });
};

const positionValid = (event) => {
  setFormData({ ...formData, position_id: event.target.value });
};
const emailValid = (event) => {
  if (mailRegex.test(event.target.value)) {
    setEmailReg(true);
    setFormData({ ...formData, email: event.target.value });
  } else {
    setEmailReg(false);
  }
};
const phoneNumberValid = (event) => {
  if (numRegex.test(event.target.value)) {
    setNumReg(true);
    setFormData({ ...formData, phone_number: event.target.value });
  } else {
    setNumReg(false);
  }
};

  const nextStep = (event) => {
    event.preventDefault();
    // if (nameReg && emailReg && numReg) {}
      setPage(page+1);
    //Here Should be making input red
  
}

  return (
    <div>
      <div className={classes.generalInfo}>
        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">სახელი</label>
          <input
            type="text"
            id="name"
            placeholder="გრიშა"
            value={formData.name}
            onChange={nameValid}
          />
          <small>მინიმუმ ორი სიმბოლო, ქართული ასოები</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">გვარი</label>
          <input
            type="text"
            id="lastName"
            placeholder="ბაგრატიონი"
            value={formData.surname}
            onChange={surnameValid}
          />
          <small>მინიმუმ ორი სიმბოლო, ქართული ასოები</small>
        </div>
      </div>
      <div className={classes.generalInfoWhole}>
        <div className={classes.selectTypeInfo}>
          <select
            required
            onChange={teamsValid}
          >
            <option disabled selected>
              თიმი
            </option>
            {teams.map((teamsList) => {
              return (
                <option
                  value={teamsList.id}
                  key={teamsList.id}
                  id={teamsList.teamId}
                >
                  {teamsList.name}{" "}
                </option>
              );
            })}
          </select>
        </div>

        <div className={classes.selectTypeInfo}>
          <select
            required
            onChange={positionValid} 
          >
            <option selected disabled>
              პოზიცია
            </option>
            {position.map((positionList) => {
              return (
                <option value={positionList.id} key={positionList.id}>
                  {positionList.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">მეილი</label>
          <input
            id="email"
            placeholder="grish666@redberry.ge"
            value={formData.email}
            onChange={emailValid}
          />
          <small>უნდა მთავრდებოდეს @redberry.ge-ით</small>
        </div>

        <div className={classes.inputTypeInfo}>
          <label htmlFor="name">ტელეფონის ნომერი</label>
          <input
            placeholder="+995 598 00 07 01"
            value={formData.phone_number}
            onChange={phoneNumberValid }
          />
          <small>უნდა აკმაყოფილებდეს ქართული მობ.ნომრის ფორმატს</small>
        </div>
      </div>

      <div className={classes.cornerButton}>
        <button onClick={nextStep}>შემდეგი</button>
      </div>
    </div>
  );
};

export default WorkerForm
