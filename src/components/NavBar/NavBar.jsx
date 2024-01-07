import PropTypes from 'prop-types';

import { Link, useNavigate } from 'react-router-dom';

import navLinks from '@/data/nav-links';
import spriteSvg from '@/assets/sprite.svg';

import styles from './NavBar.module.scss';

export default function NavBar({ closeSidebar }) {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className={styles.nav__list}>
        {navLinks.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              navigate({ pathname: item.path });
              closeSidebar();
            }}
          >
            <Link className={styles.nav__link} onClick={closeSidebar}>
              <div className={styles.nav__content}>
                <svg width="24" height="24" viewBox="0 0 24 24" alt="Icon">
                  <use href={`${spriteSvg}#${item.icon}`} />
                </svg>

                {item.label}
              </div>

              {index !== 0 && (
                <svg width="16" height="16" viewBox="0 0 16 16" alt="Right">
                  <use href={spriteSvg + '#chevron-right'} />
                </svg>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
};
