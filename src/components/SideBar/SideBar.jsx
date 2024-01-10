import { useState, useEffect, useCallback } from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import User from '../User/User';

import spriteSvg from '../../assets/sprite.svg';
import styles from './SideBar.module.scss';

export default function SideBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  const closeSidebar = useCallback(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth >= 1440) return;

    setIsHidden(true);
  }, [setIsHidden]);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      setScreenWidth(currentWidth);

      if (currentWidth < 1440) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsHidden]);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (isHidden) return;

      const sidebarElement = document.querySelector(`.${styles.sidebar}`);
      if (
        sidebarElement &&
        screenWidth < 1440 &&
        !sidebarElement.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [closeSidebar, isHidden, screenWidth]);

  useEffect(() => {
    if (!isHidden && screenWidth < 1440) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isHidden, screenWidth]);

  useEffect(() => {
    if (screenWidth < 1440) {
      setIsHidden(true);
    }
  }, [screenWidth]);

  return (
    <>
      {!isHidden && screenWidth < 1440 && (
        <div className={styles.overlay} onClick={closeSidebar} />
      )}

      <aside className={`${styles.sidebar} ${isHidden ? styles.hidden : ''}`}>
        <button className={styles.sidebar__burger} onClick={toggleSidebar}>
          <svg width="24" height="24" viewBox="0 0 24 24" alt="Burger menu">
            <use href={spriteSvg + '#burger-menu'} />
          </svg>
        </button>

        <div className={styles.sidebar__content}>
          <Logo />
          <NavBar closeSidebar={closeSidebar} />
        </div>

        <User />
      </aside>
    </>
  );
}
