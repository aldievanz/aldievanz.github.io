import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="contact-body">
          <Fade bottom duration={1000} distance="40px">
            {/* Profile Section */}
            <div className="contact-profile-section">
              <img
                className="contact-profile-img"
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt="Aldi Vandiaz Maulana"
              />
              <div className="contact-profile-text">
                <h1 style={{ color: theme.text }}>{ContactData["title"]}</h1>
                <p style={{ color: theme.secondaryText }}>
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="contact-btn-group">
                  <Button text="See My Resume" href="/resume" theme={theme} />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div
              className="contact-address-section"
              style={{ background: theme.headerColor }}
            >
              <h2 style={{ color: theme.text }}>{addressSection["title"]}</h2>
              <p style={{ color: theme.secondaryText }}>
                {addressSection["subtitle"]}
              </p>
              <h2 style={{ color: theme.text }}>{phoneSection["title"]}</h2>
              <p style={{ color: theme.secondaryText }}>
                {phoneSection["subtitle"]}
              </p>

              {/* Embedded Google Map */}
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: "100%",
                  maxWidth: "600px",
                  margin: "20px auto",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=-7.088566815869115,110.29001536764869&hl=en&z=15&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="My Home Location"
                ></iframe>
              </div>

              <Button
                text="Visit on Google Maps"
                newTab={true}
                href={addressSection.location_map_link}
                theme={theme}
              />
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
