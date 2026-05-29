'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import styles from './Statistics.module.css';

/* Load CountUp only on the client – avoids SSR hydration mismatch */
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

interface StatisticsProps {
  /** Pass "Mobile App " to show the mobile-specific copy/numbers */
  heading?: string;
}

const Statistics = ({ heading }: StatisticsProps) => {
  const isMobile = heading === 'Mobile App ';

  return (
    <div className={styles.backgroundColor}>
      <div className={styles.statsContent}>

        {/* Startups Served */}
        <div className={`${styles.statItem} ${styles.statCol}`}>
          <h3 className={styles.statNumber}>
            <CountUp delay={1} end={20} enableScrollSpy scrollSpyOnce />
            <span className={styles.colorCount}>+</span>
          </h3>
          <p className={styles.statLabel}>Startups Served</p>
        </div>

        {/* Apps / Web Apps Delivered */}
        <div className={`${styles.statItem} ${styles.statCol}`}>
          <h3 className={styles.statNumber}>
            <CountUp delay={1} end={isMobile ? 70 : 700} enableScrollSpy scrollSpyOnce />
            <span className={styles.colorCount}>+</span>
          </h3>
          <p className={styles.statLabel}>
            {isMobile ? 'Apps Successfully Delivered' : 'Web Apps Delivered'}
          </p>
        </div>

        {/* Developers Globally */}
        <div className={`${styles.statItem} ${styles.statCol}`}>
          <h3 className={styles.statNumber}>
            <CountUp delay={1} end={65} enableScrollSpy scrollSpyOnce />
            <span className={styles.colorCount}>+</span>
          </h3>
          <p className={styles.statLabel}>Developers Globally</p>
        </div>

        {/* Client Retention */}
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>
            <CountUp delay={1} end={72} enableScrollSpy scrollSpyOnce />
            <span className={styles.colorCount}>%</span>
          </h3>
          <p className={styles.statLabel}>Client Retention</p>
        </div>

      </div>
    </div>
  );
};

export default React.memo(Statistics);
