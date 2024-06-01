import React from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/login");
    dispatch(clearUser());
  };

  return (
    <div className={styles.navbarWrapper}>
      <div>
        <h1 onClick={() => navigate("/")}>MAV NEWS CORP</h1>
        <p> {user?.email} </p>
      </div>
      <div className={styles.buttonWrapper}>
        {user?.email && <button onClick={handleLogout}>Logout</button>}
        {!user?.email && (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
