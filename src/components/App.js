import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [clicked, setclicked] = useState(false);

  useEffect(() => {
    const data = fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setList(json.data));
  }, []);

  return (
    <div id="main" style={{ padding: "2rem" }}>
      <h1>
        <span>Fetch Users</span>{" "}
        <button
          className="btn"
          style={{ float: "right" }}
          onClick={() => setclicked(true)}
        >
          Get User List
        </button>
      </h1>
      <table
        style={{
          backgroundColor: "wheat",
          width: "100%",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        <thead style={{ backgroundColor: "#222", color: "white" }}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {clicked ? (
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <img src={item.avatar} style={{}} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
