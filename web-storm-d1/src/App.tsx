
import './App.css'
import ButtonComponent from "./components/ButtonComponent.tsx";

function App() {

    function handleClick(type:string) {
        console.log('click');
        alert(type+' clicked');
    }
  return (
      <>
          <ButtonComponent name={ "Dashboard"} onClick={handleClick}>DashBoard</ButtonComponent>
          <ButtonComponent name={ "Add Customer"} onClick={handleClick}>Add Customer</ButtonComponent>
          <ButtonComponent name={ "Delete Customer"} onClick={handleClick}></ButtonComponent>
      </>
  )
}

export default App
