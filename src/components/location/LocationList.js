import React, { Component } from 'react'

class LocationList extends Component {
  render() {
    return (
      <section className="locations list">
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}
              <p>{location.address}</p>
              <p>On-site Staff:</p>
              {console.log(this.props.employees)}
              <p>
                {
                  this.props.employees
                    .filter(e => e.locationId === location.id)
                    .map((e) => `${e.name}, `)
                }
              </p>

            </div>

          )
        }
      </section>
    )
  }
}

export default LocationList