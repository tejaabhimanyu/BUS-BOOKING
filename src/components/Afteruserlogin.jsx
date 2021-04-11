import React, { Component } from 'react';

class Afteruserlogin extends Component {
    constructor(props){
        super(props)
        
        this.state={
            
            
        }
        this.bookings=this.bookings.bind(this);
        this.planbookings=this.planbookings.bind(this);
        this.logout=this.logout.bind(this);
        
    }
    
    bookings(){
        this.props.history.push( '/mybookings');
    }
    planbookings(){
        
        this.props.history.push('/plan-travel');
    }
    logout(){
        this.props.history.push('/');
        window.localStorage.clear();
    }

    
    render() {
        return (
            
            <div class="btn-group-vertical">

                <h3>Welcome  {window.localStorage.getItem("x")}</h3>
             <button  className="btn btn-primary" onClick={this.bookings}>My bookings</button>
             <br></br>



             <button className="btn btn-primary" onClick={this.planbookings}>plan bookings</button>
             <br></br> 



             <button className="btn btn-primary" onClick={this.logout}>Logout</button>    
            </div>
        );
    }
}


export default Afteruserlogin;