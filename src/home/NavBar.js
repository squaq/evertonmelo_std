import React, { Component } from 'react';

export default class NavBar extends Component {
    render () {
      return <div className="fixed-top">
                <div className="navbar navbar-expand-lg navbar-danger bg-danger">
                    <h1 className="text-white font-weight-bold font-italic">STD</h1>
                </div>
                <div className="navbar navbar-expand-lg navbar-muted bg-muted  justify-content-end">
                   <button className={"btn float-right " + (this.props.ac ? 'btn-warning float-right' : 'btn-outline-warning')} onClick={this.props.fn}>&#9733;</button>
                </div>
             </div> 
    }    
}