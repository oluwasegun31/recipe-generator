import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './Components';
import { ErrorPage, Home, SearchDetails, SearchRecipe } from './Pages';

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

          <Route path='search'>
            <Route
              index
              element = {<SearchRecipe />}
            />
            <Route 
              path='details/:pos'
              element={<SearchDetails />}
            />
          </Route>
          
          <Route 
            path='*'
            element = {<ErrorPage />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App;
