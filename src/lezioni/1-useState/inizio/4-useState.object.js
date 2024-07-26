import React, { useState } from "react";

const StateObject = () => {
  const [person, setPerson] = useState({
    name: "dario",
    age: 24,
    saluto: "ciao",
    gender: "M",
  });
  const cambiaSaluto = () => {
    setPerson({
      ...person,
      name: "mattia",
      age: 32,
      saluto: "ciao io sono mattia!",
    });
  };
  return (
    <div>
      <div className="item">
        <div className="text-left">
          <h3>{person.name}</h3>
          <h3>{person.age}</h3>
          <h3>{person.saluto}</h3>
          <h5>{person.gender}</h5>
        </div>
        <button className="button" onClick={cambiaSaluto}>
          saluta
        </button>
      </div>
    </div>
  );
};

export default StateObject;
