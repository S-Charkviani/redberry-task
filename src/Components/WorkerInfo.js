import useInput from "../Custome hook/UseInput";
import classes from "./WorkerInfo.module.css";

const WorkerInfo = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim().required);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim().required);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput((value) => value.trim().endsWith("@redberry.ge"));

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput((value) => value.trim().includes("+995").length === 13);

  const submitHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetLastNameInput();
    resetemailInput();
    resetNumberInput();
  };

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
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              placeholder="გრიშა"
            />
            <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
          </div>

          <div className={classes.inputLastName}>
            <label htmlFor="name">გვარი</label>
            <input
              type="text"
              id="lastName"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
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
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="grish666@redberry.ge"
            />
            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
          </div>

          <div className={classes.inputNumber}>
            <label htmlFor="name">ტელეფონის ნომერი</label>
            <input
              type="number"
              id="number"
              value={enteredNumber}
              onChange={numberChangeHandler}
              onBlur={numberBlurHandler}
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

export default WorkerInfo;
