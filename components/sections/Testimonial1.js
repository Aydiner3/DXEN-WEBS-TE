"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
};

export default function Testimonial1() {
  return (
    <>
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="swiper testimonial-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide>
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Görüşler</span>
                        <h2>Müşteri Yorumları </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Hızlı bir şekilde firmamızın ihtiyaç duyduğu yazılımı
                        yazıp teslim ettiler.Ekipteki arkadaşlara teşekkür
                        ederim.
                      </p>
                      <div className="author-details">
                        <h5>A. Biçer</h5>
                        <span>Biçer Grup Genel Müdürü</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-items">
                    <div
                      className="tesimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/testimonial/01.jpg")',
                      }}
                    >
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="section-title">
                        <span>Görüşler</span>
                        <h2>Müşteri Yorumları </h2>
                      </div>
                      <p className="mt-3 mt-md-0">
                        Projenin başından sonuna kadar kendi ekibimizle beraber
                        çalıştılar. Değiştirmek istediğimiz noktalar ile ilgili
                        hızlı düzeltmeler yapıp projeyi teslim ettiler. Teşekkür
                        ederim.
                      </p>
                      <div className="author-details">
                        <h5>S. Karataş</h5>
                        <span>Özkul Metal A.Ş.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-dot-2">
              <div className="dot-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
