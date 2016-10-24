angular
  .module('core.group')
  .factory('Group', ['lodash', 'x2js', function (lodash, x2js) {

    //region Groups XML
    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<groups>
    <group name="urodziny">
        <page name="razem" position="dolny"/>
        <data lang="en" url="bartek-s-birthday" title="bartek's birthday"/>
        <data lang="pl" url="urodziny-bartosza" title="urodziny bartka"/>
    </group>
    <group name="portrety">
        <page name="portret" position="gorny"/>
        <data lang="en" url="portraits" title="portraits"/>
        <data lang="pl" url="portrety" title="portrety"/>
    </group>
    <group name="czarek">
        <page name="portret" position="dolny"/>
        <data lang="en" url="czarek" title="czarek"/>
        <data lang="pl" url="czarek" title="czarek"/>
    </group>
    <group name="tymoteusz">
        <page name="portret" position="dolny"/>
        <data lang="en" url="tymoteusz" title="tymoteusz"/>
        <data lang="pl" url="tymoteusz" title="tymoteusz"/>
    </group>
    <group name="skin">
        <page name="akt" position="gorny"/>
        <data lang="en" url="skin" title="skin"/>
        <data lang="pl" url="skora" title="skóra"/>
    </group>
    <group name="czas">
        <page name="akt" position="dolny"/>
        <data lang="en" url="time" title="time"/>
        <data lang="pl" url="czas" title="czas"/>
    </group>
    <group name="friends">
        <page name="akt" position="gorny"/>
        <data lang="en" url="friends" title="friends"/>
        <data lang="pl" url="przyjaciele" title="przyjaciele"/>
    </group>
    <group name="akty">
        <page name="akt" position="dolny"/>
        <data lang="en" url="male-nudes" title="male nudes"/>
        <data lang="pl" url="akty-meskie" title="akty męskie"/>
    </group>
    <group name="ff">
        <page name="razem" position="dolny"/>
        <data lang="en" url="femme-fatale" title="femme fatale"/>
        <data lang="pl" url="femme-fatale" title="femme fatale"/>
    </group>
    <group name="dqrevolta">
        <page name="razem" position="gorny"/>
        <data lang="en" url="dq-revolta" title="dq revolta"/>
        <data lang="pl" url="dq-revolta" title="dq revolta"/>
    </group>
    <group name="jesien">
        <page name="razem" position="dolny"/>
        <data lang="en" url="autumn" title="autumn"/>
        <data lang="pl" url="jesien" title="jesień"/>
    </group>
    <group name="nieczytasz">
        <page name="projekty" position="gorny"/>
        <data lang="en" url="nie-czytasz-nie-ide-z-toba-do-lozka" title="nie czytasz? nie ide z toba do lozka!"/>
        <data lang="pl" url="nie-czytasz-nie-ide-z-toba-do-lozka" title="nie czytasz? nie idę z tobą do łóżka!"/>
    </group>
    <group name="mnw">
        <page name="projekty" position="gorny"/>
        <data lang="en" url="love-does-not-exclude" title="love does not exclude"/>
        <data lang="pl" url="milosc-nie-wyklucza" title="miłość nie wyklucza"/>
    </group>
    <group name="przeciwdzialaj">
        <page name="projekty" position="dolny"/>
        <data lang="en" url="przeciwdzialaj-dyskryminacji" title="przeciwdziałaj dyskryminacji"/>
        <data lang="pl" url="przeciwdzialaj-dyskryminacji" title="przeciwdziałaj dyskryminacji"/>
    </group>
</groups>
`;
    //endregion

    const groupsObj = x2js.xml_str2json(xmlString);
    const defaultGroupPosition = 'gorny';

    // console.log("groupsObj\n", groupsObj);

    return {
      list() {
        return groupsObj;
      },
      findByPageName(pageName) {
        return lodash.filter(groupsObj.groups.group, {page: {_name: pageName}});
      },
      addGroupToPage(group, pageName) {
        const index = lodash.findIndex(groupsObj.groups.group, group);

        if(Array.isArray(groupsObj.groups.group[index].page)) {

          groupsObj.groups.group[index].page.push({
            _name: pageName,
            _position: defaultGroupPosition
          })
        } else {
          const tmp = groupsObj.groups.group[index].page;
          groupsObj.groups.group[index].page = [tmp, {
            _name: pageName,
            _position: defaultGroupPosition
          }]
        }
      },
      removeGroupFromPage(group, pageName) {
        const index = lodash.findIndex(groupsObj.groups.group, group);

        if(Array.isArray(groupsObj.groups.group[index].page)) {
          if(groupsObj.groups.group[index].page.length === 2) {
            lodash.remove(groupsObj.groups.group[index].page, {_name: pageName});
            groupsObj.groups.group = groupsObj.groups.group[0];
          }
        } else {
          groupsObj.groups.group[index].page._name = '';
        }
      }
    }
  }]);