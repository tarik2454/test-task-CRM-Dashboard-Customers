import { useMediaQuery } from 'react-responsive';

import customers from '@/data/customers';

import styles from '../BorderCustomers/BorderCustomers.module.scss';
import React from 'react';

export default function BorderCustomers() {
  const isMobile = useMediaQuery({ query: '(max-width: 767.8px)' });

  return isMobile ? (
    <table className={styles.table}>
      <tbody className={styles.table__itemMobile}>
        {customers.map((item, index) => (
          <React.Fragment key={index}>
            <tr className={styles.table__lineMobile}>
              <td className={styles.table__headerMobile}>Customer Name</td>
              <td className={styles.table__headerMobile}>Company</td>
              <td className={styles.table__headerMobile}>Phone Number</td>
              <td className={styles.table__headerMobile}>Email</td>
              <td className={styles.table__headerMobile}>Country</td>
              <td className={styles.table__headerMobile}>Status</td>
            </tr>
            <tr className={styles.table__contentMobile}>
              <td className={styles.table__cellMobile}>{item.name}</td>
              <td className={styles.table__cellMobile}>{item.company}</td>
              <td className={styles.table__cellMobile}>{item.phone}</td>
              <td className={styles.table__cellMobile}>{item.email}</td>
              <td className={styles.table__cellMobile}>{item.country}</td>
              <td
                className={`${styles.table__cellMobile} ${
                  item.status === 'Active' ? styles.active : styles.inactive
                }`}
              >
                {item.status}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  ) : (
    <table className={styles.table}>
      <thead className={styles.table__line}>
        <tr>
          <th className={styles.table__header}>Customer Name</th>
          <th className={styles.table__header}>Company</th>
          <th className={styles.table__header}>Phone Number</th>
          <th className={styles.table__header}>Email</th>
          <th className={styles.table__header}>Country</th>
          <th className={styles.table__header}>Status</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((item, index) => (
          <tr key={index}>
            <td className={styles.table__cell}>{item.name}</td>
            <td className={styles.table__cell}>{item.company}</td>
            <td className={styles.table__cell}>{item.phone}</td>
            <td className={styles.table__cell}>{item.email}</td>
            <td className={styles.table__cell}>{item.country}</td>
            <td
              className={`${styles.table__cell} ${
                item.status === 'Active' ? styles.active : styles.inactive
              }`}
            >
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
