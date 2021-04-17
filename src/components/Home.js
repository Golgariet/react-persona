import React from "react";

function Home() {
  return (
    <div>
      <header className="section1">
        <div className="container">
          <img src="./images/Strikers.png" alt="" className="splash_image" />
          <img src="./images/test.png" alt="" className="splash_logo" />
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
        <div className="accolades_container"></div>
      </section>
      <section className="section4">
        <div className="packages_container"></div>
      </section>
      <footer className="section5">
        <div className="contacts_container"></div>
      </footer>
    </div>
  );
}

export default Home;
