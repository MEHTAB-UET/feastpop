"use client";

import React from "react";
import styles from "./placescard.module.css";

const PlacesCard = ({
  title,
  restaurantType,
  image,
  location,
  isFavorited = false,
  onFavorite,
}) => {
  return (
    <div className={styles.placesCard}>
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

        <div className={styles.cardDetails}>
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
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
