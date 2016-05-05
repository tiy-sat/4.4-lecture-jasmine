var $ = require("jquery"),
    Gallery = require("../lib/gallery")
    Modal = require("../lib/modal")
;

$(function(){
  var modal = new Modal();
  var gallery = new Gallery(modal);

  gallery.setupEvents();
  modal.setup();
});
