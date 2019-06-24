(function () {

    let preload = document.getElementById('preloader');
    let loading = 0;
    let id = setInterval( frame, 64 );

    function frame () {
        if( loading === 100 ) {
            clearInterval(id);
            window.open('https://sbuda32.github.io/oj-website/oj.html', '_self');
        }
        else {
            loading += 1;
            if( loading == 90 ) {
                preload.style.animation = 'fading 1s ease';
            }
        }
    }
})();
  