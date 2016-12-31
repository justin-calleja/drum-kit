import React, { Component } from 'react';
import Instrument from './Instrument';

class OpenHat extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing OpenHat');
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/openhat.wav'}></audio>
      </div>
    );
  }

}

OpenHat.defaultProps = {
  sound: 'openhat'
};

export default OpenHat;
