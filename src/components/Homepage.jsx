import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.Adminlogin=this.Adminlogin.bind(this);
        this.Userlogin=this.Userlogin.bind(this);
        this.Signup=this.Signup.bind(this);
    }
    Adminlogin(){
        this.props.history.push('/adminlogin');
    }
    Userlogin(){
        this.props.history.push('/userlogin');
    }
    Signup(){
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div class="btn-group-vertical">

                <button className="btn btn-primary" onClick={this.Adminlogin}>Admin Login</button>
             <br></br> 
             <button className="btn btn-primary" onClick={this.Userlogin}>User Login</button> 
             <br></br> 
             <button className="btn btn-primary" onClick={this.Signup}>Signup</button>
                
            </div>
        );
    }
}

export default Homepage;