import React from "react";
import bike from "./img/img-intro.png";
import "./Home.css";
import "./mediaHome.css";
import bicycle from "./img/bicicle1.png";
import bicycle2 from "./img/bicicle2.png";
import bicycle3 from "./img/bicicle3.png";
import blackImage from "./img/diferencial.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home__background">
        <div className="home__hero">
          <div className="home__left">
            <h1 className="home__title">
              Bikes made under Measure
              <span style={{ color: "#FFBB00" }}>.</span>
            </h1>
            <p className="home__subtitle">
              High precision and quality bicycles, custom made for the customer.
              Explore the world at your speed with Cycles.
            </p>
            <button onClick={() => navigate("/products")} className="home__btn">
              SELECT YOURS
            </button>
          </div>
          <img
            className="home__img"
            src={bike}
            width="550"
            height="700"
            alt="bike"
          />
        </div>
      </div>
      <div className="home__list">
        <div>
          <p className="home__list-title">
            Choose yours<span style={{ color: "#FFBB00" }}>.</span>
          </p>
        </div>
        <div className="home__list-cards">
          <div className="home__list-card">
            <img src={bicycle} alt="" />
            <h2>Magic Might</h2>
            <p>R$ 2499</p>
          </div>
          <div className="home__list-card">
            <img src={bicycle2} alt="" />
            <h2>Nimbus Stark</h2>
            <p>R$ 4999</p>
          </div>
          <div className="home__list-card">
            <img src={bicycle3} alt="" />
            <h2>Nebula Cosmic</h2>
            <p>R$ 3999</p>
          </div>
        </div>
      </div>
      <div className="home__product-background">
        <div className="home__product-text">
          <p className="home__product-title">Advanced technology</p>
          <h2 className="home__product-subtitle">
            you choose your colors and components.
          </h2>
          <p className="home__product-info">
            Each Cycles is unique and has its own identity. The measurements
            will be exact for your body and height, ensuring greater comfort and
            ergonomics in your pedaling. You can also completely customize your
            colors.
          </p>
          <p className="home__product-info1">CHOOSE A MODEL</p>
          <div className="home__product-models">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 7H18.18L16.48 2.32C16.3393 1.9341 16.0836 1.60065 15.7474 1.36462C15.4112 1.12858 15.0108 1.00132 14.6 1H13C12.45 1 12 1.45 12 2C12 2.55 12.45 3 13 3H14.6L16.06 7H11.25L10.89 6H10.98C11.53 6 11.98 5.55 11.98 5C11.98 4.45 11.53 4 10.98 4H8C7.45 4 7 4.45 7 5C7 5.55 7.45 6 8 6H8.75L10.57 11H9.9C9.46 8.77 7.59 7.12 5.25 7.01C2.45 6.87 0 9.2 0 12C0 14.8 2.2 17 5 17C7.46 17 9.45 15.31 9.9 13H14.1C14.54 15.23 16.41 16.88 18.75 16.99C21.55 17.12 24 14.8 24 11.99C24 9.2 21.8 7 19 7ZM6 13H7.82C7.4 14.23 6.22 15.08 4.8 14.99C3.31 14.9 2.07 13.64 2 12.14C1.93 10.39 3.27 9 5 9C6.33 9 7.42 9.83 7.82 11H6C5.45 11 5 11.45 5 12C5 12.55 5.45 13 6 13ZM14.1 11H12.7L11.97 9H15C14.56 9.58 14.24 10.25 14.1 11ZM18.88 15C17.34 14.94 16.04 13.63 16 12.08C15.98 11.12 16.39 10.28 17.05 9.72L17.67 11.42C17.86 11.94 18.43 12.21 18.95 12.02C19.47 11.83 19.74 11.26 19.55 10.74L18.92 9.01L18.93 9C19.3309 8.98633 19.7305 9.05405 20.1045 9.19908C20.4785 9.3441 20.8193 9.56343 21.1062 9.84381C21.3932 10.1242 21.6203 10.4598 21.7739 10.8304C21.9275 11.201 22.0044 11.5989 22 12C22 13.72 20.62 15.06 18.88 15ZM11 20H7L13 23V21H17L11 18V20Z"
                  fill="url(#paint0_linear_11_54)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11_54"
                    x1="12"
                    y1="1"
                    x2="12"
                    y2="23"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFBF00" />
                    <stop offset="1" stopColor="#F2A50C" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <p className="home__product__electro-text">Electric Motor</p>
                <p className="home__product__electro-grey">
                  Every Cycles is equipped with an electric motor that lasts up
                  to 120 hours. The battery is recharged with your energy spent
                  pedaling.
                </p>
              </div>
              <div className="home__product__electro-parent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.7135 8.97212 19.8042 7.08154 18.3613 5.63869C16.9185 4.19585 15.0279 3.28651 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C8.97212 3.28651 7.08154 4.19585 5.63869 5.63869C4.19585 7.08154 3.28651 8.97212 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.28651 15.0279 4.19585 16.9185 5.63869 18.3613C7.08154 19.8042 8.97212 20.7135 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C15.0279 20.7135 16.9185 19.8042 18.3613 18.3613C19.8042 16.9185 20.7135 15.0279 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                    fill="url(#paint0_linear_11_56)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11_56"
                      x1="12"
                      y1="1"
                      x2="12"
                      y2="23"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFBF00" />
                      <stop offset="1" stopColor="#F2A50C" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="home__product__electro-text">tracker</p>
                <p className="home__product__electro-grey-two">
                  We know how precious your Cycles is, so we've added trackers
                  and anti-theft systems to ensure your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="home__product-img"
            src={blackImage}
            alt=""
            width={700}
            height={1120}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
