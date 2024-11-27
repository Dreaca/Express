
import './App.css'
import Item from './components/Item.tsx';

function App() {

  return (
      <>
          <div>
            <Item {...itemsList[0]}/>
            <Item {...itemsList[1]} />
            <Item {...itemsList[2]} />
          </div>
      </>
  )
}
const itemsList = [
    {
        title : 'RAD',
        desc : 'Lorem Ipsum'
    },
    {
        title : "MAD",
        desc : "Lorem Ipsum"
    },
    {
        title : "SA",
        desc : "Lorem"
    }
]

export default App
