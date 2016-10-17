angular
  .module('domainView')
  .component('domainView', {
    bindings: {
      domains: "="
    },
    templateUrl: 'domain-view/domain-view.template.html',
    controller: ['Domain', '$scope', '$stateParams',
      function DomainListController(Domain, $scope, $stateParams) {

        console.log(Domain.list());

        $scope.$on('$viewContentLoaded', function (event) {
          this.domainDetails = Domain.getDomainDetails($stateParams.domainName);
        });

        this.addDomain = function (name) {
          if(!name) return;
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
