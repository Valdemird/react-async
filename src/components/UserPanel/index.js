import React from "react";
import PropTypes from "prop-types";
import "./UserPanel.scss";
const UserPanel = ({ name, picture, loading, getUser, ...props }) => {
  console.log(props);
  return (
    <div className="UserPanel">
      <div className={loading ? "container__loading" : "container"}>
        <h4>{name}</h4>
        <img src={picture} alt="user" />
      </div>
      <button disabled={loading} onClick={getUser}>
        Change User
      </button>
    </div>
  );
};

UserPanel.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default UserPanel;
