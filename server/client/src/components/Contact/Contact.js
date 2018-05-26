import React, { Component } from "react";
import TextFieldGroup from "../../components/Common/TextFieldGroup";
import TextAreaGroup from "../../components/Common/TextAreaGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendEmail } from "../../Actions/email.action";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      message: "",
      subject: "",
      errors: {}
    };

    // binding this to onchange event
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {}

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      name: this.state.name,
      msg: this.state.msg
    };
    console.log(this.state);
    sendEmail(userData, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <h1 className="display-4 text-center lead">
                Contact Us For Inquiries
              </h1>
              <br />
              <br />
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={this.state.errors.email}
                />

                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={this.state.errors.name}
                />
                <TextFieldGroup
                  placeholder="Subject"
                  name="subject"
                  type="subject"
                  value={this.state.subject}
                  onChange={this.onChange}
                  error={this.state.errors.subject}
                />
                <TextAreaGroup
                  placeholder="Message"
                  name="message"
                  type="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  error={this.state.errors.message}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.PropTypes = {
  sendEmail: PropTypes.func.isRequired,
  email: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  subject: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  email: state.email,
  name: state.email,
  message: state.email,
  subject: state.email,
  errors: state.errors
});
export default Contact;
