import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Story from "../pages/Story";

const AppRouter = () => {
  return (
    <main className="App-content">
      <Router>
        <Switch>
          <Route path="/story/:storyId" component={Story} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  );
};

export default AppRouter;
