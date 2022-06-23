import { UseReducer } from "./UseReducer.js";
import { UseState } from "./UseState.js";
import { ClassState } from "./ClassState.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <UseReducer text="React.useReducer" />
      </section>
      <section>
        <UseState text="React.UseState" />
      </section>
      <section>
        <ClassState text="extends React.Component" />
      </section>
    </div>
  );
}

export default App;
