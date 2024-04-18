"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Team1() {
  const followImageCursor = (event, teamItem) => {
    const contentBox = teamItem.getBoundingClientRect();
    const dx = Math.min(
      Math.max(event.clientX - contentBox.x, 0),
      contentBox.width
    );
    const dy = Math.min(
      Math.max(event.clientY - contentBox.y, 0),
      contentBox.height
    );
    teamItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
  };

  useEffect(() => {
    const teamItems = document.querySelectorAll(".team-items");

    const handleMouseMove = (event) => {
      teamItems.forEach((item) => {
        followImageCursor(event, item);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <section
        className="team-section section-padding pt-0 section-bg-2"
        id="team"
      >
        <div className="line-shape">
          <img src="/assets/img/team/line-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape">
          <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="text-white wow fadeInUp">UZMAN KADROMUZ</span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Özel Ekip Üyeleri
              </h2>
            </div>
            <Link
              href="/team"
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              Tüm Üyeler
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
          <div className="team-wrapper">
            <div
              className="team-items bor-top bor-bottom wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-title">
                <span>Kurucu</span>
                <h4>
                  <Link href="/team-details">Diyap Esen Kaba</Link>
                </h4>
              </div>
              <p>Şirket Kurucusu - Full Stact Developer</p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/diyap.jpeg")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-title">
                <span>Bilgisayar Mühendisi</span>
                <h4>
                  <Link href="/team-details">Ahmet Aydın Er</Link>
                </h4>
              </div>
              <p>Ekip Lideri - Full Stack Developer</p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/aydın.jpeg")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="team-title">
                <span>UI/UX Tasarım</span>
                <h4>
                  <Link href="/team-details">Merve Bulut</Link>
                </h4>
              </div>
              <p>Tasarımcı</p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/merve.webp")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="team-title">
                <span>Web Tasarımcı</span>
                <h4>
                  <Link href="/team-details">Hilal Çelik</Link>
                </h4>
              </div>
              <p>Web Tasarımcı</p>
              <div
                className="team-hover d-none d-md-block bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/hilal.avif")',
                }}
              />
              <div className="social-profile">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <span className="plus-btn">
                  <i className="fa-solid fa-plus" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
