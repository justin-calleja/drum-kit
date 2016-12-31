import React, { Component } from 'react';
import Instrument from './Instrument';

class Kick extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing Kick');
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/kick.wav'}></audio>
      </div>
    );
  }

}

Kick.defaultProps = {
  sound: 'kick'
};

export default Kick;
