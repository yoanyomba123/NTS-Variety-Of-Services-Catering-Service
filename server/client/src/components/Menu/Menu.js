import React, { Component } from "react";
import choco from "../../img/choco.jpg";
import choco1 from "../../img/choco1.jpg";
export default class Menu extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                {" "}
                <img
                  class="img-top"
                  src={choco}
                  alt="Card image cap"
                  height="100%"
                />
              </div>
              <div className="col">
                {" "}
                <img class="img-top" src={choco1} alt="Card image cap" />
              </div>
            </div>
          </div>
          <div className="col">
            <br />
            <br />
            <br />
            <p>
              Corporate. Weddings. Social Functions. Event Themes. Breakfast
              Gatherings. Luncheons. Dinner Parties. Repast Catering Services.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
