const { Vibrant } = require('node-vibrant/node');

Vibrant.from('public/sapling-logo-0001.jpg').getPalette()
  .then((palette) => {
    console.log("Vibrant:", palette.Vibrant.hex);
    console.log("DarkVibrant:", palette.DarkVibrant.hex);
    console.log("LightVibrant:", palette.LightVibrant.hex);
    console.log("Muted:", palette.Muted.hex);
    console.log("DarkMuted:", palette.DarkMuted.hex);
    console.log("LightMuted:", palette.LightMuted.hex);
  })
  .catch((err) => console.error(err));
