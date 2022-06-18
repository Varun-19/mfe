import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount function
const mount = (el) => {
  ReactDOM.render(<App/>, el);
};

//Mount immediately in case of development/standalione mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//Export mount function for prod
export { mount };
