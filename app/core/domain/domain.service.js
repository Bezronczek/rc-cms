angular
.module('core.domain')
.factory('Domain', ['lodash', 'x2js', function(lodash, x2js) {

  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<domains>
	<domain name="firstone" show="yes" url="cetra.info" redirect="asd" />
	<domain name="soltone" show="yes" url="solofobia.cetra.info" redirect="asd" />
	<domain name="projectone" show="yes" url="solofobia.pl" redirect="asd" />
</domains>`;

  // Obiekty domen umieszczone sa w tablicy domainObj.domains.domain
  const domainsObj = x2js.xml_str2json(xmlString);
  
  return {
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
      lodash.remove(domainsObj, {
        name: name
      })
    },

    getDomainDetails(name) {
      return lodash.find(domainsObj.domains.domain, {_name: name});
    }

  }
}]);