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
          return pagesObj;
        },
        listByDomainName(domainName) {
          return _.filter(pagesObj.pages.page, {_domain: domainName});
        },
        delete(page) {
          _.remove(pagesObj.pages.page, {_action: page._action});
          console.log(pagesObj.pages.page);
          this.save();
        },
        addPage({_action, _domain, _photo, _show, data}) {
          pagesObj.pages.page.unshift({
            _action,
            _domain,
            _photo,
            _show,
            data
          });

          this.save();
        },
        deleteDomain(domainName) {
          _.each(pagesObj.pages.page, page => {
            if(page._domain === domainName) {
              page._domain = '';
            }
          });

          this.save();
        },
        updateDomainName(domainName, newName) {
          console.log(pagesObj.pages.page);

          pagesObj.pages.page.forEach(page => {
            if (page._domain === domainName) {
              page._domain = newName;
            }
          });

          this.save();
        },
        moveToDomain(page, domainName){
          page._domain = domainName;
          this.save();
        },
        exportToXML() {
          const xmlString = x2js.json2xml_str(angular.copy(pagesObj));
          return new Blob([xmlString], {type: 'text/xml'});
        }
      }
    }]);