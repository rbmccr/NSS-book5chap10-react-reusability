const remoteURL = "http://localhost:5002"

class APIManager {

  constructor(a) {
    this.URLextension = a
  }

  get(id) {
    return fetch(`${remoteURL}/${this.URLextension}/${id}`).then(data => data.json())
  }

  getAll(URLextension) {
    return fetch(`${remoteURL}/${URLextension}`).then(data => data.json())
  }

}

export default APIManager