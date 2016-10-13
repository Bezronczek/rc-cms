describe('domainList', function () {
  beforeEach(module('cms'));

  describe('DomainListController', function () {
    it('should create `domains` model with 3 domains', inject(function ($componentController) {
      var ctrl = $componentController('domainList');

      expect(ctrl.domains.length).toBe(3);
    }));

    it('should add new `test` domain', inject(function ($componentController) {
      var ctrl = $componentController('domainList');
      var domainName = "test";

      ctrl.addDomain(domainName);
      expect(ctrl.domains.length).toBe(4);
      expect(ctrl.domains[ctrl.domains.length - 1].name).toBe(domainName);
    }));

    it('should remove `test` domain from domains list', inject(function ($componentController) {
      var ctrl = $componentController('domainList');
      var domainName = "test";

      ctrl.removeDomain(domainName);
      expect(ctrl.domains.length).toBe(3);
    }))
  });
});