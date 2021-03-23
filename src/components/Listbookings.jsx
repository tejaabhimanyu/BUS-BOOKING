import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Listbookings extends Component {
    constructor(props){
        super(props)
        this.state={
            bookings:[]
        }
    }

    componentDidMount(){

        Bookingservice.getbookings().then((res) => {
            this.setState({bookings: res.data});
        });
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

export default Listbookings;