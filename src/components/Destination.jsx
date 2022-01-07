import React from "react";
import { Link } from "react-router-dom";

const Destination = (props) => {
  
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="destination">
      <div className="destination__background" style={{ "backgroundImage": `url(${props.desti.img})` }}>
        <Link
          to="/destipage"
          state={{ desti: props.desti }}
          onClick={() => scrollTop()}
        >
          <div className="destination__content">
            <h3 className="destination__city">{props.desti.city}</h3>
            <div className="destination__content-bottom">
              <span className="destination__info">{props.desti.info}</span>
              <span className="destination__duration">{props.desti.duration}</span>
            </div>
            <span className="destination__content-price">{props.desti.price}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Destination;