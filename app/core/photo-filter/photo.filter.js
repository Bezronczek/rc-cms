angular
  .module('core')
  .filter('photo', ['lodash', function(_) {
    return function(input, groupName) {
      if(!groupName && groupName !== '') return input;
      return _.filter(input, {group: {_name: groupName}})
    }
  }]);