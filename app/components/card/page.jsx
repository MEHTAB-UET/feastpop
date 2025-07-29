"use client";

import React from "react";
import styles from "./card.module.css";

const Card = ({
  type,
  title,
  subtitle,
  image,
  location,
  date,
  dealExpiration,
  restaurantType,
  buttonText,
  buttonVariant = "primary",
  isFavorited = false,
  onFavorite,
  onButtonClick,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <button
            className={`${styles.favoriteButton} ${
              isFavorited ? styles.favorited : ""
            }`}
            onClick={onFavorite}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2L12.09 7.26L18 8L13 12.14L14.18 18.02L10 15.77L5.82 18.02L7 12.14L2 8L7.91 7.26L10 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}

        <div className={styles.cardDetails}>
          {type === "event" && (
            <>
              <div className={styles.detailItem}>
                <img
                  src="/assets/homepage/placesCustomCard/location.png"
                  alt="Location"
                  className={styles.locationIcon}
                />
                <span>{location}</span>
              </div>
              <div className={styles.detailItem}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M2 7H14" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M6 1V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 1V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{date}</span>
              </div>
            </>
          )}

          {type === "deal" && (
            <>
              <div className={styles.detailItem}>
                <img
                  src="/assets/homepage/placesCustomCard/location.png"
                  alt="Location"
                  className={styles.locationIcon}
                />
                <span>{location}</span>
              </div>
              <div className={styles.detailItem}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M2 7H14" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M6 1V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 1V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Deal Expiration: {dealExpiration}</span>
              </div>
            </>
          )}

          {type === "place" && (
            <>
              <div className={styles.detailItem}>
                <span className={styles.restaurantType}>{restaurantType}</span>
              </div>
              <div className={styles.detailItem}>
                <img
                  src="/assets/homepage/placesCustomCard/location.png"
                  alt="Location"
                  className={styles.locationIcon}
                />
                <span>{location}</span>
              </div>
            </>
          )}
        </div>

        {buttonText && (
          <button
            className={`${styles.cardButton} ${styles[buttonVariant]}`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
