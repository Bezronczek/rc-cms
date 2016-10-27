angular
  .module('domainView')
  .component('domainView', {
    bindings: {
      domains: "="
    },
    templateUrl: 'domain-view/domain-view.template.html',
    controller: ['$state', 'dragularService', 'Domain', '$scope',
      function DomainListController($state, dragularService, Domain, $scope) {

        const self = this;

        // self.domains = Domain.list();

        dragularService('.draggable', {
          containersModel: self.domains,
          nameSpace: 'domains',
          scope: $scope
        });

        $scope.$on('dragulardrop', function(event, el){
          Domain.save();
        });

        this.addDomain = function (name) {
          Domain.add(name);
          $state.go('domains.pages', {domainName: name});
        };

      }]
  });
