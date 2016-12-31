import React, { Component } from 'react';
import Instrument from './Instrument';

class HiHat extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing HiHat');
    }
  }


  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/hihat.wav'}></audio>
      </div>
    );
  }

}

HiHat.defaultProps = {
  sound: 'hihat'
};

export default HiHat;
