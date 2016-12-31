import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };

    this.keydown = this.keydown.bind(this);
  }

  keydown(e) {
    this.props.instruments.forEach(instrument => {
      console.log('instrument:', instrument);
      instrument.play(e.keyCode);
    });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydown);
  }

  render() {
    return (
      <div className="keys">
        {this.props.instruments}
      </div>
    );
  }
}
