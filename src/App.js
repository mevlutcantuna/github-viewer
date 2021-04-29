import React from "react";

//Components
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Repos from "./Components/Repos";
import Gists from "./Components/Gists";
import Followers from "./Components/Followers";

//Router
import { Router, Switch, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { createBrowserHistory } from "history";

//Axios
import axios from "axios";

const history = createBrowserHistory();

const handleActivePage = (activePage) => {
  history.push(activePage);
};

function App() {
  const [input, setInput] = React.useState("mevlutcantuna");

  const [person, setPerson] = React.useState([]);

  const [isThere, setIsThere] = React.useState(false);

  const handleSearch = () => {
    const API = `https://api.github.com/users/${input}`;
    axios.get(API).then((res) => setPerson(res.data));
    setIsThere(true);
    setInput("");
  };

  const handleChangeInput = (e) => {
    setInput(e);
  };

  console.log(person);

  return (
    <div style={{ margin: "5rem 10%" }}>
      <Navbar isThere={isThere} handleActivePage={handleActivePage} />
      <Router history={history}>
        <Switch>
          <Route exact path={routes.main.path}>
            <Search
              handleSearch={handleSearch}
              input={input}
              handleChangeInput={handleChangeInput}
              person={person}
              isThere={isThere}
            />
          </Route>
          <Route path={routes.repos.path}>
            <Repos person={person} />
          </Route>
          <Route path={routes.gists.path}>
            <Gists person={person} />
          </Route>
          <Route path={routes.followers.path}>
            <Followers person={person} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
