(function () {

    let preload = document.getElementById('preloader');
    let loading = 0;
    let id = setInterval( frame, 64 );

    function frame () {
        if( loading === 100 ) {
            clearInterval(id);
            window.open('file:///home/sbuda32/Desktop/oj-websites/oj.html', '_self');
        }
        else {
            loading += 1;
            if( loading == 90 ) {
                preload.style.animation = 'fading 1s ease';
            }
        }
    }
})();
  