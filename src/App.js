import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Search from "./components/Search"
import DarkMode from "./components/DarkMode"


function App() {
  return (
   <div className="App">
     <nav>
       <a href="/"></a>
       <a href="/"></a>
       <a href="/"></a>
       <a href="/"></a>
       <DarkMode/>
     </nav>
     <Router>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/search" exect component={Search}/>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
