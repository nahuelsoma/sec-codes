import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true,
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
        this.setState({ loading: false });
        console.log("Validación finalizada");
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, introcude el código de seguridad.</p>

        {this.state.error && <p>Error: El código es incorrecto</p>}

        {this.state.loading && <Loading />}

        <input placeholder="Código de seguridad" />
        <button
          onClick={() =>
            this.setState({
              error: !this.state.error,
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
