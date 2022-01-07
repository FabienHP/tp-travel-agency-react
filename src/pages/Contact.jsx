import React from "react";

const Contact = (props) => {
  return (
    <>
      <section className="banner banner--medium" style={{ "backgroundImage": "url('https://picsum.photos/1200/800?image=3')" }}>
        <div className="banner__wrapper">
          <div>
            <h2>Contact</h2>
          </div>
        </div>
      </section>
      <section className="holiday-section-2">
        <section className="contact__form">
          <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="firstname">Firstname :</label>
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div>
              <label htmlFor="lastname">Lastname :</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="agency">Nearest agency :</label>
              <select name="agency" id="agency">
                <option value="paris">Paris</option>
                <option value="prague">Prague</option>
                <option value="new_york">New York</option>
                <option value="melbourne">Melbourne</option>
                <option value="tokyo">Tokyo</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Message :</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <input type="submit" value="Send" />
          </form>
        </section>
        <section className="contact__address">
          <h2>Address</h2>
          <p>
            15 rue de la paix
            <br />
            75010, Paris
            <br />
            France
            <br />
            +1 0805-540-801
            <br />
            <a href="/#">Other addresses</a>
          </p>
          <h2>Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare lectus non urna sollicitudin gravida. Vivamus pharetra orci tortor, ac ultricies sem mattis id. Morbi faucibus nibh leo, eu pretium erat sagittis a. Sed erat neque, ultrices at feugiat at, mollis vel augue.
          </p>
        </section>
      </section>
    </>
  )
}

export default Contact;