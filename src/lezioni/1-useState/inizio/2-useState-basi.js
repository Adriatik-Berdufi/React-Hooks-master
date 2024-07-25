import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  //   const value = useState()[0];
  //   const handler = useState()[1];
  //   console.log(value, handler);
  const [count, setCount] = useState(1);
  const [titolo, setTitolo] = useState("Hello");

  const incrementa = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const decrementa = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(5);
    }
  };
  const saluta = () => {
    if (titolo == "Hello") {
      setTitolo("Hi Bro!!");
    } else {
      setTitolo("Hello");
    }
  };

  return (
    <>
      <div className="card mt-5 mx-auto w-50 p-3">
        <h2> {titolo}</h2>
        <h2> {count}</h2>
        <button className="btn btn-primary w-25 mx-auto" onClick={saluta}>
          Saluta
        </button>
        <div>
          <button
            type="button "
            className="btn btn-info shadow me-3 w-25 mx-auto"
            onClick={incrementa}
          >
            incrementa
          </button>
          <button
            type="button"
            className="btn btn-info shadow m-3 w-25 mx-auto"
            onClick={decrementa}
          >
            decrementa
          </button>
        </div>
      </div>
    </>
  );
};

export default UsoBase;
