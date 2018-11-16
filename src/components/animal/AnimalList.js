import React, { Component } from 'react'

class AnimalList extends Component {

  /*getNamesOfAnimalOwners(animal) {
    const ao = this.props.animalsOwned
    const own = this.props.owners
    const joinTableAnimalObject;


      1. map over the join table
      2. filter array of owners (objects) to match

    // link animal id with animalId in join table

    if (ao.find(animalOwned => animalOwned.animalId === animal.id) === undefined) {
      console.log("undf")
    }
    // console.log(joinTableAnimalObject)

    // {
    //   const ownerNames = own.filter(owner => {
    //     for (let i = 0; i < joinTableAnimalObject.ownerId.length; i++) {
    //       if (joinTableAnimalObject.ownerId[i] === owner.id) {
    //         return owner
    //       }
    //     }
    //   })
    // }
  }*/

  render() {
    const ao = this.props.animalsOwned
    const own = this.props.owners
    const aml = this.props.animals

    function animalInfo(animal) {
      // link animal to join table object, so we can get owner name(s)
      let ownerIds;
      ao.forEach(animalOwned => {
        if (animalOwned.animalId === animal.id) {
          ownerIds = animalOwned.ownerId
        }
      });

      // filter owner array to identify specific owner(s) of the animal passed in
      const ownerArray = own.filter(owner => {
        for (let i = 0; i < ownerIds.length; i++) {
          if (ownerIds[i] === owner.id) {
            return owner
          }
        }
      })

      const nameArr = []
      ownerArray.forEach(obj => nameArr.push(obj.name))
      console.log(nameArr)

      //return array with each animal index and nested array of owner(s) object(s)
      return `
      ... Owner(s):
      ${nameArr}`
    }

    return (
      <section className="animals">
        {
          aml.map(animal =>
            <div key={animal.id}>
              {animal.name}
              {animalInfo(animal)}
            </div>
          )
        }
      </section>
    )
  }
}

export default AnimalList




// function animalInfo(animal) =
// ao.map(animalOwned => {
//   const ownerNames = own.filter(owner => {
//     for (let i = 0; i < animalOwned.ownerId.length; i++) {
//       if (animalOwned.ownerId[i] === owner.id) {
//         return owner
//       }
//     }
//   })
//   return [animalOwned, ownerNames] //return array with each animal index and nested array of owner(s) object(s)
// })