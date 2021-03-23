import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Adminlogin extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:'',
            status:''

        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
        this.login=this.login.bind(this);
    }
    cancel(){
        this.props.history.push("/")
    }
    login =(e) =>{
        e.preventDefault();
        let name=this.state.name;
        let pass=this.state.password;
        Bookingservice.adminlogin(name,pass).then((res) =>{
                this.setState({status: res.data});
                window.alert(this.state.status);
                this.state.status==='login successful' &&
                this.props.history.push("/afterlogin");
                
            
        });
    
    }
    changeStatusHandler=(event) =>{
        this.setState({status:event.target.value});
    }
    changeNameHandler = (event) =>{
        this.setState({name:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }

    render() {
        return (
            <div>
                
                
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-centre">Admin Login</h3>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                            <label>Name</label>
                            <input placeholder="name" name="name" className="form-control" 
                                            value={this.state.name} onChange={this.changeNameHandler} required/>

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

export default Adminlogin;