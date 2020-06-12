import React from 'react';
import { toast } from 'react-toastify';
import { SERVER_URL } from '../utils/constant';

import AxiosService from '../utils/axios';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: null,
      inputName: null,
      inputSubject: null,
      inputMsg: null,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    event.preventDefault();
    this.setState({ inputEmail: event.target.value });
  }

  handleEmailChange(event) {
    event.preventDefault();
    this.setState({ inputName: event.target.value });
  }

  handleSubjectChange(event) {
    event.preventDefault();
    this.setState({ inputSubject: event.target.value });
  }

  handleMessageChange(event) {
    event.preventDefault();
    this.setState({ inputMsg: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      inputEmail,
      inputName,
      inputSubject,
      inputMsg,
    } = this.state;
    if (inputName && inputEmail && inputMsg && inputSubject) {
      Promise
        .resolve(
          AxiosService.post(`${SERVER_URL}/submit-contact`, {
            inputEmail, inputName, inputSubject, inputMsg,
          }),
          toast.warn('Sending your message!'),
        )
        .then(res => {
          if (res.data.message) {
            toast.success(res.data.message);
          }
        })
        .catch(err => toast.error(err));
    }
  }

  render() {
    return (
      <div>
        <section id="hero_in" className="contacts">
          <div className="wrapper">
            <div className="container">
              <h1 className="fadeInUp">
                <span />
                Contact Hacademy
              </h1>
            </div>
          </div>
        </section>

        <div className="contact_info">
          <div className="container">
            <ul className="clearfix">
              <li>
                <i className="pe-7s-map-marker" />
                <h4>Address</h4>
                <span>
                  227 Nguyen Van Cu st., Ward 4, District 5
                  <br />
                  Ho Chi Minh city
                </span>
              </li>
              <li>
                <i className="pe-7s-mail-open-file" />
                <h4>Email address</h4>
                <span>
                  dhtc.kltn@gmail.com
                  <br />
                  <small>Monday to Friday 9am - 7pm</small>
                </span>
              </li>
              <li>
                <i className="pe-7s-phone" />
                <h4>Phone number</h4>
                <span>
                  +84 987-654-321
                  <br />
                  <small>Monday to Friday 9am - 7pm</small>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg_color_1">
          <div className="container margin_120_95">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="main_title_3">
                  <span>
                    <em />
                  </span>
                  <h2>Send a message</h2>
                  <p>via dhtc.kltn@gmail.com</p>
                </div>
                <div id="message-contact" />
                <form
                  onSubmit={this.handleSubmit}
                  id="contactform"
                  autoComplete="off">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="input">
                        <label className="input_label">
                          Your name
                        </label>
                        <input
                          className="input_field"
                          type="text"
                          onChange={this.handleNameChange}
                          id="name_contact"
                          name="name_contact"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="input">
                        <label className="input_label">
                          Your email
                        </label>
                        <input
                          className="input_field"
                          type="email"
                          onChange={this.handleEmailChange}
                          id="email_contact"
                          name="email_contact"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="input">
                        <label className="input_label">
                          Subject
                        </label>
                        <input
                          className="input_field"
                          type="text"
                          onChange={this.handleSubjectChange}
                          id="subject_contact"
                          name="subject_contact"
                        />

                      </span>
                    </div>
                  </div>
                  <span className="input">
                    <label className="input_label">
                      Your message
                    </label>
                    <textarea
                      className="input_field"
                      id="message_contact"
                      onChange={this.handleMessageChange}
                      name="message_contact"
                      style={{ height: `${150}px` }}
                    />
                  </span>
                  <p className="add_top_30">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn_1 rounded"
                      id="submit-contact"
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
