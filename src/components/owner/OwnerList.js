import React, { Component } from 'react'
import { Link } from "react-router-dom";

class OwnerList extends Component {

  render() {
    const owners = this.props.owners

    return (
      <section className="owners list">
        {
          owners.map(owner =>
            <div key={owner.id}>
              {owner.name}
              <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
              <a href="#"
                onClick={() => this.props.removeOwner(owner.id)}
                className="card-link">Delete</a>
            </div>
          )
        }
      </section>
    )
  }
}

export default OwnerList