import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Form = ({ onSubmit, onChange, handleClear, answers }) => (
  <section className={styles.questionnaire}>
    <form onSubmit={onSubmit}>
      <div>
        <input value={answers['0']} name="0" onChange={onChange} type="text" placeholder="adjective" />
        <input value={answers['1']} name="1" onChange={onChange} type="text" placeholder="noun" />
        <input value={answers['2']} name="2" onChange={onChange} type="text" placeholder="verb, past tense" />
        <input value={answers['3']} name="3" onChange={onChange} type="text" placeholder="adverb" />
        <input value={answers['4']} name="4" onChange={onChange} type="text" placeholder="adjective" />
        <input value={answers['5']} name="5" onChange={onChange} type="text" placeholder="noun" />
        <input value={answers['6']} name="6" onChange={onChange} type="text" placeholder="noun" />
        <input value={answers['7']} name="7" onChange={onChange} type="text" placeholder="adjective" />
        <input value={answers['8']} name="8" onChange={onChange} type="text" placeholder="verb" />
        <input value={answers['9']} name="9" onChange={onChange} type="text" placeholder="adverb" />
        <input value={answers['10']} name="10" onChange={onChange} type="text" placeholder="verb, past tense" />
        <input value={answers['11']} name="11" onChange={onChange} type="text" placeholder="adjective" />
      </div>
      <button className={styles.Butts}>Create Madlib</button>
    </form>
    <button onClick={handleClear} className={styles.Butts}>Clear Fields</button>
  </section>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired
};

export default Form;
