$( function() {
  var $content = $('#content');
  // hide initial items
  var $initialItems = $content.find('.item').hide();
  
  var $content = $content.masonry({
      // do not select initial items
      itemSelector: 'none',
      columnWidth: 300,
      gutter: 10,
      isFitWidth: true
    })
    // set option
    .masonry( 'option', { itemSelector: '.item' } )
    .masonryImagesReveal( $initialItems );
});

// reveals items iteratively
// after each item has loaded its images
$.fn.masonryImagesReveal = function( $items ) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;
  // hide by default
  $items.hide();
  // append to content
  this.append( $items );
  $items.imagesLoaded().progress( function( imgLoad, image ) {
    // get item
    // image is imagesLoaded class, not <img>, <img> is image.img
    var $item = $( image.img ).parents( itemSelector );
    // un-hide item
    $item.show();
    // masonry does its thing
    msnry.appended( $item );
  });
  
  return this;
};