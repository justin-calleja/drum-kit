import React, { Component } from 'react';
import Instrument from './Instrument';

class Clap extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing Clap');
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/clap.wav'}></audio>
      </div>
    );
  }

}

Clap.defaultProps = {
  sound: 'clap'
};

export default Clap;
