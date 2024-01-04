import { NavLink } from 'react-router-dom';

import navLinks from '@/data/nav-links';
import spriteSvg from '@/assets/sprite.svg';

import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.nav__list}>
        {navLinks.map((item, index) => (
          <li className={styles.nav__item} key={index}>
            <NavLink className={styles.nav__link} to={{ pathname: item.path }}>
              <div className={styles.nav__content}>
                <svg width="24" height="24" viewBox="0 0 24 24" alt="Icon">
                  <use href={`${spriteSvg}#${item.icon}`} />
                </svg>

                {item.label}
              </div>

              <svg width="16" height="16" viewBox="0 0 16 16" alt="Right">
                <use href={spriteSvg + '#chevron-right'} />
              </svg>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
