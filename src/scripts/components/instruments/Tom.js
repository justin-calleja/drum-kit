import React, { Component } from 'react';
import Instrument from './Instrument';

class Tom extends Component {

  play(keyCode) {
    if (this.props.keyCode === keyCode) {
      console.log('playing Tom');
    }
  }

  render() {
    return (
      <div>
        <Instrument {...this.props} />
        <audio data-key={this.props.keyCode} src={this.props.soundFilePath || '../../sounds/tom.wav'}></audio>
      </div>
    );
  }

}

Tom.defaultProps = {
  sound: 'tom'
};

export default Tom;
