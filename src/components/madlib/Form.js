import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input name="0" onChange={onChange} type="text" placeholder="adjective" />
    <input name="1" onChange={onChange} type="text" placeholder="noun" />
    <input name="2" onChange={onChange} type="text" placeholder="verb, past tense" />
    <input name="3" onChange={onChange} type="text" placeholder="adverb" />
    <input name="4" onChange={onChange} type="text" placeholder="adjective" />
    <input name="5" onChange={onChange} type="text" placeholder="noun" />
    <input name="6" onChange={onChange} type="text" placeholder="noun" />
    <input name="7" onChange={onChange} type="text" placeholder="adjective" />
    <input name="8" onChange={onChange} type="text" placeholder="verb" />
    <input name="9" onChange={onChange} type="text" placeholder="adverb" />
    <input name="10" onChange={onChange} type="text" placeholder="verb, past tense" />
    <input name="11" onChange={onChange} type="text" placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
