angular
.module('core.photo')
.factory('Photo', ['lodash', 'x2js', function (_, x2js) {

  //region Photos XML
  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<photos>
    <photo id="433">
        <group name="akty"/>
        <data lang="en" title="Wojtek"/>
        <data lang="pl" title="Wojtek"/>
    </photo>
    <photo id="63">
        <group name="akty"/>
        <data lang="en" title="Bartek"/>
        <data lang="pl" title="Bartek"/>
    </photo>
    <photo id="265">
        <group name="akty"/>
        <data lang="en" title="Filip"/>
        <data lang="pl" title="Filip"/>
    </photo>
    <photo id="243">
        <group name="akty"/>
        <data lang="en" title="Kuba"/>
        <data lang="pl" title="Kuba"/>
    </photo>
    <photo id="352">
        <group name="akty"/>
        <data lang="en" title="Hubert"/>
        <data lang="pl" title="Hubert"/>
    </photo>
    <photo id="244">
        <group name="ff"/>
        <data lang="en" title="Femme fatale"/>
        <data lang="pl" title="Femme fatale"/>
    </photo>
    <photo id="245">
        <group name="ff"/>
        <data lang="en" title="Femme fatale"/>
        <data lang="pl" title="Femme fatale"/>
    </photo>
    <photo id="246">
        <group name="ff"/>
        <data lang="en" title="Femme fatale"/>
        <data lang="pl" title="Femme fatale"/>
    </photo>
    <photo id="247">
        <group name="ff"/>
        <data lang="en" title="Femme fatale"/>
        <data lang="pl" title="Femme fatale"/>
    </photo>
    <photo id="248">
        <group name="ff"/>
        <data lang="en" title="Femme fatale"/>
        <data lang="pl" title="Femme fatale"/>
    </photo>
    <photo id="249">
        <group name="ff"/>
        <data lang="en" title="Femme fatale"/>
        <data lang="pl" title="Femme fatale"/>
    </photo>
    <photo id="226">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="228">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="229">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="230">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="231">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="232">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="233">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="234">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="235">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="236">
        <group name="dqrevolta"/>
        <data lang="en" title="DQ Revolta"/>
        <data lang="pl" title="DQ Revolta"/>
    </photo>
    <photo id="118">
        <group name="jesien"/>
        <data lang="en" title="Autumn"/>
        <data lang="pl" title="Jesień"/>
    </photo>
    <photo id="119">
        <group name="jesien"/>
        <data lang="en" title="Autumn"/>
        <data lang="pl" title="Jesień"/>
    </photo>
    <photo id="120">
        <group name="jesien"/>
        <data lang="en" title="Autumn"/>
        <data lang="pl" title="Jesień"/>
    </photo>
    <photo id="121">
        <group name="jesien"/>
        <data lang="en" title="Autumn"/>
        <data lang="pl" title="Jesień"/>
    </photo>
    <photo id="122">
        <group name="jesien"/>
        <data lang="en" title="Autumn"/>
        <data lang="pl" title="Jesień"/>
    </photo>
    <photo id="392">
        <group name="portrety"/>
        <data lang="en" title="Marcin"/>
        <data lang="pl" title="Marcin"/>
    </photo>
    <photo id="252">
        <group name="portrety"/>
        <data lang="en" title="Filip"/>
        <data lang="pl" title="Filip"/>
    </photo>
    <photo id="272">
        <group name="portrety"/>
        <data lang="en" title="Mikołaj"/>
        <data lang="pl" title="Mikołaj"/>
    </photo>
    <photo id="2">
        <group name="portrety"/>
        <data lang="en" title="Marcin"/>
        <data lang="pl" title="Marcin"/>
    </photo>
    <photo id="3">
        <group name="portrety"/>
        <data lang="en" title="Marcin"/>
        <data lang="pl" title="Marcin"/>
    </photo>
    <photo id="60">
        <group name="portrety"/>
        <data lang="en" title="Wojtek"/>
        <data lang="pl" title="Wojtek"/>
    </photo>

    <photo id="31">
        <group name="tymoteusz"/>
        <data lang="en" title="Tymoteusz"/>
        <data lang="pl" title="Tymoteusz"/>
    </photo>
    <photo id="32">
        <group name="tymoteusz"/>
        <data lang="en" title="Tymoteusz"/>
        <data lang="pl" title="Tymoteusz"/>
    </photo>
    <photo id="33">
        <group name="tymoteusz"/>
        <data lang="en" title="Tymoteusz"/>
        <data lang="pl" title="Tymoteusz"/>
    </photo>
    <photo id="34">
        <group name="tymoteusz"/>
        <data lang="en" title="Tymoteusz"/>
        <data lang="pl" title="Tymoteusz"/>
    </photo>
    <photo id="35">
        <group name="tymoteusz"/>
        <data lang="en" title="Tymoteusz"/>
        <data lang="pl" title="Tymoteusz"/>
    </photo>

    <photo id="395">
        <group name="friends"/>
        <data lang="en" title="Friends"/>
        <data lang="pl" title="Przyjaciele"/>
    </photo>
    <photo id="396">
        <group name="friends"/>
        <data lang="en" title="Friends"/>
        <data lang="pl" title="Przyjaciele"/>
    </photo>
    <photo id="397">
        <group name="friends"/>
        <data lang="en" title="Friends"/>
        <data lang="pl" title="Przyjaciele"/>
    </photo>
    <photo id="398">
        <group name="friends"/>
        <data lang="en" title="Friends"/>
        <data lang="pl" title="Przyjaciele"/>
    </photo>
    <photo id="399">
        <group name="friends"/>
        <data lang="en" title="Friends"/>
        <data lang="pl" title="Przyjaciele"/>
    </photo>

    <photo id="374">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="375">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="378">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="379">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="381">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="386">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="387">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="389">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="390">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="391">
        <group name="skin"/>
        <data lang="en" title="Skin"/>
        <data lang="pl" title="Skóra"/>
    </photo>
    <photo id="411">
        <group name="urodziny"/>
        <data lang="en" title="Bartek's birthday"/>
        <data lang="pl" title="Urodziny Bartka"/>
    </photo>
    <photo id="412">
        <group name="urodziny"/>
        <data lang="en" title="Bartek's birthday"/>
        <data lang="pl" title="Urodziny Bartka"/>
    </photo>
    <photo id="413">
        <group name="urodziny"/>
        <data lang="en" title="Bartek's birthday"/>
        <data lang="pl" title="Urodziny Bartka"/>
    </photo>
    <photo id="414">
        <group name="urodziny"/>
        <data lang="en" title="Bartek's birthday"/>
        <data lang="pl" title="Urodziny Bartka"/>
    </photo>
    <photo id="415">
        <group name="urodziny"/>
        <data lang="en" title="Bartek's birthday"/>
        <data lang="pl" title="Urodziny Bartka"/>
    </photo>
    <photo id="416">
        <group name="urodziny"/>
        <data lang="en" title="Bartek's birthda"/>
        <data lang="pl" title="Urodziny Bartka"/>
    </photo>
    <photo id="417">
        <group name="mnw"/>
        <data lang="en" title="Love Does Not Exclude"/>
        <data lang="pl" title="Miłośc nie wyklucza"/>
    </photo>
    <photo id="418">
        <group name="mnw"/>
        <data lang="en" title="Love Does Not Exclude"/>
        <data lang="pl" title="Miłośc nie wyklucza"/>
    </photo>
    <photo id="419">
        <group name="mnw"/>
        <data lang="en" title="Love Does Not Exclude"/>
        <data lang="pl" title="Miłośc nie wyklucza"/>
    </photo>
    <photo id="420">
        <group name="mnw"/>
        <data lang="en" title="Love Does Not Exclude"/>
        <data lang="pl" title="Miłośc nie wyklucza"/>
    </photo>
    <photo id="421">
        <group name="nieczytasz"/>
        <data lang="en" title="Nie czytasz? Nie ide z Toba do lozka!"/>
        <data lang="pl" title="Nie czytasz? Nie idę z Tobą do łóżka!"/>
    </photo>
    <photo id="422">
        <group name="nieczytasz"/>
        <data lang="en" title="Nie czytasz? Nie ide z Toba do lozka!"/>
        <data lang="pl" title="Nie czytasz? Nie idę z Tobą do łóżka!"/>
    </photo>
    <photo id="425">
        <group name="przeciwdzialaj"/>
        <data lang="en" title="Przeciwdziałaj dyskryminacji"/>
        <data lang="pl" title="Przeciwdzialaj dyskryminacji"/>
    </photo>
    <photo id="426">
        <group name="przeciwdzialaj"/>
        <data lang="en" title="Przeciwdziałaj dyskryminacji"/>
        <data lang="pl" title="Przeciwdzialaj dyskryminacji"/>
    </photo>
    <photo id="427">
        <group name="przeciwdzialaj"/>
        <data lang="en" title="Przeciwdziałaj dyskryminacji"/>
        <data lang="pl" title="Przeciwdzialaj dyskryminacji"/>
    </photo>
    <photo id="423">
        <group name="przeciwdzialaj"/>
        <data lang="en" title="Przeciwdziałaj dyskryminacji"/>
        <data lang="pl" title="Przeciwdzialaj dyskryminacji"/>
    </photo>
    <photo id="424">
        <group name="przeciwdzialaj"/>
        <data lang="en" title="Przeciwdziałaj dyskryminacji"/>
        <data lang="pl" title="Przeciwdzialaj dyskryminacji"/>
    </photo>
    <photo id="429">
        <group name="czas"/>
        <data lang="en" title="Time"/>
        <data lang="pl" title="Czas"/>
    </photo>
    <photo id="431">
        <group name="czas"/>
        <data lang="en" title="Time"/>
        <data lang="pl" title="Czas"/>
    </photo>
    <photo id="432">
        <group name="czas"/>
        <data lang="en" title="Time"/>
        <data lang="pl" title="Czas"/>
    </photo>
    <photo id="430">
        <group name="czas"/>
        <data lang="en" title="Time"/>
        <data lang="pl" title="Czas"/>
    </photo>
    <photo id="434">
        <group name="czarek"/>
        <data lang="en" title="Czarek"/>
        <data lang="pl" title="Czarek"/>
    </photo>
    <photo id="435">
        <group name="czarek"/>
        <data lang="en" title="Czarek"/>
        <data lang="pl" title="Czarek"/>
    </photo>
    <photo id="436">
        <group name="czarek"/>
        <data lang="en" title="Czarek"/>
        <data lang="pl" title="Czarek"/>
    </photo>

</photos>
`;
  //endregion

  const photosObj = x2js.xml_str2json(xmlString);

  return {
    getPhotosForGroup(groupName) {
      return _.filter(photosObj.photos.photo, {group: {_name: groupName}})
    },
    getNextId() {
      return Math.max(...photosObj.photos.photo.map(o => +o._id)) + 1;
    }
  }

}]);