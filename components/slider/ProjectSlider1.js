"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-3",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 2,
    },

    575: {
      slidesPerView: 1,
    },

    0: {
      slidesPerView: 1,
    },
  },
};
export default function ProjectSlider1({ showDots }) {
  return (
    <>
      <div className="swiper project-slider pt-5">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          <SwiperSlide>
            <div className="project-items">
              <div className="project-image">
                <img src="/assets/img/integration.jpeg" alt="project-img" />
                <div className="project-content">
                  <p>Teknoloji</p>
                  <h4>
                    <Link href="/service-details">Platform Entegrasyonu</Link>
                  </h4>
                  <Link href="/service-details" className="icon">
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-items">
              <div className="project-image">
                <img src="/assets/img/web-prog.webp" alt="project-img" />
                <div className="project-content">
                  <p>Teknoloji</p>
                  <h4>
                    <Link href="/service-details">Web Yazılım</Link>
                  </h4>
                  <Link href="/service-details" className="icon">
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-items">
              <div className="project-image">
                <img src="/assets/img/web-desing2.jpeg" alt="project-img" />
                <div className="project-content">
                  <p>Teknoloji</p>
                  <h4>
                    <Link href="/service-details">Web Tasarım</Link>
                  </h4>
                  <Link href="/service-details" className="icon">
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-items">
              <div className="project-image">
                <img src="/assets/img/erp2.jpeg" alt="project-img" />
                <div className="project-content">
                  <p>Teknoloji</p>
                  <h4>
                    <Link href="/service-details">ERP Yazılımları</Link>
                  </h4>
                  <Link href="/service-details" className="icon">
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-items">
              <div className="project-image">
                <img src="/assets/img/mobile.jpeg" alt="project-img" />
                <div className="project-content">
                  <p>Teknoloji</p>
                  <h4>
                    <Link href="/service-details">Mobil Uygulamalar</Link>
                  </h4>
                  <Link href="/service-details" className="icon">
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {showDots && (
          <div className="swiper-dot-2">
            <div className="dot-3" />
          </div>
        )}
      </div>
    </>
  );
}
