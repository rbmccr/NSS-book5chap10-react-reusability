import React, { Component } from "react"

export default class EmployeeDetail extends Component {
  render() {

    const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

    return (
      <section className="employee">
        <div key={employee.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={"https://avatars1.githubusercontent.com/u/43763999?s=460&v=4"} className="icon--dog" />
              {employee.name}
            </h4>
            <h6 className="card-title">{employee.breed}</h6>
            <a href="#"
              onClick={() => this.props.removeemployee(employee.id)
                .then(() => this.props.history.push("/animals"))}
              className="card-link">Delete</a>
          </div>
        </div>
      </section>
    )
  }
}