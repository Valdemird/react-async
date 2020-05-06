import { USER_TYPES } from "../types/index";

const initState = {
  name: "Perro",
  picture: "",
  loading: false,
};

const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case USER_TYPES.FETCH_USER:
      return { ...state, loading: true };
    case USER_TYPES.UPDATE_USER:
      return {
        ...state,
        name: action.payload.name,
        picture: action.payload.picture,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
