import React from "react";
import Destination from "../components/Destination";
import { Link } from "react-router-dom";

const allDesti = [
  {
    key: 1,
    img: "https://picsum.photos/1200/800?image=1067",
    city: "Sydney",
    info: "Hotel Calypso",
    duration: "1 week",
    price: "155€"
  },
  {
    key: 2,
    img: "https://picsum.photos/1200/800?image=993",
    city: "Rio",
    info: "Hotel Calypso",
    duration: "2 week",
    price: "113€"
  },
  {
    key: 3,
    img: "https://picsum.photos/1200/800?image=990",
    city: "Cusco",
    info: "Hotel Calypso",
    duration: "1 week",
    price: "100€"
  },
  {
    key: 4,
    img: "https://picsum.photos/1200/800?image=984",
    city: "New Delhi",
    info: "Hotel Calypso",
    duration: "2 week",
    price: "154€"
  },
  {
    key: 5,
    img: "https://picsum.photos/1200/800?image=944",
    city: "Hong Kong",
    info: "Hotel Calypso",
    duration: "3 week",
    price: "190€"
  },
  {
    key: 6,
    img: "https://picsum.photos/1200/800?image=929",
    city: "Katmandou",
    info: "Hotel Calypso",
    duration: "2 week",
    price: "165€"
  },
  {
    key: 7,
    img: "https://picsum.photos/1200/800?image=896",
    city: "Tokyo",
    info: "Hotel Calypso",
    duration: "2 week",
    price: "161€"
  },
  {
    key: 8,
    img: "https://picsum.photos/1200/800?image=867",
    city: "Lisbonne",
    info: "Hotel Calypso",
    duration: "1 week",
    price: "158€"
  },
]

const dealDay = {
  img: "https://picsum.photos/1200/800?image=164",
  city: "Amsterdam",
  info: "Hotel Calypso",
  duration: "1 week",
  price: "134€"
}

const Index = (props) => {
  return (
    <>
      <section className="home-section-1">
        <section className="search">
          <h2>Find your holiday</h2>
          <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <div className="search-inputs">
              <div>
                <span>From :</span>
                <input type="text" name="from" placeholder="Paris" />
              </div>
              <div>
                <span>To :</span>
                <input type="text" name="to" placeholder="Malte" />
              </div>
              <div>
                <span>Date :</span>
                <input type="text" name="date" placeholder="04/11/2018" />
              </div>
              <div>
                <span>Duration :</span>
                <select name="duration">
                  <option value="3d">3 days</option>
                  <option value="1w">1 week</option>
                  <option value="2w">2 week</option>
                  <option value="3w">3 week</option>
                </select>
              </div>
              <input type="submit" value="Find !" />
            </div>
          </form>
        </section>
        <section className="top-deal" style={{ "backgroundImage": `url(${dealDay.img})` }}>
          <Link
            to="/destipage"
            state={{ desti: dealDay }}
          >
            <div className="top-deal__content">
              <h2>Deal of the day</h2>
              <div className="top-deal__content-bottom">
                <span className="top-deal__city">{dealDay.city}</span>
                <span className="top-deal__info">{dealDay.info}</span>
                <span className="top-deal__duration">{dealDay.duration}</span>
              </div>
              <span className="top-deal__content-price">{dealDay.price}</span>
            </div>
          </Link>
        </section>
      </section>
      <section className="home-section-2">
        <h2>Top destinations</h2>
        <div className="destinations">

          {allDesti.map(obj => (
            <Destination key={obj.key} desti={obj} />
          ))}

        </div>
        <div className="destination__see-more">
          <button type="button">See more</button>
        </div>
      </section>
    </>
  )
}

export default Index;