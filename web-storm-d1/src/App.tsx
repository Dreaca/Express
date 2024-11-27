
import './App.css'
import Button from "./Button.tsx";

function App() {
    const bool : boolean = true;
  return (
      <>
          <div>
              {bool?'true':'false'}
              <Button></Button>
          </div>
      </>
  )
}

export default App
