import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { inject } from '@vercel/analytics';
 
inject();

ReactDOM.render(<App />, document.getElementById("root"));
