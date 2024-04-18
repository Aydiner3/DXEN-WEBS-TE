"use client";
import { useState } from "react";
export default function Accordion1() {
  const [activeItem, setActiveItem] = useState(1);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <>
      <div className="accordion" id="accordion">
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
          <h5 className="accordion-header" onClick={() => handleClick(1)}>
            <button
              className={
                activeItem == 1
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="true"
              aria-controls="faq1"
            >
              Bir iş planı ne kadar uzunlukta olmalıdır?
            </button>
          </h5>
          <div
            id="faq1"
            className={
              activeItem == 1
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              İş planı projeye göre belirlenir. Süre her projeye ve içeriğine
              göre değişiklik gösterebilir.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
          <h5 className="accordion-header" onClick={() => handleClick(2)}>
            <button
              className={
                activeItem == 2
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded="false"
              aria-controls="faq2"
            >
              Hizmetlerinize neler dahil ?
            </button>
          </h5>
          <div
            id="faq2"
            className={
              activeItem == 2
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              Sosyal medya uygulamaları ve proje yönetim yazılımları, ambar-satı
              nalma yazılımları, hakkediş yazılımları , web yazılımları , mobil
              yazılımlar.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
          <h5 className="accordion-header" onClick={() => handleClick(3)}>
            <button
              className={
                activeItem == 3
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              aria-expanded="false"
              aria-controls="faq3"
            >
              Şirket olarak misyonunuz nedir ?
            </button>
          </h5>
          <div
            id="faq3"
            className={
              activeItem == 3
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              Misyonumuz uzun yıllar sonucunda elde ettiğimiz tecrübe ve
              deneyimi , müşterilerimize faydalı ve yenilikçi şekilde sunmaktır.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
