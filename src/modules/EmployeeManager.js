import APIManager from "./APIManager"

class EmployeeManager extends APIManager {

  getAll() {
    return this.all()
  }

  postEmployee(employee) {
    return this.post(employee)
  }

  get(id) {
    return this.get(id)
  }

  removeemployee(id) {
    return this.delete(id)
  }
}

export default new EmployeeManager("employees")