import React from "react";
import { routes } from "../Routes/Routes";

function Navbar({ handleActivePage, isThere }) {
  return (
    <div>
      <h1 style={{ fontSize: "3rem" }}>Github Viewers</h1>
      <div style={{ margin: "2rem auto" }}>
        <button
          style={styleButton}
          onClick={() => handleActivePage(routes.main.path)}
        >
          Home
        </button>
        <button
          disabled={!isThere}
          style={styleButton}
          onClick={() => handleActivePage(routes.repos.path)}
        >
          Repositories
        </button>
        <button
          disabled={!isThere}
          style={styleButton}
          onClick={() => handleActivePage(routes.gists.path)}
        >
          Gists
        </button>
        <button
          disabled={!isThere}
          style={styleButton}
          onClick={() => handleActivePage(routes.followers.path)}
        >
          Followers
        </button>
      </div>
    </div>
  );
}

const styleButton = {
  width: "23%",
  marginRight: "1%",
  height: "2.25rem",
  borderRadius: "0.25rem",
  border: "none",
  backgroundColor: "#fdce4c",
};

export default Navbar;
