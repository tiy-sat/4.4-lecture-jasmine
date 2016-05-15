// Describing the 'narative' for when tests pass/fail
// to further understand specifications/requirements
describe("Gallery", function(){
  // Pull in required files
  var Gallery = require("../lib/gallery.js"),
      Modal = require("../lib/modal.js"),
      jsdom = require("jsdom")

  ;
  // Defining empty var to reference inside
  // of children scope functions
  var gallery,
      modal
  ;

  beforeEach(function(){
    // Creating a new instance of Gallery
    // before each it() block
    modal = new Modal();
    gallery = new Gallery(modal);
    document = jsdom.jsdom('<body></body>');
    window = document.defaultView;
    $ = require('jquery');
  });

  it("should open modal when thumbnail is clicked", function(){
    // click on a thumbnail
    gallery.handleClickOnThumbnail();
    // modal to be open
    expect(modal.isOpen).toBe(true);
  });

  it("should have a modal", function(){
    expect(gallery.modal).toBe(modal);
  })


});
