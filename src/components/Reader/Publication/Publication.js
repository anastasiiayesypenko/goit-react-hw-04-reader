import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item }) => (
  <article className={styles.publication}>
    <h2> {item.title} </h2> <p>{item.text}</p>{' '}
  </article>
);
Publication.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default Publication;
