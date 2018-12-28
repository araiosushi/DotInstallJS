(function(){
    'use strict';

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        var results = ['大吉', '吉','大凶'];
        var n = Math.floor(Math.random() * results.length);
        this.textContent = results[n];
  });
    btn.addEventListener('mousedown', function(){
        this.className = 'pushed';
  });
    btn.addEventListener('mouseup', function(){
        this.className = '';
  });
})();