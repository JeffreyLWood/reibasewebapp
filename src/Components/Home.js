import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav className="nav">
        <header className="header">
          <img src="/logo.png" />
        </header>
        <div className="links">
          <Link to="./services.html">Services</Link>
          <Link to="./team.html">Team</Link>
          <Link to="./protocol.html">Protocol</Link>
          <div>
            <form>
              <input type="text" name="search" placeholder="Search" />
            </form>
          </div>
        </div>

        <div className="mobileMenu"></div>

        <div className="mobileNav">
          <ul>
            <li>
              <form>
                <input type="text" name="search" placeholder="Search" />
              </form>
            </li>
            <li>
              <Link to="./services.html">Services</Link>
            </li>
            <li>
              <Link to="./team.html">Team</Link>
            </li>
            <li>
              <Link to="./protocol.html">Protocol</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="announcements">
        <Link to="#">Announcements</Link>
      </section>

      <section className="content">
        <div className="intro">
          <span className="h1">
            Direct open-source stakeholder participation.
          </span>
          <p>
            We at Reibase are the leading contributor to turbo-src – a protocol
            to tokenize source code. We aim to provide hosting, search,
            security, and other services.
          </p>

          <div className="introImageMobile">
            <Link to="">
              <img src="/introimage.png" />
            </Link>
          </div>

          <div className="emailList">
            <span>
              <label for="emailList" />
              Receive Updates On Our Progress:
              <input
                type="email"
                name="emailList"
                placeholder="name@email.com"
              />
            </span>
            <button type="button" className="button">
              Submit
            </button>
          </div>
        </div>

        <div class="introImage">
          <img src="./introimage.png" />
        </div>
      </section>

      <footer class="footer">Copyright 2022 Reibase, Inc.</footer>
    </div>
  );
}
