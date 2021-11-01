var Pressure = require('pressure');

Pressure.set('#canvas', {
    change: function(force, event){
        const ctx = document.querySelector('#canvas').getContext('2d')
        let ps = Pressure.map(force, 0, 1, 0, 100);
        ctx.lineWidth = ps
        console.log(force)
    }
  });

  // These are the default configs set by Pressure
// Pressure.config({
//     polyfill: false,
//     polyfillSpeedUp: 1000,
//     polyfillSpeedDown: 0,
//     preventSelect: true,
//     only: null
//   });