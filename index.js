import jwplayer from './lib/jwplayer';

const setup = {
  primary: 'html5',
  autostart: true,
  file: 'https://00f74ba44baeaa884c67a13194207b6599be685a39-apidata.googleusercontent.com/download/storage/v1/b/kyaru/o/MjmQ2rOKyjW.mp4?jk=AFshE3VsvbVlq745wbJjv8QNRVBwYvWKh6LSJ-AsthhnkBqJUrm5Z2iVhTrRLqydVBJwSYTtu6EyveGtoNpjflUA6KkVZxsZ5c9p4lJQCPAA3MsRFqhykEvvxWVGfuAaaKCE8yTXP5k7C83-6bwHpISBja2MnKlQFyEccwGD9TpCUR5JKOEVVg4p1urI-LKr3Ke62Ftml9JG-Mqay9KQiLgGamRl72OslvdESwhpV6E9b_T0kpET-f16xwvlw9SnjTA3ChQhfpyyQYzIbwtOCCJvDoDeh3yhmK9T_tNZPGo-JiMG6oho3wyKAnqWOF7IPsuHIjAYG-xsHCfmydO9d8scLqZVNAKdQyX4FAbFaWEKnypuICXFIaO7oq3ZTfXDdPwKAaK8AOiMpyUGuGnryhpMttv_1Ip-I0Bty9Nrnxm3JHYA59_4MXpuQUEKZhM7ht_1acY2y6zXJ2f5-VOCzfhiROqN9epRIDVLZFdlq_tmWwfaz0bygAstlBcjgnEsXUzSpyICAARAThh1ZLk-lDl0X48_ext0n51fRC-sbaJs9Qklp3hkfD4L5UsHwCHQVHihUkxE1vk63CDM5nGnswaNeTpWpqwnlD1emnUtnXhTlimBB6lJbhF5XNcLRXBq-rII9Qs1SW57y7xbmUhTVvu54ztiORgJyMSdLunmUSH7ORzPjI87OGIUXosJgnDPhssoJzBf-YZxBn3QCyiiOrt1AItH8OAW0h0-VVSAzjeqkj5S_yoi8ZnrubZikvb1kcjabeBDOpX4NRFFs9APs-EK1A9KMDKmDVGY2fR6NaugvKJy963ce_R4lw_MXaVw2noLDzSlNLeGiz9THQ0U0g_kgxfO3m32CCMm-X8UP4C2ZvqLwtCk43cuIl6kvwqbGO9ESA&isca=1',
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