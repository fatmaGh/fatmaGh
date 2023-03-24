import React, { useEffect } from "react";
import site1 from "../../images/site1.png";
import "../../App.css";
import Contact from "./Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Presentation from "../Presentation/Presentation";
const Home = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <Presentation />
      <div className="contact-section">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FF5151"
            fill-opacity="1"
            d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,224C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="curved">
          <Contact />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FF5151"
            fill-opacity="1"
            d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,224C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div>
        <h1 className="section-title" data-aos="flip-left">
          My recent Work
        </h1>
        <div className="work">
          <div className="item">
            <div className="site1">
              <img data-aos="fade-left" src={site1} />
            </div>
            <div className="itemHovered" data-aos="fade-right">
              <h1 className="title-item item1">Website Design & Development</h1>
              <h1 className="title-item item2">Tch-industries</h1>
              <button className="button VS-button" role="button">
                <a
                  className="web-links"
                  href="https://www.tch-industries.com/"
                  target="_blank"
                >
                  View Website
                </a>
                <svg
                  style={{ marginLeft: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FF5151"
                    d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
