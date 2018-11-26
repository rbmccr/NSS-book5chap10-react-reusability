import APIManager from "./APIManager"

class AnimalManager extends APIManager {

  getAll() {
    return this.all()
  }

  postAnimal(animal) {
    return this.post(animal)
  }

  getAnimal(id) {
    return this.get(id)
  }

  removeAnimal(id) {
    return this.delete(id)
  }

}

export default new AnimalManager("animals")