import { Link } from 'react-router-dom';

import logo from '@/assets/sprite.svg';

import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <div className={styles.logo__inner}>
        <svg width="37" height="37" alt="Logo">
          <use xlinkHref={`${logo}#logo`}></use>
        </svg>

        <div className={styles.logo__content}>
          <p className={styles.logo__title}>Dashboard</p>
          <span className={styles.logo__version}>v.01</span>
        </div>
      </div>
    </Link>
  );
}
