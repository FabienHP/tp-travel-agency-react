import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <section className="home-section-3">
        <div className="ecommerce-icons">
          <div className="ecommerce-icon">
            <img src={require("../assets/images/calculator.png")} alt="calculator" />
            <span>Compare prices</span>
          </div>
          <div className="ecommerce-icon">
            <img src={require("../assets/images/discount.png")} alt="discount" />
            <span>Get the best deals</span>
          </div>
          <div className="ecommerce-icon">
            <img src={require("../assets/images/support.png")} alt="support" />
            <span>7/7 support</span>
          </div>
          <div className="ecommerce-icon">
            <img src={require("../assets/images/online-payment.png")} alt="online-payment" />
            <span>Secure online payment</span>
          </div>
        </div>
      </section>
      <footer>
        <section>
          <h3>Links</h3>
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/destination">Destinations</Link></li>
            <li><Link to ="/">Deals</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to ="/term">Terms & Conditions</Link></li>
          </ul>
        </section>
        <section>
          <h3>Address</h3>
          <p>
            15 rue de la paix
            <br />
            75010, Paris
            <br />
            France
            <br />
            <Link to ="/agency">Other addresses</Link>
          </p>
        </section>
        <section className="footer__call">
          <h3>Call Us</h3>
          <span>+1 0805-540-801</span>
        </section>
      </footer>
    </>
  )
}

export default Footer;