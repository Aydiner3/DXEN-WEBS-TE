import Link from "next/link";
import VideoPopup from "../elements/VideoPopup";
import CounterUp from "../elements/CounterUp";

export default function About1() {
  return (
    <>
      <section className="about-section section-padding fix" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="counter-shape float-bob-y">
                    <div className="icon">
                      <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h3>
                        <CounterUp count={6561} />+
                      </h3>
                    </div>
                  </div>
                  <VideoPopup style={2} />
                  <div
                    className="about-image-1 bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/01.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="/assets/img/about/02.jpg" alt="about-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">DXEN HAKKINDA</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      İş başarınızı <span>arttırıyoruz</span>
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Şirketimiz sosyal medya platformları ve proje yönetim
                    yazılımları, ambar-satın alma yazılımları, bütçe ve ödeme ,
                    inşaat yönetim programı yazılımları konularında
                    uzmanlaşmıştır.
                  </p>
                  <div className="about-icon-items">
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="icon">
                        <img
                          src="/assets/img/about/icon-2.svg"
                          alt="icon-img"
                        />
                      </div>
                      <div className="content">
                        <h4>Problem çözümleri</h4>
                        <p>
                          Her türlü problemi otomatize etmek ve teknolojiye
                          uyumlu hale getirmek.
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <div className="icon">
                        <img
                          src="/assets/img/about/icon-3.svg"
                          alt="icon-img"
                        />
                      </div>
                      <div className="content">
                        <h4>Misyon &amp; </h4>
                        <p>Müşterilerimize uygun yenilikçi çözümler sunmak.</p>
                      </div>
                    </div>
                  </div>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Link href="/about" className="theme-btn">
                        Keşfet
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <img
                        src="/assets/img/about/author.png"
                        alt="author-img"
                      />
                      <div className="content">
                        <h6>Diyap Esen Kaba</h6>
                        <p>Kurucu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
