import React from "react";
import ReactDOM from "react-dom/client";
// import Home from "./shoppingCart/Home";
// import Counter from "./features/counter/Counter";
// import Store from "./app/Store";
// import { Provider } from "react-redux";
import App from './contextAPI/App'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Provider store={Store}>
    <App />
  // </Provider>
);
