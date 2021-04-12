import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import Sign from './components/Sign';
import Homepage from './components/Homepage'
import login from './components/login'

import List from './components/List';
import View from './components/View';




function App() {
  return(
    <div className="container">
    <Router>
      
              <HeaderComponent /> 
              {/* < List /> */}
              {/* < Sign /> */} 
              
                {/* <Sign />  */}
               {/* < View /> */}    
                 <div className="container">  
                    
                   <Switch>
                   
                    <Route path="/" exact component= {List}></Route>
                      <Route path="/sign" component= {Sign}></Route>  
                      
                      <Route path="/view"  component={View}></Route>  
                     
                     
                   </Switch>
                 </div>
             
      
    </Router>
  </div>
  );
}

export default App;
