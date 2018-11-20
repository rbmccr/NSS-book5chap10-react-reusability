import React, { Component } from "react"

export default class OwnerDetail extends Component {
  render() {

    const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

    return (
      <section className="owner">
        <div key={owner.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={"https://www.akc.org/wp-content/themes/akc/component-library/assets//img/welcome.jpg"} className="icon--dog" />
              {owner.name}
            </h4>
            <h6 className="card-title">{owner.breed}</h6>
            <a href="#"
              onClick={() => this.props.removeOwner(owner.id)
                .then(() => this.props.history.push("/animals"))}
              className="card-link">Delete</a>
          </div>
        </div>
      </section>
    )
  }
}