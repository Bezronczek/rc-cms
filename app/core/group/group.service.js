angular
  .module('core.page')
  .factory('Group', ['lodash', function (lodash) {
    this.groups = [{
      name: 'urodziny',
      page: 'razem',
      position: 'dolny',
      data: [{
        lang: 'pl',
        url: 'urodziny-bartosza',
        title: 'urodziny bartka'
      }, {
        lang: 'en',
        url: 'bartek-s-birthday',
        title: 'bartek\'s birthday'
      }]
    }, {
      page: 'portret',

    }];



    return {
      list() {
        return groups;
      }
    }
  }]);