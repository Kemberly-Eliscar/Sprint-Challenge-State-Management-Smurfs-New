import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById("root"));
