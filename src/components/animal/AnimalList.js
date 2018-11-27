import React, { Component } from 'react'
import './animal.css'
import { Link } from "react-router-dom";
import AnimalCard from "./AnimalCard"

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
      <React.Fragment>
        <div className="animalButton">
          <button type="button"
            className="btn btn-success list"
            onClick={() => {
              this.props.history.push("/animals/new")
            }}>
            Admit Animal
            </button>
        </div>
          <section className="animals list">
            {
              aml.map(animal =>
                <AnimalCard key={animal.id} animal={animal} {...this.props} />
              )
            }
          </section>
      </React.Fragment>
        )
      }
    }

export default AnimalList