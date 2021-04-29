import React from "react";
import axios from "axios";

function Gists({ person }) {
  const [gists, setGists] = React.useState([]);

  React.useEffect(() => {
    const url = person.gists_url;
    if (url !== undefined) {
      const API = url.replace(/\{.*\}/, "");
      axios.get(API).then((res) => setGists(res.data));
    }
  }, [person]);

  console.log(gists);

  return (
    <div>
      {gists.map((item) => (
        <ul>
          <li key={item.owner.id} style={{ listStyleType: "none" }}>
            <a
              style={{ textDecoration: "none" }}
              rel={"noreferrer"}
              target={"_blank"}
              href={item.html_url}
            >
              {item.description || "NotFound Description"}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Gists;
