describe('domainList', function () {
  beforeEach(module('cms'));

  describe('DomainListController', function () {
    it('should create `domains` model with 3 domains', inject(function ($componentController) {
      var ctrl = $componentController('domainList');

      expect(ctrl.domains.length).toBe(3);
    }));
  });
});