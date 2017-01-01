import React, { Component } from 'react';
import cx from 'classnames';

  // constructor(props) {
  //   super(props);
  //   this.state = { isPlaying: false };

  //   this.play = this.play.bind(this);
  // }

  // play() {
  //   this.setState({ isPlaying: true });
  // }

export default class Instrument extends Component {

  render() {
    let classes = cx('key', { playing: this.props.isPlaying });

    return (
      <div data-key={this.props.keyCode} className={classes}>
        <kbd>{this.props.keyChar}</kbd>
        <span className="sound">{this.props.sound}</span>
      </div>
    );
  }

}
