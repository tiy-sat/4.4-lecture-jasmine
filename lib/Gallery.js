var $ = require("jquery");

// Constructor code
// Requires modal reference to work!
function Gallery(modal){
  // Setting modal
  var gallery = this;
  gallery.modal = modal;

  this.handleClickOnThumbnail = function(e){
    // open my modal
    gallery.modal.open();
  }

  this.setupEvents = function(){
    $("[data-js='image']").on("click", gallery.handleClickOnThumbnail);
  }

}

// Necessary for ability to call constructor
module.exports = Gallery;
