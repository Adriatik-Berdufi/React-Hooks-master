import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
const ErroreBase = () => {
  let titolo = "Hello Word";
  const cambiaTitolo = () => {
    titolo = "Nuovo titolo inserito";
    console.log(titolo);
  };
  return (
    <>
      <div>{titolo}</div>
      <button
        type="button"
        className="btn btn-info my-3"
        onClick={cambiaTitolo}
      >
        cambia titolo
      </button>
    </>
  );
};

export default ErroreBase;
