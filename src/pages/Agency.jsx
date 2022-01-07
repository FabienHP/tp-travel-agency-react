import React from "react";

const listAgency = [
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
  {
    img: "https://picsum.photos/1200/800?image=456",
    country: "France",
    street: "15 rue de la paix",
    city: "75010, Paris",
    phone: "+1 0805-540-801",
    mail: "france@travel.agency"
  },
]

const Agency = (props) => {
  return (
    <>
      <section className="banner" style={{ "backgroundImage": "url('https://picsum.photos/1200/800?image=192')" }}>
        <div className="banner__wrapper">
          <div>
            <h2>Our Agency</h2>
            <p>Here is a list of our agency world wide</p>
          </div>
        </div>
      </section>
      <section className="destinations-section-1">

        {listAgency.map((obj, index) => (
          <div className="destination" key={index}>
            <div className="destination__banner" style={{ "backgroundImage": `url(${obj.img})` }}>
              <div>
                <h3>{obj.country}</h3>
              </div>
            </div>
            <div className="destination__city-list">
              {obj.street}
              <br />
              {obj.city}
              <br />
              {obj.country}
              <br />
              {obj.phone}
              <br />
              <a href="mailto:france@travel.agency">{obj.mail}</a>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Agency;