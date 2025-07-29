"use client";

import React from "react";
import styles from "./localgroupcard.module.css";

const LocalGroupCard = ({
  groupName,
  creatorName,
  location,
  members,
  onDetail,
  onJoin,
}) => {
  return (
    <div className={styles.localGroupCard}>
      {/* Header Section with Dark Background */}
      <div className={styles.cardHeader}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <div className={styles.hexagon}></div>
            <span className={styles.logoText}>HACKTHEBOX</span>
          </div>
          <div className={styles.meetupTag}>MEETUPS</div>
        </div>
        <h3 className={styles.locationTitle}>Lahore, PK</h3>
      </div>

      {/* Content Section */}
      <div className={styles.cardContent}>
        <div className={styles.groupInfo}>
          <h4 className={styles.groupName}>{groupName}</h4>
          <p className={styles.creatorName}>{creatorName}</p>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.detailItem}>
            <div className={styles.locationIcon}>
              <img
                src="/assets/homepage/placesCustomCard/location.png"
                alt="Location"
                className={styles.locationImage}
              />
            </div>
            <span>{location}</span>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.membersIcon}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  fill="#6b7280"
                />
              </svg>
            </div>
            <span>{members} Members</span>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button
            className={styles.detailButton}
            onClick={onDetail || (() => {})}
          >
            DETAIL
          </button>
          <button className={styles.joinButton} onClick={onJoin || (() => {})}>
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalGroupCard;
