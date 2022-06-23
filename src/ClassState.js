import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "123";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  // UNSAFE_componentWillMount() {
  //   console.log("UNSAFE_componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  componentDidUpdate() {
    console.log("componentDidUpdate");

    if (!!this.state.loading) {
      console.log("Haciendo la validación");

      setTimeout(() => {
        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log("Validación finalizada");
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, introcude el código de seguridad.</p>

        {this.state.error && !this.state.loading && (
          <p>Error: El código es incorrecto</p>
        )}

        {this.state.loading && <Loading />}

        <input
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          onClick={() =>
            this.setState({
              // error: !this.state.error,
              loading: true,
            })
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
