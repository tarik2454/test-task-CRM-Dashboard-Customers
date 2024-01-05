import customers from '../../data/customers';

import styles from '../BorderCustomers/BorderCustomers.module.scss';

export default function BorderCustomers() {
  return (
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
