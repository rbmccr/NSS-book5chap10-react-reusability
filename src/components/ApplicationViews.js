import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "./../modules/AnimalManager"
import EmployeeManager from "./../modules/EmployeeManager"
import OwnerManager from "./../modules/OwnerManager"
import LocationManager from "./../modules/LocationManager"
import AnimalDetail from './animal/AnimalDetail'
import OwnerDetail from './owner/OwnerDetail'
import EmployeeDetail from './employee/EmployeeDetail'
// import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import Login from './login/Login'


class ApplicationViews extends Component {

  componentDidMount() {

    AnimalManager.getAll().then(allAnimals => {
      this.setState({
        animals: allAnimals
      })
    })
    EmployeeManager.getAll().then(allEmployees => {
      this.setState({
        employees: allEmployees
      })
    })
    LocationManager.getAll().then(allLocations => {
      this.setState({
        locations: allLocations
      })
    })
    OwnerManager.getAll().then(allOwners => {
      this.setState({
        owners: allOwners
      })
    })

  }

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  deleteAnimal = (id) => {
    return AnimalManager.delete(id)
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

  addAnimal = (animal) => AnimalManager.postAnimal(animal)
    .then(() => AnimalManager.getAll())
    .then(animals => this.setState({
      animals: animals
    }))

  addEmployee = (employee) => EmployeeManager.postEmployee(employee)
    .then(() => EmployeeManager.getAll())
    .then(employees => this.setState({
      employees: employees
    }))

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
        <Route path="/login" component={Login} />
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList employees={this.state.employees}
              locations={this.state.locations} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props}
              animals={this.state.animals} owners={this.state.owners} animalsOwned={this.animalsOwned} deleteAnimal={this.deleteAnimal} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* We pass employees to the AnimalForm so a dropdown can be populated */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}
            addAnimal={this.addAnimal}
            employees={this.state.employees} />

        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} fireEmployee={this.fireEmployee}
              animals={this.state.animals}
              employees={this.state.employees} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail {...props} employees={this.state.employees} fireEmployee={this.fireEmployee} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props}
            addEmployee={this.addEmployee} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList owners={this.state.owners} removeOwner={this.removeOwner} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail {...props} owners={this.state.owners} removeOwner={this.removeOwner} />
        }} />
        <Route path="/search"></Route>
      </React.Fragment>
    )
  }
}

export default ApplicationViews