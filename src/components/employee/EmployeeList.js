import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AnimalCard from "../animal/AnimalCard"
import person from "./avatar.png"

class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="employeeButton">
          <button type="button"
            className="btn btn-success list"
            onClick={() => {
              this.props.history.push("/employees/new")
            }}>
            Hire Employee
            </button>
        </div>
        <section className="employees list">
          {
            this.props.employees.map(employee =>
              <div key={employee.id} className="card card--employee">
                <div className="card-body">
                  <h5 className="card-title">
                    <img src={person} className="icon--employee" />
                    {employee.name}
                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                    <a href="#"
                      onClick={() => this.props.fireEmployee(employee.id)}
                      className="card-link">Fire Employee</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                  <div className="animals--caretaker">
                    {
                      this.props.animals
                        .filter(anml => anml.employeeId === employee.id)
                        .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                    }
                  </div>

                </div>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}

export default EmployeeList