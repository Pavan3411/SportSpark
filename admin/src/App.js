import './App.css';
import Login from './screen/login';
import Header from './components/header';
import Adduser from './screen/adduser';
import Register from './screen/register';
import Viewuser from './screen/viewuser';
import Dashboard from './screen/dashboard';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/footer';
import Viewcategory from './screen/viewcategory';
import Addcategory from './screen/addcategory';
import Viewsports from './screen/viewsports';
import Addsports from './screen/addsports';

function App() {
  return (
    
    <div>
      {sessionStorage.getItem("ad_login") == null?
      <>
      <Login/>
      </>
      :
      <>
      <Router>
        
        <Header/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/addsports' element={<Addsports/>}></Route>
          <Route path='/viewsports' element={<Viewsports/>}></Route>

          
          <Route path='/adduser' element={<Adduser/>}></Route>
          <Route path='/viewuser' element={<Viewuser/>}></Route>
          <Route path='/addcategory' element={<Addcategory/>}></Route>
          <Route path='/viewcategory' element={<Viewcategory/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      </>
    }
    
      
    </div>
  );
}

export default App;
