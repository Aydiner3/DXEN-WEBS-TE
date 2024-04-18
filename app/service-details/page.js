"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function ServiceDetails() {
  const [activeItem, setActiveItem] = useState(1);
  const [activeTab, setActiveTab] = useState(null);
  const [activeHeader, setActiveHeader] = useState();
  const [activeContent, setActiveContent] = useState();
  const [activeContent2, setActiveContent2] = useState();
  const [activeContent3, setActiveContent3] = useState();

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const handleActiveContent = (index) => {
    let content = items[index];
    setActiveHeader(content.name);
    setActiveContent(content.content1);
    setActiveContent2(content.content2);
    setActiveContent3(content.content3);
    setActiveTab(index);
  };

  const items = [
    {
      id: 1,
      name: "Web Yazılım",
      content1:
        "Web programlama, işletmelerin çevrimiçi varlıklarını oluşturmak ve büyütmek için temel bir araçtır. Profesyonel bir web sitesi veya uygulama, müşterilere ürün ve hizmetlerinizi sunmanın en etkili yollarından biridir. Web programlama sayesinde, işletmeler kullanıcı dostu arayüzler oluşturarak müşteri deneyimini geliştirebilir ve marka bilinirliğini artırabilir. Ayrıca, çevrimiçi satış platformları kurarak müşterilere ürün ve hizmetlerinizi kolayca sunabilirsiniz.",
      content2:
        "Web programlama, işletmelerin çevrimiçi varlıklarını yönetmek ve büyütmek için güçlü bir araçtır. Profesyonel bir web sitesi veya uygulama, müşterilere ürün ve hizmetlerinizi etkili bir şekilde sunmanın yanı sıra, marka bilinirliğinizi artırmanın ve potansiyel müşterilerle etkileşime geçmenin önemli bir yoludur. Web programlama sayesinde, işletmeler çevrimiçi satış platformları kurabilir ve müşterilere kolayca erişim sağlayarak gelirlerini artırabilirler. Bu nedenle, doğru web programlama stratejisiyle, işletmeler çevrimiçi varlıklarını güçlendirip büyütebilirler.",
      content3:
        "Web programlama, işletmelerin çevrimiçi varlıklarını güçlendirme ve büyütme konusunda kritik bir rol oynar. Profesyonel bir web sitesi veya uygulama, müşterilere ürün ve hizmetlerinizi etkili bir şekilde sunmanın yanı sıra, markanızı tanıtmak ve müşteri bağlılığını artırmak için önemli bir araçtır. Web programlama sayesinde, işletmeler çeşitli özellikler ve işlevler ekleyerek kullanıcı deneyimini geliştirebilir ve müşterilerle daha yakın bir ilişki kurabilir. Ayrıca, çevrimiçi satış platformları oluşturarak müşterilere kolay ve güvenli bir alışveriş deneyimi sunabilirsiniz. Bu şekilde, müşterilerinize ürünlerinizi ve hizmetlerinizi daha etkili bir şekilde sunabilir ve işletmenizin büyümesine katkıda bulunabilirsiniz.",
    },
    {
      id: 2,
      name: "Mobil Yazılım",
      content1:
        "Mobil programlama, işletmelerin müşterilere daha etkili bir şekilde ulaşmalarını sağlayan önemli bir araçtır. Profesyonel bir mobil uygulama, müşterilerinize ürün ve hizmetlerinizi sunmanın yanı sıra, marka bilinirliğini artırmanın ve müşteri bağlılığını güçlendirmenin etkili bir yoludur. Mobil uygulama sayesinde, işletmeler müşterileriyle daha kişisel ve etkileşimli bir deneyim sunabilir, özel teklifler ve bildirimler aracılığıyla kullanıcılarıyla etkileşimde bulunabilirler.",
      content2:
        "Mobil programlama, işletmelerin müşterilere kolay ve hızlı bir alışveriş deneyimi sunmalarına yardımcı olur. Profesyonel bir mobil uygulama, kullanıcı dostu arayüzü ve hızlı işlem yetenekleriyle müşterilere ürün ve hizmetlerinizi kolayca keşfetme ve satın alma imkanı sağlar. Ayrıca, mobil ödeme seçenekleri ve güvenli ödeme sistemleriyle kullanıcıların alışveriş deneyimini daha da kolaylaştırır. Bu şekilde, işletmeler müşterilere sundukları ürün ve hizmetlerle mobil platformda daha fazla satış yapabilirler.",
      content3:
        "Son olarak, mobil programlama, işletmelerin müşteri sadakatini artırarak tekrarlayan satışları teşvik etmelerine yardımcı olur. Profesyonel bir mobil uygulama, kullanıcıların alışveriş geçmişini izleme, özel teklifler ve promosyonlar sunma gibi özelliklerle müşterilere kişiselleştirilmiş deneyimler sunar. Böylece, müşteriler işletmenizle bağlarını güçlendirir ve tekrarlayan alışverişler yapma olasılıkları artar. Bu şekilde, mobil programlama müşteri sadakatini artırarak işletmelerin gelirlerini artırır.",
    },
    {
      id: 3,
      name: "Proje Yönetim Yazılımları",
      content1:
        "Proje yönetim programları, işletmelerin projelerini planlamasına, takibine ve yönetimine yardımcı olan yazılımlardır. Bu programlar, işletmelerin zaman çizelgelerini oluşturmasını, kaynakları yönetmesini ve proje ilerlemesini izlemesini sağlar. Ayrıca, ekip üyeleri arasında iletişimi kolaylaştırır ve işbirliğini artırır. Profesyonel bir proje yönetim programı, müşterilere daha verimli ve organize bir iş süreci sunarak ürünlerin zamanında teslim edilmesini sağlar.",
      content2:
        "Proje yönetim programları, işletmelerin müşterilere daha hızlı ve verimli hizmet sunmasına yardımcı olur. Zaman çizelgeleri, görev atamaları ve ilerleme raporları gibi özelliklerle, işletmeler projelerini daha etkili bir şekilde planlayabilir ve yönetebilirler. Bu da müşterilere daha hızlı teslimatlar ve daha iyi hizmetler sunarak işletmenizin rekabet avantajını artırır.",
      content3:
        "Son olarak, proje yönetim programları, işletmelerin müşteri memnuniyetini artırmasına yardımcı olur. Profesyonel bir proje yönetim programı, işletmelerin müşteri taleplerini daha etkin bir şekilde karşılamasını ve projeleri zamanında ve bütçe dahilinde tamamlamasını sağlar. Bu da müşterilerin işletmenize olan güvenini artırır ve tekrarlayan iş fırsatları oluşturur. Bu şekilde, proje yönetim programları müşteri memnuniyetini artırarak işletmelerin büyümesine katkı sağlar.",
    },
    {
      id: 4,
      name: "Ambar-Lojistik-Satın Alma Yazılımları",
      content1:
        "Ambar, lojistik ve satın alma yazılımları, işletmelerin envanter yönetimi, lojistik süreçleri ve tedarik zinciri operasyonlarını optimize etmelerine yardımcı olur. Bu yazılımlar, depo envanterini izleme, stok düzenleme ve malzeme takibi gibi işlemleri kolaylaştırır. Ayrıca, lojistik operasyonları için rotalama, sevkiyat izleme ve tedarikçi yönetimi gibi özellikler sunarlar. Profesyonel bir ambar-lojistik-satın alma yazılımı, müşterilere daha hızlı ve verimli lojistik operasyonları sunarak ürünlerin zamanında teslimatını sağlar.",
      content2:
        "Ambar, lojistik ve satın alma yazılımları, işletmelerin müşterilere daha etkili hizmet sunmasına yardımcı olur. Bu yazılımlar, envanterin düzenli takibi ve tedarik zinciri yönetimi sayesinde işletmelerin stok yönetimini iyileştirir ve süreçleri daha verimli hale getirir. Böylece, müşterilere daha hızlı teslimatlar ve daha düşük maliyetlerle ürünler sunarak işletmenizin rekabet avantajını artırır.",
      content3:
        "Son olarak, ambar, lojistik ve satın alma yazılımları, işletmelerin müşteri memnuniyetini artırmasına yardımcı olur. Profesyonel bir yazılım, işletmelerin stok seviyelerini optimize etmesine ve müşteri taleplerini daha hızlı karşılamasına yardımcı olur. Bu da müşterilerin işletmenize olan güvenini artırır ve tekrarlayan iş fırsatları oluşturur. Bu şekilde, ambar, lojistik ve satın alma yazılımları müşteri memnuniyetini artırarak işletmelerin büyümesine katkı sağlar.",
    },
    {
      id: 5,
      name: " Bütçe-Ödeme Takip Yazılımları",
      content1:
        "Bütçe ve ödeme takip yazılımları, işletmelerin finansal yönetim süreçlerini optimize etmelerine yardımcı olan önemli araçlardır. Bu yazılımlar, gelir ve giderleri izlemek, faturaları takip etmek ve tahsilatları yönetmek için kullanılır. Ayrıca, bütçe oluşturma ve izleme, nakit akışı yönetimi ve vergi takibi gibi fonksiyonları da içerirler. Profesyonel bir bütçe ve ödeme takip yazılımı, işletmelere finansal verimliliği artırarak karlılığı optimize etme imkanı sunar.",
      content2:
        "İşletmeler için bütçe ve ödeme takip yazılımlarının sunduğu faydalar arasında, finansal süreçlerin daha iyi yönetilmesi ve kontrol altına alınması yer alır. Bu yazılımlar, işletmelerin gelir ve giderlerini detaylı bir şekilde izlemelerine ve bütçe hedeflerine ulaşmalarına yardımcı olur. Ayrıca, nakit akışını daha iyi yöneterek likiditeyi artırır ve finansal riskleri minimize eder. Bu da işletmelerin daha sağlam bir mali temel oluşturmasına yardımcı olur.",
      content3:
        "Son olarak, bütçe ve ödeme takip yazılımları işletmelere zaman ve kaynak tasarrufu sağlar. Manuel finansal süreçlerin otomasyonu sayesinde, işletmelerin finansal işlemleri daha hızlı ve hatasız bir şekilde gerçekleştirebilirler. Ayrıca, finansal verilerin merkezi bir platformda toplanması ve raporlanması, işletmelerin karar alma süreçlerini iyileştirir ve stratejik planlama yapmalarına olanak tanır. Bu da işletmelerin rekabet avantajını artırır ve sürdürülebilir büyüme sağlar.",
    },
    {
      id: 6,
      name: " Sosyal Medya Yazılımları",
      content1:
        "Sosyal medya yazılımları, işletmelerin dijital pazarlama stratejilerini güçlendirmek ve marka bilinirliğini artırmak için kritik öneme sahiptir. Bu yazılımlar, otomatik gönderi planlama, hedef kitle analizi ve etkileşim izleme gibi özelliklerle sosyal medya yönetimini kolaylaştırır. Ayrıca, reklam kampanyalarını optimize etmek ve içerik performansını ölçmek için veri analitiği sunarlar. Profesyonel bir sosyal medya yazılımı, işletmelere daha etkili ve ölçülebilir pazarlama stratejileri oluşturma ve uygulama imkanı sağlar.",
      content2:
        "İşletmeler için sosyal medya yazılımlarının sunduğu faydalar arasında, müşteri etkileşimini artırma ve marka sadakatini güçlendirme yer alır. Bu yazılımlar, işletmelerin hedef kitleleriyle daha kişisel ve etkileşimli bir iletişim kurmalarını sağlar, böylece müşteri bağlılığını artırır ve tekrarlayan satışları teşvik eder. Ayrıca, sosyal medya platformlarında marka imajını güçlendirme ve olumlu geri bildirimleri yönetme konusunda işletmelere destek olur. Bu da müşterilerin markaya olan güvenini artırır ve satın alma kararlarını etkiler.",
      content3:
        "Son olarak, sosyal medya yazılımları işletmelere rekabet avantajı sağlar ve pazarlama stratejilerini geliştirme konusunda yardımcı olur. Bu yazılımlar, rakip analizi yapma, trendleri takip etme ve rakiplerle karşılaştırma yapma gibi özellikler sunarak işletmelerin pazardaki konumunu güçlendirir. Ayrıca, sosyal medya platformlarında daha görünür olmayı sağlayarak potansiyel müşterilere ulaşma ve marka bilinirliğini artırma imkanı sunarlar. Bu da işletmelerin pazar payını artırmasına ve gelirlerini artırmasına yardımcı olur.",
    },
  ];
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Hizmetler">
        <section className="service-details-section fix section-padding">
          <div className="container">
            <div className="service-details-wrapper">
              <div className="row g-4">
                <div className="col-12 col-lg-4 order-2 order-md-1">
                  <div className="main-sidebar">
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Tüm Hizmetlerimiz</h3>
                      </div>
                      <div className="widget-categories">
                        <ul>
                          <li onClick={() => handleActiveContent(0)}>
                            Web Yazılım
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(1)}>
                            Mobil Yazılım
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(2)}>
                            Proje Yönetim Yazılımları
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(3)}>
                            Ambar-Satın Alma Yazılımları
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(4)}>
                            Bütçe-Ödeme Takip Yazılımları
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                          <li onClick={() => handleActiveContent(5)}>
                            Sosyal Medya Platformları
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="single-sidebar-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/service/post.jpg")',
                      }}
                    >
                      <div className="contact-text">
                        <div className="icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <h4>Yardıma Mı İhtiyacın Var ?</h4>
                        <h5>
                          <Link href="/tel:+905546162557">+905546162557</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8 order-1 order-md-2">
                  <div className="service-details-items">
                    <div className="details-image">
                      <img src="/assets/img/service/details-1.jpg" alt="img" />
                    </div>
                    <div className="details-content">
                      <h3>
                        {activeTab == null ? (
                          <span>Servislerimiz</span>
                        ) : (
                          <span>{activeHeader}</span>
                        )}
                      </h3>
                      <p className="mt-3">
                        {activeTab == null ? (
                          <span>
                            DXEN Teknoloji, sadece belirli alanlara odaklanarak
                            müşterilerine özelleştirilmiş çözümler sunan bir
                            yazılım firmasıdır. Sosyal medya uygulamaları, proje
                            yönetim yazılımları, ambar-satı nalma yazılımları,
                            hakkediş yazılımları, web ve mobil yazılımlar gibi
                            konularda uzmanlaşmıştır.
                          </span>
                        ) : (
                          <span>{activeContent}</span>
                        )}
                      </p>
                      <p className="mt-3">
                        {activeTab == null ? (
                          <span>
                            Sosyal medya uygulamaları alanında, müşterilerin
                            marka bilinirliğini artırmak, etkileşimi artırmak ve
                            hedef kitle ile bağlantı kurmak için özelleştirilmiş
                            çözümler sunuyoruz. Proje yönetim yazılımlarıyla,
                            işletmelerin projelerini daha etkin bir şekilde
                            planlamalarını, izlemelerini ve yönetmelerini
                            sağlıyoruz. Ambar-satı nalma yazılımları ve hakkediş
                            yazılımlarıyla, lojistik süreçlerini optimize etmek
                            ve işletmelerin verimliliğini artırmak için çözümler
                            sunuyoruz. Ayrıca, web ve mobil yazılımlarla
                            müşterilerimizin dijital varlıklarını güçlendiriyor,
                            kullanıcı deneyimini artırıyor ve iş süreçlerini
                            dijitalleştiriyoruz.
                          </span>
                        ) : (
                          <span>{activeContent2}</span>
                        )}
                      </p>
                      <div className="details-video-items">
                        <div className="video-thumb">
                          <img
                            src="/assets/img/service/details-video.jpeg"
                            alt="img"
                          />
                          <VideoPopup style={1} />
                        </div>
                        <div className="content">
                          <h4>Sunduğumuz hizmetlerin faydaları</h4>
                          <p> Özelleştirilmiş Çözümler:</p>
                          <ul className="list">
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Müşterilerin ihtiyaçlarına yönelik olarak <br />
                              özelleştirilmiş yazılım çözümleri sunarak iş{" "}
                              süreçlerini
                              <br /> optimize etme ve verimliliği artırma imkanı
                              sağlıyoruz.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              En son teknolojileri kullanarak müşterilerimizin
                              <br />
                              işletmelerini dijitalleştirmelerine ve rekabet
                              avantajı
                              <br /> elde etmelerine yardımcı oluyoruz.
                            </li>
                            <li>
                              <i className="fa-regular fa-circle-check" />
                              Her bir projeyi titizlikle ele alarak
                              müşterilerimizin
                              <br /> memnuniyetini sağlamak için çaba harcıyor,
                              şeffaf <br />
                              iletişim ve işbirliğiyle güçlü bir ilişki
                              kuruyoruz.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        {activeTab == null ? (
                          <span>
                            {" "}
                            DXEN Teknoloji ile çalışmak, belirli alanlarda
                            uzmanlaşmış bir yazılım firmasıyla işbirliği
                            yapmanın avantajlarından faydalanmanın yanı sıra,
                            müşterilerin ihtiyaçlarına yönelik özelleştirilmiş
                            çözümlerle iş süreçlerini optimize etme ve rekabet
                            avantajı elde etme fırsatını da sunar.
                            Müşterilerimizin başarıları bizim başarımızdır ve bu
                            doğrultuda hareket ederek, gelecekte de
                            müşterilerimize en iyi hizmeti sunmaya devam
                            edeceğiz.
                          </span>
                        ) : (
                          <span>{activeContent3}</span>
                        )}
                      </p>
                      <div className="image-area">
                        <div className="row g-4">
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/details-2.jpeg"
                                alt="img"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="thumb">
                              <img
                                src="/assets/img/service/details-3.jpeg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Önemli Sorular</h3>
                      <p className="mt-3">
                        Şirketimiz ile tanışma sürecinde faydalı olabilecek
                        önemli sorular.
                      </p>
                    </div>
                    <div className="faq-content style-3">
                      <div className="faq-accordion">
                        <div className="accordion" id="accordion">
                          <div
                            className="accordion-item mb-3 wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(1)}
                            >
                              <button
                                className={
                                  activeItem == 1
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                DXEN Teknoloji hangi tür yazılım hizmetleri
                                sunuyor?
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
                                DXEN Teknoloji, sosyal medya uygulamaları, proje
                                yönetim yazılımları, ambar-satın alma
                                yazılımları, hakkediş yazılımları, web ve mobil
                                yazılımlar gibi çeşitli alanlarda
                                özelleştirilmiş yazılım hizmetleri sunmaktadır.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item mb-3 wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(2)}
                            >
                              <button
                                className={
                                  activeItem == 2
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                DXEN Teknoloji'nin müşteri memnuniyeti
                                politikası nedir?
                              </button>
                            </h5>
                            <div
                              id="faq2"
                              className={
                                activeItem == 2
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                DXEN Teknoloji, müşteri memnuniyetini her zaman
                                ön planda tutar. Şeffaf iletişim, zamanında
                                teslimat ve müşteri odaklı yaklaşımıyla
                                müşterilerin beklentilerini karşılamayı
                                hedefler.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item mb-3 wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(3)}
                            >
                              <button
                                className={
                                  activeItem == 3
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                DXEN Teknoloji'nin uzmanlık alanları nelerdir?
                              </button>
                            </h5>
                            <div
                              id="faq3"
                              className={
                                activeItem == 3
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                DXEN Teknoloji'nin uzmanlık alanları arasında
                                sosyal medya uygulamaları, proje yönetim
                                yazılımları, ambar-satı nalma yazılımları,
                                hakkediş yazılımları, web ve mobil yazılımlar
                                bulunmaktadır. Bu alanlarda geniş bir deneyime
                                sahip olan ekip, müşterilere en iyi çözümleri
                                sunmaktadır.
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item wow fadeInUp"
                            data-wow-delay=".7s"
                          >
                            <h5
                              className="accordion-header"
                              onClick={() => handleClick(4)}
                            >
                              <button
                                className={
                                  activeItem == 4
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                              >
                                DXEN Teknoloji'nin yazılım geliştirme
                                sürecindeki yaklaşımı nedir?
                              </button>
                            </h5>
                            <div
                              id="faq4"
                              className={
                                activeItem == 4
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                            >
                              <div className="accordion-body">
                                DXEN Teknoloji, yazılım geliştirme sürecinde
                                müşteri odaklı bir yaklaşım benimser. İlk
                                olarak, müşterinin ihtiyaçlarını anlamak ve
                                hedeflerini belirlemek için detaylı bir analiz
                                yapılır. Ardından, proje için en uygun
                                teknolojiler ve yöntemler belirlenir ve bir
                                geliştirme planı oluşturulur. DXEN Teknoloji,
                                proje sürecinin her aşamasında müşterilerle
                                yakın işbirliği içinde çalışarak, düzenli geri
                                bildirimler alır ve gerektiğinde esneklik
                                sağlar. Böylece, projenin zamanında ve bütçe
                                dahilinde başarıyla tamamlanması sağlanır.
                                Müşterilerin memnuniyeti ve başarısı her zaman
                                DXEN Teknoloji'nin önceliğidir.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
