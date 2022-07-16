import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Creative <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/known.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Known Mart</h3>
                        <span>Website</span>
                      </div>
                      <a
                        className="edrea_tm_full_link popup-vimeo"
                        href="https://littlebaby.co.ke/" target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/curex.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Curex</h3>
                        <span>Facebook</span>
                      </div>
                      <a
                        className="edrea_tm_full_link popup-youtube"
                        href="https://www.facebook.com/" target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/padding.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Padding</h3>
                        <span>instagram</span>
                      </div>
                      <a
                        className="edrea_tm_full_link soundcloude_link mfp-iframe audio"
                        href="https://www.instagram.com/"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/hazinisha.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Hazinisha</h3>
                        <span>Website</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModal(true)}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/known.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Blue Lemon</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/curex.jpg"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/hazinisha.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Sweet Cheery</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/6.jpg"
                      />
                    </div>
                  </SwiperSlide>
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
