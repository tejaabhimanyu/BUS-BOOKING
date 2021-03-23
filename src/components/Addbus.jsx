import React, { Component } from 'react';
import Bookingservice from '../services/Bookingservice';

class Addbus extends Component {
    constructor(props){
        super(props)
        this.state={
            id:0,
            code:0,
            source:'',
            destination:'',
            time:'',
            price:0
        }
        this.changeCodeHandler=this.changeCodeHandler.bind(this);
        this.changeSourceHandler=this.changeSourceHandler.bind(this);
        this.changeDestinationHandler=this.changeDestinationHandler.bind(this);
        this.changeTimeHandler=this.changeTimeHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.savebus=this.savebus.bind(this);
    }
    savebus = (e) => {
        e.preventDefault();
        let booking={code:this.state.code,source:this.state.source,destination:this.state.destination,time:this.state.time,price:this.state.price};
        console.log('booking => ' + JSON.stringify(booking));

        Bookingservice.addbus(booking).then(res =>{
                this.props.history.push('/');
                window.alert("success");
        });
    }
    cancel(){
        this.props.history.push('/');
    }
    changeCodeHandler = (event) => {
        this.setState({code:event.target.value});
}
changeSourceHandler = (event) => {
    this.setState({source:event.target.value});
}
changeDestinationHandler = (event) => {
this.setState({destination:event.target.value});
}
changeTimeHandler = (event) => {
this.setState({time:event.target.value});
}
changePriceHandler = (event) => {
this.setState({price:event.target.value});
}

    render() {
        return (
            
            < div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-centre">Add bus</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                <label>buscode</label>
                                <input placeholder="code" name="code" className="form-control" 
                                                value={this.state.code} onChange={this.changeCodeHandler}/>

                                </div>
                                <div className="form-group">
                                <label>source</label>
                                <input placeholder="source" name="source" className="form-control" 
                                                value={this.state.source} onChange={this.changeSourceHandler}/>

                                </div>
                                <div className="form-group">
                                <label>destination</label>
                                <input placeholder="destination" name="destination" className="form-control" 
                                                value={this.state.destination} onChange={this.changeDestinationHandler}/>

                                </div>
                                <div className="form-group">
                                <label>time</label>
                                <input placeholder="time" name="time" className="form-control" 
                                                value={this.state.time} onChange={this.changeTimeHandler}/>

                                </div>
                                <div className="form-group">
                                <label>price</label>
                                <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>

                                </div>
                                
                                <button className="btn btn-success" onClick={this.savebus}>Submit</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                    </div>

                   <div/>
            </div>
        );
    }
}

export default Addbus;