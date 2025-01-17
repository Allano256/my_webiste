
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Contact from './pages/Contact'
import Applayout from './pages/Applayout'
import Projects from './pages/Projects'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route  element={<Applayout />}  >


      <Route index  element={<Navigate replace to="Home" />}  />
      

      </Route>

      <Route path='contact' element={<Contact />} />
      <Route path='projects' element={<Projects />} />

   </Routes>
   </BrowserRouter> 
  )
}

export default App
