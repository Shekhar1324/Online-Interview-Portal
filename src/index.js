// import React from "react";
// import ReactDOM from "react-dom";
// import AppTest from "./components/AppTest";
// import Problems from "./components/Problems/Problems";

// import {
//   HashRouter as Router,
//   Route,
//   useParams,
//   Redirect,
// } from "react-router-dom";
// const { v4: uuidV4 } = require("uuid");
// ReactDOM.render(
//   <Router>
//     <Route exact path="/">
//       <Redirect to={"/" + uuidV4()} />
//     </Route>
//     {/* <Route exact path="/" children={<Problems />} /> */}
//     <Route path="/:roomId" children={<Room />} />
//   </Router>,
//   document.getElementById("root")
// );

// function Room() {
//   let { roomId } = useParams();
//   let username = "vivek"
// //  let username = prompt("Please enter your name");
//   // alert(person)
//   return <AppTest roomId={roomId} username = {username}/>;
// }


import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

