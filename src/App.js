import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import CoverPage from "./Components/CoverPage";
import LaptopInfo from "./Components/LaptopInfo";
import WorkerInfo from "./Components/WorkerInfo";
import FormFrame from "./Components/FormFrame";
import { useState } from "react";
import Success from "./Components/success";

function App() {
  const [formFinished, setFormFinished]=useState(false);
 

  return(
    <main>
      <Switch>
          <Route path="/" exact>
            <Redirect to='/welcome' />
          </Route>
      <Route path="/welcome">
        <CoverPage/>
        </Route>
      <Route path="/form">
          <FormFrame  /> 
          <div>{formFinished&&<Success/>}</div>
        </Route>
        </Switch>
    </main>
  )
 
}

export default App;
