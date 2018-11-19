import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {

  componentDidMount() {
    const searchInput = document.getElementById("searchInput")

    searchInput.addEventListener("keyup", (e) => {

      fetch(`http://localhost:5002/animals?q=${searchInput.value}`)
        .then(r => r.json())
        .then(data => console.log(data))
    })

  }

  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Locations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animals">Animals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/owners">Owners</Link>
          </li>
          <li className="nav-item">
            <Link to="/search"><input id="searchInput" type="text"></input></Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar