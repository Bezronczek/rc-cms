angular
  .module('domainView')
  .component('domainView', {
    bindings: {
      domains: "="
    },
    templateUrl: 'domain-view/domain-view.template.html',
    controller: ['$state',
      function DomainListController($state) {



        this.addDomain = function (name) {
          this.domains.push({
            _name: name,
            _redirect: '',
            _show: 'no',
            _url: ''
          });

          $state.go('domains.pages', {domainName: name});

        };

      }]
  });
