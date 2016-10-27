angular
.module('domainDetails')
.component('domainDetails', {
  bindings: {
    domainDetails: "="
  },
  templateUrl: 'domain-details/domain-details.template.html',
  controller: ['Domain', 'Page', '$state',
    function(Domain, Page, $state) {

      const self = this;

      if(!self.domainDetails) {
        $state.go('domains');
      }

      self.isCollapsed = true;

      // self.updateDomain = function (name, redirect, url) {
      //   Page.updateDomainName(this.domainDetails._name, name);
      //   this.domainDetails._name = name;
      //   this.domainDetails._redirect = redirect;
      //   this.domainDetails._url = url;
      // };

      self.nameChanged = function(newName) {
        let oldName = self.domainDetails._name;
        Domain.rename(self.domainDetails, newName);
        Page.updateDomainName(oldName, newName);

        $state.go('domains.pages', {domainName: newName})
      };

      self.deleteDomain = function () {
        Domain.delete(self.domainDetails)
          .then(() => {
            Page.deleteDomain(self.domainDetails._name);
          });
        $state.go('domains');
      }
    }
  ]
});