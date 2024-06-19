import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./screen/about";
import Home from "./screen/home";
import Event from "./screen/event";
import Gallery from "./screen/gallery";
import Testimonial from "./screen/testimonial";
import Contact from "./screen/contact";
import Signup from "./screen/Signup";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./screen/Login";
import'bootstrap/dist/css/bootstrap.min.css'
import Vieweventsports from "./screen/vieweventsports";
import Sportscard from "./screen/sportscard";
import Localmatch from "./screen/localmatch";
import Viewmatch from "./screen/viewmatch";
import Temp from "./screen/temp"

function App() {
 
  return (
    
    <div>
    
    <Router>  
      <Header/>
      
      
         <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/event' element={<Event/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/testimonial' element={<Testimonial/>}></Route>
        <Route path='/vieweventsports' element={<Vieweventsports/>}></Route>
        <Route path='/sportscard' element={<Sportscard/>}></Route>
        <Route path='/localmatch' element={<Localmatch/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/viewmatch' element={<Viewmatch/>}></Route>
        <Route path='/temp' element={<Temp/>}></Route>
      
      </Routes>
      {/* <Footer/> */}
      </Router>
 
     
    </div>
  );
}
export default App;
