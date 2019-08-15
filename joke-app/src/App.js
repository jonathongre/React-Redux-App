import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData } from './actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
}

componentDidMount(){
  this.props.getData()
}
toggle() {
    this.setState({addClass: !this.state.addClass});
  }
render() {
  console.log('APP: ', this.props)
  let punchlineClass = ["punchline"];
        if(this.state.addClass) {
        punchlineClass.push('show');
        }
  return (
    <div className="App">
      <div className='card-container'>
        <h1>{this.props.jokes.setup}</h1>
        <h2 className={punchlineClass.join(' ')} >{this.props.jokes.punchline}</h2>
        <button onClick={this.toggle.bind(this)}>{this.state.addClass ? "Close" : "Answer"}</button>
      </div>
    </div>
  );
}
}
const mapStateToProps = state => {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { getData })(App);
