angular
  .module('domainList')
  .component('domainList', {
    bindings: {
      domains: "="
    },
    templateUrl: 'domain-list/domain-list.template.html',
    controller: ['Domain', '$scope', '$stateParams',
      function DomainListController(Domain, $scope, $stateParams) {

        $scope.$on('$viewContentLoaded', function (event) {
          this.domainDetails = Domain.getDomainDetails($stateParams.domainName);
          console.log(this.domainDetails);
        });

        this.addDomain = function (name) {
          Domain.add(name);
          $scope.domainName = null;
        };
        this.removeDomain = function (name) {
          Domain.remove(name);
        };

        this.setActiveDomain = function (name) {
          this.activeDomain = name;
          Domain.setActiveDomain(name);
        }

      }]
  });
