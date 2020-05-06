import { connect } from "react-redux";
import UserPanel from "../components/UserPanel";
import { getUser } from "../store/wrapers";
const mapStateToProps = ({ userReducer }) => {
  return {
    name: userReducer.name,
    picture: userReducer.picture,
    loading: userReducer.loading,
    error: userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
