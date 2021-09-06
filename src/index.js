import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import configureStore from "./store";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </Provider>,
  document.getElementById("root"),
);
