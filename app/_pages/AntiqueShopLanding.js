"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, Star, Clock, Shield, Menu, X } from "lucide-react";
import HeroSection from "../_components/herosection";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import Modal from "../_components/modal";

export default function AntiqueShopLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const slides = [
    {
      title: "Filipino Bulul Statues",
      subtitle: "Sacred Heritage in Wood",
      description:
        "Authentic rice guardians carved by master artisans, preserving centuries of Ifugao tradition",
    },
    {
      title: "Classical Masterpieces",
      subtitle: "Timeless Artistry",
      description:
        "Curated paintings from renowned artists spanning multiple eras and movements",
    },
    {
      title: "Rare Antiquities",
      subtitle: "History Preserved",
      description:
        "Exceptional pieces with documented provenance and historical significance",
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const collections = [
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285983/PHOTO-2026-01-13-18-35-32_3_o6zc0v.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285982/PHOTO-2026-01-13-18-35-31_q6utif.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285981/PHOTO-2026-01-13-18-35-31_3_axwm6d.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285981/PHOTO-2026-01-13-18-35-31_2_ir94g8.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285980/PHOTO-2026-01-13-18-35-29_2_xkyth7.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285980/PHOTO-2026-01-13-18-35-32_b84wzy.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285979/PHOTO-2026-01-13-18-35-32_2_lkfeh1.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285979/PHOTO-2026-01-13-18-35-30_zqxge6.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285977/PHOTO-2026-01-13-18-35-30_3_lajt2c.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285977/PHOTO-2026-01-13-18-35-30_2_nwno7m.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285977/PHOTO-2026-01-13-18-35-26_g3wopv.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285976/PHOTO-2026-01-13-19-24-47_q55u24.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285976/PHOTO-2026-01-13-19-24-43_whb5w3.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285976/PHOTO-2026-01-13-18-35-28_wd7od2.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285976/PHOTO-2026-01-13-18-35-29_fownjm.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285976/PHOTO-2026-01-13-19-24-51_cr4wyp.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768285975/PHOTO-2026-01-13-19-24-45_ngevlr.jpg",
    },
  ];

  const ghCollections = [
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768377384/PHOTO-2026-01-14-17-50-24_c4eqxw.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768377383/PHOTO-2026-01-14-17-50-25_c03jjb.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768377383/PHOTO-2026-01-14-17-50-25_2_ql3g8b.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768377384/PHOTO-2026-01-14-03-26-32_mh5uus.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768377383/PHOTO-2026-01-14-03-26-31_bicujy.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768377383/PHOTO-2026-01-14-03-26-25_xuqmvx.jpg",
    },
  ];

  const features = [
    {
      icon: <Shield style={{ width: "32px", height: "32px" }} />,
      title: "Authenticated",
      description:
        "Every piece is certified with detailed documentation and provenance",
    },
    {
      icon: <Clock style={{ width: "32px", height: "32px" }} />,
      title: "Historic Value",
      description:
        "Centuries of heritage preserved in every carefully selected artifact",
    },
    {
      icon: <Star style={{ width: "32px", height: "32px" }} />,
      title: "Expert Curation",
      description:
        "Hand-picked by seasoned antiquarians with decades of experience",
    },
  ];

  return (
    <>
      <style>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
      background-color: #ffffff;
    }

    body {
      position: relative;
    }

    /* Mobile Navigation - Hide nav links, show mobile menu button */
    @media (max-width: 768px) {
      .nav-links {
        display: none !important;
      }

      .mobile-menu-button {
        display: flex !important;
      }
    }

    /* Desktop Navigation - Show nav links, hide mobile menu button */
    @media (min-width: 769px) {
      .nav-links {
        display: flex !important;
      }

      .mobile-menu-button {
        display: none !important;
      }

      .mobile-menu {
        display: none !important;
      }
    }

    /* Feature cards responsive */
    @media (min-width: 768px) {
      .feature-card {
        flex: 1 1 calc(50% - 10px) !important;
      }
    }

    @media (min-width: 1024px) {
      .feature-card {
        flex: 1 1 calc(33.333% - 14px) !important;
      }
    }

    /* Collection cards responsive */
    @media (min-width: 640px) {
      .collection-card {
        flex: 1 1 calc(50% - 12px) !important;
      }
    }

    @media (min-width: 1024px) {
      .collection-card {
        flex: 1 1 calc(33.333% - 16px) !important;
      }
    }

    /* About grid responsive */
    @media (min-width: 768px) {
      .about-content {
        flex: 1 1 calc(50% - 24px) !important;
      }
    }
  `}</style>
      <div style={styles.container}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContainer}>
            <div style={styles.navContent}>
              <div style={styles.logo}>
                <div>
                  BIND<span style={{ color: "#000" }}>A</span>D.
                </div>
                <div style={{ marginLeft: "27px" }}>
                  CO<span style={{ color: "#000" }}>R</span>DILLERA
                </div>
                <div style={{ marginLeft: "29px" }}>
                  AR<span style={{ color: "#000" }}>T</span> AND CULTURE
                </div>
              </div>

              <div className="nav-links" style={styles.navLinks}>
                <a href="#collections" style={styles.navLink}>
                  Collections
                </a>
                <a href="#about" style={styles.navLink}>
                  About
                </a>
                <a href="#contact" style={styles.navLink}>
                  Contact
                </a>
                <button
                  style={styles.navButton}
                  onClick={() => setIsOpen(true)}
                >
                  Visit Us
                </button>
              </div>

              <button
                className="mobile-menu-button"
                style={styles.mobileMenuButton}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X style={{ width: "24px", height: "24px" }} />
                ) : (
                  <Menu style={{ width: "24px", height: "24px" }} />
                )}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="mobile-menu" style={styles.mobileMenu}>
                <a
                  href="#collections"
                  style={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Collections
                </a>
                <a
                  href="#about"
                  style={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  style={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Contact
                </a>
                <button
                  style={styles.mobileNavButton}
                  onClick={() => {
                    setIsOpen(true);
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                >
                  Visit Us
                </button>
              </div>
            )}
          </div>
        </nav>

        <HeroSection />
        {/* Hero Section */}
        {/* <section style={styles.heroImage}>
        <div style={styles.container2}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Where History
              <br />
              <span style={styles.heroTitleAccent}>Meets Artistry</span>
            </h1>
            <p style={styles.heroText}>
              Discover exceptional antiques, from sacred Filipino bulul carvings
              to timeless paintings. Each piece tells a story centuries in the
              making.
            </p>
            <button style={styles.heroButton}>
              <span>Explore Collection</span>
              <ChevronRight style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        </div>
      </section> */}

        {/* Hero Carousel */}
        {/* <section style={styles.hero}>
        <div style={styles.carouselContainer}>
          <div style={styles.carouselWrapper}>
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  ...styles.slide,
                  opacity: currentSlide === index ? 1 : 0,
                  visibility: currentSlide === index ? "visible" : "hidden",
                  backgroundImage: `url(
                    "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768206619/att.3y7GklND0aK_rH8NwOFGWw_N2T40qtFJeqhe7IEI0rA_tkduni.jpg"
                  )`,
                }}
              >
                <div style={styles.slideContent}>
                  <h2 style={styles.slideSubtitle}>{slide.subtitle}</h2>
                  <p style={styles.slideText}>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            style={{ ...styles.carouselButton, ...styles.carouselButtonLeft }}
          >
            <ChevronRight
              style={{
                width: "32px",
                height: "32px",
                transform: "rotate(180deg)",
              }}
            />
          </button>
          <button
            onClick={nextSlide}
            style={{ ...styles.carouselButton, ...styles.carouselButtonRight }}
          >
            <ChevronRight style={{ width: "32px", height: "32px" }} />
          </button>

          <div style={styles.dotsContainer}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  ...styles.dot,
                  backgroundColor:
                    currentSlide === index ? "#8b5a3c" : "#e5d4c1",
                }}
              />
            ))}
          </div>
        </div>
      </section> */}

        {/* Features */}
        {/* <section style={styles.section}>
        <div style={styles.container2}>
          <div style={styles.featuresGrid}>
            {features.map((feature, idx) => (
              <div key={idx} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureText}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* Collections */}
        <section id="collections" style={styles.collectionsSection}>
          <div style={styles.container2}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Our Bulul Collections</h2>
              {/* <p style={styles.sectionSubtitle}>
              Timeless treasures from around the world
            </p> */}
            </div>

            <div style={styles.collectionsGrid}>
              {collections.map((collection, idx) => (
                <Zoom key={idx}>
                  <img
                    alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                    src={`${collection.url}`}
                    width="260"
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #e5d4c1",
                      transition: "border-color 0.2s, background-color 0.2s",
                    }}
                  />
                </Zoom>
                // <div
                //   key={idx}
                //   style={{
                //     ...styles.collectionCard,
                //     backgroundImage: `url(
                //       ${collection.url}
                //     )`,
                //     backgroundPosition: "center",
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "contain",
                //     height: "300px",
                //   }}
                // >
                //  <div style={styles.collectionIcon}>{collection.icon}</div>
                // <h3 style={styles.collectionTitle}>{collection.title}</h3>
                // <p style={styles.collectionText}>{collection.description}</p>
                // <div style={styles.collectionLink}>
                //   <span>View Collection</span>
                //   <ChevronRight style={{ width: "20px", height: "20px" }} />
                // </div>
                // </div>
              ))}
            </div>
          </div>
          <div style={styles.container2}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>
                Our Gong and Handle Collections
              </h2>
            </div>

            <div style={styles.collectionsGrid}>
              {ghCollections.map((collection, idx) => (
                <Zoom key={idx}>
                  <img
                    alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                    src={`${collection.url}`}
                    width="260"
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #e5d4c1",
                      transition: "border-color 0.2s, background-color 0.2s",
                    }}
                  />
                </Zoom>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={styles.aboutSection}>
          <div style={styles.container2}>
            <div style={styles.aboutGrid}>
              <div style={styles.aboutContent}>
                <h2 style={styles.aboutTitle}>A Legacy of Excellence</h2>
                {/* <p style={styles.aboutText}>
                {`For over three decades, we've been preserving history and
                connecting collectors with extraordinary pieces. From sacred
                Filipino bulul statues that once guarded rice granaries to
                masterful paintings that capture moments in time.`}
              </p> */}
                <p style={styles.aboutText}>
                  Welcome to Bindad Cordillera Art and Culture, a living tribute
                  to John Bernabe Mamanglo and a continuation of his lifelong
                  devotion to the heritage and artistry of the Cordilleras.
                </p>
                <p style={styles.aboutText}>
                  {`John Bernabe Mamanglo, known by his Ifugao name Bindad, quietly
                shaped the appreciation of Ifugao and Cordillera artifacts for
                decades. From the age of seventeen—or perhaps even earlier, he
                walked alongside his father, Bernabe Mamanglo, learning the
                ancient trade of Bulul and antique dealings. He
                became known among collectors, artists, and antique dealers for
                his deep knowledge of the Bulul—the sacred rice guardian of the
                Ifugao, and his expertise guided many in understanding its
                cultural depth and authenticity. Although others gained
                recognition from what they learned from him, John remained
                humble and silent about his role. One of his long-time clients,
                the late collector and cultural advocate Floy Quintos,
                recognized his contribution and made sure John's name was
                inscribed beneath each Bulul he acquired, a rare gesture of
                respect in the antique trade. Because of that, collectors began
                to seek him out, tracing the origins of these remarkable pieces
                back to him.`}
                </p>
                <p style={styles.aboutText}>
                  Beyond collecting, John kept a small wood workshop where he
                  worked with master carvers from Ifugao. Together, they
                  continued traditional carving practices using solid
                  hardwoods—creating both faithful reconstructions of heritage
                  pieces and new works inspired by ancestral forms. He believed
                  that certain pieces carried stories meant to be preserved
                  rather than passed on, and through this balance of tradition
                  and craftsmanship, he became both a guardian of culture and a
                  keeper of memory.
                </p>
                <p style={styles.aboutText}>
                  {`John passed away, but his legacy endures. What
                was once Aliguyon Antique Shop is now Bindad Cordillera Art and
                Culture—renamed in his honor and now under the continued care of
                the Mamanglo family. Many of the pieces in the collection were
                passed down from his father, carrying with them
                generations of knowledge and reverence for Cordillera heritage.
                We carry forward the work John loved and the heritage he
                protected. This is more than a shop; it is a celebration of
                Ifugao culture, a tribute to the artisans who have passed down
                their skills through generations, and a continuation of John's
                mission to bridge the hands of the ancestors with the hearts of
                today's collectors.`}
                </p>
                {/* <button style={styles.aboutButton}>Our Story</button> */}
              </div>
              {/* <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>35+</div>
                <div style={styles.statLabel}>Years of Expertise</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>2000+</div>
                <div style={styles.statLabel}>Pieces Curated</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Countries</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>100%</div>
                <div style={styles.statLabel}>Authenticated</div>
              </div>
            </div> */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section style={styles.ctaSection}>
        <div style={styles.container2}>
          <div style={styles.ctaCard}>
            <h2 style={styles.ctaTitle}>Start Your Collection Today</h2>
            <p style={styles.ctaText}>
              Join collectors worldwide who trust us to find pieces that
              resonate with history and beauty
            </p>
            <button style={styles.ctaButton}>Schedule a Visit</button>
          </div>
        </div>
      </section> */}

        {/* Footer */}
        <footer id="contact" style={styles.footer}>
          <div style={styles.container2}>
            <div style={styles.footerContent}>
              <div style={styles.footerLogo}>BINDAD ART</div>
              <p style={styles.footerText}>
                Preserving history, one masterpiece at a time
              </p>
              <div style={styles.footerCopyright}>
                © 2026 Bindad Art. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.809081600908!2d120.91796067534054!3d14.205954486234978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7f8c86bdadef%3A0x2a30615f4ca36794!2sAlitaptap%20Artists&#39;%20Community!5e0!3m2!1sen!2snz!4v1768289146766!5m2!1sen!2snz"
            width="1200"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Modal>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    color: "#2d1810",
    width: "100%",
    maxWidth: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5d4c1",
    width: "100%",
    maxWidth: "100%",
  },
  navContainer: {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "20px 16px",
    boxSizing: "border-box",
  },
  navContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    fontSize: "clamp(18px, 4vw, 24px)",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    color: "#8b5a3c",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(12px, 2vw, 32px)",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#6b4423",
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer",
    fontSize: "clamp(13px, 2vw, 16px)",
    whiteSpace: "nowrap",
  },
  navButton: {
    padding: "8px 12px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.2s",
    fontSize: "clamp(13px, 2vw, 16px)",
    whiteSpace: "nowrap",
  },
  mobileMenuButton: {
    display: "none",
    backgroundColor: "transparent",
    border: "none",
    color: "#2d1810",
    cursor: "pointer",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingTop: "16px",
    paddingBottom: "8px",
    width: "100%",
  },
  mobileNavLink: {
    color: "#6b4423",
    textDecoration: "none",
  },
  mobileNavButton: {
    padding: "8px 24px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    width: "fit-content",
  },
  heroImage: {
    paddingTop: "100px",
    paddingBottom: "64px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: 0,
  },
  hero: {
    paddingTop: "80px",
    paddingBottom: "0",
    paddingLeft: "0",
    paddingRight: "0",
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
    margin: 0,
  },
  carouselContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    height: "clamp(350px, 50vh, 600px)",
    overflow: "hidden",
    margin: 0,
  },
  carouselWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    transition: "opacity 0.5s ease-in-out",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  slideContent: {
    width: "100%",
    padding: "20px 12px",
    background: "linear-gradient(0deg, #8e9eab 0%, transparent 100%)",
    textAlign: "center",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxSizing: "border-box",
  },
  slideIcon: {
    fontSize: "clamp(50px, 8vw, 120px)",
    marginBottom: "12px",
  },
  slideTitle: {
    fontSize: "clamp(24px, 5vw, 64px)",
    fontWeight: "bold",
    marginBottom: "8px",
    lineHeight: "1.1",
    color: "#2d1810",
    wordBreak: "break-word",
  },
  slideSubtitle: {
    fontSize: "clamp(16px, 3vw, 32px)",
    fontWeight: "600",
    color: "#fff",
    wordBreak: "break-word",
  },
  slideText: {
    fontSize: "clamp(13px, 2vw, 20px)",
    color: "#fff",
    marginBottom: "24px",
    lineHeight: "1.5",
    maxWidth: "100%",
    padding: "0",
    wordBreak: "break-word",
  },
  carouselButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid #e5d4c1",
    borderRadius: "50%",
    width: "clamp(36px, 7vw, 56px)",
    height: "clamp(36px, 7vw, 56px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    color: "#8b5a3c",
    zIndex: 10,
  },
  carouselButtonLeft: {
    left: "4px",
  },
  carouselButtonRight: {
    right: "4px",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    zIndex: 10,
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
    padding: 0,
  },
  container2: {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "16px",
    boxSizing: "border-box",
  },
  heroContent: {
    maxWidth: "100%",
    width: "100%",
  },
  badge: {
    display: "inline-block",
    padding: "6px 12px",
    backgroundColor: "#ffffff",
    border: "1px solid #d4a574",
    borderRadius: "24px",
    color: "#8b5a3c",
    fontSize: "clamp(11px, 2vw, 14px)",
    letterSpacing: "0.1em",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "clamp(28px, 7vw, 72px)",
    fontWeight: "bold",
    marginBottom: "16px",
    lineHeight: "1.1",
    color: "#2d1810",
    wordBreak: "break-word",
  },
  heroTitleAccent: {
    color: "#8b5a3c",
  },
  heroText: {
    fontSize: "clamp(15px, 2.5vw, 20px)",
    color: "#6b4423",
    marginBottom: "24px",
    maxWidth: "100%",
    lineHeight: "1.6",
    wordBreak: "break-word",
  },
  heroButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "12px 24px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "clamp(14px, 2vw, 16px)",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  section: {
    padding: "48px 16px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: 0,
  },
  featuresGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  featureCard: {
    flex: "1 1 100%",
    minWidth: "280px",
    padding: "20px",
    backgroundColor: "#faf5ef",
    borderRadius: "12px",
    border: "1px solid #e5d4c1",
    transition: "background-color 0.2s",
    boxSizing: "border-box",
  },
  featureIcon: {
    color: "#8b5a3c",
    marginBottom: "12px",
    fontSize: "clamp(32px, 6vw, 48px)",
  },
  featureTitle: {
    fontSize: "clamp(17px, 3vw, 20px)",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#2d1810",
  },
  featureText: {
    color: "#6b4423",
    lineHeight: "1.6",
    fontSize: "clamp(14px, 2vw, 16px)",
  },
  collectionsSection: {
    padding: "124px 16px 64px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: 0,
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "40px",
    boxSizing: "border-box",
  },
  sectionTitle: {
    fontSize: "clamp(26px, 6vw, 48px)",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#2d1810",
    wordBreak: "break-word",
  },
  sectionSubtitle: {
    fontSize: "clamp(15px, 2.5vw, 20px)",
    color: "#6b4423",
    wordBreak: "break-word",
  },
  collectionsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    boxSizing: "border-box",
    justifyContent: "center",
  },
  collectionCard: {
    flex: "1 1 100%",
    minWidth: "280px",
    padding: "24px",
    backgroundColor: "#faf5ef",
    borderRadius: "16px",
    border: "1px solid #e5d4c1",
    cursor: "pointer",
    transition: "border-color 0.2s, background-color 0.2s",
    boxSizing: "border-box",
  },
  collectionIcon: {
    fontSize: "clamp(44px, 7vw, 64px)",
    marginBottom: "16px",
  },
  collectionTitle: {
    fontSize: "clamp(19px, 3vw, 24px)",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#2d1810",
    transition: "color 0.2s",
  },
  collectionText: {
    color: "#6b4423",
    marginBottom: "16px",
    lineHeight: "1.6",
    fontSize: "clamp(14px, 2vw, 16px)",
  },
  collectionLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#8b5a3c",
    fontWeight: "600",
    transition: "gap 0.2s",
    fontSize: "clamp(14px, 2vw, 16px)",
  },
  aboutSection: {
    padding: "124px 16px 64px",
    backgroundColor: "#faf5ef",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: "0",
  },
  aboutGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "48px",
    alignItems: "center",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  aboutContent: {
    flex: "1 1 100%",
    maxWidth: "100%",
  },
  aboutIcon: {
    fontSize: "clamp(44px, 7vw, 64px)",
    marginBottom: "16px",
  },
  aboutTitle: {
    fontSize: "clamp(26px, 6vw, 48px)",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#2d1810",
    wordBreak: "break-word",
  },
  aboutText: {
    fontSize: "clamp(15px, 2.5vw, 20px)",
    color: "#6b4423",
    marginBottom: "16px",
    lineHeight: "1.6",
    wordBreak: "break-word",
  },
  aboutButton: {
    padding: "12px 24px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginTop: "8px",
    fontSize: "clamp(14px, 2vw, 16px)",
  },
  statsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
  },
  statCard: {
    flex: "1 1 calc(50% - 10px)",
    minWidth: "140px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e5d4c1",
    textAlign: "center",
    boxSizing: "border-box",
  },
  statNumber: {
    fontSize: "clamp(24px, 5vw, 36px)",
    fontWeight: "bold",
    color: "#8b5a3c",
    marginBottom: "6px",
  },
  statLabel: {
    color: "#6b4423",
    fontSize: "clamp(13px, 2vw, 16px)",
  },
  ctaSection: {
    padding: "64px 16px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: 0,
  },
  ctaCard: {
    backgroundColor: "#faf5ef",
    border: "1px solid #e5d4c1",
    borderRadius: "20px",
    padding: "clamp(28px, 5vw, 64px)",
    textAlign: "center",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  ctaTitle: {
    fontSize: "clamp(26px, 6vw, 48px)",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#2d1810",
    wordBreak: "break-word",
  },
  ctaText: {
    fontSize: "clamp(15px, 2.5vw, 20px)",
    color: "#6b4423",
    marginBottom: "24px",
    maxWidth: "100%",
    lineHeight: "1.6",
    wordBreak: "break-word",
  },
  ctaButton: {
    padding: "14px 32px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    fontSize: "clamp(15px, 2.5vw, 18px)",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  footer: {
    borderTop: "1px solid #e5d4c1",
    padding: "32px 16px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: 0,
  },
  footerContent: {
    textAlign: "center",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  footerLogo: {
    fontSize: "clamp(19px, 4vw, 24px)",
    fontWeight: "bold",
    color: "#8b5a3c",
    marginBottom: "10px",
  },
  footerText: {
    color: "#6b4423",
    marginBottom: "20px",
    fontSize: "clamp(14px, 2vw, 16px)",
  },
  footerCopyright: {
    color: "#a68968",
    fontSize: "clamp(12px, 2vw, 14px)",
  },
};
