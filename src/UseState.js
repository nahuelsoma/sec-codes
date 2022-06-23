import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!!loading) {
      console.log("Haciendo la validación");
      setTimeout(() => {
        setLoading(false);
        console.log("Validación finalizada");
      }, 2000);
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, introcude el código de seguridad.</p>

      {error && <p>Error: El código es incorrecto</p>}

      {loading && <p>Cargando...</p>}

      <input placeholder="Código de seguridad" />
      <button
        onClick={() => {
          setError(!error);
          setLoading(true);
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
