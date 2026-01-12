"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, Star, Clock, Shield, Menu, X } from "lucide-react";
import HeroSection from "../_components/herosection";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function AntiqueShopLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208195/IMG_7074_vlcbxz.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208195/IMG_7089_xqfbui.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208194/IMG_7090_cvcy7c.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208193/IMG_7087_iffihh.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208192/IMG_7086_y4uvow.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208192/IMG_7085_r5t9vi.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208192/IMG_7084_rkemo7.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208191/IMG_7083_istg9m.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208190/IMG_7082_ax92si.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208189/IMG_7080_vqqatv.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208189/IMG_7081_vh9muo.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208189/IMG_7078_c71wgl.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208189/IMG_7079_rg4uyl.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208189/IMG_7077_z0nfpv.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208189/IMG_7076_jbgvfa.jpg",
    },
    {
      url: "https://res.cloudinary.com/dl21jdd1c/image/upload/v1768208189/IMG_7075_gjk1bv.jpg",
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

            <div style={styles.navLinks}>
              <a href="#collections" style={styles.navLink}>
                Collections
              </a>
              <a href="#about" style={styles.navLink}>
                About
              </a>
              <a href="#contact" style={styles.navLink}>
                Contact
              </a>
              <button style={styles.navButton}>Visit Us</button>
            </div>

            <button
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
            <div style={styles.mobileMenu}>
              <a href="#collections" style={styles.mobileNavLink}>
                Collections
              </a>
              <a href="#about" style={styles.mobileNavLink}>
                About
              </a>
              <a href="#contact" style={styles.mobileNavLink}>
                Contact
              </a>
              <button style={styles.mobileNavButton}>Visit Us</button>
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
                  width="300"
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
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.container2}>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutContent}>
              <h2 style={styles.aboutTitle}>A Legacy of Excellence</h2>
              <p style={styles.aboutText}>
                {`For over three decades, we've been preserving history and
                connecting collectors with extraordinary pieces. From sacred
                Filipino bulul statues that once guarded rice granaries to
                masterful paintings that capture moments in time.`}
              </p>
              <p style={styles.aboutText}>
                Every artifact in our collection is authenticated, documented,
                and chosen for its historical significance and artistic merit.
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
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    color: "#2d1810",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5d4c1",
  },
  navContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "20px 24px",
  },
  navContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    color: "#8b5a3c",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },
  navLink: {
    color: "#6b4423",
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer",
  },
  navButton: {
    padding: "8px 24px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.2s",
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
    paddingTop: "128px",
    paddingBottom: "96px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  hero: {
    paddingTop: "124px",
    paddingBottom: "0",
    paddingLeft: "0",
    paddingRight: "0",
    position: "relative",
  },
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "600px",
    overflow: "hidden",
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
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.5s ease-in-out",
    // backgroundColor: "#faf5ef",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "flex-end",
  },
  slideContent: {
    width: "100%",
    padding: "0 24px",
    background: "linear-gradient(0deg, #8e9eab 0%, transparent 100%)",
    // background: "linear-gradient(0deg, #434343 0%, transparent 100%)",
    textAlign: "center",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  slideIcon: {
    fontSize: "120px",
    marginBottom: "24px",
  },
  slideTitle: {
    fontSize: "64px",
    fontWeight: "bold",
    marginBottom: "16px",
    lineHeight: "1.1",
    color: "#2d1810",
  },
  slideSubtitle: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#fff",
  },
  slideText: {
    fontSize: "20px",
    color: "#fff",
    marginBottom: "40px",
    lineHeight: "1.6",
    maxWidth: "672px",
    margin: "0 auto 40px",
  },
  carouselButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid #e5d4c1",
    borderRadius: "50%",
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    color: "#8b5a3c",
    zIndex: 10,
  },
  carouselButtonLeft: {
    left: "24px",
  },
  carouselButtonRight: {
    right: "24px",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "5px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "12px",
    zIndex: 10,
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
    padding: 0,
  },
  container2: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  heroContent: {
    maxWidth: "896px",
  },
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    backgroundColor: "#ffffff",
    border: "1px solid #d4a574",
    borderRadius: "24px",
    color: "#8b5a3c",
    fontSize: "14px",
    letterSpacing: "0.15em",
    marginBottom: "24px",
  },
  heroTitle: {
    fontSize: "72px",
    fontWeight: "bold",
    marginBottom: "24px",
    lineHeight: "1.1",
    color: "#2d1810",
  },
  heroTitleAccent: {
    color: "#8b5a3c",
  },
  heroText: {
    fontSize: "20px",
    color: "#6b4423",
    marginBottom: "40px",
    maxWidth: "672px",
    lineHeight: "1.6",
  },
  heroButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "16px 32px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  section: {
    padding: "64px 24px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  featureCard: {
    padding: "32px",
    backgroundColor: "#faf5ef",
    borderRadius: "12px",
    border: "1px solid #e5d4c1",
    transition: "background-color 0.2s",
  },
  featureIcon: {
    color: "#8b5a3c",
    marginBottom: "16px",
  },
  featureTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#2d1810",
  },
  featureText: {
    color: "#6b4423",
    lineHeight: "1.6",
  },
  collectionsSection: {
    padding: "124px 24px 96px",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "64px",
  },
  sectionTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#2d1810",
  },
  sectionSubtitle: {
    fontSize: "20px",
    color: "#6b4423",
  },
  collectionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 296px)",
    gap: "32px",
  },
  collectionCard: {
    padding: "32px",
    backgroundColor: "#faf5ef",
    borderRadius: "16px",
    border: "1px solid #e5d4c1",
    cursor: "pointer",
    transition: "border-color 0.2s, background-color 0.2s",
  },
  collectionIcon: {
    fontSize: "64px",
    marginBottom: "24px",
  },
  collectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#2d1810",
    transition: "color 0.2s",
  },
  collectionText: {
    color: "#6b4423",
    marginBottom: "24px",
    lineHeight: "1.6",
  },
  collectionLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#8b5a3c",
    fontWeight: "600",
    transition: "gap 0.2s",
  },
  aboutSection: {
    padding: "124px 24px 96px",
    backgroundColor: "#faf5ef",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "64px",
    alignItems: "center",
  },
  aboutContent: {
    maxWidth: "100%",
  },
  aboutIcon: {
    fontSize: "64px",
    marginBottom: "24px",
  },
  aboutTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#2d1810",
  },
  aboutText: {
    fontSize: "20px",
    color: "#6b4423",
    marginBottom: "24px",
    lineHeight: "1.6",
  },
  aboutButton: {
    padding: "16px 32px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginTop: "8px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  },
  statCard: {
    padding: "32px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e5d4c1",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#8b5a3c",
    marginBottom: "8px",
  },
  statLabel: {
    color: "#6b4423",
  },
  ctaSection: {
    padding: "124px 24px 96px",
  },
  ctaCard: {
    backgroundColor: "#faf5ef",
    border: "1px solid #e5d4c1",
    borderRadius: "24px",
    padding: "64px",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#2d1810",
  },
  ctaText: {
    fontSize: "20px",
    color: "#6b4423",
    marginBottom: "40px",
    maxWidth: "672px",
    margin: "0 auto 40px",
  },
  ctaButton: {
    padding: "20px 48px",
    backgroundColor: "#8b5a3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  footer: {
    borderTop: "1px solid #e5d4c1",
    padding: "48px 24px",
  },
  footerContent: {
    textAlign: "center",
  },
  footerLogo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#8b5a3c",
    marginBottom: "12px",
  },
  footerText: {
    color: "#6b4423",
    marginBottom: "24px",
  },
  footerCopyright: {
    color: "#a68968",
    fontSize: "14px",
  },
};
