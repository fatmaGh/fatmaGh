import React from "react";
import "./Resume.css";
import res_logo from "../../images/logo.png";
import git from "../../images/github3.png";
import linked from "../../images/linked3.png";
import website from "../../images/link.png";
import phone from "../../images/whatsapp.png";
import photo from "../../images/photo.png";
import calendar from "../../images/calendar.png";
import pin from "../../images/pin.png";
import { Link } from "react-router-dom";
import file from "../../assets/Fatma_Gharsallah_Resume.pdf";
import arrow from "../../images/arrow.png";

const Resume = () => {
  return (
    <div>
      <section className="resume">
        <div className="res-header">
          <Link to="/">
            <img
              className="res-logo"
              src={res_logo}
              height="200px"
              width="200px"
            />
          </Link>
          <div className="res-title">
            <h4 className="res-sub-title">Fatma Gharsallah</h4>
            <p className="res-subtitle">
              Full Stack Web Developer & Web Designer
            </p>
            <div className="res-coord">
              <div>
                <div className="coord-links">
                  <div>
                    <img src={git} />
                  </div>
                  <a
                    href="https://github.com/fatmaGh"
                    target="_blank"
                    className="coord-title"
                  >
                    https://github.com/fatmaGh
                  </a>
                </div>
                <div className="coord-links">
                  <div>
                    <img src={linked} />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/fatma-gharsallah-0535131a1/"
                    target="_blank"
                    className="coord-title"
                  >
                    https://www.linkedin.com/in/fatma-gharsallah-0535131a1/
                  </a>
                </div>
              </div>
              <div>
                <div className="coord-links">
                  <div>
                    <img src={website} />
                  </div>
                  <Link to="/" className="coord-title">
                    https://fatmagh.github.io/fatmaGh/
                  </Link>
                </div>
                <div className="coord-links">
                  <div>
                    <img src={phone} />
                  </div>
                  <h6 className="coord-title">+216 95 98 66 35</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-photo">
            <img src={photo} height="150px" width="150px" />
          </div>
        </div>
        <div className="res-container">
          <aside>
            <h4 className="res-contain-titles">Profile</h4>
            <p className="res-description">
              Full Stack Developer and web designer passionate about creating
              websites using technologies like Javascript, ReactJs, NodeJs,
              ExpressJS. Equiped of a bachelor's and a licence in IT applied
              management. Also certified from GOMYCODE, I created several
              projects during the full-stack JavaScript bootcamp that i had. In
              addition, I have a professional English and French level with an
              intermediate understanding of Italian.
            </p>
          </aside>
          <div className="res-cont-right">
            <div>
              <h4 className="res-contain-titles">Education</h4>
              <ul>
                <li>
                  <span>Full-Stack Web Developpement Bootcamp</span>
                  <div className="content">
                    <div className="details">
                      <div>
                        <img src={calendar} />
                      </div>
                      <p>
                        Mar 2021 <br /> Aug 2021
                      </p>
                    </div>
                    <div className="details">
                      <div>
                        <img src={pin} />
                      </div>
                      <p>Tunis, Tunisia</p>
                    </div>
                  </div>
                  <p>GOMYCODE</p>
                </li>
                <li>
                  <span>M.S. in IT applied in Management</span>
                  <div className="content">
                    <div className="details">
                      <div>
                        <img src={calendar} />
                      </div>
                      <p>2005 - 2010</p>
                    </div>
                    <div className="details">
                      <div>
                        <img src={pin} />
                      </div>
                      <p>Sfax, Tunisia</p>
                    </div>
                  </div>
                  <p>Institute of Economics and Management</p>
                </li>
                <li>
                  <span>Bachelor's Degree in Economics and Management</span>
                  <div className="content">
                    <div className="details">
                      <div>
                        <img src={calendar} />
                      </div>
                      <p>2005</p>
                    </div>
                    <div className="details">
                      <div>
                        <img src={pin} />
                      </div>
                      <p>Sfax, Tunisia</p>
                    </div>
                  </div>
                  <p>Hedi Chaker High School</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="res-contain-titles">Experience</h4>
              <ul>
                <li>
                  <span> Web Designer</span>
                  <div className="content">
                    <div className="details">
                      <div>
                        <img src={calendar} />
                      </div>
                      <p>2011 - 2012</p>
                    </div>
                    <div className="details">
                      <div>
                        <img src={pin} />
                      </div>
                      <p>Tunis, Tunisia</p>
                    </div>
                  </div>
                  <p>Gioca Sarl</p>
                  <p>
                    Create website's template using photoshop and illutrator
                  </p>
                </li>
                <li>
                  <span>Freelancer</span>
                  <div className="content">
                    <div className="details">
                      <div>
                        <img src={calendar} />
                      </div>
                      <p>2021 - 2023</p>
                    </div>
                    <div className="details">
                      <div>
                        <img src={pin} />
                      </div>
                      <p>Tunis, Tunisia</p>
                    </div>
                  </div>
                  <p>
                    Designing and Creating websites Using Html, Css and
                    Javascript
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Link to={file} target="_blank" download className="download-link">
        <button
          className="button send-button download-button"
          role="button"
          type="submit"
        >
          Download
          <img alt="arrow" className="arrow" src={arrow} />
        </button>
      </Link>
    </div>
  );
};
export default Resume;
