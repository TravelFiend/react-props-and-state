import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    answers: {},
    words: []
  }

  populateWords = () => {
    this.setState(prevState => ({
      words: [
        prevState.answers['0'],
        prevState.answers['1'],
        prevState.answers['2'],
        prevState.answers['3'],
        prevState.answers['4'],
        prevState.answers['5'],
        prevState.answers['6'],
        prevState.answers['7'],
        prevState.answers['8'],
        prevState.answers['9'],
        prevState.answers['10'],
        prevState.answers['11']
      ]
    }));
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.populateWords();
    this.toggleResult();
    this.handleClear();
  }

  handleClear = () => {
    this.setState(prevState => ({
      ...prevState,
      answers: {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        '10': '',
        '11': '',
      } }));
  }

  onChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState,
      answers: { ...prevState.answers, [target.name]: target.value }
    }));
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.onChange} handleClear={this.handleClear} answers={this.state.answers} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
