import React, { Component } from 'react'
import Bookingservice from '../services/Bookingservice'

class ViewBookingComponent extends Component {
    constructor(props){
         super (props)
             this.state={
                 id: props.match.params.id,
                 bookings:{}
             }
         }
  
    componentDidMount() {

           Bookingservice.viewbooking(this.state.id).then((res) => {
                 this.setState({bookings: res.data});
             });
         }
    render() {
        return (
           
            <div>
                <br></br>
                
                           <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Booking Details</h3>
                    <div className = "card-body">

                         <div className = "row">
                            <label style={{color: "blue"}}> username: </label>
                            <div> { this.state.bookings.username }</div>
                        </div>

                        <div className = "row">
                            <label style={{color: "blue"}}> source: </label>
                            <div > { this.state.bookings.source }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: "blue"}}> destination: </label>
                            <div> { this.state.bookings.destination }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: "blue"}}> date: </label>
                            <div> { this.state.bookings.date}</div>
                        </div>
                        <div className = "row">
                            <label style={{color: "blue"}}> noofpassengers: </label>
                            <div> { this.state.bookings.noofpassengers }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: "blue"}}> buscode: </label>
                            <div> { this.state.bookings.buscode }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    // constructor(props){
    //     super(props)
    //     this.state={
    //         id: props.match.params.id,
    //         bookings:[]
    //     }
    // }

    // componentDidMount() {

    //     Bookingservice.viewbooking(this.state.id).then((res) => {
    //         this.setState({bookings: res.data});
    //     });
    // }
    
    // render() {
    //     console.log(this.props.match.params.id);
    //     return (
    //         <div>
    //                 <h2 className="text-center">Booking list</h2>
    //                 <div className="row">
    //                 <table style={{marginLeft: "50px"}} className="table table-striped table-bordered">
    //                     <thead>
    //                         <tr>
    //                             {this.props.match.params.id}
    //                             <th>username</th>
    //                             <th>laetname</th>
    //                             <th>Actions</th>
    //                             <th>laetname</th>
    //                             <th>Actions</th>
    //                             <th>Actions</th>
    //                         </tr>


    //                     </thead>
    //                     <tbody>

    //                         {
    //                             this.state.bookings.map(
    //                                 bookings=>
    //                                 <tr key= {bookings.id}>
    //                                     <td> {bookings.username} </td> 
    //                                     <td> {bookings.source} </td>
    //                                     <td> {bookings.destination }</td>
    //                                     <td> {bookings.date }</td>
    //                                     <td> {bookings.noofpassengers }</td>
    //                                     <td> {bookings.buscode }</td>
    //                                 </tr>
    //                             )
    //                         }
    //                     </tbody>
    //                 </table>
    //                 </div>
    //         </div>
    //     );
    // }
}

export default ViewBookingComponent