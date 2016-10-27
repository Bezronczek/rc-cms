angular
  .module('core.group')
  .factory('Group', ['lodash', 'x2js', function (_, x2js) {

    let groupsObj = {
      groups: {
        group: []
      }
    };

    if (localStorage.getItem('groupsObject')) {
      groupsObj = JSON.parse(localStorage.getItem('groupsObject'));
    }

    const defaultGroupPosition = 'gorny';

    return {
      setGroupsObject(obj) {
        return new Promise(resolve => {
          groupsObj = obj;
          localStorage.setItem('groupsObject', JSON.stringify(groupsObj));
          resolve();
        });
      },
      list() {
        return groupsObj;
      },
      findByPageName(pageName) {
        return _.filter(groupsObj.groups.group, {page: {_name: pageName}});
      },
      addGroupToPage(group, pageName) {
        const index = _.findIndex(groupsObj.groups.group, group);

        if (Array.isArray(groupsObj.groups.group[index].page)) {

          groupsObj.groups.group[index].page.push({
            _name: pageName,
            _position: defaultGroupPosition
          })
        } else {
          if (groupsObj.groups.group[index].page._name === "") {
            groupsObj.groups.group[index].page._name = pageName;
          } else {
            const tmp = groupsObj.groups.group[index].page;
            groupsObj.groups.group[index].page = [tmp, {
              _name: pageName,
              _position: defaultGroupPosition
            }]
          }
        }
      },
      removeGroupFromPage(group, pageName) {
        const index = _.findIndex(groupsObj.groups.group, group);

        if (Array.isArray(groupsObj.groups.group[index].page)) {
          if (groupsObj.groups.group[index].page.length === 2) {
            _.remove(groupsObj.groups.group[index].page, {_name: pageName});
            groupsObj.groups.group = groupsObj.groups.group[0];
          }
        } else {
          groupsObj.groups.group[index].page._name = '';
        }
      },
      delete(group) {
        _.remove(groupsObj.groups.group, group);
      },
      exportToXML() {
        const xmlString = x2js.json2xml_str(angular.copy(groupsObj));
        return new Blob([xmlString], {type: 'text/xml'});
      }
    }
  }]);