import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import HomeCrud from './Components/HomeCrud'
import CreateUsers from './Components/CreateUsers'
import Users from './Components/Users'
import Editusers from './Components/Editusers'

const App=()=>{
  return (
    <div>
      <BrowserRouter>
      <HomeCrud/>
      <Routes>
        <Route path="/abc" element={<CreateUsers/>}/>
        <Route path="/xyz" element={<Users/>}/>
        <Route path="/edit/:nath" element={<Editusers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App