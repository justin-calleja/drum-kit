import React, { Component } from 'react';
import cx from 'classnames';

export default class Instrument extends Component {

  constructor(props) {
    super(props);
    this.state = { isPlaying: false };

    this.play = this.play.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
  }

  play() {
    this.setState({ isPlaying: true });
  }

  transitionEnd(e) {
    if (e.propertyName !== 'transform') return;

    this.setState({ isPlaying: false });
  }

  render() {
    let classes = cx('key', { playing: this.state.isPlaying });

    return (
      <div
      data-key={this.props.keyCode}
      className={classes}
      onClick={this.play}
      onTransitionEnd={this.transitionEnd}>
        <kbd>{this.props.keyChar}</kbd>
        <span className="sound">{this.props.sound}</span>
      </div>
    );
  }

}
