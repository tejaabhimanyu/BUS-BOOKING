import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

import View from './View';


class List extends Component {
    constructor(){
        super()
        this.state={
            
            users:[View]
        }
        this.viewuser=this.viewuser.bind(this)
        this.signuser = this.signuser.bind(this)
    }
    viewuser(){
        this.props.history.push("/view/${id}");

    }
    signuser(){
        this.props.history.push('/sign');
    }
    componentDidMount(){
        Bookingservice.getusers().then((res) =>{  
            this.setState({users:res.data});

        });
    }

   

    render() {
        return (
            <div>
                    <h2 className="text-center">Users list</h2>
                    <div className="row">
                    <button className="hone" onClick={this.signuser}>Signup-User</button>
                    <table style={{marginLeft: "50px"}} className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>id</th>
                                <th>firstname</th>
                                <th>lastname</th>
                                <th>email</th>
                                
                                <th>Actions</th>
                            </tr>


                        </thead>
                        <tbody>

                            {
                                this.state.users.map(
                                    user =>
                                    <tr key= {user.id}>
                                        <td> {user.id} </td>
                                        <td> {user.firstname} </td> 
                                        <td> {user.lastname} </td>
                                        <td>{user.email}</td>
                                        
                                        
                                        <button className="view" onClick={() =>this.viewuser(user.id)}>View</button>

                                        


                                    </tr>
                                )
                            }

                        </tbody>



                    </table>


                    </div>
            </div>
        );
    }
}

export default List;