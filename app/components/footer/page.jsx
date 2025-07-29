"use client";

import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Section - Logo and Description */}
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <img src="/assets/footer/logo.jpg" alt="FEAST POP Logo" />
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        {/* second half seciton */}
        <div className={styles.secondHalf}>
          {/* Middle Section - Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionHeading}>Links</h3>
            <ul className={styles.linksList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  RSVPs
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Social */}
          <div className={styles.socialSection}>
            <h3 className={styles.sectionHeading}>Social</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={`${styles.socialIcon} ${styles.facebook}`}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V18H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className={`${styles.socialIcon} ${styles.twitter}`}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2L10 10L2 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 18L10 10L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className={`${styles.socialIcon} ${styles.instagram}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="4"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="10"
                    cy="10"
                    r="3"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="14" cy="6" r="1" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <div className={styles.separator}></div>
        <p className={styles.copyright}>
          Copyright © 2004-{currentYear} FeastPop, and related marks are
          registered trademarks of FeastPop.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
