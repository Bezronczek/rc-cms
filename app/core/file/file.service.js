angular
  .module('core.file')
.factory('File', ['lodash', 'x2js', function (_, x2js) {
  //region Files XML
  const filesXml = `<?xml version="1.0" encoding="UTF-8"?>
<files>
    <file id="433" subdomain="s3." gallery_height="227" gallery_width="227" gallery_top="2" gallery_right="35">
        <data name="max" path="/photos/max/433.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/433.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/433.jpg" width="69" height="90"/>
    </file>
    <file id="63" subdomain="s3." gallery_height="205" gallery_width="205" gallery_top="15" gallery_right="20">
        <data name="max" path="/photos/max/63.jpg" width="681" height="1024"/>
        <data name="min" path="/photos/min/63.jpg" width="192" height="290"/>
        <data name="preview" path="/photos/preview/63.jpg" width="59" height="90"/>
    </file>
    <file id="265" subdomain="s5." gallery_height="208" gallery_width="208" gallery_top="31" gallery_right="22">
        <data name="max" path="/photos/max/265.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/265.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/265.jpg" width="135" height="90"/>
    </file>
    <file id="243" subdomain="s3." gallery_height="221" gallery_width="221" gallery_top="17" gallery_right="7">
        <data name="max" path="/photos/max/243.jpg" width="1024" height="822"/>
        <data name="min" path="/photos/min/243.jpg" width="361" height="290"/>
        <data name="preview" path="/photos/preview/243.jpg" width="112" height="90"/>
    </file>
    <file id="352" subdomain="s2." gallery_height="205" gallery_width="205" gallery_top="14" gallery_right="12">
        <data name="max" path="/photos/max/352.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/352.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/352.jpg" width="69" height="90"/>
    </file>
    <file id="244" subdomain="s4." gallery_height="203" gallery_width="203" gallery_top="14" gallery_right="6">
        <data name="max" path="/photos/max/244.jpg" width="681" height="1024"/>
        <data name="min" path="/photos/min/244.jpg" width="192" height="290"/>
        <data name="preview" path="/photos/preview/244.jpg" width="59" height="90"/>
    </file>
    <file id="245" subdomain="s5." gallery_height="225" gallery_width="225" gallery_top="9" gallery_right="22">
        <data name="max" path="/photos/max/245.jpg" width="683" height="1024"/>
        <data name="min" path="/photos/min/245.jpg" width="193" height="290"/>
        <data name="preview" path="/photos/preview/245.jpg" width="60" height="90"/>
    </file>
    <file id="246" subdomain="s6." gallery_height="227" gallery_width="227" gallery_top="9" gallery_right="17">
        <data name="max" path="/photos/max/246.jpg" width="683" height="1024"/>
        <data name="min" path="/photos/min/246.jpg" width="193" height="290"/>
        <data name="preview" path="/photos/preview/246.jpg" width="60" height="90"/>
    </file>
    <file id="247" subdomain="s7." gallery_height="214" gallery_width="214" gallery_top="4" gallery_right="24">
        <data name="max" path="/photos/max/247.jpg" width="683" height="1024"/>
        <data name="min" path="/photos/min/247.jpg" width="193" height="290"/>
        <data name="preview" path="/photos/preview/247.jpg" width="60" height="90"/>
    </file>
    <file id="248" subdomain="s8." gallery_height="232" gallery_width="232" gallery_top="4" gallery_right="5">
        <data name="max" path="/photos/max/248.jpg" width="683" height="1024"/>
        <data name="min" path="/photos/min/248.jpg" width="193" height="290"/>
        <data name="preview" path="/photos/preview/248.jpg" width="60" height="90"/>
    </file>
    <file id="249" subdomain="s9." gallery_height="216" gallery_width="216" gallery_top="10" gallery_right="15">
        <data name="max" path="/photos/max/249.jpg" width="683" height="1024"/>
        <data name="min" path="/photos/min/249.jpg" width="193" height="290"/>
        <data name="preview" path="/photos/preview/249.jpg" width="60" height="90"/>
    </file>
    <file id="226" subdomain="s6." gallery_height="200" gallery_width="200" gallery_top="36" gallery_right="29">
        <data name="max" path="/photos/max/226.jpg" width="681" height="1024"/>
        <data name="min" path="/photos/min/226.jpg" width="192" height="290"/>
        <data name="preview" path="/photos/preview/226.jpg" width="59" height="90"/>
    </file>
    <file id="228" subdomain="s8." gallery_height="231" gallery_width="231" gallery_top="96" gallery_right="9">
        <data name="max" path="/photos/max/228.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/228.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/228.jpg" width="135" height="90"/>
    </file>
    <file id="229" subdomain="s9." gallery_height="221" gallery_width="221" gallery_top="12" gallery_right="17">
        <data name="max" path="/photos/max/229.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/229.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/229.jpg" width="135" height="90"/>
    </file>
    <file id="230" subdomain="s0." gallery_height="221" gallery_width="221" gallery_top="82" gallery_right="24">
        <data name="max" path="/photos/max/230.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/230.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/230.jpg" width="135" height="90"/>
    </file>
    <file id="231" subdomain="s1." gallery_height="213" gallery_width="213" gallery_top="2" gallery_right="29">
        <data name="max" path="/photos/max/231.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/231.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/231.jpg" width="135" height="90"/>
    </file>
    <file id="232" subdomain="s2." gallery_height="231" gallery_width="231" gallery_top="94" gallery_right="24">
        <data name="max" path="/photos/max/232.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/232.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/232.jpg" width="135" height="90"/>
    </file>
    <file id="233" subdomain="s3." gallery_height="210" gallery_width="210" gallery_top="77" gallery_right="16">
        <data name="max" path="/photos/max/233.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/233.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/233.jpg" width="135" height="90"/>
    </file>
    <file id="234" subdomain="s4." gallery_height="227" gallery_width="227" gallery_top="15" gallery_right="15">
        <data name="max" path="/photos/max/234.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/234.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/234.jpg" width="135" height="90"/>
    </file>
    <file id="235" subdomain="s5." gallery_height="222" gallery_width="222" gallery_top="9" gallery_right="16">
        <data name="max" path="/photos/max/235.jpg" width="681" height="1024"/>
        <data name="min" path="/photos/min/235.jpg" width="192" height="290"/>
        <data name="preview" path="/photos/preview/235.jpg" width="59" height="90"/>
    </file>
    <file id="236" subdomain="s6." gallery_height="237" gallery_width="237" gallery_top="53" gallery_right="35">
        <data name="max" path="/photos/max/236.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/236.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/236.jpg" width="135" height="90"/>
    </file>
    <file id="118" subdomain="s8." gallery_height="223" gallery_width="223" gallery_top="12" gallery_right="5">
        <data name="max" path="/photos/max/118.jpg" width="721" height="1024"/>
        <data name="min" path="/photos/min/118.jpg" width="204" height="290"/>
        <data name="preview" path="/photos/preview/118.jpg" width="63" height="90"/>
    </file>
    <file id="119" subdomain="s9." gallery_height="221" gallery_width="221" gallery_top="19" gallery_right="34">
        <data name="max" path="/photos/max/119.jpg" width="720" height="1024"/>
        <data name="min" path="/photos/min/119.jpg" width="203" height="290"/>
        <data name="preview" path="/photos/preview/119.jpg" width="63" height="90"/>
    </file>
    <file id="120" subdomain="s0." gallery_height="231" gallery_width="231" gallery_top="7" gallery_right="12">
        <data name="max" path="/photos/max/120.jpg" width="721" height="1024"/>
        <data name="min" path="/photos/min/120.jpg" width="204" height="290"/>
        <data name="preview" path="/photos/preview/120.jpg" width="63" height="90"/>
    </file>
    <file id="121" subdomain="s1." gallery_height="239" gallery_width="239" gallery_top="45" gallery_right="24">
        <data name="max" path="/photos/max/121.jpg" width="1024" height="721"/>
        <data name="min" path="/photos/min/121.jpg" width="411" height="290"/>
        <data name="preview" path="/photos/preview/121.jpg" width="127" height="90"/>
    </file>
    <file id="122" subdomain="s2." gallery_height="202" gallery_width="202" gallery_top="52" gallery_right="28">
        <data name="max" path="/photos/max/122.jpg" width="1024" height="721"/>
        <data name="min" path="/photos/min/122.jpg" width="411" height="290"/>
        <data name="preview" path="/photos/preview/122.jpg" width="127" height="90"/>
    </file>
    <file id="392" subdomain="s2." gallery_height="208" gallery_width="208" gallery_top="19" gallery_right="22">
        <data name="max" path="/photos/max/392.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/392.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/392.jpg" width="69" height="90"/>
    </file>
    <file id="252" subdomain="s2." gallery_height="234" gallery_width="234" gallery_top="2" gallery_right="14">
        <data name="max" path="/photos/max/252.jpg" width="681" height="1024"/>
        <data name="min" path="/photos/min/252.jpg" width="192" height="290"/>
        <data name="preview" path="/photos/preview/252.jpg" width="59" height="90"/>
    </file>
    <file id="272" subdomain="s2." gallery_height="235" gallery_width="235" gallery_top="4" gallery_right="33">
        <data name="max" path="/photos/max/272.jpg" width="878" height="1024"/>
        <data name="min" path="/photos/min/272.jpg" width="248" height="290"/>
        <data name="preview" path="/photos/preview/272.jpg" width="77" height="90"/>
    </file>
    <file id="2" subdomain="s2." gallery_height="222" gallery_width="222" gallery_top="20" gallery_right="8">
        <data name="max" path="/photos/max/2.jpg" width="1024" height="832"/>
        <data name="min" path="/photos/min/2.jpg" width="356" height="290"/>
        <data name="preview" path="/photos/preview/2.jpg" width="110" height="90"/>
    </file>
    <file id="3" subdomain="s3." gallery_height="227" gallery_width="227" gallery_top="4" gallery_right="27">
        <data name="max" path="/photos/max/3.jpg" width="831" height="1024"/>
        <data name="min" path="/photos/min/3.jpg" width="235" height="290"/>
        <data name="preview" path="/photos/preview/3.jpg" width="73" height="90"/>
    </file>
    <file id="60" subdomain="s0." gallery_height="201" gallery_width="201" gallery_top="1" gallery_right="32">
        <data name="max" path="/photos/max/60.jpg" width="836" height="1024"/>
        <data name="min" path="/photos/min/60.jpg" width="236" height="290"/>
        <data name="preview" path="/photos/preview/60.jpg" width="73" height="90"/>
    </file>
    <file id="31" subdomain="s1." gallery_height="211" gallery_width="211" gallery_top="13" gallery_right="9">
        <data name="max" path="/photos/max/31.jpg" width="682" height="1024"/>
        <data name="min" path="/photos/min/31.jpg" width="193" height="290"/>
        <data name="preview" path="/photos/preview/31.jpg" width="59" height="90"/>
    </file>
    <file id="32" subdomain="s2." gallery_height="207" gallery_width="207" gallery_top="2" gallery_right="30">
        <data name="max" path="/photos/max/32.jpg" width="682" height="1024"/>
        <data name="min" path="/photos/min/32.jpg" width="193" height="290"/>
        <data name="preview" path="/photos/preview/32.jpg" width="59" height="90"/>
    </file>
    <file id="33" subdomain="s3." gallery_height="203" gallery_width="203" gallery_top="39" gallery_right="31">
        <data name="max" path="/photos/max/33.jpg" width="1024" height="682"/>
        <data name="min" path="/photos/min/33.jpg" width="435" height="290"/>
        <data name="preview" path="/photos/preview/33.jpg" width="135" height="90"/>
    </file>
    <file id="34" subdomain="s4." gallery_height="214" gallery_width="214" gallery_top="31" gallery_right="35">
        <data name="max" path="/photos/max/34.jpg" width="1024" height="682"/>
        <data name="min" path="/photos/min/34.jpg" width="435" height="290"/>
        <data name="preview" path="/photos/preview/34.jpg" width="135" height="90"/>
    </file>
    <file id="35" subdomain="s5." gallery_height="215" gallery_width="215" gallery_top="65" gallery_right="23">
        <data name="max" path="/photos/max/35.jpg" width="1024" height="682"/>
        <data name="min" path="/photos/min/35.jpg" width="435" height="290"/>
        <data name="preview" path="/photos/preview/35.jpg" width="135" height="90"/>
    </file>
    <file id="395" subdomain="s5." gallery_height="232" gallery_width="232" gallery_top="72" gallery_right="30">
        <data name="max" path="/photos/max/395.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/395.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/395.jpg" width="115" height="90"/>
    </file>
    <file id="396" subdomain="s6." gallery_height="226" gallery_width="226" gallery_top="31" gallery_right="21">
        <data name="max" path="/photos/max/396.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/396.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/396.jpg" width="115" height="90"/>
    </file>
    <file id="397" subdomain="s7." gallery_height="227" gallery_width="227" gallery_top="21" gallery_right="26">
        <data name="max" path="/photos/max/397.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/397.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/397.jpg" width="115" height="90"/>
    </file>
    <file id="398" subdomain="s8." gallery_height="215" gallery_width="215" gallery_top="65" gallery_right="5">
        <data name="max" path="/photos/max/398.jpg" width="1024" height="827"/>
        <data name="min" path="/photos/min/398.jpg" width="359" height="290"/>
        <data name="preview" path="/photos/preview/398.jpg" width="111" height="90"/>
    </file>
    <file id="399" subdomain="s9." gallery_height="230" gallery_width="230" gallery_top="21" gallery_right="16">
        <data name="max" path="/photos/max/399.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/399.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/399.jpg" width="115" height="90"/>
    </file>
    <file id="374" subdomain="s4." gallery_height="215" gallery_width="215" gallery_top="0" gallery_right="23">
        <data name="max" path="/photos/max/374.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/374.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/374.jpg" width="69" height="90"/>
    </file>
    <file id="375" subdomain="s5." gallery_height="214" gallery_width="214" gallery_top="0" gallery_right="10">
        <data name="max" path="/photos/max/375.jpg" width="799" height="1024"/>
        <data name="min" path="/photos/min/375.jpg" width="226" height="290"/>
        <data name="preview" path="/photos/preview/375.jpg" width="70" height="90"/>
    </file>
    <file id="378" subdomain="s8." gallery_height="233" gallery_width="233" gallery_top="10" gallery_right="11">
        <data name="max" path="/photos/max/378.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/378.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/378.jpg" width="115" height="90"/>
    </file>
    <file id="379" subdomain="s9." gallery_height="209" gallery_width="209" gallery_top="0" gallery_right="23">
        <data name="max" path="/photos/max/379.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/379.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/379.jpg" width="115" height="90"/>
    </file>
    <file id="381" subdomain="s1." gallery_height="231" gallery_width="231" gallery_top="2" gallery_right="32">
        <data name="max" path="/photos/max/381.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/381.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/381.jpg" width="69" height="90"/>
    </file>
    <file id="386" subdomain="s6." gallery_height="209" gallery_width="209" gallery_top="16" gallery_right="18">
        <data name="max" path="/photos/max/386.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/386.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/386.jpg" width="69" height="90"/>
    </file>
    <file id="387" subdomain="s7." gallery_height="207" gallery_width="207" gallery_top="22" gallery_right="29">
        <data name="max" path="/photos/max/387.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/387.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/387.jpg" width="69" height="90"/>
    </file>
    <file id="389" subdomain="s9." gallery_height="237" gallery_width="237" gallery_top="81" gallery_right="31">
        <data name="max" path="/photos/max/389.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/389.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/389.jpg" width="115" height="90"/>
    </file>
    <file id="390" subdomain="s0." gallery_height="231" gallery_width="231" gallery_top="13" gallery_right="23">
        <data name="max" path="/photos/max/390.jpg" width="1024" height="799"/>
        <data name="min" path="/photos/min/390.jpg" width="371" height="290"/>
        <data name="preview" path="/photos/preview/390.jpg" width="115" height="90"/>
    </file>
    <file id="391" subdomain="s1." gallery_height="208" gallery_width="208" gallery_top="53" gallery_right="27">
        <data name="max" path="/photos/max/391.jpg" width="1024" height="796"/>
        <data name="min" path="/photos/min/391.jpg" width="373" height="290"/>
        <data name="preview" path="/photos/preview/391.jpg" width="115" height="90"/>
    </file>
    <file id="411" subdomain="s1." gallery_height="205" gallery_width="205" gallery_top="49" gallery_right="21">
        <data name="max" path="/photos/max/411.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/411.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/411.jpg" width="135" height="90"/>
    </file>
    <file id="412" subdomain="s2." gallery_height="230" gallery_width="230" gallery_top="26" gallery_right="19">
        <data name="max" path="/photos/max/412.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/412.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/412.jpg" width="135" height="90"/>
    </file>
    <file id="413" subdomain="s3." gallery_height="209" gallery_width="209" gallery_top="47" gallery_right="6">
        <data name="max" path="/photos/max/413.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/413.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/413.jpg" width="135" height="90"/>
    </file>
    <file id="414" subdomain="s4." gallery_height="213" gallery_width="213" gallery_top="62" gallery_right="16">
        <data name="max" path="/photos/max/414.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/414.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/414.jpg" width="135" height="90"/>
    </file>
    <file id="415" subdomain="s5." gallery_height="219" gallery_width="219" gallery_top="23" gallery_right="13">
        <data name="max" path="/photos/max/415.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/415.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/415.jpg" width="135" height="90"/>
    </file>
    <file id="416" subdomain="s6." gallery_height="224" gallery_width="224" gallery_top="70" gallery_right="21">
        <data name="max" path="/photos/max/416.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/416.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/416.jpg" width="135" height="90"/>
    </file>
    <file id="417" subdomain="s7." gallery_height="220" gallery_width="220" gallery_top="80" gallery_right="27">
        <data name="max" path="/photos/max/417.jpg" width="2118" height="1000"/>
        <data name="min" path="/photos/min/417.jpg" width="600" height="283"/>
        <data name="preview" path="/photos/preview/417.jpg" width="190" height="90"/>
    </file>
    <file id="418" subdomain="s8." gallery_height="236" gallery_width="236" gallery_top="2" gallery_right="18">
        <data name="max" path="/photos/max/418.jpg" width="1000" height="1853"/>
        <data name="min" path="/photos/min/418.jpg" width="156" height="290"/>
        <data name="preview" path="/photos/preview/418.jpg" width="48" height="90"/>
    </file>
    <file id="419" subdomain="s9." gallery_height="221" gallery_width="221" gallery_top="3" gallery_right="14">
        <data name="max" path="/photos/max/419.jpg" width="1000" height="1853"/>
        <data name="min" path="/photos/min/419.jpg" width="156" height="290"/>
        <data name="preview" path="/photos/preview/419.jpg" width="48" height="90"/>
    </file>
    <file id="420" subdomain="s0." gallery_height="224" gallery_width="224" gallery_top="15" gallery_right="17">
        <data name="max" path="/photos/max/420.jpg" width="1000" height="1853"/>
        <data name="min" path="/photos/min/420.jpg" width="156" height="290"/>
        <data name="preview" path="/photos/preview/420.jpg" width="48" height="90"/>
    </file>
    <file id="421" subdomain="s1." gallery_height="221" gallery_width="221" gallery_top="10" gallery_right="16">
        <data name="max" path="/photos/max/421.jpg" width="800" height="532"/>
        <data name="min" path="/photos/min/421.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/421.jpg" width="135" height="90"/>
    </file>
    <file id="422" subdomain="s2." gallery_height="205" gallery_width="205" gallery_top="88" gallery_right="9">
        <data name="max" path="/photos/max/422.jpg" width="1024" height="681"/>
        <data name="min" path="/photos/min/422.jpg" width="436" height="290"/>
        <data name="preview" path="/photos/preview/422.jpg" width="135" height="90"/>
    </file>
    <file id="425" subdomain="s5." gallery_height="217" gallery_width="217" gallery_top="17" gallery_right="35">
        <data name="max" path="/photos/max/425.jpg" width="514" height="720"/>
        <data name="min" path="/photos/min/425.jpg" width="207" height="290"/>
        <data name="preview" path="/photos/preview/425.jpg" width="64" height="90"/>
    </file>
    <file id="426" subdomain="s6." gallery_height="202" gallery_width="202" gallery_top="32" gallery_right="21">
        <data name="max" path="/photos/max/426.jpg" width="514" height="720"/>
        <data name="min" path="/photos/min/426.jpg" width="207" height="290"/>
        <data name="preview" path="/photos/preview/426.jpg" width="64" height="90"/>
    </file>
    <file id="427" subdomain="s7." gallery_height="205" gallery_width="205" gallery_top="21" gallery_right="32">
        <data name="max" path="/photos/max/427.jpg" width="514" height="720"/>
        <data name="min" path="/photos/min/427.jpg" width="207" height="290"/>
        <data name="preview" path="/photos/preview/427.jpg" width="64" height="90"/>
    </file>
    <file id="423" subdomain="s3." gallery_height="220" gallery_width="220" gallery_top="16" gallery_right="30">
        <data name="max" path="/photos/max/423.jpg" width="514" height="720"/>
        <data name="min" path="/photos/min/423.jpg" width="207" height="290"/>
        <data name="preview" path="/photos/preview/423.jpg" width="64" height="90"/>
    </file>
    <file id="424" subdomain="s4." gallery_height="230" gallery_width="230" gallery_top="3" gallery_right="5">
        <data name="max" path="/photos/max/424.jpg" width="514" height="720"/>
        <data name="min" path="/photos/min/424.jpg" width="207" height="290"/>
        <data name="preview" path="/photos/preview/424.jpg" width="64" height="90"/>
    </file>
    <file id="429" subdomain="s9." gallery_height="210" gallery_width="210" gallery_top="25" gallery_right="27">
        <data name="max" path="/photos/max/429.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/429.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/429.jpg" width="69" height="90"/>
    </file>
    <file id="431" subdomain="s1." gallery_height="201" gallery_width="201" gallery_top="2" gallery_right="19">
        <data name="max" path="/photos/max/431.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/431.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/431.jpg" width="69" height="90"/>
    </file>
    <file id="432" subdomain="s2." gallery_height="209" gallery_width="209" gallery_top="14" gallery_right="11">
        <data name="max" path="/photos/max/432.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/432.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/432.jpg" width="69" height="90"/>
    </file>
    <file id="430" subdomain="s0." gallery_height="217" gallery_width="217" gallery_top="12" gallery_right="18">
        <data name="max" path="/photos/max/430.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/430.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/430.jpg" width="69" height="90"/>
    </file>
    <file id="434" subdomain="s4." gallery_height="219" gallery_width="219" gallery_top="7" gallery_right="5">
        <data name="max" path="/photos/max/434.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/434.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/434.jpg" width="69" height="90"/>
    </file>
    <file id="435" subdomain="s5." gallery_height="211" gallery_width="211" gallery_top="0" gallery_right="9">
        <data name="max" path="/photos/max/435.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/435.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/435.jpg" width="69" height="90"/>
    </file>
    <file id="436" subdomain="s6." gallery_height="234" gallery_width="234" gallery_top="0" gallery_right="35">
        <data name="max" path="/photos/max/436.jpg" width="796" height="1024"/>
        <data name="min" path="/photos/min/436.jpg" width="225" height="290"/>
        <data name="preview" path="/photos/preview/436.jpg" width="69" height="90"/>
    </file>
</files>
`;
  //endregion

  const filesObj = x2js.xml_str2json(filesXml);

  console.log('FilesObj', filesObj);

  return {
    getFileForPhoto(photo) {
      return _.find(filesObj.files.file, {_id: photo._id});
    },
    getMinFileObject(photo) {
      return _.find(_.find(filesObj.files.file, {_id: photo._id}).data, {_name: 'min'})
    },
    getPreviewFileObject(photo) {
      return _.find(_.find(filesObj.files.file, {_id: photo._id}).data, {_name: 'preview'})
    },
    getMaxFileObject(photo) {
      return _.find(_.find(filesObj.files.file, {_id: photo._id}).data, {_name: 'max'})
    },
    list() {
      return filesObj.files.file
    },
    getFileById(photoId) {
      return _.find(filesObj.files.file, {_id: photoId});
    },
    addFilesForPhoto(file) {
      return new Promise(resolve => {
        filesObj.files.file.push(file);
        resolve();
      });

    }
  }

}]);