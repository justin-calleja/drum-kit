import React, { Component } from 'react';
import Instrument from './Instrument';

class Snare extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing Snare');
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/snare.wav'}></audio>
      </div>
    );
  }

}

Snare.defaultProps = {
  sound: 'snare'
};

export default Snare;
