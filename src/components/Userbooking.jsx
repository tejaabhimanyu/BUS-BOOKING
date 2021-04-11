import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Userbooking extends Component {
    constructor(props){
        super(props)
        this.state={
            bookings:[]
        }
        this.deleteBooking = this.deleteBooking.bind(this);
       //this.viewBooking =this.viewBooking.bind(this);
        }

    componentDidMount(){

        Bookingservice.userbooking(window.localStorage.getItem("x")).then((res) => {
            this.setState({bookings: res.data});
        });
    }
    deleteBooking(id){
        Bookingservice.deleteBooking(id).then( res => {
            this.setState({bookings: this.state.bookings.filter(booking => booking.id !== id)});
        });
       
    }
    
    getBookingById(id){
        this.props.history.push(`/view/${id}`);

        //this.props.history.push(`/print`);
    }
    render() {
        return (
            <div>
                    <h2 className="text-center">Booking list</h2>
                    <div className="row">
                    <table style={{marginLeft: "50px"}} className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>username</th>
                                <th>source</th>
                                <th>destination</th>
                                <th>date</th>
                                <th>noofpassengers</th>
                                <th>bus</th>
                                <th>Actions</th>
                            </tr>


                        </thead>
                        <tbody>

                            {
                                this.state.bookings.map(
                                    bookings =>
                                    <tr key= {bookings.id}>
                                        <td> {bookings.username} </td> 
                                        <td> {bookings.source} </td>
                                        <td> {bookings.destination} </td>
                                        <td> {bookings.date} </td>
                                        <td> {bookings.noofpassengers} </td>
                                        <td> {bookings.buscode} </td>
                                        <td>
                                            
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBooking(bookings.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.getBookingById(bookings.id)} className="btn btn-info">View </button>
                                             </td>
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

export default Userbooking;