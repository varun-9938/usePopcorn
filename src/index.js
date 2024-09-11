import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRated, setMovieRated] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="red"
//         maxRating={10}
//         onSetRating={setMovieRated}
//       ></StarRating>
//       <p>This movie is {movieRated} star rated</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test></Test> */}
    <App />
  </React.StrictMode>
);
