import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class View extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            user:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        
    }
   

    componentDidMount(){

        Bookingservice.getuserbyid(this.state.id).then((res) => {
            this.setState({user: res.data});
        });
    }

    render() {
        const devil ="  Sucess"
        return (
            <div>
                <h1>User details </h1>  
                <div>
                <h4>User first name:{this.state.user.firstname}</h4>
                <p></p>
                <h4>User Last name:{this.state.user.lastname}</h4>

                <h4>User email:{this.state.user.email}</h4>

                <h4>User Signup status:{devil}</h4>

                </div>
                

            </div>
        )
                   
}
}

export default View;