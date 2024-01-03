import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from './SideBar/SideBar';
import Container from './Container/Container';
import Section from './Section/Section';
import Loader from './Loader/Loader';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.page}>
      <SideBar />
      <main className={styles.main}>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </div>
  );
}
