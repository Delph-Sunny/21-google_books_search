import React, { useState }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import NewToast from "./components/NewToast";
import API from "./utils/API";

function App() {
  const [savedUpdate, setSavedUpdate] = useState(
    {
      favorite: "",
      isVisible: "none"
    });

    API.subscribeToUpdates(null, (response) => {
      setSavedUpdate(
        {
          favorite: response,
          isVisible: ""
        });
      setTimeout(() => setSavedUpdate(
        {
          favorite: "",
          isVisible: "none"
        }), 4000);
    });



  return (
    <Router>
      <div>
      <NewToast savedUpdate={savedUpdate}/>
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