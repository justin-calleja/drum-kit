import React, { Component } from 'react';
import Instrument from './Instrument';

class Tink extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing Tink');
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/tink.wav'}></audio>
      </div>
    );
  }

}

Tink.defaultProps = {
  sound: 'tink'
};

export default Tink;
