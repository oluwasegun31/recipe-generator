import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar} from './Components';
import { Home, SearchRecipe } from './Pages';

function App() {
  return(
    <>
      <Navbar />
      <main>
        <Routes>
          <Route 
            path='/'
            element ={<Home />}
          />
          <Route
            path="search"
            element = {<SearchRecipe />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App;
