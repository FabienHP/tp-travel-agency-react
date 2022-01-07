import React, { useState } from "react";
import Destination from "../components/Destination";
import { useLocation } from "react-router";

const alsoLike = [
  {
    key: 1,
    img: "https://picsum.photos/1200/800?image=929",
    city: "Katmandou",
    info: "Hotel Calypso",
    duration: "2 week",
    price: "165€"
  },
  {
    key: 2,
    img: "https://picsum.photos/1200/800?image=896",
    city: "Tokyo",
    info: "Hotel Calypso",
    duration: "2 week",
    price: "161€"
  },
  {
    key: 3,
    img: "https://picsum.photos/1200/800?image=867",
    city: "Lisbonne",
    info: "Hotel Calypso",
    duration: "1 week",
    price: "158€"
  },
];

const DestiPage = (props) => {
  const { desti } = useLocation().state
  const [gallery, setGallery] = useState({ key: 1, img: desti.img });

  const galleryList = [
    {
      key: 1,
      img: desti.img,
    },
    {
      key: 2,
      img: "https://picsum.photos/1200/800?image=510",
    },
    {
      key: 3,
      img: "https://picsum.photos/1200/800?image=577",
    },
    {
      key: 4,
      img: "https://picsum.photos/1200/800?image=579",
    },
    {
      key: 5,
      img: "https://picsum.photos/1200/800?image=525",
    },
    {
      key: 6,
      img: "https://picsum.photos/1200/800?image=575",
    },
    {
      key: 7,
      img: "https://picsum.photos/1200/800?image=574",
    },
    {
      key: 8,
      img: "https://picsum.photos/1200/800?image=573",
    },
    {
      key: 9,
      img: "https://picsum.photos/1200/800?image=572",
    },
    {
      key: 10,
      img: "https://picsum.photos/1200/800?image=571",
    },
  ];
  
  const scrollTop = () => {
    window.scrollTo(0, 0);
    window.location.reload(false);
  };

  return (
    <>
      <section className="holiday-section-1">
        <section className="holiday__resume">
          <h2 className="holiday__resume--city">{desti.city}</h2>
          <span className="holiday__resume--company">{desti.info}</span>
          <span className="holiday__resume--star">&#9733;&#9733;&#9733;</span>
          <br />
          <span className="holiday__resume--duration">{desti.duration}</span>
          <p className="holiday__resume--short-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare lectus non urna sollicitudin gravida. Vivamus pharetra orci tortor, ac ultricies sem mattis id. Morbi faucibus nibh leo, eu pretium erat sagittis a. Sed erat neque, ultrices at feugiat at, mollis vel augue. Cras id lorem nibh.</p>
          <button type="button" className="holiday__resume--choose">Choose a date</button>
          <span className="holiday__resume-price">{desti.price}</span>
        </section>
        <section className="holiday__gallery">
          {/* Selected image */}
          <div className="holiday__gallery-image" >
            <img src={gallery.img} alt="image 1" />
            <div className="holiday__gallery-overlay">
              <div className="holiday__gallery-zoom"></div>
            </div>
          </div>
          {/* Selected image end */}
          {galleryList.map(obj => (
            <div className="holiday__gallery-image" key={obj.key} onClick={() => setGallery({ key: obj.key, img: obj.img })}>
              <img src={obj.img} alt="image 1" />
              <div className={obj.key == gallery.key ? "holiday__gallery-overlay holiday__gallery-overlay--active" : "holiday__gallery-overlay"}>
                <div className="holiday__gallery-zoom"></div>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className="banner banner--medium" style={{ "backgroundImage": "url('https://picsum.photos/1200/800?image=502')" }}>
        <div className="banner__wrapper">
          <div>
            <h2>{desti.city}</h2>
            <p>A perfect destination to do strolls in a forest</p>
          </div>
        </div>
      </section>
      <section className="holiday-section-2">
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare lectus non urna sollicitudin gravida. Vivamus pharetra orci tortor, ac ultricies sem mattis id. Morbi faucibus nibh leo, eu pretium erat sagittis a. Sed erat neque, ultrices at feugiat at, mollis vel augue. Cras id lorem nibh. Etiam pulvinar luctus lectus non ornare. Morbi bibendum mauris non justo pharetra laoreet eu sed dolor. Nunc volutpat blandit metus, ultricies iaculis purus dictum a. Pellentesque dictum velit a dui sagittis, vitae semper magna dapibus. Aliquam ac laoreet elit.
        </p>
        <h2>Details</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu a lorem bibendum accumsan non ac nisl. Etiam lacinia, est ac laoreet lobortis, quam velit luctus odio, at dignissim augue ligula in enim. Nulla facilisi. Aliquam erat volutpat. Maecenas non ligula sed mauris posuere volutpat. Sed aliquam neque tellus, et imperdiet ipsum efficitur in. Phasellus augue enim, tempor et eros nec, pretium facilisis nulla. Praesent viverra quam nec augue pretium ullamcorper. Ut rhoncus sem ligula, vel vulputate lorem luctus vel. Quisque rutrum mi quam. Vivamus euismod metus vel accumsan tempor. Ut commodo, est eu lobortis cursus, est dolor sollicitudin nunc, egestas convallis diam dolor sit amet elit. Nulla tincidunt nunc turpis, non dignissim metus auctor at. Curabitur et dui at lacus fringilla venenatis elementum vel mauris.
        </p>
        <h2>Other</h2>
        <p>
          Nunc gravida arcu vel massa tristique eleifend. Sed nisi elit, tristique quis sagittis in, hendrerit sit amet orci. Quisque dictum magna eu maximus consequat. Maecenas interdum, ante quis finibus bibendum, massa ligula blandit erat, nec molestie elit turpis ultricies lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit libero, auctor non velit in, condimentum consectetur augue. Vestibulum et arcu id tortor faucibus sagittis nec non nisi. Vestibulum id massa et mi consequat molestie a quis sem. Donec at iaculis felis, eget vehicula neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla nisi diam, bibendum ultrices ornare sed, consectetur a augue. Sed mollis aliquam sem, at dignissim felis rhoncus sit amet
        </p>
      </section>
      <section className="home-section-2 holiday-section-3">
        <h2>You may also like</h2>
        <div className="destinations">

          {alsoLike.map(obj => (
            <div key={obj.key} onClick={() => { scrollTop() }}>
              <Destination desti={obj} />
            </div>
          ))}

        </div >
      </section>
    </>
  )

}

export default DestiPage;