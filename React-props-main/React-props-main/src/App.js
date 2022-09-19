import logo from './logo.svg';
import Ahsan from './components/Ahsan';
import Sabir from './components/Sabir';
import Shaikh from './components/Shaikh';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Ahsan firstName="Ahsan" /> 
         <Sabir middleName="Sabir" /> 
         <Shaikh lastName="Shaikh" /> 
      </header>
    </div>
  );
}

export default App;
