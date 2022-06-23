import React from "react";

const SECURITY_CODE = "123";

const initialState = {
  value: "",
  loading: false,
  error: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  error: "Error",
  confirm: "Confirm",
  write: "Write",
  check: "Check",
  delete: "Delete",
  reset: "Reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.confirm:
      return {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
      };
    case actionTypes.write:
      return {
        ...state,
        value: action.payload,
      };
    case actionTypes.check:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.delete:
      return {
        ...state,
        deleted: true,
      };
    case actionTypes.reset:
      return {
        ...state,
        value: "",
        confirmed: false,
        deleted: false,
      };
    default:
      return {
        ...state,
      };
  }
};

function UseReducer({ text }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onReset = () => dispatch({ type: actionTypes.reset });
  const onWrite = (event) => {
    dispatch({ type: actionTypes.write, payload: event.target.value });
  };

  React.useEffect(() => {
    if (!!state.loading) {
      console.log("Validating...");

      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log("Validation completed");
      }, 2000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Component created with: {text}</h2>

        <p>Please enter the security code.</p>

        {state.error && !state.loading && <p>Error: Incorrect code</p>}

        {state.loading && <p>Loading...</p>}
        <input
          type="text"
          placeholder="Security code"
          value={state.value}
          onChange={onWrite}
        />
        <button onClick={onCheck}>Validate</button>
        <p className="valid">Valid security code: {SECURITY_CODE}</p>
      </div>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>Do you want to remove the component?</p>
        <button onClick={onDelete}>Yes</button>
        <button onClick={onReset}>No, return</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Successfully removed</p>
        <button onClick={onReset}>Reset</button>
      </React.Fragment>
    );
  }
}

export { UseReducer };
