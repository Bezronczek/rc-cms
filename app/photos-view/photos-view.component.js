angular
  .module('photosView')
  .component('photosView', {
    bindings: {
      groups: "="
    },
    templateUrl: 'photos-view/photos-view.template.html',
    controller: ['$state', 'dragularService', '$element',
      function ($state) {
        this.addGroup = function (name) {
          this.groups.push({
            _name: name,
            data: [{
              _lang: 'en',
              _title: '',
              _url: ''
            }, {
              _lang: 'pl',
              _title: '',
              _url: ''
            }],
            page: {
              _name: '',
              _position: 'dolny'
            }
          });
        };

        this.addDomain = function (name) {
          this.domains.push({
            _name: name,
            _redirect: '',
            _show: 'no',
            _url: ''
          });

          $state.go('domains.pages', {domainName: name});

        };

      }]
  });
