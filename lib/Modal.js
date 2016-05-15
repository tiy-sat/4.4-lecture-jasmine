function Modal(){
  var modal = this;
  modal.selector = "[data-js='modal']";
  modal.isOpen = false;

  modal.open = function(){
    modal.isOpen = true;
    $(modal.selector).removeClass("modal--hide", !modal.isOpen);
  }
  //
  // modal.close = function(){
  // }

  modal.setup = function(){
    $(modal.selector).addClass("modal--hide", !modal.isOpen);
  }
}

module.exports = Modal;
