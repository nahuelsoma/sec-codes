import React from "react";

const SECURITY_CODE = "123";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
  });

  React.useEffect(() => {
    if (!!state.loading) {
      console.log("Haciendo la validación");
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }

        console.log("Validación finalizada");
      }, 2000);
    }
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>

      <p>Por favor, introcude el código de seguridad.</p>

      {state.error && !state.loading && <p>Error: El código es incorrecto</p>}

      {state.loading && <p>Cargando...</p>}

      <input
        placeholder="Código de seguridad"
        value={state.value}
        onChange={(event) => {
          setState({
            ...state,
            value: event.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          setState({
            ...state,
            error: false,
            loading: true,
          });
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
