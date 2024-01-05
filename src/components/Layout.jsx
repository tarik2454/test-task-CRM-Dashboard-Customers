import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from './SideBar/SideBar';
import Container from './Container/Container';
import Section from './Section/Section';
import Loader from './Loader/Loader';
import UserWelcome from './UserWelcome/UserWelcome';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SideBar />

        <Container>
          <UserWelcome />
          <Section>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </main>
    </div>
  );
}
