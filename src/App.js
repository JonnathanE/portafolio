import { useState } from 'react';
import './App.scss';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Skill from './components/skill/Skill';
import Topbar from './components/topbar/Topbar';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <About />
        <Skill />
        <Portfolio />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
