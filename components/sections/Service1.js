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
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },

  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function Service1() {
  return (
    <>
      <section
        className="service-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
        id="service"
      >
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp">IT hizmetleri</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                IT sorunlarınızı <br /> Teknoloji İle Çözüyoruz
              </h2>
            </div>
            <div className="array-button">
              <button className="array-prev">
                <i className="fal fa-arrow-right" />
              </button>
              <button className="array-next">
                <i className="fal fa-arrow-left" />
              </button>
            </div>
          </div>
          <div className="service-wrapper">
            <div className="swiper service-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide>
                  <div className="service-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/service/icon/s-icon-2.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/service-details">Sosyal Medya</Link>
                      </h4>
                      <p>Müşterilere özel sosyal medya programları.</p>
                      <Link
                        href="/service-details"
                        className="theme-btn-2 mt-3"
                      >
                        Daha Fazla
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="service-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/service/icon/s-icon-4.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/service-details">Mobil Programlama</Link>
                      </h4>
                      <p>Modern ve kullanımı kolay mobil uygulamalar.</p>
                      <Link
                        href="/service-details"
                        className="theme-btn-2 mt-3"
                      >
                        Daha Fazla
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/service/icon/s-icon-1.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/service-details">
                          Proje Yönetim Yazılımları
                        </Link>
                      </h4>
                      <p>
                        Her türlü projeyi kolaylıkla yönetmek için otomasyonlar
                      </p>
                      <Link
                        href="/service-details"
                        className="theme-btn-2 mt-3"
                      >
                        Daha Fazla
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/service/icon/s-icon-2.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/service-details">
                          Ambar-Satın Alma Yazılımları
                        </Link>
                      </h4>
                      <p>Ambar-Satın Alma Yazılımları</p>
                      <Link
                        href="/service-details"
                        className="theme-btn-2 mt-3"
                      >
                        Daha Fazla
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/service/icon/s-icon-3.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/service-details">Hakediş Yazılımları</Link>
                      </h4>
                      <br />
                      <p>Tüm hakediş yazılımları.</p>
                      <Link
                        href="/service-details"
                        className="theme-btn-2 mt-3"
                      >
                        Daha Fazla
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-box-items">
                    <div className="icon">
                      <img
                        src="/assets/img/service/icon/s-icon-4.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/service-details">Web Programlama</Link>
                      </h4>
                      <p>Kişiye ve firmalara özel modern web siteleri</p>
                      <Link
                        href="/service-details"
                        className="theme-btn-2 mt-3"
                      >
                        Daha Fazla
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="service-text wow fadeInUp" data-wow-delay=".4s">
              <h6>
                Ne Tür Bir IT Çözümüne İhtiyacınız Var{" "}
                <Link href="/service">Hizmetleri Gör </Link>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
