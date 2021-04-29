import React from "react";
import axios from "axios";

function Repos({ person }) {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    const API = person.repos_url;
    if (API !== undefined) {
      axios.get(API).then((res) => setRepos(res.data));
    }
  }, [person]);

  console.log(repos);

  return (
    <div>
      {repos.map((item) => (
        <ul>
          <li key={item.id} style={{ listStyleType: "none" }}>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.15rem",
              }}
              href={item.html_url}
            >
              {item.name}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Repos;
