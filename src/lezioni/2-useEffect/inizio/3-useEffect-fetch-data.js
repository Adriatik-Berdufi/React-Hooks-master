import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";
const AxiosData = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    setUsers(response.data);
    console.log(response.data);
  };

  const deleteUser = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <button className="button mb-5" onClick={getData}>
        chiama axios
      </button>
      <div className="users">
        {users.map((user) => {
          const { id, login, url, avatar_url: img } = user;
          return (
            <div className="item shadow" key={id}>
              <h4>{login}</h4>
              <img src={img} alt={login} width="90px" className="" />
              <a href={url}>GIT</a>
              <button
                className="button delete-button mx-3"
                onClick={() => deleteUser(id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxiosData;
