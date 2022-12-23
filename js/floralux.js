$(document).ready(function(e) {
    const target = document.querySelector('.woocommerce-billing-fields');
    const video = `
        <div class="video">
            <div style="padding:75% 0 0 0;position:relative;">
                <iframe src="https://player.vimeo.com/video/783917131?h=af37836bbf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Floralux Sizing">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
    `

    function addVideo() {
        target.insertAdjacentHTML('beforeend', video);
    }

    if (target) {
        addVideo();
    }
});