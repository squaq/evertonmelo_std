import React, { Component } from 'react';
import ListContainer from './list/ListContainer.js';

export default class MainBody extends Component{
    render () {        
      return (
        <div className="container" style={{marginTop: 130+"px"}}>
            {
              this.props.places.length > 0 &&
              <div className="clearfix">
                <ListContainer places={this.props.places}></ListContainer>
              </div>
            }
            {
              this.props.places.length === 0 &&
              <h1>Loading...</h1>
            }
        </div>
      )
    }
}