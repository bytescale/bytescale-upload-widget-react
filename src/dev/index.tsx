import React from "react";
import MyApp from "@bytescale/upload-widget-react/dev/components/MyApp";
import * as ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Unable to find the root element.");
}

ReactDOM.render(<MyApp />, rootElement);
