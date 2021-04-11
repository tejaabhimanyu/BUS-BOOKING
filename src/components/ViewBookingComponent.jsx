import React, { Component } from 'react'
import Bookingservice from '../services/Bookingservice'
import '../App.css';

class ViewBookingComponent extends Component {
    constructor(props){
         super (props)
             this.state={
                 id: this.props.match.params.id,
                 date: new Date().toLocaleString(),
                 bookings:{}
             }

         }
  printReceipt() {
    window.print();
  }
  
    componentDidMount() {

           Bookingservice.getBookingById(this.state.id).then((res) => {
                 this.setState({bookings: res.data});
             });
         }
        //  print(){
        //     this.props.history.push('/print');
        //  }
        
    render() {
        return (
           
            <div>
                <br></br>
          {/* <button onClick={this.print()}> click</button> */}
                           <div className = "card col-md-6 offset-md-3">
                      
                    <h3 className = "text-center"> View Booking Details</h3>
                    <p Style="text-align:right;"> {this.state.date}</p>
        {/* <img width="auto" height="auto" src={bus} alt="bus" /> */}
                    <div className = "card-body" class="print-receipt">

                         <div className = "row">
                            <label> username: </label>
                            <div> { this.state.bookings.username }</div>
                        </div>

                        <div className = "row">
                            <label> source: </label>
                            <div> { this.state.bookings.source }</div>
                        </div>
                        <div className = "row">
                            <label> destination: </label>
                            <div> { this.state.bookings.destination }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: "red"}}> date: </label>
                            <div> { this.state.bookings.date}</div>
                        </div>
                        <div className = "row">
                            <label> noofpassengers: </label>
                            <div> { this.state.bookings.noofpassengers }</div>
                        </div>
                        <div className = "row">
                            <label> buscode: </label>
                            <div> { this.state.bookings.buscode }</div>
                        </div>
                    </div>

                </div >
                <div className = "text-center">
                <button class="hide-on-print"  onClick={this.printReceipt}>Print</button>
                </div>
            </div>
        )
    }
   
}

export default ViewBookingComponent