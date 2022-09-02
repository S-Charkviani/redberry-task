import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import CoverPage from "./Components/CoverPage";
import FormFrame from "./Components/FormFrame";


function App() {
  
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
