describe("Modal", function(){
  var Modal = require("../lib/Modal.js");

  var modal;

  beforeEach(function(){
    modal = new Modal();
  });

  it("should be hidden by default", function(){
    expect(modal.isOpen).toBe(false);
  });

  it("should set isOpen to true when called", function(){
    modal.open();
    expect(modal.isOpen).toBe(true);
  });

  it("should set isOpen to false when closed", function(){
    modal.close();
    expect(modal.isOpen).toBe(false);
  });
});
