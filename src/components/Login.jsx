import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            status:''

        }
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
        this.login=this.login.bind(this);
    }
    cancel(){
        this.props.history.push("/")
    }
    login =(e) =>{
        e.preventDefault();
        let username=this.state.username;
        let password=this.state.password;
        Bookingservice.userlogin(username,password).then((res) =>{
                this.setState({status: res.data});
                window.alert(this.state.status);
                this.state.status==='login successful' &&
                this.props.history.push({pathname:'/afteruserlogin'});
                window.localStorage.setItem("x",this.state.username);
                
            
        });
    
    }
    changeStatusHandler=(event) =>{
        this.setState({status:event.target.value});
        
    }
    changeUserNameHandler = (event) =>{
        this.setState({username:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }

    render() {
        return (
            <div>
                
                
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-centre">User Login</h3>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                            <label>UserName</label>
                            <input placeholder="username" name="username" className="form-control" 
                                            value={this.state.username} onChange={this.changeUserNameHandler} required/>

                            </div>
                            <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="password" name="password" className="form-control" 
                                            value={this.state.password} onChange={this.changePasswordHandler} required/>
                             </div>
                             <button className="btn btn-success" onClick={this.login}>Submit</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                             </form>
                         </div>
                    </div>
             </div>
         </div>
        );
    }
}

export default Login;