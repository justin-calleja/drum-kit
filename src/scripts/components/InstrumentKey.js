import React, { Component } from 'react';
import cx from 'classnames';
import { play } from '../sound';

export default class InstrumentKey extends Component {

  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click() {
    if (this.props.addToBuffer) this.props.addToBuffer(this.props.keyCode);
  }

  render() {
    if (this.props.isPlaying) {
      play(this.props.soundName);
    }

    let classes = cx('key', { playing: this.props.isPlaying });
    return (
      <div data-key={this.props.keyCode} className={classes} onClick={this.click}>
        <kbd>{this.props.keyChar}</kbd>
        <span className="sound">{this.props.soundName}</span>
      </div>
    );
  }

}
