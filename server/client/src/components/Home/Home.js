import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <br />
                <h3 className="display-3 mb-4 font-italic">
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
    );
  }
}

export default Home;
