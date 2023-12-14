import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="title-doc">
        <img className="namaste-pic" src="images/namaste.jpg" />
        <h1 class="title">Hotel Namaste</h1>
      </div>

      <p class="intro">
        Welcome to Hotel Namaste. This hotel is at the center of Kathmandu.
        <br />
        The proximity to some of the World Heritage Sites along with the
        hustling tourism center makes it the perfect destination for you.
      </p>
      <div className="container">
        <div>
          <img src="images/hotel-image.jpg" className="hotel-img" />
        </div>
        <div className="paragraph">
          <ul>
            <li>Thank your visiting our website</li>
            <li>Please go to the reservation link to reserve your stay</li>
            <li>We also host parties, weddings and conferences.</li>
          </ul>
          <div>
            <a className="hotel" href="https://www.expedia.com/" target="blank">
              <button className="hotel-link">Book your stay here</button>
            </a>
            <div className="promo-container">
              <a href="https://www.facebook.com/" target="blank">
                <div>
                  <img src="thumbnails/fb.jpg" className="promo-icon" />
                </div>
              </a>
              <a href="https://www.pinterest.com/expedia/" target="blank">
                <div>
                  <img src="thumbnails/pinterest.png" className="promo-icon" />
                </div>
              </a>
              <a href="https://www.instagram.com/expedia/?hl=en" target="blank">
                <div>
                  <img src="thumbnails/instagram.jpg" className="promo-icon" />
                </div>
              </a>
              <a href="https://www.google.com/gmail/about/" target="blank">
                <div>
                  <img src="thumbnails/gmail.png" className="promo-icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
