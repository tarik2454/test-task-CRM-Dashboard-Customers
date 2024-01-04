import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import User from '../User/User';

import styles from './SideBar.module.scss';

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <Logo />
        <NavBar />
      </div>

      <User />
    </aside>
  );
}
