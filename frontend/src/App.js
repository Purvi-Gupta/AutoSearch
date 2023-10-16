
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Final from './component/Final';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/final/:id' element={<Final/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
