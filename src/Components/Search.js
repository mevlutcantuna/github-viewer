import React from "react";

function Search(props) {
  return (
    <div className={"search"}>
      <div>
        <h2>Search For a User</h2>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <input
          style={{
            width: "15rem",
            height: "2.25rem",
            fontSize: "1.25rem",
            borderRadius: ".25rem",
            paddingLeft: "0.5rem",
            border: "2px solid #fdce4c",
          }}
          value={props.input}
          onChange={(event) => props.handleChangeInput(event.target.value)}
        />
        <button
          style={{
            height: "2.5rem",
            width: "5rem",
            marginLeft: "0.5rem",
            borderRadius: ".25rem",
            background: "#d98e11",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={props.handleSearch}
        >
          Search
        </button>
      </div>

      <div style={props.isThere ? {} : { display: "none" }}>
        <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
          {props.person.login}
        </div>
        <div>
          <div>
            <div
              style={
                props.person.name === null
                  ? { display: "none" }
                  : { fontSize: "1.10rem" }
              }
            >
              <span style={{ fontWeight: "bold" }}>Name : </span>
              <span>{props.person.name}</span>
            </div>
            <div
              style={
                props.person.company === null
                  ? { display: "none" }
                  : { fontSize: "1.10rem" }
              }
            >
              <span style={{ fontWeight: "bold" }}>Company : </span>
              <span>{props.person.company}</span>
            </div>
            <div
              style={
                props.person.location === null
                  ? { display: "none" }
                  : { fontSize: "1.10rem" }
              }
            >
              <span style={{ fontWeight: "bold" }}>Location : </span>
              <span>{props.person.location}</span>
            </div>
            <div
              style={
                props.person.followers === null
                  ? { display: "none" }
                  : { fontSize: "1.10rem" }
              }
            >
              <span style={{ fontWeight: "bold" }}>Followers : </span>
              <span>{props.person.followers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
