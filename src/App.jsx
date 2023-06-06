import './App.css'
import { Register } from './pages/register/register'
import { Login } from './pages/login/login'
import { Home } from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        
      </Routes>
    </>
  )
}

export default App
