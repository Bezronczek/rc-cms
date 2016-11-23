angular
  .module('core.group')
  .factory('Group', ['lodash', 'x2js', '$interval',
    function (_, x2js, $interval) {

      let groupsObj = {
        groups: {
          group: []
        }
      };

      if (localStorage.getItem('groupsObject')) {
        groupsObj = JSON.parse(localStorage.getItem('groupsObject'));
      }

      const defaultGroupPosition = 'gorny';

      function save() {
        localStorage.setItem('groupsObject', JSON.stringify(groupsObj));
      }

      $interval(save, 60000);

      return {
        setGroupsObject(obj) {
          return new Promise(resolve => {
            groupsObj = angular.copy(obj);
            localStorage.setItem('groupsObject', JSON.stringify(groupsObj));
            resolve();
          });
        },
        getJson() {
          return groupsObj;
        },
        save() {
          localStorage.setItem('groupsObject', JSON.stringify(groupsObj));
        },
        clear() {
          groupsObj.groups.group.length = 0;
        },
        list() {
          return groupsObj;
        },
        findByPageName(pageName) {
          return _.filter(groupsObj.groups.group, {page: {_name: pageName}});
        },
        create(pageName) {
          groupsObj.groups.group.push({
            _name: '',
            page: {
              _name: pageName,
              _position: defaultGroupPosition
            },
            data: [{
              _lang: 'pl',
            }, {
              _lang: 'en'
            }]
          });

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
          if (Array.isArray(group.page)) {
            if (group.page.length === 2) {
              _.remove(group.page, {_name: pageName});
              group.page = group.page[0];
            } else {
              _.remove(group.page, {_name: pageName})
            }
          } else {
            group.page._name = '';
          }


        },

        delete(group) {
          _.remove(groupsObj.groups.group, group);
        },
        deletePage(page) {
          _.each(groupsObj.groups.group, group => {
            if (group.page._name === page._action) {
              group.page._name = ''
            }
          });

        },
        renamePageAction(oldName, newName) {
          _.each(groupsObj.groups.group, group => {
            if (group.page._name === oldName) {
              group.page._name = newName;
            }
          });
        },
        move(fromIndex, toIndex) {
          groupsObj.groups.group.splice(toIndex, 0, groupsObj.groups.group.splice(fromIndex, 1)[0]);
        },
        exportToXMLFile() {
          const xmlString = x2js.json2xml_str(angular.copy(groupsObj));
          return new Blob([xmlString], {type: 'text/xml'});
        }
      }
    }]);