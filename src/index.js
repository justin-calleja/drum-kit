import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/App';
import Boom from './scripts/components/instruments/Boom';
import Clap from './scripts/components/instruments/Clap';
import HiHat from './scripts/components/instruments/HiHat';
import Kick from './scripts/components/instruments/Kick';
import OpenHat from './scripts/components/instruments/OpenHat';
import Ride from './scripts/components/instruments/Ride';
import Snare from './scripts/components/instruments/Snare';
import Tink from './scripts/components/instruments/Tink';
import Tom from './scripts/components/instruments/Tom';

import './styles/index.css';

let instruments = [
  <Clap    key="a" keyCode="65" keyChar="A" />,
  <HiHat   key="s" keyCode="83" keyChar="S" />,
  <Kick    key="d" keyCode="68" keyChar="D" />,
  <OpenHat key="f" keyCode="70" keyChar="F" />,
  <Boom    key="g" keyCode="71" keyChar="G" />,
  <Ride    key="h" keyCode="72" keyChar="H" />,
  <Snare   key="j" keyCode="74" keyChar="J" />,
  <Tom     key="k" keyCode="75" keyChar="K" />,
  <Tink    key="l" keyCode="76" keyChar="L" />
];

ReactDOM.render(
  <App instruments={instruments} />,
  document.getElementById('root')
);
