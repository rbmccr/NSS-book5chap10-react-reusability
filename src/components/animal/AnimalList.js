import React, { Component } from 'react'
import './animal.css'
import { Link } from "react-router-dom";

class AnimalList extends Component {

  // associate pet owner on amnimals page
  animalOwners(animal) {
    const ownerNamesArr = []
    const ao = this.props.animalsOwned
    const own = this.props.owners

    /*
      - Single animal object passed in (for the id)
      - Loop over join table that shares animalId and ownerId
      - if animalId matches, take ownerId and look for owner
        name in the owners array
    */

    ao.forEach(animalOwned => {
      if (animal.id === animalOwned.animalId) {
        let petOwnerId = animalOwned.ownerId
        own.forEach(owner => {
          if (owner.id === petOwnerId) {
            ownerNamesArr.push(owner.name)
          }
        })
      }
    })
    return ` (owned by: ${ownerNamesArr.join(", ")})`
  }

  render() {
    const aml = this.props.animals

    return (
      <section className="animals list">
        {
          aml.map(animal =>
            <div key={animal.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img src="https://www.akc.org/wp-content/themes/akc/component-library/assets//img/welcome.jpg" alt="pic" className="icon--dog" />
                  {animal.name}
                  <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                  <a href="#"
                    onClick={() => this.props.deleteAnimal(animal.id)}
                    className="card-link">Delete</a>
                </h5>
                <p>{this.animalOwners(animal)}</p>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default AnimalList