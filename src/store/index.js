import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import Epics from "../store/epics";
import reducer from "./reducers";
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(Epics);
export default store;
