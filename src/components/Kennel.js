import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./../Kennel.css"

class Kennel extends Component {

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
]

  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  animalsFromAPI = [
    { id: 1, name: "Buddy"},
    { id: 2, name: "Rufus"},
    { id: 3, name: "Olive"},
    { id: 4, name: "Kiwi"}
  ]

  //this was not the correct way to create the join table.
  // The table should have looked like this:
  // animalsOwned = [
  //   { id: 1, animalId: 1, ownerId: 1 },
  //   { id: 1, animalId: 1, ownerId: 2 },
  //   { id: 2, animalId: 2, ownerId: 3 },
  //   { id: 3, animalId: 3, ownerId: 4 },
  //   { id: 4, animalId: 4, ownerId: 5 }
  //   { id: 4, animalId: 4, ownerId: 6 }
  // ]

  // the correct array is "flat data" and will be the same as future database structures

  animalsOwned = [
    { id: 1, animalId: 1, ownerId: [1, 2] },
    { id: 2, animalId: 2, ownerId: [3] },
    { id: 3, animalId: 3, ownerId: [4] },
    { id: 4, animalId: 4, ownerId: [5, 6] }
  ]

  state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations}/>
        <EmployeeList employees={this.state.employees}/>
        <AnimalList animals={this.state.animals} owners={this.state.owners} animalsOwned={this.animalsOwned}/>
      </article>
    )
  }
}

export default Kennel