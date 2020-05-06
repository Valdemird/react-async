import { fetchUser, uploadUser } from "../actions/userActions";
import Axios from "axios";

export const getUser = () => (dispatch) => {
  dispatch(fetchUser());
  Axios.get("https://randomuser.me/api")
    .then((response) => {
      let { picture, name } = response.data.results[0];
      name = `${name.title} ${name.first} ${name.last}`;
      picture = picture.thumbnail;
      dispatch(uploadUser(name, picture));
    })
    .catch();
};
