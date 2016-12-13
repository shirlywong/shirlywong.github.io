var $content = $('#content');
// initiliatize Masonry after all images hae loaded
$content.imagesLoaded(function() {
   $content.masonry({
       columnWidth: 300, //change to 310 when using W2 widths.
        truePercent: false,
        itemSelector: '.item',
        gutter: 10,
        isFitWidth: true, // option in Masonry to determine largest column count possible for viewport
        isAnimated: true,
        animationOptions: {
                duration: 750,
            easing: 'linear',
            queue: false
         }
   });
});
