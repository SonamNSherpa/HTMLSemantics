import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="title-doc">
        <img class="namaste-pic" src="images/namaste.jpg" />
        <h1 class="title">Hotel Namaste</h1>
      </div>

      <p class="intro">
        Welcome to Hotel Namaste. This hotel is at the center of Kathmandu.
        <br />
        The proximity to some of the World Heritage Sites along with the
        hustling tourism center makes it the perfect destination for you.
      </p>
      <div class="container">
        <div>
          <img src="images/hotel-image.jpg" class="hotel-img" />
        </div>
        <div class="paragraph">
          <ul>
            <li>Thank your visiting our website</li>
            <li>Please go to the reservation link to reserve your stay</li>
            <li>We also host parties, weddings and conferences.</li>
          </ul>
          <div>
            <a class="hotel" href="https://www.expedia.com/" target="blank">
              <button class="hotel-link">Book your stay here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
