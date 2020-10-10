# Jwplayer

Wrapper Promise of jwplayer for npm packages

```js
import jwplayer from 'jwplayer2';

const setup = {
  file: 'URL',
  type: "video/mp4",
  width: window.innerWidth,
  height: window.innerHeight,
};

(async () => {
  try {
    const player = await jwplayer('video-id');
    player.setup(setup);
  }catch(e) {
    console.log('err2', e);
  }

})();
```