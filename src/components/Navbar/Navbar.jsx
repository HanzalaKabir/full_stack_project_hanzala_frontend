import "./Navbar.css";
import { useDate, useAuth } from "../../context";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { destination, checkinDate, checkoutDate, guests, dateDispatch } =
    useDate();

  const { authDispatch, accessToken } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const handleSearchClick = () => {
    dateDispatch({
      type: "OPEN_SEARCH-MODAL",
    });
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    if (accessToken) {
      setShowLogout((prev) => !prev);
    } else {
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    }
  };

  const handleLogout = () => {
    authDispatch({
      type: "SET_ACCESS_TOKEN",
      payload: null,
    });
    setShowLogout(false);
  };

  // Close logout popup when clicking outside
  const handleContainerClick = () => {
    setShowLogout(false);
  };

  return (
    <header className="heading d-flex  align-center main">
      <h1 className="heading-1">
        <Link className="link" to="/">
          Hotel Booking
        </Link>
      </h1>
      <div
        className="form-container d-flex align-center cursor-pointer shadow"
        onClick={handleSearchClick}
      >
        <span className="form-option">{destination || "Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {checkinDate && checkoutDate
            ? `${checkinDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}-${checkoutDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}`
            : "Any Week"}
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {guests > 0 ? `${guests} guests` : "Add Guests"}
        </span>
        <span className=" search material-icons-outlined ">search</span>
      </div>
      <nav
        className="d-flex align-center gap-large"
        onClick={handleContainerClick}
      >
        <div
          className="nav d-flex align-center cursor-pointer"
          onClick={handleProfileClick}
        >
          <span className="material-icons-outlined profile-option menu">
            menu
          </span>
          <span className="material-icons-outlined profile-option person">
            person
          </span>
          {accessToken && showLogout && (
            <div
              className="logout-popup shadow"
              style={{
                position: "absolute",
                top: "3rem",
                right: 0,
                background: "#fff",
                borderRadius: "4px",
                zIndex: 10,
                padding: "1rem",
              }}
            >
              <button
                className="button btn-outline-primary cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
