import React, { useState } from "react";
import { data } from "../../../data";

const ArrayState = () => {
  const [persons, setPersons] = useState(data);

  const deleteItem = (id) => {
    let newpersons = persons.filter((person) => person.id !== id);
    setPersons(newpersons);
  };
  return (
    <>
      {persons.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className="item shadow">
            <h3>{name}</h3>
            <button
              className="button delete-button"
              onClick={() => deleteItem(id)}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
