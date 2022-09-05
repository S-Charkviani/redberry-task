import classes from "./App.css";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import CoverPage from "./Pages/CoverPage";
import FormPage from "./Pages/FormPage";
import ListPage from "./Pages/ListPage";
import LaptopInfoPage from "./Pages/LaptopInfoPage";

function App(page, setPage) {
  const history = useHistory();
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <CoverPage />
        </Route>

        <Route path="/form">
          <FormPage />
        </Route>
        <Route path="/list" exact>
          <ListPage />
        </Route>
        <Route path="/detail-info">
          <LaptopInfoPage />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
