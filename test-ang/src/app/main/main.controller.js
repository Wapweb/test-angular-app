(function() {
  'use strict';

  angular
    .module('testAng')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(apiService, $state) {
    var vm = this;
    vm.changePage = changePage;

    activate();

    function activate() {
      vm.maxSize = 10;
      apiService
          .getUsers()
          .then(success);
    }

    function changePage() {
      apiService
          .getUsers(vm.meta.currentPage)
          .then(success);
    }

    function success(result) {
      console.log(result);
      vm.users = result.data;
      vm.meta = result.meta;

      $state.go('.', {page: vm.meta.currentPage}, {notify: false});
    }

  }
})();
