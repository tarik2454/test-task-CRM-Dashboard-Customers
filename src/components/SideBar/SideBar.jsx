import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import User from '../User/User';

import spriteSvg from '../../assets/sprite.svg';
import styles from './SideBar.module.scss';

export default function SideBar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1440) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <aside className={`${styles.sidebar} ${isHidden ? styles.hidden : ''}`}>
      <button className={styles.sidebar__burger} onClick={toggleSidebar}>
        <svg width="24" height="24" viewBox="0 0 24 24" alt="Burger menu">
          <use href={spriteSvg + '#burger-menu'} />
        </svg>
      </button>
      <div className={styles.sidebar__content}>
        <Logo />
        <NavBar />
      </div>

      <User />
    </aside>
  );
}
