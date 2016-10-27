angular
  .module('core.page')
  .factory('Page', ['lodash', 'x2js',
    function (lodash, x2js) {

      let pagesObj =  {
        pages: {
          page: []
        }
      };

      if(localStorage.getItem('pagesObject')) {
        pagesObj = JSON.parse(localStorage.getItem('pagesObject'));
      }

      return {
        setPagesObject(obj) {
          return new Promise(resolve => {
            pagesObj = obj;
            localStorage.setItem('pagesObject', JSON.stringify(pagesObj));
            resolve();
          });

        },
        list() {
          return pagesObj;
        },
        listByDomainName(domainName) {
          return lodash.filter(pagesObj.pages.page, {_domain: domainName});
        },
        addPage({_action, _domain, _photo, _show}) {
          pagesObj.pages.page.push({
            _action,
            _domain,
            _photo,
            _show
          });
        },
        updateDomainName(domainName, newName) {
          console.log(pagesObj.pages.page);

          pagesObj.pages.page.forEach(page => {
            if (page._domain === domainName) {
              page._domain = newName;
            }
          });
        },
        exportToXML() {
          const xmlString = x2js.json2xml_str(angular.copy(pagesObj));
          return new Blob([xmlString], {type: 'text/xml'});
        }
      }
    }]);