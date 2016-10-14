angular
.module('domainDetails')
.component('domainDetails', {
  bindings: {
    data: "="
  },
  templateUrl: 'domain-details/domain-details.template.html',
  contoller: ['Domain',
    function(Domain) {

    }
  ]
});