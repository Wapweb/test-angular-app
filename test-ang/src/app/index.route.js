(function () {
    'use strict';

    angular
        .module('testAng')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/?page',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                params: {
                    page: {
                        value: '1',
                        squash: true
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
