
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Applayout from './pages/Applayout'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route  element={<Applayout />}  >


      <Route index  element={<Navigate replace to="Home" />}  />
      

      </Route>

      <Route path='contact' element={<Contact />} />

   </Routes>
   </BrowserRouter> 
  )
}

export default App
