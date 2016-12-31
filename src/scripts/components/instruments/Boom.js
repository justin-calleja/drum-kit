import React, { Component } from 'react';
import Instrument from './Instrument';
import boomPath from '../../../sounds/boom.wav';

class Boom extends Component {

  constructor(props) {
    super(props);
    this.audio = new Audio(boomPath);
  }

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing Boom');
      this.audio.currentTime = 0;
      this.audio.play()
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
      </div>
    );
  }

}

Boom.defaultProps = {
  sound: 'boom'
};

export default Boom;
