import { installPlayerScript } from "./helpers";

export default (arg) => {
  let videoRef;
  let playerScript = '//content.jwplatform.com/libraries/0P4vdmeO.js';
  let uniqueScriptId = Math.random() * 9999999;

  if(typeof arg === 'string') {
    videoRef = document.getElementById(arg);
  }else if(arg instanceof HTMLElement) {
    videoRef = arg;
  }else if('videoRef' in arg) {
    videoRef = arg.videoRef;
    playerScript = arg.playerScript || playerScript;
    uniqueScriptId = arg.uniqueScriptId || uniqueScriptId;
  }else {
    return reject('jwplayer argument is not valid');
  }

  if(!(videoRef instanceof HTMLElement)) {
    return reject('jwplayer html element is not valid');
  }

  return new Promise((resolve, reject) => {

    const _initialize = () => {
      const player = window.jwplayer(videoRef);
      resolve(player);
    };
  
    const _error = (e) => {
      console.log('err', e);
      reject('error script inject');
    };

    installPlayerScript({
      onErrorCallback: _error,
      onLoadCallback: _initialize,
      scriptSrc: playerScript,
      uniqueScriptId: uniqueScriptId,
    });
  });


};
