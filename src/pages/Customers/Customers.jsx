import SearchForm from '@/components/SearchForm/SearchForm';
import BorderCustomers from '@/components/BorderCustomers/BorderCustomers';
import Pagination from '@/components/Pagination/Pagination';

import styles from '../Customers/Customers.module.scss';

export default function Customers() {
  return (
    <>
      <div className={styles.customers}>
        <div className={styles.customers__header}>
          <h1 className={styles.section__title}>All Customers</h1>
          <p className={styles.section__subtitle}>Active Members</p>
        </div>
        <SearchForm />
      </div>
      <BorderCustomers />
      <Pagination />
    </>
  );
}
