import spriteSvg from '../../assets/sprite.svg';

import styles from '../Pagination/Pagination.module.scss';

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <p className={styles.pagination__text}>
        Showing data 1 to 8 of 256K entries
      </p>
      <ul className={styles.pagination__list}>
        <li className={styles.pagination__item}>
          <a className={styles.pagination__link} href="#">
            &lt;
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a className={`${styles.pagination__link} ${styles.active}`} href="#">
            1
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a className={styles.pagination__link} href="#">
            2
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a className={styles.pagination__link} href="#">
            3
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a className={styles.pagination__link} href="#">
            4
          </a>
        </li>
        <li className={styles.pagination__item}>
          <span className={styles.pagination__dots}>
            <svg width="8" height="3" viewBox="0 0 8 3" alt="Dots">
              <use href={spriteSvg + '#dots'} />
            </svg>
          </span>
        </li>
        <li className={styles.pagination__item}>
          <a className={styles.pagination__link} href="#">
            40
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a className={styles.pagination__link} href="#">
            &gt;
          </a>
        </li>
      </ul>
    </div>
  );
}
