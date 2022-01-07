import React from "react";
import { Link } from "react-router-dom";

const listDesti = [
  {
    key: 1,
    img: "https://picsum.photos/1200/800?image=896",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 2,
    img: "https://picsum.photos/1200/800?image=993",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 3,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 4,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 5,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 6,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 7,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 8,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 9,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 10,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 11,
    img: "https://picsum.photos/1200/800?image=990",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 12,
    img: "https://picsum.photos/1200/800?image=984",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 13,
    img: "https://picsum.photos/1200/800?image=944",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 14,
    img: "https://picsum.photos/1200/800?image=929",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 15,
    img: "https://picsum.photos/1200/800?image=896",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
  {
    key: 16,
    img: "https://picsum.photos/1200/800?image=867",
    country: "France",
    city1: ["Paris", "Toulouse", "Bordeaux", "Montpellier", "La Rochelle"],
    city2: ["Marseille", "Nice", "Côte d'Azur", "La Ciotat", "Cannes"]
  },
]

const OurDesti = (props) => {
  return (
    <>
      <section className="banner" style={{ "backgroundImage": "url('https://picsum.photos/1200/800?image=572')" }}>
        <div className="banner__wrapper">
          <div>
            <h2>Our destinations</h2>
            <p>Choose your dream vacation in our list of destinations</p>
          </div>
        </div>
      </section>
      <section className="destinations-section-1">

        {listDesti.map(obj => (
          <div className="destination" key={obj.key}>
            <div className="destination__banner" style={{ "backgroundImage": `url(${obj.img})` }}>
              <div>
                <h3>{obj.country}</h3>
              </div>
            </div>
            <div className="destination__city-list">
              <div>
                <ul>
                  {obj.city1.map((city, index) => (
                    <li key={index}><Link to="/#">{city}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {obj.city2.map((city, index) => (
                    <li key={index}><Link to="/#">{city}</Link></li>
                  ))}
                </ul>
              </div>
              <Link to="#" className="destination__see-more">See more</Link>
            </div>
          </div>
        ))}

      </section>
    </>
  )
}

export default OurDesti;