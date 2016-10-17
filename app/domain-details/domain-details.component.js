angular
.module('domainDetails')
.component('domainDetails', {
  bindings: {
    domainDetails: "="
  },
  templateUrl: 'domain-details/domain-details.template.html',
  controller: ['Domain',
    function(Domain) {
      this.debugData = function() {
        console.log('click');
        Domain.toLog()
      }
    }
  ]
});