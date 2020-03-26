import React from 'react';

const Contact = () => {
  return (
    <main>
      <section id="hero_in" className="contacts">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Contact Udema
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
                PO Box 97845 Baker st. 567, Los Angeles
                <br />
                California - US.
              </span>
            </li>
            <li>
              <i className="pe-7s-mail-open-file" />
              <h4>Email address</h4>
              <span>
                admission@udema.com - info@udema.com
                <br />
                <small>Monday to Friday 9am - 7pm</small>
              </span>
            </li>
            <li>
              <i className="pe-7s-phone" />
              <h4>Contacts info</h4>
              <span>
                + 61 (2) 8093 3402 + 61 (2) 8093 3402
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
            <div className="col-lg-5">
              <div className="map_contact" />
            </div>
            <div className="col-lg-6">
              <h4>Send a message</h4>
              <p>Ex quem dicta delicata usu, zril vocibus maiestatis in qui.</p>
              <div id="message-contact" />
              <form
                method="post"
                action="assets/contact.php"
                id="contactform"
                autoComplete="off">
                <div className="row">
                  <div className="col-md-6">
                    <span className="input">
                      <input
                        className="input_field"
                        type="text"
                        id="name_contact"
                        name="name_contact"
                      />
                      <label className="input_label">
                        <span className="input__label-content">Your Name</span>
                      </label>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <span className="input">
                      <input
                        className="input_field"
                        type="text"
                        id="lastname_contact"
                        name="lastname_contact"
                      />
                      <label className="input_label">
                        <span className="input__label-content">Last name</span>
                      </label>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <span className="input">
                      <input
                        className="input_field"
                        type="email"
                        id="email_contact"
                        name="email_contact"
                      />
                      <label className="input_label">
                        <span className="input__label-content">Your email</span>
                      </label>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <span className="input">
                      <input
                        className="input_field"
                        type="text"
                        id="phone_contact"
                        name="phone_contact"
                      />
                      <label className="input_label">
                        <span className="input__label-content">
                          Your telephone
                        </span>
                      </label>
                    </span>
                  </div>
                </div>
                <span className="input">
                  <textarea
                    className="input_field"
                    id="message_contact"
                    name="message_contact"
                    style={{height: `${150}px`}}
                  />
                  <label className="input_label">
                    <span className="input__label-content">Your message</span>
                  </label>
                </span>
                <span className="input">
                  <input
                    className="input_field"
                    type="text"
                    id="verify_contact"
                    name="verify_contact"
                  />
                  <label className="input_label">
                    <span className="input__label-content">
                      Are you human? 3 + 1 =
                    </span>
                  </label>
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
    </main>
  );
};

export default Contact;
