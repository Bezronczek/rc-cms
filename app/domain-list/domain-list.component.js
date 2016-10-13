angular
  .module('domainList')
  .component('domainList', {
    templateUrl: 'domain-list/domain-list.template.html',
    controller: ['Domain', '$scope',
      function DomainsController(Domain, $scope) {
      this.domains = Domain.list();
      this.addDomain = function (name) {
        Domain.add(name);
        $scope.domainName = null;
      };
      this.removeDomain = function (name) {
        Domain.remove(name);
      }
    }]
  });
