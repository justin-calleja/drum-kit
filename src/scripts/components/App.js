import React, { Component } from 'react';
import InstrumentKey from './InstrumentKey';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playBufferActionCreators from '../ducks/playBuffer';

class App extends Component {

  constructor(props) {
    super(props);

    this.keyDown = this.keyDown.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
  }

  transitionEnd(e) {
    if (e.propertyName !== 'transform') return;

    this.props.clearBuffer();
  }

  keyDown(e) {
    this.props.bufferKeyCode(e.keyCode);
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
        <InstrumentKey keyCode={65} keyChar="A" isPlaying={this.props.playBuffer.includes(65)} addToBuffer={this.props.bufferKeyCode} soundName="clap"    />,
        <InstrumentKey keyCode={83} keyChar="S" isPlaying={this.props.playBuffer.includes(83)} addToBuffer={this.props.bufferKeyCode} soundName="hihat"   />,
        <InstrumentKey keyCode={68} keyChar="D" isPlaying={this.props.playBuffer.includes(68)} addToBuffer={this.props.bufferKeyCode} soundName="kick"    />,
        <InstrumentKey keyCode={70} keyChar="F" isPlaying={this.props.playBuffer.includes(70)} addToBuffer={this.props.bufferKeyCode} soundName="openhat" />,
        <InstrumentKey keyCode={71} keyChar="G" isPlaying={this.props.playBuffer.includes(71)} addToBuffer={this.props.bufferKeyCode} soundName="boom"    />,
        <InstrumentKey keyCode={72} keyChar="H" isPlaying={this.props.playBuffer.includes(72)} addToBuffer={this.props.bufferKeyCode} soundName="ride"    />,
        <InstrumentKey keyCode={74} keyChar="J" isPlaying={this.props.playBuffer.includes(74)} addToBuffer={this.props.bufferKeyCode} soundName="snare"   />,
        <InstrumentKey keyCode={75} keyChar="K" isPlaying={this.props.playBuffer.includes(75)} addToBuffer={this.props.bufferKeyCode} soundName="tom"     />,
        <InstrumentKey keyCode={76} keyChar="L" isPlaying={this.props.playBuffer.includes(76)} addToBuffer={this.props.bufferKeyCode} soundName="tink"    />,
      </div>
    );
  }

}

const mapStateToProps = ({ playBuffer }) => ({ playBuffer });
// Short for:
// const mapStateToProps = (state) => {
//   return {
//     playBuffer: state.playBuffer
//   };
// };

// provides bufferKeyCode and clearBuffer on App's props.
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(playBufferActionCreators, dispatch);
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
