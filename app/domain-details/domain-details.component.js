angular
.module('domainDetails')
.component('domainDetails', {
  bindings: {
    domainDetails: "="
  },
  templateUrl: 'domain-details/domain-details.template.html',
  controller: ['Domain', 'Page',
    function(Domain, Page) {

      this.updateDomain = function (name, redirect, url) {
        Page.updateDomainName(this.domainDetails._name, name);
        this.domainDetails._name = name;
        this.domainDetails._redirect = redirect;
        this.domainDetails._url = url;
      };

      this.nameChanged = function(event) {
        console.log(event.target.value);
      }
    }
  ]
});