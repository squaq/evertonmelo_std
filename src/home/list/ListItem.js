import React, { Component } from 'react';

export default class ListItem extends Component {
    
    render () {        
        return <li className="list-group-item border-danger p-0" key={this.props.id}>
                  <div className="container">
                       <div className="row m-1 align-items-center h-100">
                           <div className="col"><img className="img-thumbnail float-left" src={this.props.info.icon}></img></div>
                           <div className="col "><span className="justify-content-center">{this.props.info.name}</span></div>
                           <div className="col"><span className="float-right justify-content-center">{this.props.info.rating}</span></div>
                       </div>
                   </div>
                </li>            
    }
}