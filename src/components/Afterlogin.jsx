import React, { Component } from 'react';

class Afterlogin extends Component {
    constructor(props){
        super(props)
        
        this.state={
            bookings:[]
            
        }
        this.bookings=this.bookings.bind(this);
        this.registeredusers=this.registeredusers.bind(this);
        this.savebus=this.savebus.bind(this);
        this.logout=this.logout.bind(this);
    }
    savebus(){
        this.props.history.push('/addbus');
    }
    
    bookings(){
        this.props.history.push('/bookings');
    }
    registeredusers(){
        this.props.history.push('/plan-travel');
    }
    logout(){
        this.props.history.push('/');
    }

    
    render() {
        return (
            <div class="btn-group-vertical">

             <button className="btn btn-primary" onClick={this.bookings}>All bookings</button>

             <br></br> 
             <button className="btn btn-primary" onClick={this.savebus}>Add bus</button> 
             <br></br> 
             <button className="btn btn-primary" onClick={this.logout}>Logout</button>   
            </div>
        );
    }
}

export default Afterlogin;