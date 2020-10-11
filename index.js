import jwplayer from './lib/jwplayer';

const setup = {
  primary: 'html5',
  autostart: true,
  file: 'https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4',
  type: "video/mp4",
  width: window.innerWidth,
  height: window.innerHeight,
  skin: {
      name: "jw-skin-glow"
  }
};

(async () => {
  try {
    const player = await jwplayer('player');
    player.setup(setup);
  }catch(e) {
    console.log('err2', e);
  }

})();