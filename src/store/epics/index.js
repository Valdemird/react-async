import { combineEpics } from "redux-observable";
import { userEpic } from "./UserPanel";

export default combineEpics(userEpic);
