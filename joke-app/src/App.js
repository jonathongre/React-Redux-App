import React from 'react';
import { connect } from 'react-redux'
import { getData } from './actions';

import './App.css';

function App(props) {
  const handleClick = (e) => {
    e.preventDefault()
    props.getData()
  }
  console.log('APP: ', props)
  return (
    <div className="App">
      <h1>{props.jokes.setup}</h1>
      <h2>{props.jokes.punchline}</h2>
      <button onClick={handleClick}>Let's Laugh</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    test: state.test,
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { getData })(App);
