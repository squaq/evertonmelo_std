import React, { Component } from 'react';
import ListItem from './ListItem.js'

export default class ListContainer extends Component {
    render () {
        const list = this.props.places.map((p, i) =><ListItem info={p} key={i}/>);  
        return <ul className="p-0">{list}</ul>
    }
}