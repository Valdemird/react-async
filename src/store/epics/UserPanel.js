import { USER_TYPES } from "../types";
import { ofType } from "redux-observable";
import { map, flatMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const userEpic = (action$) => {
  return action$.pipe(
    ofType(USER_TYPES.FETCH_USER),
    flatMap(() => ajax.getJSON("https://randomuser.me/api")),
    map((user) => {
      let { name, picture } = user.results[0];
      name = `${name.title} ${name.first} ${name.last}`;
      picture = picture.thumbnail;
      return {
        type: USER_TYPES.UPDATE_USER,
        payload: { name, picture },
      };
    })
  );
};
