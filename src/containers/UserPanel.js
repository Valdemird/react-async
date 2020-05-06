import { connect } from "react-redux";
import UserPanel from "../components/UserPanel";
import { fetchUser } from "../store/actions/userActions";
const mapStateToProps = ({ userReducer }) => {
  return {
    name: userReducer.name,
    picture: userReducer.picture,
    loading: userReducer.loading,
  };
};

export default connect(mapStateToProps, { fetchUser })(UserPanel);
