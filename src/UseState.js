import React from "react";

const SECURITY_CODE = "456";

function UseState({ text }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
  });

  React.useEffect(() => {
    if (!!state.loading) {
      console.log("Validating...");

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

        console.log("Validation completed");
      }, 2000);
    }
  }, [state.loading]);

  return (
    <div>
      <h2>Component created with: {text}</h2>

      <p>Please enter the security code.</p>

      {state.error && !state.loading && <p>Error: Incorrect code</p>}

      {state.loading && <p>Loading...</p>}

      <input
        placeholder="Security code"
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
        Validate
      </button>
      <p className="valid">Valid security code: {SECURITY_CODE}</p>
    </div>
  );
}

export { UseState };
