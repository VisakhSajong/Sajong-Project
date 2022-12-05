import React from 'react'
// import Footer from './Pages/HomePage/Footer'
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserAccount from './Pages/UserAccount/UserAccount'
import NationalPark from './Pages/CardPage/NationalPark/NationalPark'
import Login from './Pages/Login/Login'
import Karnataka from './Pages/Karnataka/Karnataka'
import Naruneyyu from './Pages/DetailsPage/Naruneyyu'


function App() {
  return (
    <div className='main'>

      <Router>
      <Routes>
      <Route exact path='/' element={<HomePage />}>
      </Route>
      </Routes>
      
      <Routes>
      <Route path='user' element={<UserAccount />}>
      </Route>
      </Routes>
      <Routes>
      <Route path='Park' element={<NationalPark />}>
      </Route>
      </Routes>
      <Routes>
      <Route path='login' element={<Login />}>
      </Route>
      </Routes>
      <Routes>
      <Route path='karnataka' element={<Karnataka />}>
      </Route>
      </Routes>
      <Routes>
      <Route path='neyyu' element={<Naruneyyu />}>
      </Route>
      </Routes>
      </Router>
      
    {/* <Footer /> */}
    </div>
  )
}

export default App