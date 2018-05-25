import React, { Component } from "react";
import meal from "../../img/cakes.jpg";
import cake1 from "../../img/cake1.jpg";
import cake2 from "../../img/cake2.jpg";
import cake3 from "../../img/cake3.jpg";
import cake4 from "../../img/cake4.jpg";
import cake5 from "../../img/cake5.png";
import banquet from "../../img/banquet.png";

import family from "../../img/family.png";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <br />
                  <br />
                  <br />
                  <br />

                  <h3 className="display-3 mb-4 font-weight-light font-italic ">
                    NTS Variety Of Flavors
                  </h3>

                  <p className="lead">
                    No Order too Small, Give us a call we Cook it all!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container full-page">
          <div className="row">
            <br />
            <br />
            <br />
            <br />
            <div className="col">
              <img src={meal} alt="Responsive image" width="50" height="100%" />
            </div>
            <div class="col">
              <br />
              <br />

              <h3 className="font-italic font-weigth-light">
                N&T's Variety Of Flavors
              </h3>
              <hr />

              <p className="font-italic">
                We provide a large assortment of Cold, Hot Hors d'oeuvres Entrée
                and sides. Most of the foods are neat and self-contained meaning
                that once the food is consumed; there are no skewers, bones, or
                other items for the guest to discard. Some are simple or rather
                high level depending on your needs. All are expertly prepared
                and beautifully presented.
                <br />
                <br />
                Weather it is a hot and healthy lunch for your board members or
                an elegant Holiday Party for the entire company, N&T'S Variety
                Of Flavors is your event catering resource.
              </p>
            </div>
          </div>
        </div>

        <div className="container full-page">
          <div className="row">
            <div className="col">
              <h3> Who We Are</h3>
              <hr />
              <div class="card">
                <img class="img-top" src={family} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title font-bold">Family </h5>
                  <hr />
                  <p class="card-text text-center">
                    We are an upcoming family business trying to change the life
                    of people through what we know best. Cooking!
                  </p>
                  <p class="card-text">
                    <small class="text-muted">N&T's Variety Of Flavors </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <h3> What We Do</h3>
              <hr />
              <div class="card">
                <img class="img-top" src={cake5} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title font-bold">Our Business</h5>
                  <hr />
                  <p class="card-text text-center">
                    We try to provide the best of the best when it comes to
                    entertaining your surroundings. Give us a try we won't
                    disappoint you.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">N&T's Variety Of Flavors </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <h3> Catering & Services </h3>
              <hr />
              <div class="card">
                <img class="img-top" src={banquet} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title font-bold">Our Services</h5>
                  <hr />
                  <p class="card-text text-center">
                    Let us cater your next event!!!
                  </p>
                  <p class="card-text">
                    <small class="text-muted">N&T's Variety Of Flavors </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
