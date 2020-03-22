import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import { zoo } from '../../services/madlib';

const Result = ({ words, closeResult }) => (
  <section className={styles.Madlib}>
    <p>{zoo(...words)}</p>
    <button onClick={closeResult} className={styles.Butts}>X</button>
  </section>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;
