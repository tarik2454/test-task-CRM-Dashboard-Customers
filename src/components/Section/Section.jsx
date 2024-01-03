import PropTypes from 'prop-types';

const Section = ({ sectionTitle, children }) => {
  return (
    <section>
      <h1>{sectionTitle || 'Default section'}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
