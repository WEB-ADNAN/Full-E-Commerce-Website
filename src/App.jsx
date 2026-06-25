import './App.css'
import Arrival from './components/Arrival'
import Bestselling from './components/Bestselling'
import Category from './components/Category'
import Delivery from './components/Delivery'
import Explore from './components/Explore'
import Flash from './components/Flash'
import Header from './components/Header'
import Music from './components/Music'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Header></Header>
      <Flash></Flash>
      <Category></Category>
      <Bestselling></Bestselling>
      <Music></Music>
      <Explore></Explore>
      <Arrival></Arrival>
      <Delivery></Delivery>
    </>
  )
}

export default App
