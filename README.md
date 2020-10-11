# Jwplayer

Wrapper Promise of jwplayer for npm packages

```js
import jwplayer from 'jwplayer.js';

const setup = {
  file: 'https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4',
  type: "video/mp4",
  width: window.innerWidth,
  height: window.innerHeight,
};

(async () => {
  try {
    const player = await jwplayer('video-id'); // jwplayer library instance
    player.setup(setup);
  }catch(e) {
    console.log('err', e);
  }

})();
```

## React implementation

```js
import React from "react";
import jwplayer from 'jwplayer.js';

export default function App() {
  const playerRef = React.createRef(null);

  React.useEffect(() => {
    let player;
    async function loadPlayer() {
      player = await jwplayer(playerRef.current); //jwplayer library instance
      player.setup({
        file: 'https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4',
        type: "video/mp4",
        width: 300,
        height: 180
      });
    }
    loadPlayer();
    return () => {
      player.destroy();
    }
  }, []);

  return (
    <div className="App">
      <div ref={playerRef} id='player'></div>
    </div>
  );
}
```