'use strict';

describe('Controller: StratControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('StratController'));

  var StratControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StratControllerCtrl = $controller('StratControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
