import React, { Component } from 'react';
import cx from 'classnames';
import { play } from '../sound';

export default class InstrumentKey extends Component {

  render() {
    if (this.props.isPlaying) {
      play(this.props.soundName);
    }

    let classes = cx('key', { playing: this.props.isPlaying });
    return (
      <div data-key={this.props.keyCode} className={classes}>
        <kbd>{this.props.keyChar}</kbd>
        <span className="sound">{this.props.soundName}</span>
      </div>
    );
  }

}
