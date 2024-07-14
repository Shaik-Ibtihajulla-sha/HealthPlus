import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './components/Login'
import RegisterForm from './components/Register'
import Home from './components/Home'
import MedicalEducation from './components/MedicalEducation'
import Contact from './components/Contact'
import NewHome from './components/NewHome'
import NotFound from './components/NotFound'
import Services from './components/services'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route exact path = "/login" element = {<Login />} />
      <Route exact path="/" element= {<Home/>} />
      <Route exact path="/healthTips" element={<MedicalEducation/>} />
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/newHome" element={<NewHome/>} />
      <Route element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App