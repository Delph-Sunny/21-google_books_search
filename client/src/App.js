import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <MyNav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;