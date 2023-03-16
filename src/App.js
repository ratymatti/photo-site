import { React, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Photo from './components/Photo/Photo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [active, setActive] = useState('photo');

  return (
    <div className="App">
      <header className='header'>
        <ul>
              <li><button onClick={() => setActive('photo')}>PHOTO</button></li>
              <li><button onClick={() => setActive('about')}>ABOUT</button></li>
              <li><button onClick={() => setActive('contact')}>CONTACT</button></li>
        </ul>
        <h1>MATTI RÄTY</h1>    
      </header>
      <div className='content'>
        {active === 'photo' && <Photo />}
        {active === 'about' && <About />}
        {active === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
