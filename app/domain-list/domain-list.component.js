angular
  .module('domainList')
  .component('domainList', {
    bindings: {
      domains: "="
    },
    templateUrl: 'domain-list/domain-list.template.html',
    controller: ['Domain', '$scope',
      function DomainListController(Domain, $scope) {

        this.activeDomain = this.domains[0].name;

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
