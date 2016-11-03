angular
  .module('core.page')
  .factory('Page', ['lodash', 'x2js', '$interval',
    function (_, x2js, $interval) {

      let pagesObj =  {
        pages: {
          page: []
        }
      };

      if(localStorage.getItem('pagesObject')) {
        pagesObj = JSON.parse(localStorage.getItem('pagesObject'));
      }

      function save() {
        localStorage.setItem('pagesObject', JSON.stringify(pagesObj));
      }

      $interval(save, 60000);

      return {
        save() {
          localStorage.setItem('pagesObject', JSON.stringify(pagesObj));
        },
        clear() {
          pagesObj.pages.page.length = 0;
        },
        setPagesObject(obj) {
          return new Promise(resolve => {
            pagesObj = angular.copy(obj);
            localStorage.setItem('pagesObject', JSON.stringify(pagesObj));
            resolve();
          });
        },
        list() {
          return pagesObj.pages.page;
        },
        listUnassigned() {
          return _.filter(pagesObj.pages.page, {_domain: ''})
        },
        listByDomainName(domainName) {
          return _.filter(pagesObj.pages.page, {_domain: domainName});
        },
        delete(page) {
          _.remove(pagesObj.pages.page, {_action: page._action});
          console.log(pagesObj.pages.page);
        },
        addPage(domainName) {
          pagesObj.pages.page.unshift({
            _action: '',
            _domain: domainName,
            _photo: 'yes',
            _show: 'no',
            data: [{
              _lang: 'pl',
              _url: '',
              _title: '',
              _desc: ''
            },{
              _lang: 'en',
              _url: '',
              _title: '',
              _desc: ''
            }]
          });

        },
        deleteDomain(domainName) {
          _.each(pagesObj.pages.page, page => {
            if(page._domain === domainName) {
              page._domain = '';
            }
          });
        },
        updateDomainName(domainName, newName) {

          pagesObj.pages.page.forEach(page => {
            if (page._domain === domainName) {
              page._domain = newName;
            }
          });

        },
        moveToDomain(page, domainName){
          page._domain = domainName;
        },
        move(fromIndex, toIndex) {
          pagesObj.pages.page.splice(toIndex, 0, pagesObj.pages.page.splice(fromIndex, 1)[0]);
        },
        exportToXMLFile() {
          const xmlString = x2js.json2xml_str(angular.copy(pagesObj));
          return new Blob([xmlString], {type: 'text/xml'});
        }
      }
    }]);