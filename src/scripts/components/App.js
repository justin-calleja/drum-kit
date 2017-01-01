import React, { Component } from 'react';
import InstrumentKey from './InstrumentKey';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { playBuffer: [] };

    this.addToBuffer = this.addToBuffer.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
  }

  addToBuffer(keyCode) {
    if (!this.state.playBuffer.includes(keyCode)) {
      this.setState({
        playBuffer: this.state.playBuffer.concat([keyCode])
      });
    }
  }

  transitionEnd(e) {
    if (e.propertyName !== 'transform') return;

    this.setState({ playBuffer: [] });
  }

  keyDown(e) {
    this.addToBuffer(e.keyCode);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  render() {
    return (
      <div className="keys" onTransitionEnd={this.transitionEnd}>
        <InstrumentKey keyCode={65} keyChar="A" isPlaying={this.state.playBuffer.includes(65)} addToBuffer={this.addToBuffer} soundName="clap"    />,
        <InstrumentKey keyCode={83} keyChar="S" isPlaying={this.state.playBuffer.includes(83)} addToBuffer={this.addToBuffer} soundName="hihat"   />,
        <InstrumentKey keyCode={68} keyChar="D" isPlaying={this.state.playBuffer.includes(68)} addToBuffer={this.addToBuffer} soundName="kick"    />,
        <InstrumentKey keyCode={70} keyChar="F" isPlaying={this.state.playBuffer.includes(70)} addToBuffer={this.addToBuffer} soundName="openhat" />,
        <InstrumentKey keyCode={71} keyChar="G" isPlaying={this.state.playBuffer.includes(71)} addToBuffer={this.addToBuffer} soundName="boom"    />,
        <InstrumentKey keyCode={72} keyChar="H" isPlaying={this.state.playBuffer.includes(72)} addToBuffer={this.addToBuffer} soundName="ride"    />,
        <InstrumentKey keyCode={74} keyChar="J" isPlaying={this.state.playBuffer.includes(74)} addToBuffer={this.addToBuffer} soundName="snare"   />,
        <InstrumentKey keyCode={75} keyChar="K" isPlaying={this.state.playBuffer.includes(75)} addToBuffer={this.addToBuffer} soundName="tom"     />,
        <InstrumentKey keyCode={76} keyChar="L" isPlaying={this.state.playBuffer.includes(76)} addToBuffer={this.addToBuffer} soundName="tink"    />,
      </div>
    );
  }

}

