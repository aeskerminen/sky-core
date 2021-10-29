var Pressure = require('pressure');

Pressure.set('#canvas', {
    change: function(force, event){
        const ctx = document.querySelector('#canvas').getContext('2d')
        let ps = Pressure.map(force, 0, 1, 0, 100);
        ctx.lineWidth = ps
    }
  });