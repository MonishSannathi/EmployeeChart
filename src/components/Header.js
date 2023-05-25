import React , { Component } from 'react'

class Header extends Component {

	constructor(props){

		super(props)

		this.state = {

           
		}
	}



	render() {
      return(
          <div>
                <nav className="navbar navbar-dark bg-dark">
 <div><a href="/" className="navbar-brand"> Employee Management</a></div>
 <div><a href="/add-employee" className="navbar-brand"> Add Employee</a></div>
 <div><a href="/employee" className="navbar-brand"> View Details</a></div>

               </nav> 
          </div>
      	)
	}
}

export default Header;