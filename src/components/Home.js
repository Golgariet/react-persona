import React from "react";

import "../style/home.css";

function Home() {
  return (
    <div>
      <header className="section1">
        <div className="container">
          <img src="./assets/Strikers.png" alt="" className="splash_image" />
          <img src="./assets/test.png" alt="" className="splash_logo" />
          <div className="sign_up">
            <a
              href="https://localhost"
              target="_blank"
              rel="noreferrer"
              className="new_page"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="gallery"></div>
      </header>
      <section className="section2">
        <div className="marketing_points_container"></div>
      </section>
      <section className="section3">
        <div className="accolades_container">
          <div className="accolades_container">
            <div className="accolades">
              <svg className="feature__icon">
                <use xlinkHref="./assets/icons/trophy.svg#icon-trophy"></use>
              </svg>
            </div>
            <div className="accolades">
              <svg className="feature__icon">
                <use xlinkHref="./assets/icons/awareness-ribbon.svg#icon-ribbon"></use>
              </svg>
            </div>
            <div className="accolades">
              <svg className="feature__icon">
                <use xlinkHref="./assets/icons/game-controller.svg#icon-controller"></use>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="packages_container"></div>
      </section>
      <footer className="section5">
        <div className="contacts_container">
          <div className="contact_section">
            <ul>
              <li>Affiliates</li>
              <li>Careers</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="contact_section">
            <ul>
              <li>
                Telephone
                <svg className="feature__icon">
                  <use xlinkHref="./assets/icons/phone.svg#icon-phone"></use>
                </svg>
              </li>
              <li>
                Email
                <svg className="feature__icon">
                  <use xlinkHref="./assets/icons/mail.svg#icon-mail"></use>
                </svg>
              </li>
            </ul>
          </div>
          <div className="contact_section">
            <ul>
              <li>
                Instagram
                <svg className="feature__icon">
                  <use xlinkHref="./assets/icons/instagram-with-circle.svg#icon-insta"></use>
                </svg>
              </li>
              <li>
                Twitter
                <svg className="feature__icon">
                  <use xlinkHref="./assets/icons/twitter.svg#icon-twitter"></use>
                </svg>
              </li>
              <li>
                Facebook
                <svg className="feature__icon">
                  <use xlinkHref="./assets/icons/facebook.svg#icon-facebook"></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
