(function () {
    'use strict';

    angular
        .module('testAng')
        .service('apiService', apiService);

    /** @ngInject */
    function apiService($q) {
        var service = {
                getUsers: getUsers
            },
            data = [],
            limit = 10,
            totalItems = 1200,
            totalPages;

        init();

        return service;

        function getUsers(page) {
            page = page || 1;
            var defer = $q.defer();

            var result = getData(page);
            defer.resolve({
                data: result,
                meta: {
                    limit: limit,
                    currentPage: page,
                    totalItems: totalItems
                }
            });

            return defer.promise;
        }

        function init() {
            makeFakeData();
        }

        function makeFakeData() {
            totalPages = Math.ceil(totalItems/limit);
            var i = 1;
            for (; i <= totalItems; i++) {
                data.push({
                    firstname: 'firstname' + i,
                    lastname: 'lastname' + i,
                    address: 'address' + i,
                    email: 'email' + i
                })
            }
        }


        function getData(page) {
            return data.filter(function(user, index) {
                var number = index + 1;
                return number <= page*limit && number > (page*limit - limit);
            })
        }

    }
})();