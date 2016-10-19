angular
.module('core')
.filter('page', ['lodash', function(_) {
  return function(input, pageName) {
    return _.filter(input, item => {
      if(Array.isArray(item.page)) {
        return _.filter(item.page, {_name: pageName})
      }
      return item.page._name === pageName;
    });
  }
}]);