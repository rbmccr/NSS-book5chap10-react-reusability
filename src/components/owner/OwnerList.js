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
            </div>
          )
        }
      </section>
    )
  }
}

export default OwnerList