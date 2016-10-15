// If getting errors, using window load instead.

// // works from code pen
// $('#content').masonry({
//     columnWidth: 300, //change to 310 when using W2 widths.
//     truePercent: false,
//     itemSelector: '.item',
//     gutter: 10,
//     isFitWidth: true,
//     animationOptions: {
//         duration: 700,
//         easing: 'linear',
//         queue: false
//     }
// });


// From Tutorial
    $(document).ready(function () {

        // Initialize Masonry
        $('#content').masonry({
            columnWidth: 300, //change to 310 when using W2 widths.
            truePercent: false,
            itemSelector: '.item',
            gutter: 10,
            isFitWidth: true, // option in Masonry to determine largest column count possible for viewport
            // isAnimated: !Modernizr.csstransitions,
            animationOptions: {
                duration: 1100,
                easing: 'linear',
                queue: false
            }

        }).imagesLoaded(function () {
            $(this).masonry('reload');
        }).imagesLoaded(function () {
            $(this).masonry('reload');
        });
    });


// // From Tutorial
// $(window).load(function () {
//
//     // Initialize Masonry
//     $('#content').masonry({
//         columnWidth: 310,
//         truePercent: false,
//         itemSelector: '.item',
//         // gutter: 10,
//         isFitWidth: true, // option in Masonry to determine largest column count possible for viewport
//         isAnimated: !Modernizr.csstransitions,
//         animationOptions: {
//             duration: 700,
//             easing: 'linear',
//             queue: false
//         }
//
//     }).imagesLoaded(function () {
//         $(this).masonry('reload');
//     });
// });


