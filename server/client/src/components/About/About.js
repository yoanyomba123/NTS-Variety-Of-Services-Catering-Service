import React, { Component } from "react";
import meal from "../../img/cakes.jpg";
import cake1 from "../../img/cake1.jpg";
import cake2 from "../../img/cake2.jpg";
import cake3 from "../../img/cake3.jpg";
import cake4 from "../../img/cake4.jpg";
import cake5 from "../../img/cake5.png";
import banquet from "../../img/banquet.png";
export default class componentName extends Component {
  render() {
    return (
      <div>
        <div className="chef" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container full-page">
          <div className="row">
            <div className="col">
              <br />
              <br />
              <br />
              <br />
              <h3 className="font-italic font-weigth-light">
                Catering & Events
              </h3>
              <hr />
              <p className="font-italic">
                <br />
                Our event designers can assist with venue selection, rental
                needs, entertainment and any special requests. We understand the
                importance of making the proper impression in life. N&T'S
                commitment to fresh from scratch cuisine and high quality
                service makes us your number 1 catering connection. You bring a
                high level of professionalism and effort to your event. And so
                does N&T'S.
                <br />
                <br />
                We make it easy; from the quote to the clean up, the whole
                process should leave you feeling stress free.
              </p>
            </div>
            <br />
            <br />
            <br />
            <hr />
            <div class="col">
              <div class="row">
                <div class="col">
                  <img
                    src={cake1}
                    alt="Responsive image"
                    width="50"
                    height="100%"
                  />
                </div>
                <div class="col">
                  <img
                    src={cake2}
                    alt="Responsive image"
                    width="50"
                    height="100%"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <img
                    src={cake3}
                    alt="Responsive image"
                    width="50"
                    height="100%"
                  />
                </div>
                <div class="col">
                  <img
                    src={cake4}
                    alt="Responsive image"
                    width="50"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
