import Logo from '../Logo/Logo';

import styles from './SideBar.module.scss';

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Logo />
      </div>
    </aside>
  );
}
