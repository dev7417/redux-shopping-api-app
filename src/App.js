import './App.css';
import Product from './Components/Product';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Datacard from './Components/Datacard';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/cart/:id' element={<Datacard />}/>
      <Route exact path='/' element={<Product />}>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
