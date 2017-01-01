import boomPath from '../sounds/boom.wav';
import clapPath from '../sounds/clap.wav';
import hihatPath from '../sounds/hihat.wav';
import kickPath from '../sounds/kick.wav';
import openhatPath from '../sounds/openhat.wav';
import ridePath from '../sounds/ride.wav';
import snarePath from '../sounds/snare.wav';
import tinkPath from '../sounds/tink.wav';
import tomPath from '../sounds/tom.wav';

const soundNameToAudioDict = {
  boom: new Audio(boomPath),
  clap: new Audio(clapPath),
  hihat: new Audio(hihatPath),
  kick: new Audio(kickPath),
  openhat: new Audio(openhatPath),
  ride: new Audio(ridePath),
  snare: new Audio(snarePath),
  tink: new Audio(tinkPath),
  tom: new Audio(tomPath)
};

export function play(soundName) {
  let audio = soundNameToAudioDict[soundName];
  audio.currentTime = 0;
  audio.play()
}
