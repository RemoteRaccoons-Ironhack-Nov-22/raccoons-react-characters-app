import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';
import About from './components/About';
import Contact from './components/Contact';

function App() {



  return (
    <div className="App">

      <nav>
        <p>this is the header</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>


      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/characters/:characterId' element={<CharacterDetails />} />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact />} />
        
        <Route path="*" element={ <h2>404 - sorry, that route does not exist</h2>} />
      </Routes>

      <p>this is the footer</p>
      

    </div>
  );
}

export default App;
