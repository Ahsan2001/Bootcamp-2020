import logo from './logo.svg';


import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import ChangeTheme from './components/ChangeTheme';

function App() {

  let [count, setCount] = useState(0);
  let [color, changeColor] = useState(false);

  let Add = () => {
    console.log("Adding")
    setCount(++count)
  }

  let Subtract = () => {
    console.log("Subtract")
    setCount(--count)
  }

  return (
    <div className="App">

      <ChangeTheme colorDay={color} colorNight={changeColor} />
 
      <header className={`App-header  ${color ? 'dayLight' : 'nightLight'}`}         > 
        <img src={logo} className="App-logo" alt="logo" />
        <Counter counter={count}  />
        <div className='buttonParent'>
          <button onClick={Add}>Add</button>
          <button onClick={Subtract}>Subtract</button>
        </div>
      </header>
    </div>
  );
}

export default App;
