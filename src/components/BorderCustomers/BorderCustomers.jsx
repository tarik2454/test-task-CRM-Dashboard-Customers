import styles from '../BorderCustomers/BorderCustomers.module.scss';

export default function BorderCustomers() {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
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
        <tr>
          <td className={styles.table__cell}>Иван</td>
          <td className={styles.table__cell}>25</td>
          <td className={styles.table__cell}>Москва</td>
          <td className={styles.table__cell}>Иван</td>
          <td className={styles.table__cell}>25</td>
          <td className={styles.table__cell}>Москва</td>
        </tr>
        <tr>
          <td className={styles.table__cell}>Мария</td>
          <td className={styles.table__cell}>30</td>
          <td className={styles.table__cell}>Санкт-Петербург</td>
          <td className={styles.table__cell}>Иван</td>
          <td className={styles.table__cell}>25</td>
          <td className={styles.table__cell}>Москва</td>
        </tr>
        <tr>
          <td className={styles.table__cell}>Алексей</td>
          <td className={styles.table__cell}>22</td>
          <td className={styles.table__cell}>Новосибирск</td>
          <td className={styles.table__cell}>Иван</td>
          <td className={styles.table__cell}>25</td>
          <td className={styles.table__cell}>Москва</td>
        </tr>
      </tbody>
    </table>
  );
}
