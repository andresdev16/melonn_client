import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserService from "../services/user.service"

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    UserService.getProfile().then(
      (response) => {
        localStorage.setItem("user", response.data)
      }
    )
  });

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="card mb-3" style={{maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{currentUser.role}</h5>
            <p>
              User ID:
              <input className="form-control" type="text" value={currentUser.id} aria-label="readonly input example" readOnly />
            </p>
            <p>
              Email:
              <input className="form-control" type="text" value={currentUser.email} aria-label="readonly input example" readOnly />
            </p>
            <p className="card-text"><small className="text-muted">Your session will expire at {new Date(currentUser.exp * 1000).toString()}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
