import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
// import NavBar from "./nav/NavBar"

class ApplicationViews extends Component {

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
      .then(r => r.json())
      .then(animals => newState.animals = animals)
      .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch("http://localhost:5002/locations")
        .then(r => r.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch("http://localhost:5002/owners")
        .then(r => r.json()))
      .then(owners => newState.owners = owners)
      .then(() => this.setState(newState))
  }

  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json())
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  fireEmployee = id => {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/employees`))
      .then(e => e.json())
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  removeOwner = id => {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/owners`))
      .then(e => e.json())
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  //join table
  animalsOwned = [
    { id: 1, animalId: 1, ownerId: 1 },
    { id: 2, animalId: 1, ownerId: 2 },
    { id: 3, animalId: 2, ownerId: 3 },
    { id: 4, animalId: 3, ownerId: 4 },
    { id: 5, animalId: 4, ownerId: 5 },
    { id: 6, animalId: 5, ownerId: 6 },
    { id: 7, animalId: 6, ownerId: 6 }
  ]

  state = {
    owners: [],
    locations: [],
    animals: [],
    employees: []
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} animalsOwned={this.animalsOwned} deleteAnimal={this.deleteAnimal}/>
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} fireEmployee={this.fireEmployee}/>
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} removeOwner={this.removeOwner}/>
        }} />
        <Route path="/search"></Route>
      </React.Fragment>
    )
  }
}

export default ApplicationViews