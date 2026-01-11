"use client";
import React, { useState } from "react";
import { ChevronRight, Star, Clock, Shield, Menu, X } from "lucide-react";

export default function AntiqueShopLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const collections = [
    {
      title: "Filipino Bulul Statues",
      description:
        "Sacred rice guardians hand-carved from ancient wood, each piece representing centuries of cultural heritage",
      icon: "🗿",
    },
    {
      title: "Classical Paintings",
      description:
        "Curated masterpieces from renowned artists spanning multiple artistic movements and eras",
      icon: "🖼️",
    },
    {
      title: "Rare Antiquities",
      description:
        "Unique historical pieces with documented provenance and exceptional craftsmanship",
      icon: "⚱️",
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
            <div style={styles.logo}>BINDAD ART GALLERY</div>

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

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container2}>
          <div style={styles.heroContent}>
            <div style={styles.badge}>EST. 1987</div>
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
      </section>

      {/* Features */}
      <section style={styles.section}>
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
      </section>

      {/* Collections */}
      <section id="collections" style={styles.collectionsSection}>
        <div style={styles.container2}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Collections</h2>
            <p style={styles.sectionSubtitle}>
              Timeless treasures from around the world
            </p>
          </div>

          <div style={styles.collectionsGrid}>
            {collections.map((collection, idx) => (
              <div key={idx} style={styles.collectionCard}>
                <div style={styles.collectionIcon}>{collection.icon}</div>
                <h3 style={styles.collectionTitle}>{collection.title}</h3>
                <p style={styles.collectionText}>{collection.description}</p>
                <div style={styles.collectionLink}>
                  <span>View Collection</span>
                  <ChevronRight style={{ width: "20px", height: "20px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.container2}>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutContent}>
              <div style={styles.aboutIcon}>📜</div>
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
              <button style={styles.aboutButton}>Our Story</button>
            </div>
            <div style={styles.statsGrid}>
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
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
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <div style={styles.container2}>
          <div style={styles.footerContent}>
            <div style={styles.footerLogo}>BINDAD ART GALLERY</div>
            <p style={styles.footerText}>
              Preserving history, one masterpiece at a time
            </p>
            <div style={styles.footerCopyright}>
              © 2026 Bindad Art Gallery. All rights reserved.
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
  hero: {
    paddingTop: "128px",
    paddingBottom: "96px",
    paddingLeft: "24px",
    paddingRight: "24px",
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
    backgroundColor: "#faf5ef",
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
    padding: "96px 24px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
    padding: "96px 24px",
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
    padding: "96px 24px",
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
