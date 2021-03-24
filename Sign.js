import React ,{Component}from  'react';

import Bookingservice from '../services/Bookingservice'





//import Header from "./components/Header";


class Sign extends Component{
  constructor(){
      super()
      this.state= {
          firstname : "",
          lastname : "",
          email :"",
          password :"",
          status :"",
          isSigned:""
        }
        this.handlecheck = this.handlecheck.bind(this)
        this.signup = this.signup.bind(this)
        this.changeStatusHandler = this.changeStatusHandler.bind(this)
        this.cancel = this.cancel.bind(this)
       
       
        }

        handlecheck=(event) =>{
         
          
          const {name,value}=event.target 
          this.setState({[name] : value
          })
        }
        changeStatusHandler=(event) =>{
          this.setState({status:event.target.value});
      }
       cancel(){
         this.props.history.push("/")
     }
     viewUser(id){
      this.props.history.push("/view");
     
  }
        
        signup = (event) =>{
           //alert("sign up sucess dude")
          this.setState(prevState => {
            return{
              isSigned : !prevState.isSigned

            }
          })
          event.preventDefault();
          const user ={firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password}
            Bookingservice.usersignup(user).then((res) =>{        
              
              this.setState({status:res.data});
            window.alert(this.state.status);
            this.setState =({status:"registered succesfully" })
            
            //this.props.history.preventDefault("/");
            

          });
        }
        
          render(){
              const Signup = this.state.isSigned ? "back": "signup"
              const disptext =this.state.isSigned ?" Signup Sucess " : "Ready to signup"
   return(
     <main>
     <h2> Sign up user</h2>
       <form>
         <input name = "firstname"
          value ={this.state.firstname}  
          onChange={this.handlecheck}
           placeholder = "firstname"
           />
           <br />
           <input name = "lastname" 
           value = {this.state.lastname}
           onChange={this.handlecheck}
           placeholder="lastname"
           />
           <br />
           <input name ="email"
           value = {this.state.email}
           onChange={this.handlecheck}
           placeholder = "email"
           />
           <br />
           < input type= "password" name = "password"
           value ={this.state.password}
           onChange = {this.handlecheck}
           placeholder = "password"
           />
          <br/>
          <button className ="button" onClick = {this.signup} >{Signup}</button>
         
          <button className="putton" onClick={this.cancel}>Clear</button>
          
         
          
          <br />
         
           <h3>{disptext}</h3> 
          {/* <img src={pic}  alt="pic" /> */}           
          <hr />
          <hr />
          <br />
          <h1>Entered information:</h1>
          <h3>your firstname : {this.state.firstname}</h3>
          <h3>your lastname : {this.state.lastname}</h3>
          <h3>Email id : {this.state.email}</h3>
          </form>
          
          
    </main>
    
        )
    }





}
export default Sign;