import { USER_TYPES } from "../types";

export const fetchUser = () => ({
  type: USER_TYPES.FETCH_USER,
});

export const uploadUser = (name, picture) => ({
  type: USER_TYPES.UPDATE_USER,
  payload: { name, picture },
});
