"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [activeItem, setActiveItem] = useState(1);
  console.log(activeItem);

  const handleActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container">
        <div className="mean-bar">
          <Link
            href="/#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto", display: "inline" }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </Link>
          <nav className="mean-nav">
            <ul>
              <li className="has-dropdown active menu-thumb">
                <Link href="/">
                  Anasayfa
                  <i className="fas fa-angle-down" />
                </Link>
              </li>
              <li>
                <Link href="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/service-details">
                  Hizmetlerimiz
                  <i className="fas fa-angle-down" />
                </Link>
              </li>
              <li className="has-dropdown">
                <Link href="/contact">
                  İletişim
                  <i className="fas fa-angle-down" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
