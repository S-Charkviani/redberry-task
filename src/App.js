import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import CoverPage from "./Components/CoverPage";
import LaptopInfo from "./Components/LaptopInfo";
import WorkerInfo from "./Components/WorkerInfo";
import FormFrame from "./Components/FormFrame";
import { useState } from "react";
import Success from "./Components/success";

function App() {
  
 
console.log(showSuccess)
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
          <FormFrame /> 
          
        </Route>
        </Switch>
    </main>
  )
 
}

export default App;
