import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

export default function Account() {
  const { recentUser, logout } = useAuth();
  return (
    <>
      <div className={classes.account}>
        {recentUser ? (
          <>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span>{recentUser.displayName}</span>
            <span
              className="material-icons-outlined"
              title="Logout"
              onClick={logout}
            >
              {" "}
              logout{" "}
            </span>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </>
  );
}
