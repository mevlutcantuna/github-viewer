import React from "react";
import axios from "axios";

function Followers({ person }) {
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    const API = person.followers_url;
    axios.get(API).then((res) => setFollowers(res.data));
  }, [person]);

  console.log(followers);
  return (
    <div>
      <h2>Followers</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {followers.map((item) => (
          <div style={{ margin: "1rem 1rem" }} key={item.id}>
            <img
              style={{ width: "10rem", borderRadius: "1rem" }}
              src={item.avatar_url}
              alt={"#"}
            />
            <div>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={item.html_url}
              >
                {item.login}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Followers;
