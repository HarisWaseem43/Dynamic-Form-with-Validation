import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <----------------------- Email Sending API Setup ------------------------------>
// const onSubmit = async () => {
//   try {
//     const response = await fetch('/send-email', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: userEnteredEmail, // Replace with the user's entered email
//         summaryData: formfield.Summary,
//         componentData: formfield.Component,
//       }),
//     });

//     if (response.status === 200) {
//       // Email sent successfully
//       alert('Email sent successfully');
//     } else {
//       // Email sending failed
//       alert('Email sending failed');
//     }
//   } catch (error) {
//     console.error('API request error:', error);
//   }
// };
