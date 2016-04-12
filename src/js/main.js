import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (

      <div className="main">

        <nav>
          <Link className="navlinks" to="/">list view </Link>
  
          <Link className="navlinks" to="/singleview">single view </Link>
    
          <Link className="navlinks" to="/addcontact">add contact</Link>
        </nav>

        {this.props.children}

      
      </div>
    )
  }
}