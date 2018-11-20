import APIManager from "./APIManager"

const remoteURL = "http://localhost:5002"

export default class AnimalManager extends APIManager {
  // constructor(a) {
  //   super(a)
  //   this.URLextension = "animals"
  // }

  getAll() {
    this.getAll("animal")
  }

  static removeAndList (id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json())
  }
}