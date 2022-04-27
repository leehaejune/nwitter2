import { useState } from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import Auth from "../routes/Auth"
import Home from "../routes/Home"


const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Route>
        {isLoggedIn ? (
          <Route exact path ="/" element={<Home/>}>
          </Route>
        ) : (
          <Route exact path ="/"element={<Auth/>}>
          </Route>
        )}
      </Route>
    </Router>
  );
};

export default AppRouter;