import logo from './logo.svg';
import './App.css';
import From from './From';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<From/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>

    </div>
  );
}

export default App;
