import Statistics from './Statistics';
import styles from './HeroSection.module.css';



export default function HeroSection() {
  return (
    <section className={`position-relative overflow-hidden ${styles.heroSection}`}>
      <div className="container-xl py-5">

        {/* ══ Main Row ══ */}
        <div className={styles.mainRow}>

          {/* ── Left: Text Content ── */}
          <div className={styles.leftContent}>
            <h1 className={styles.heading}>
              Mobile App Development
              <br />Company in Chennai
            </h1>

            <p className={styles.description}>
              The mobile application development services in Chennai, India, have become a
              highly competitive and dynamic industry, with numerous companies striving to claim
              the top spot. Among them, TZI stands out as one of the best mobile app development
              companies in Chennai due to its innovative and cost-effective approach. With a track
              record of delivering successful applications, TZI is steadily earning recognition as
              a household name in the industry.
            </p>

            <div className={styles.actionRow}>
              <a href="#contact" className={`btn text-uppercase ${styles.ctaButton}`}>
                Contact Us
              </a>
            </div>

            <div className={styles.statsWrapper}>
              <Statistics heading="Mobile App " />
            </div>
          </div>

          {/* ── Right: Phone + Floating Badges ── */}
          <div className={styles.rightContent}>
            <div className={styles.visualContainer}>
              {/* Phone Mockup */}
              <img
                src="/mobile.svg"
                alt="Mobile App Mockup"
                className={styles.phoneImage}
              />

              {/* Cloud Badge */}
              <img
                src="/upload.svg"
                alt="Cloud Integration"
                className={`${styles.badge} ${styles.badgeCloud}`}
              />

              {/* API Badge */}
              <img
                src="/api.svg"
                alt="API Connectivity"
                className={`${styles.badge} ${styles.badgeApi}`}
              />

              {/* AI Badge */}
              <img
                src="/ai.svg"
                alt="AI Capabilities"
                className={`${styles.badge} ${styles.badgeAi}`}
              />

              {/* UI/Browser Card Badge */}
              <img
                src="/ui.svg"
                alt="Beautiful Dashboard UI"
                className={`${styles.badge} ${styles.badgeUi}`}
              />
            </div>
          </div>
        </div>{/* end main row */}

      </div>{/* end container */}
    </section>
  );
}
