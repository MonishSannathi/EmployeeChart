import axios from 'axios';

const url="http://localhost:9091/api/v1/employees";

class Employeeservices
{

	getEmployees()
	{
		return axios.get(url);

	}

	createEmployee(employees){
        return axios.post(url, employees);
    }
}

export default new Employeeservices()