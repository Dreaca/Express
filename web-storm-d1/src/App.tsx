
import './App.css'
import Dashboard from "./components/Dashboard.tsx";
import LoginComponent from "./components/LoginComponent.tsx";
import {ReactElement} from "react";

function App() {
    const logged_in : boolean = true;

    let content :ReactElement;

    if(logged_in ) {
        content = <Dashboard/>;
    }else {
        content = <LoginComponent/>;
    }
  return (
      <>
          <div>
              {logged_in ? <Dashboard /> : <LoginComponent />}
              {content}
          </div>
      </>
  )
}

export default App
