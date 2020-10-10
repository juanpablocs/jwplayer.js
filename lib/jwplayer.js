import { installPlayerScript } from "./helpers";

export default ({ videoRef, playerScript, uniqueScriptId }) => {
  
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
