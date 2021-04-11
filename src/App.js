import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import Listbookings from './components/Listbookings';
import Afterlogin from './components/Afterlogin';
import Plantravel from './components/Plantravel';
import Adminlogin from './components/Adminlogin';
import Homepage from './components/Homepage';
import Addbus from './components/Addbus';
import Login from './components/Login';
import Signup from './components/Signup';
import Afteruserlogin from './components/Afteruserlogin';
import Userbooking from './components/Userbooking';
import ViewBookingComponent from './components/ViewBookingComponent';

function App() {
  return (
    <div className="container">
      <Router>
        
               <HeaderComponent />
                   <div className="container">
                   
                     <Switch>
                     <Route path="/" exact component= {Homepage}></Route>
                        <Route path="/afterlogin" component= {Afterlogin}></Route>
                       <Route path="/bookings" component= {Listbookings}></Route>
                       <Route path="/plan-travel" component= {Plantravel}></Route>
                       <Route path="/adminlogin" component= {Adminlogin}></Route>
                       <Route path="/addbus" component= {Addbus}></Route>
                       <Route path="/userlogin" component= {Login}></Route>
                       <Route path="/signup" component= {Signup}></Route>
                       <Route path="/afteruserlogin" component= {Afteruserlogin}></Route>
                       <Route path="/mybookings" component= {Userbooking}></Route>
                       <Route path = "/view/:id" component = {ViewBookingComponent}></Route>


                     </Switch>
                   </div>
               
        
      </Router>
    </div>
    
    
  );
}

export default App;
