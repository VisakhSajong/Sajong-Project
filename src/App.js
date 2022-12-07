import React from 'react'
// import Footer from './Pages/HomePage/Footer'
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserAccount from './Pages/UserAccount/UserAccount'
import NationalPark from './Pages/CardPage/NationalPark/NationalPark'
import Login from './Pages/Login/Login'
import Karnataka from './Pages/Karnataka/Karnataka'
import Naruneyyu from './Pages/DetailsPage/Naruneyyu/Naruneyyu'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { AppContext } from './AppContext'
import Humpi from './Pages/CardPage/Humpi/Humpi'


function App() {

  const [data, setData] = useState();
 

  useEffect(() => {
      
    axios.get("https://mygreenkitchen.in/mgkapi/mgkhome").then((Response)=>{
      // console.log(Response.data);
    setData(Response.data)  
    })    
 }, [])

  return (
    
      <div className='main'>
        <AppContext.Provider value={{data:data}}>
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
      <Routes>
      <Route path='humpi' element={<Humpi />}>
      </Route>
      </Routes>
      </Router>
      </AppContext.Provider>
    {/* <Footer /> */}
    </div>
  )
}


export default App