import logo from "./logo.svg";
import "./App.css";
import { RootContextProvider } from "./components/context/RootContext";
import { RootComp } from "./components";

function App() {
  return (
    <div className="App">
      <RootContextProvider>
        <RootComp />
      </RootContextProvider>
    </div>
  );
}

export default App;
