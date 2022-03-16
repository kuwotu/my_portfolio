// import React from "react";

// export default function DynamicText() {
//   const adjectives = [
//     "Front-End Engineer",
//     "South Londoner",
//     "melomaniac",
//     "Nigerian",
//     "creative",
//   ];

//   const [currentText, setCurrentText] = React.useState([]);
//   const [i, setI] = React.useState(0);
//   const [j, setJ] = React.useState(0);

//   function loopText() {
//     if (i < adjectives.length) {
//       if (j <= adjectives[i].length) {
//         setCurrentText((prevLetter) => prevLetter + adjectives[i][j]);
//         setJ((prevValue) => prevValue + 1);
//         console.log(j);
//       }

//       if (j === adjectives[i].length) {
//         setI((prevValue) => prevValue + 1);
//         console.log(i);
//       }
//     }
//   }

//   setTimeout(loopText, 3000);

//   return (
//     <div>
//       <h1>I'm Kevwe, a {currentText} </h1>
//     </div>
//   );
// }
