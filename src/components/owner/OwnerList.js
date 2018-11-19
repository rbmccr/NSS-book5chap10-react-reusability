import React, { Component } from 'react'

class OwnerList extends Component {

  render() {
    const owners = this.props.owners

    return (
      <section className="owners list">
        {
          owners.map(owner =>
            <div key={owner.id}>
              {owner.name}
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