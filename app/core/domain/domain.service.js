angular
.module('core.domain')
.factory('Domain', ['lodash', function(lodash) {

  const domains = [
    {
      name: "firstone"
    },
    {
      name: "someother"
    },
    {
      name: "unpublished"
    }
  ];

  return {
    list() {
      return domains;
    },

    add(name) {
      domains.push({
        name: name
      })
    },

    remove(name) {
      console.log(name);
      lodash.remove(domains, {
        name: name
      })
    }
  }
}]);