import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import { ScoreboardContainer } from "./components/ScoreboardContainer";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";

const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ScoreboardContainer />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
