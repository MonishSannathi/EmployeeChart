import React , { Component } from 'react'
import Employeeservices from '../services/Employeeservices';

class ListEmployees extends Component {

	constructor(props){

		super(props)

		this.state = {

           employees: []
		}
	}

componentDidMount()
{
  
  Employeeservices.getEmployees().then((res) =>{
     this.setState({employees: res.data});
    });
}

	render() {
      return(
          <div>
                 <h2 className="textcenter">Employee List</h2>
                    <div className = "row">
                       
                       <table className="table table-striped table-bordered">
                         <thead>
                           <tr>
                             <th> Employee first Name</th>
                             <th> Employee Last Name</th>
                             <th> Employee Email</th>
                             <th> Actions </th>
                           </tr>
                        </thead>
                    <tbody>
                       {
                              this.state.employees.map(
                                 employee =>
                                 <tr key = {employee.id}>
                                 <td> {employee.name}</td>
                                  <td> {employee.lastname}</td>
                                  <td> {employee.emailid}</td>
                                  </tr>
                                )
                       }
                    </tbody>
                    
                    </table>
                       
                  </div>
          </div>
      	)
	}
}

export default ListEmployees;