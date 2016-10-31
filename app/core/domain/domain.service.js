angular
  .module('core.domain')
  .factory('Domain', ['lodash', 'x2js', '$interval',
    function (_, x2js, $interval) {


      let domainsObj = {
        domains: {
          domain: []
        }
      };

      if (localStorage.getItem('domainsObject')) {
        domainsObj = JSON.parse(localStorage.getItem('domainsObject'));
      }

      function save() {
        localStorage.setItem('domainsObject', JSON.stringify(domainsObj));
      }

      $interval(save, 60000);

      return {
        clear() {
          domainsObj.domains.domain.length = 0;
        },
        setDomainsObject(obj) {
          return new Promise(resolve => {
            domainsObj = angular.copy(obj);
            localStorage.setItem('domainsObject', JSON.stringify(domainsObj));
            resolve();
          })
        },
        list() {
          return domainsObj.domains.domain;
        },
        add(name) {
          domainsObj.domains.domain.push({
            _name: name,
            _redirect: '',
            _show: 'no',
            _url: ''
          });

        },
        delete(domain) {
          return new Promise((resolve, reject) => {
            try {
              console.log(domain);
              _.remove(domainsObj.domains.domain, domain);
              this.save();
              resolve();
            } catch (err) {
              reject(err.stack || err);
            }
          });
        },
        rename(domain, newName) {
          domain._name = newName;
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