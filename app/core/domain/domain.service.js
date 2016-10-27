angular
  .module('core.domain')
  .factory('Domain', ['lodash', 'x2js',
    function (_, x2js) {

      let domainsObj = {
        domains: {
          domain: []
        }
      };

      if (localStorage.getItem('domainsObject')) {
        domainsObj = JSON.parse(localStorage.getItem('domainsObject'));
      }

      return {
        setDomainsObject(obj) {
          return new Promise(resolve => {
            domainsObj = obj;
            localStorage.setItem('domainsObject', JSON.stringify(domainsObj));
            resolve();
          })
        },
        list() {
          return domainsObj.domains.domain;
        },

        add(name) {
          domainsObj.push({
            name: name,
            pages: []
          })
        },

        remove(name) {
          _.remove(domainsObj, {
            name: name
          })
        },

        getDomainDetails(name) {
          return _.find(domainsObj.domains.domain, {_name: name});
        },
        exportToXML() {
          const xmlString = x2js.json2xml_str(angular.copy(domainsObj));
          return new Blob([xmlString], {type: 'text/xml'});
        }
      }
    }]);