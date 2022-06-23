import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "789";

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
      console.log("Validating...");

      setTimeout(() => {
        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log("Validation completed");
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <h2>Component created with: {this.props.text}</h2>

        <p>Please enter the security code.</p>

        {this.state.error && !this.state.loading && (
          <p>Error: Incorrect code</p>
        )}

        {this.state.loading && <Loading />}

        <input
          placeholder="Security code"
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
          Validate
        </button>
        <p className="valid">Valid security code: {SECURITY_CODE}</p>
      </div>
    );
  }
}

export { ClassState };
