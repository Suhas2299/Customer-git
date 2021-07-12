import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  customerList: [],
  progress: false,
};

const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CustomerUpsert } from "./pages/CustomerUpsert";
import { CustomerList } from "./pages/CustomerList";

function App() {
  return (
    <Router>
      <Route exact path="/customer-upsert" component={CustomerUpsert} />

      <Route exact path="/" component={CustomerUpsert} />
      <Route exact path="/customer-list" component={CustomerList} />

      {/* <Route exact path="/customer-upsert" component={CustomerById} />
      <Route exact path="/" component={CustomerById} /> */}
    </Router>
  );
}

export default App;
