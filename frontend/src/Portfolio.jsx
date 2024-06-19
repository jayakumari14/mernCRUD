"use client";

import { useEffect, useState } from "react";
import "../src/Portfolio.css";
import axios from "axios";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/portfolio")
      .then((response) => {
        setPortfolio(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the portfolio data", error);
        setError("Error fetching the portfolio data");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        <aside>
          <ul className="Links">
            <li className="activeLink">
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
            </li>
            <li>
              <i className="fa-solid fa-user"></i>
              <p>About Me</p>
            </li>
            <li>
              <i className="fa-solid fa-list"></i>
              <p>Services</p>
            </li>
            <li>
              <i className="fa-solid fa-images"></i>
              <p>Gallery</p>
            </li>
            <li>
              <i className="fa-solid fa-comments"></i>
              <p>Contact Me</p>
            </li>
          </ul>
        </aside>
        <div className="swiper mySwiper">
          <div className="SlideContainer swiper-wrapper">
            <div className="swiper-slide home-slide">
              <div className="HomeContent">
                <h1>{portfolio.name}</h1>
                <h2>
                  A <span className="proffesions"> {portfolio.profession}</span>
                </h2>
                <p className="heroline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  officia iste tenetur dolor quis officiis quidem sapiente illo
                  nostrum mollitia.
                </p>
                <div className="buttonGroup">
                  <button>Hire Me</button>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="SideImg">
                <div className="top-right-corner">
                  <hr className="hr1" />
                  <hr className="hr2" />
                </div>
                <img src="https://picsum.photos/id/237/200/200" alt="" />
                <div className="bottom-left-corner">
                  <hr className="hr1" />
                  <hr className="hr2" />
                </div>
              </div>
              <p className="slide-help">
                Scroll for next slide{" "}
                <i className="fa-solid fa-chevron-right fa-shake"></i>
              </p>
            </div>
            <div className="swiper-slide">
              <div className="about-us">
                <h1 className="heading">About Me</h1>
                {/* <h3 className="sub-heading">
                  I'm Muzammal,{" "}
                  <span className="proffesions">A Web Developer</span>
                </h3> */}
                <p className="aboutme-deatils">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit iure, iste debitis unde maiores earum, ipsam quaerat
                  quo magni sunt nisi at ullam nostrum pariatur soluta mollitia
                  omnis consectetur qui similique doloribus vitae sit est in
                  modi. Officia libero, animi repellendus debitis labore ipsa
                  exercitationem ut ex. Natus ullam officiis qui fuga optio
                  incidunt, ipsum atque ducimus quas ad eveniet nulla sit
                  consectetur velit inventore possimus quae provident,
                  repudiandae eaque sed quos mollitia omnis error. Hic animi
                  porro asperiores ratione voluptatibus commodi, architecto
                  officia nobis ducimus sint, placeat enim? Ab obcaecati ad
                  provident et possimus. Ullam ipsa laborum sint autem!
                </p>
                <div className="about-me-divison">
                  <div className="about-me-table">
                    <li>
                      <span>Experience:</span> 5+ years
                    </li>
                    <li>
                      <span>Country:</span> Pakistan
                    </li>
                    <li>
                      <span>Avability:</span> 24/7{" "}
                    </li>
                    <li>
                      <span>Satisfied Clients:</span>200+
                    </li>
                    <li>
                      <span>Age</span>:20
                    </li>
                    <li>
                      <span>Phone</span>:123-456-7890
                    </li>
                    <li>
                      <span>Language Used:</span>HTML
                    </li>
                    <li>
                      <span>Degree</span>:CS
                    </li>
                    <div className="buttonGroup">
                      <button>Hire Me</button>
                      <button>Contact Me</button>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <li>
                      <p>HTML</p>
                      <div className="bar">
                        <div
                          className="active-bar"
                          style={{ width: "99%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <p>CSS</p>
                      <div className="bar">
                        <div
                          className="active-bar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <p>JavaScript</p>
                      <div className="bar">
                        <div
                          className="active-bar"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <p>Python</p>
                      <div className="bar">
                        <div
                          className="active-bar"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <p>Django</p>
                      <div className="bar">
                        <div
                          className="active-bar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide services">
              <h1 className="heading">Services</h1>
              <div className="service">
                <div className="service-icon">
                  <i className="fa-solid fa-pen-ruler"></i>
                </div>
                <h2>Web Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  quod.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h2>Web Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  quod.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <h2>SEO</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  quod.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <i className="fa-solid fa-image"></i>
                </div>
                <h2>Graphic Designer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  quod.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <h2>Software Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  quod.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <i className="fa-solid fa-database"></i>
                </div>
                <h2>Database Admin</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  quod.
                </p>
              </div>
            </div>
            <div className="swiper-slide gallery">
              <h1 className="heading">Gallery</h1>
              <div className="project">
                <img src="https://picsum.photos/200/300?random=1" alt="" />
              </div>
              <div className="project">
                <img src="https://picsum.photos/200/300?random=2" alt="" />
              </div>
              <div className="project">
                <img src="https://picsum.photos/200/300?random=3" alt="" />
              </div>
              <div className="project">
                <img src="https://picsum.photos/200/300?random=4" alt="" />
              </div>
              <div className="project">
                <img src="https://picsum.photos/200/300?random=5" alt="" />
              </div>
              <div className="project">
                <img src="https://picsum.photos/200/300?random=6" alt="" />
              </div>
            </div>
            <div className="swiper-slide contactMe">
              <h1 className="heading">Contact Me</h1>
              <div className="contactinfo">
                <i className="fa-solid fa-phone"></i>
                <h3>Mobile No</h3>
                <p>123-456-7890</p>
              </div>
              <div className="contactinfo">
                <i className="fa-solid fa-location-dot"></i>
                <h3>Location</h3>
                <p>Somewhere On Earth</p>
              </div>
              <div className="contactinfo">
                <i className="fa-regular fa-envelope"></i>
                <h3>Email</h3>
                <p>abc123@gmail.com</p>
              </div>
              <div className="contactinfo">
                <i className="fa-solid fa-globe"></i>
                <h3>Website</h3>
                <p>www.abc123.com</p>
              </div>
              <form>
                <h2>
                  Send Me A Message{" "}
                  <div className="SocialLinks">
                    <i className="fa-brands fa-codepen"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                </h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="email" />
                <textarea
                  rows="10"
                  placeholder="Type your Message Here..."
                ></textarea>
                <button className="primary">Send</button>
              </form>
              <footer>
                <li>Copyright © 2023 Muzammal.</li>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
