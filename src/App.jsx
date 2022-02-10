import logo from './banana-1.png';
// import { createApi } from 'unsplash-js';
// import Bananas from './Components/Bananas';
import NavMenu from './Components/NavMenu';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavMenu />
    </div>
  );
}
