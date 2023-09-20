import React from "react";
import MyApp from "@bytescale/upload-widget-react/dev/components/MyApp";
import { AppContainer } from "react-hot-loader";
import * as ReactDOM from "react-dom";

declare const module: any;

const rootElement = document.getElementById("root");

function render(): void {
  const container = <MyApp />;

  module.hot.accept("./components/MyApp", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NewMyApp: typeof MyApp = require("./components/MyApp").default;
    const newContainer = <NewMyApp />;
    renderWithHotLoading(newContainer);
  });

  renderWithHotLoading(container);
}

function renderWithHotLoading(component: React.ReactElement<any>): void {
  ReactDOM.hydrate(<AppContainer>{component}</AppContainer>, rootElement);
}

render();
