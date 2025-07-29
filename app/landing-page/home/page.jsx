import React from "react";
import styles from "./home.module.css";
import EventCard from "../../components/eventcard/EventCard";
import PlacesCard from "../../components/placescard/PlacesCard";
import LocalGroupCard from "../../components/localgroupcard/LocalGroupCard";

const home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to your culinary community
          </h1>
          <p className={styles.heroDescription}>
            Connect with your local restaurants, farmers markets, food trucks,
            and more
          </p>

          <div className={styles.searchBar}>
            <div className={styles.searchInputs}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Where"
                  className={styles.searchInput}
                />
              </div>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="When"
                  className={styles.searchInput}
                />
                <svg
                  className={styles.inputIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 8H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="8"
                    cy="8"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Event Type"
                  className={styles.searchInput}
                />
                <svg
                  className={styles.inputIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <button className={styles.searchButton}>SEARCH</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.featuresSection}>
        <div className={styles.featuresContent}>
          <div className={styles.featuresText}>
            <h2 className={styles.featuresTitle}>Eat, Drink, and Be Merry</h2>
            <p className={styles.featuresDescription}>
              FeastPop helps you discover and enjoy the delicious world of food.
            </p>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <img
                  src="/assets/homepage/explore.svg"
                  alt="Explore"
                  className={styles.featureIcon}
                />
                <span>
                  Explore the best eateries, breweries, wineries, and markets
                </span>
              </li>
              <li className={styles.featureItem}>
                <img
                  src="/assets/homepage/upcoming.svg"
                  alt="Upcoming"
                  className={styles.featureIcon}
                />
                <span>Find upcoming events, pop-ups, and festivals</span>
              </li>
              <li className={styles.featureItem}>
                <img
                  src="/assets/homepage/hotdeal.svg"
                  alt="Hot Deal"
                  className={styles.featureIcon}
                />
                <span>Unlock special deals, tastings, and menus</span>
              </li>
              <li className={styles.featureItem}>
                <img
                  src="/assets/homepage/connect.svg"
                  alt="Connect"
                  className={styles.featureIcon}
                />
                <span>Connect with and support local businesses</span>
              </li>
              <li className={styles.featureItem}>
                <img
                  src="/assets/homepage/join.svg"
                  alt="Join"
                  className={styles.featureIcon}
                />
                <span>Join local groups in your community</span>
              </li>
            </ul>
          </div>

          <div className={styles.featuresImage}>
            <div className={styles.imageContainer}>
              <img
                src="/assets/homepage/girl.svg"
                alt="Girl eating pizza"
                className={styles.girlImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Top Events & Deals Section */}
      <div className={styles.eventsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Top Events & Deals</h2>
          <a href="#" className={styles.seeAllLink}>
            See All
          </a>
        </div>

        <div className={styles.cardsGrid}>
          <EventCard
            title="Dummy Event Name"
            subtitle="Restaurant Name"
            image="/assets/homepage/topevents/5.png"
            location="47 W 13th St, New York, NY 10011, Dubai"
            date="12 April, 2025"
            buttonText="Active"
          />
          <EventCard
            title="Dummy Event Name"
            subtitle="Restaurant Name"
            image="/assets/homepage/topevents/1.png"
            location="47 W 13th St, New York, NY 10011, Dubai"
            date="12 April, 2025"
            buttonText="Active"
          />
          <EventCard
            title="Dummy Event Name"
            subtitle="Restaurant Name"
            image="/assets/homepage/topevents/5.png"
            location="47 W 13th St, New York, NY 10011, Dubai"
            date="12 April, 2025"
            buttonText="Active"
          />
        </div>
      </div>

      {/* Featured Places Section */}
      <div className={styles.placesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Places</h2>
          <a href="#" className={styles.seeAllLink}>
            See All
          </a>
        </div>

        <div className={styles.cardsGrid}>
          <PlacesCard
            title="Dummy Restaurant Name"
            image="/assets/homepage/topevents/4.png"
            location="47 W 13th St, New York, NY 10011, Dubai"
            restaurantType={
              <>
                <strong>Type</strong> : Live Music | Happy Hours
              </>
            }
          />
          <PlacesCard
            title="Dummy Restaurant Name"
            image="/assets/homepage/topevents/2.png"
            location="47 W 13th St, New York, NY 10011, Dubai"
            restaurantType={
              <>
                <strong>Type</strong> : Live Music | Happy Hours
              </>
            }
          />
          <PlacesCard
            title="Dummy Restaurant Name"
            image="/assets/homepage/topevents/3.png"
            location="47 W 13th St, New York, NY 10011, Dubai"
            restaurantType={
              <>
                <strong>Type</strong> : Live Music | Happy Hours
              </>
            }
          />
        </div>
      </div>

      {/* Local Groups Section */}
      <div className={styles.localGroupsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Local Groups</h2>
          <a href="#" className={styles.seeAllLink}>
            See All
          </a>
        </div>
        <div className={styles.cardsGrid}>
          <LocalGroupCard
            groupName="Dummy Group Name"
            creatorName="Creator Name"
            location="47 W 13th St, New York, NY 10011, Dubai"
            members={129}
          />
          <LocalGroupCard
            groupName="Dummy Group Name"
            creatorName="Creator Name"
            location="47 W 13th St, New York, NY 10011, Dubai"
            members={129}
          />
          <LocalGroupCard
            groupName="Dummy Group Name"
            creatorName="Creator Name"
            location="47 W 13th St, New York, NY 10011, Dubai"
            members={129}
          />
        </div>
      </div>

      {/* Restaurant Banner Section */}
      <div className={styles.restaurantBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerText}>
            <h2 className={styles.bannerTitle}>
              Fresh sourdough at 6am at Mikey's restaurant
            </h2>
            <p className={styles.bannerDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              fermentum, sapien nec malesuada convallis, tellus lectus porta
              justo, nec pretium nisi neque non orci
            </p>
            <button className={styles.exploreButton}>EXPLORE RESTAURANT</button>
          </div>
          <div className={styles.bannerImage}>
            <img
              src="/assets/homepage/topevents/3.png"
              alt="Restaurant Interior"
            />
          </div>
        </div>
      </div>

      {/* Spacing Div */}
      <div className={styles.bannerSpacing}></div>
    </>
  );
};

export default home;
