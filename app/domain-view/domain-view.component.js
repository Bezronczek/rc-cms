angular
  .module('domainView')
  .component('domainView', {
    bindings: {
      domains: "="
    },
    templateUrl: 'domain-view/domain-view.template.html',
    controller: ['$state', 'dragularService', 'Domain',
      function DomainListController($state, dragularService, Domain) {

        const self = this;

        // self.domains = Domain.list();

        dragularService('.draggable', {
          containersModel: self.domains,
          nameSpace: 'domains',
        });

        this.addDomain = function (name) {
          Domain.add(name);
          $state.go('domains.pages', {domainName: name});
        };

      }]
  });
