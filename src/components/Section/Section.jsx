import PropTypes from 'prop-types';

import styles from '../Section/Section.module.scss';

const Section = ({ sectionTitle, children }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.section__title}>{sectionTitle || null}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
