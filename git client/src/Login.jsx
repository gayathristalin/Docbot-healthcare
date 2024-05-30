import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setUserEmail] = useState(" ");
  const [password, setUserPassword] = useState(" ");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else if (result.data === "the password is incorrect") {
          alert("Incorrect password");
        } else {
          alert("New user? SignUP");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div class="login_body">
      <container>
        <form onSubmit={handleSubmit}>
          <div class="container signupcontainer">
            <input
              type="email"
              class="email inputboxx"
              id="email"
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="password"
              class="password inputboxx"
              id="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            {/* <input
            type="password"
            class="password inputboxx"
            id="password"
            placeholder="Repeat password"
          /> */}
          </div>
          <div class="buttons">
            <input type="submit" value="Login" class="signup" />
            <br></br>
            <Link to="/signup">
              <input type="button" value="Signup" class="login" />
            </Link>
            {/* <Link to="/Login">Login </Link> */}
            {/* <Link to="/login.jsx" class="login buttons"></Link> */}
            {/* <a href="login.jsx">
              <button>Click</button>
            </a> */}
          </div>
        </form>
      </container>
      <login_extras>
        <div class="header">
          <h1 class="signup_or_login">LOGIN TO</h1>
          <h1 class="login_text">DOCBOT</h1>
        </div>
        <div class="login_chatbot_svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 847.99738 727.30542"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M827.56958,593.0512a7.00586,7.00586,0,0,1-6.9801-6.54778l-1.03964-15.87371a7.00582,7.00582,0,0,1,6.53278-7.44874L950.446,555.03651A14.95972,14.95972,0,1,1,952.401,584.892L828.038,593.03594Q827.80311,593.05094,827.56958,593.0512Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#cbcbf9"
            />
            <path
              d="M852.09217,595.09784a7.01468,7.01468,0,0,1-6.99773-6.7446l-.88623-23.70925a7.00513,7.00513,0,0,1,6.73934-7.26192l102.26733-3.82226a7.006,7.006,0,0,1,7.26245,6.73934l.88623,23.70925a7.00513,7.00513,0,0,1-6.73934,7.26192l-102.26733,3.82226C852.26847,595.09626,852.1798,595.09784,852.09217,595.09784Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#2f2e41"
            />
            <path
              d="M971.93305,813.65271H956.02513a7.01357,7.01357,0,0,1-7.00562-7.00563V674.06378a7.01357,7.01357,0,0,1,7.00562-7.00563h15.90792a7.01357,7.01357,0,0,1,7.00563,7.00563v132.5833A7.01357,7.01357,0,0,1,971.93305,813.65271Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#2f2e41"
            />
            <path
              d="M933.93305,813.65271H918.02513a7.01357,7.01357,0,0,1-7.00562-7.00563V674.06378a7.01357,7.01357,0,0,1,7.00562-7.00563h15.90792a7.01357,7.01357,0,0,1,7.00563,7.00563v132.5833A7.01357,7.01357,0,0,1,933.93305,813.65271Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#2f2e41"
            />
            <circle cx="771.77101" cy="387.37851" r="54.96724" fill="#cbcbf9" />
            <path
              d="M918.01891,492.49354a13.03641,13.03641,0,0,1-4.76048-2.7944,8.76616,8.76616,0,0,1-2.56244-6.93989,5.89715,5.89715,0,0,1,2.62177-4.53865c1.96567-1.26091,4.59469-1.26464,7.27145-.085l-.10132-21.45843,2.15543-.01027.11924,25.22665-1.66087-1.04474c-1.92594-1.20943-4.6764-2.06074-6.61987-.81377a3.787,3.787,0,0,0-1.6399,2.93042,6.62428,6.62428,0,0,0,1.90529,5.17441c2.3802,2.27364,5.85285,2.98465,9.81293,3.62l-.34163,2.12812A35.52789,35.52789,0,0,1,918.01891,492.49354Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#2f2e41"
            />
            <rect
              x="902.80356"
              y="451.61659"
              width="2.15531"
              height="11.60959"
              transform="matrix(0.13093, -0.99139, 0.99139, 0.13093, 156.05306, 1207.28556)"
              fill="#2f2e41"
            />
            <rect
              x="939.13308"
              y="456.41322"
              width="2.15531"
              height="11.60959"
              transform="translate(182.8707 1247.47098) rotate(-82.4768)"
              fill="#2f2e41"
            />
            <path
              d="M983.615,709.63608H900.98027a9.17744,9.17744,0,0,1-8.8945-6.96226,8.998,8.998,0,0,1-.12052-3.32s16.14133-90.643,24.1262-134.17562a27.575,27.575,0,0,1,27.128-22.59944h.00008a59.61184,59.61184,0,0,1,59.61184,59.61184v88.22912A19.21633,19.21633,0,0,1,983.615,709.63608Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#2f2e41"
            />
            <path
              d="M967.68,697.65916a7.01687,7.01687,0,0,1-6.56512,3.87532l-15.89373-.66973a7.005,7.005,0,0,1-6.70427-7.29429l5.24527-124.51908a14.9591,14.9591,0,1,1,29.8917,1.25916l-5.24468,124.51908A6.96673,6.96673,0,0,1,967.68,697.65916Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#cbcbf9"
            />
            <path
              d="M975.81531,664.64319a7.0165,7.0165,0,0,1-6.565,3.87508l-27.14739-1.14368a7.01359,7.01359,0,0,1-6.70427-7.29429l4.30728-102.248a7.00506,7.00506,0,0,1,7.29417-6.70463l27.14693,1.14345a7.00506,7.00506,0,0,1,6.70427,7.29429l-4.30681,102.24828A6.9752,6.9752,0,0,1,975.81531,664.64319Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#2f2e41"
            />
            <path
              d="M944.71741,438.022c-11.85654,4.67559-29.77187,9.64567-37.58863-4.23554a22.68624,22.68624,0,0,1-1.28638-18.63818c2.36074-6.549,7.383-11.94438,13.10609-15.757,10.72056-7.14174,24.285-9.08593,36.77018-6.32566a50.1646,50.1646,0,0,1,17.54718,7.54109c6.03962,4.14019,10.29185,9.72895,14.566,15.57808,4.36955,5.97962,9.31751,12.01062,16.49852,14.63032,5.87129,2.14191,13.23325,1.04848,17.387-3.9354a12.17706,12.17706,0,0,0,2.19395-3.93539c.62333-1.83172-2.27331-2.618-2.89284-.79752-2.18279,6.41434-10.21754,7.85183-15.89061,5.77548-7.48914-2.741-12.21965-9.86207-16.711-16.00989-4.29376-5.87736-9.04106-11.05157-15.24261-14.95a52.93021,52.93021,0,0,0-18.20543-7.10741c-12.99844-2.47269-26.99735-.28121-38.01315,7.26986A36.7187,36.7187,0,0,0,903.287,413.46152a25.89351,25.89351,0,0,0,.1787,19.64383,20.849,20.849,0,0,0,15.09738,12.30324c7.26357,1.47192,14.81-.22151,21.70465-2.55543,1.76653-.598,3.51237-1.25419,5.24717-1.9383,1.7754-.70013,1.002-3.6025-.79752-2.89284Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#2f2e41"
            />
            <path
              d="M224.12631,86.34729H600.44467a48.17928,48.17928,0,0,1,48.125,48.12512V340.3482a48.17923,48.17923,0,0,1-48.125,48.12506H224.12631a48.17923,48.17923,0,0,1-48.125-48.12506V134.47241A48.17928,48.17928,0,0,1,224.12631,86.34729Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#f2f2f2"
            />
            <path
              d="M224.12582,100.20148H600.44467a34.30948,34.30948,0,0,1,34.271,34.27093V340.3482a34.30947,34.30947,0,0,1-34.271,34.27088H224.12582a34.30936,34.30936,0,0,1-34.2705-34.27088V134.47241A34.30936,34.30936,0,0,1,224.12582,100.20148Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#fff"
            />
            <path
              d="M227.79792,462.18379a8.63,8.63,0,0,1-3.30688-.66895,8.3678,8.3678,0,0,1-5.24707-7.85254V382.49238L314.12653,379.3l-80.37231,80.37256A8.38269,8.38269,0,0,1,227.79792,462.18379Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#f2f2f2"
            />
            <rect
              x="73.82571"
              y="65.06299"
              width="324"
              height="41.02752"
              rx="20.51374"
              fill="#f2f2f2"
            />
            <rect
              x="74.28418"
              y="130.54923"
              width="324"
              height="41.02752"
              rx="20.51374"
              fill="#f2f2f2"
            />
            <rect
              x="74.74265"
              y="196.03547"
              width="324"
              height="41.02752"
              rx="20.51374"
              fill="#f2f2f2"
            />
            <path
              d="M818.36162,191.34729H442.04326a48.17928,48.17928,0,0,0-48.125,48.12512V445.3482a48.17923,48.17923,0,0,0,48.125,48.12506H818.36162a48.17923,48.17923,0,0,0,48.125-48.12506V239.47241A48.17928,48.17928,0,0,0,818.36162,191.34729Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#e6e6e6"
            />
            <path
              d="M818.36211,205.20148H442.04326a34.30948,34.30948,0,0,0-34.271,34.27093V445.3482a34.30947,34.30947,0,0,0,34.271,34.27088H818.36211a34.30937,34.30937,0,0,0,34.27051-34.27088V239.47241A34.30937,34.30937,0,0,0,818.36211,205.20148Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#fff"
            />
            <path
              d="M789.73371,564.67256,709.3614,484.3l94.88257,3.19238V558.6623a8.36781,8.36781,0,0,1-5.24707,7.85254,8.63008,8.63008,0,0,1-3.30689.66895A8.38269,8.38269,0,0,1,789.73371,564.67256Z"
              transform="translate(-176.00131 -86.34729)"
              fill="#e6e6e6"
            />
            <circle cx="371.20113" cy="256.06299" r="26" fill="#cbcbf9" />
            <circle cx="454.20113" cy="256.06299" r="26" fill="#cbcbf9" />
            <circle cx="537.20113" cy="256.06299" r="26" fill="#cbcbf9" />
          </svg>
        </div>
      </login_extras>
    </div>
  );
};
export default Login;
// <div className="sign-up-contaier">

{
  /* <div className="sign-up-container">
  <h2>Signup</h2>
  <form className="sign-up-form">
    <label htmlFor="username"></label>
    <input type="text" name="" id="" placeholder="username" />
    <label htmlFor="Email"></label>
    <input type="email" autoComplete="off" placeholder="email" />
    <label htmlFor="password"></label>
    <input type="password" placeholder="password" />
    <button type="submit">Signup</button>
  </form>
</div>; */
}
//ASLII
{
  /* <div className="container signupcontainer">
<h2>Signup</h2>
<form className="sign-up-form">
  <input
    type="text"
    className="username inputboxx"
    id="username"
    placeholder="Username"
  />
  <input
    type="email"
    className="email inputboxx"
    id="email"
    placeholder="Email"
  />
  <input
    type="password"
    className="password inputboxx"
    id="password"
    placeholder="Password"
  />

  <div class="buttons">
    <input type="submit" value="Signup" class="login" />
    <input type="submit" value="Login" class="signup" />
  </div>
</form>
</div> */
}
