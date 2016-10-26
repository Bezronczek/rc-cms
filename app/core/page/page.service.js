angular
  .module('core.page')
  .factory('Page', ['lodash', 'x2js', function (lodash, x2js) {


    //region xmlStringData
    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<pages>
    <page photo="yes" show="yes" action="portret" domain="firstone">

        <data lang="pl" url="portret" title="portret" desc="Profesjonalny portret na Twój profil w sieci"/>
        <data lang="en" url="portrait" title="portrait" desc="Affordable artistic photography of you"/>
    </page>

    <page photo="yes" show="yes" action="akt" domain="firstone">
        <data lang="pl" url="akt-meski" title="akt męski" desc="Męskie ciało jest piękne"/>
        <data lang="en" url="male-nude" title="male nude" desc="Male body is beautiful"/>
    </page>

    <page photo="yes" show="yes" action="razem" domain="firstone">

        <data lang="pl" url="byc-razem" title="być razem" desc="Zdjęcia dla Ciebie i twego partnera lub partnerki"/>
        <data lang="en" url="to-be-together" title="to be together" desc="Affordable photos for you and your partner"/>
    </page>

    <page photo="yes" show="yes" action="projekty" domain="firstone">

        <data lang="pl" url="projekty" title="projekty" desc="Jako fotograf uczestniczył w wielu akcjach społecznych i kulturalnych..."/>
        <data lang="en" url="projects" title="projects" desc="He took part in key Polish LGBT projects, such as..."/>
    </page>

    <page photo="no" show="yes" action="oferta" domain="firstone">

        <data lang="pl" url="oferta" title="oferta" desc="Moja oferta dla Ciebie">
            <![CDATA[
                <p>...w przygotowaniu.</p>
            ]]>
        </data>
        <data lang="en" url="an-offer" title="an offer" desc="My offer for you">
            <![CDATA[
                <p>...in preperation.</p>
            ]]>
        </data>
    </page>

    <page photo="no" show="yes" action="o-mnie" domain="firstone">

        <data lang="pl" url="o-autorze" title="o autorze" desc="Radosław Cetra (ur. 1974) – fotograf, miłośnik animacji i komiksu...">
            <![CDATA[
            <div class="info_foto">
                <img src="/img/portret.jpg" height="400" width="266" title="Autoportret" alt="Autoportret"/>
            </div>
            <div class="tekst">
                <p>Radosław Cetra (ur. 1974) – fotograf, miłośnik animacji i komiksu. Od 2011 programista <span class="nowrap">w firmie BDK</span>, wcześniej przez sześć lat w Grupie Wydawniczej INFOR.</p>
                <p>Po studiach informatycznych na <a href="http://www.wi.pb.edu.pl/">Politechnice Białostockiej</a> rozpoczął naukę <span class="nowrap">w <a href="http://wsfoto.art.pl">Warszawskiej Szkole Fotografii</a>.</span> Jako fotograf uczestniczył w wielu akcjach społecznych i kulturalnych, <span class="nowrap">m.in. <a href="http://www.miloscniewyklucza.pl/">Miłość nie wyklucza</a></span> oraz <a href="http://www.przeciwdzialajdyskryminacji.pl">Przeciwdziałaj Dyskryminacji</a>. Jego zdjęcia ilustrowały <span class="nowrap">m.in. przewodniki po</span> gejowskich miejscach w stolicy <a href="http://www.literatura.gildia.pl/tworcy/krzysztof_zablocki/queerwarsaw">Queer Warsaw</a> i <a href="http://bearbook.pl/index/detail/pid/299">HomoWarszawa</a>, <span class="nowrap">oraz kompendium</span> polskiej gejowskiej sztuki współczesnej <a href="http://bearbook.pl/index/detail/pid/459">Art Pride – gay art from Poland</a>.  <span class="nowrap">W latach 2008-2011</span> współpracował z wydawnictwem <a href="http://abiekt.pl">Abiekt.pl</a>.</p>
                <p>W 2011 jego zdjęcia można było również oglądać w ramach ogólnopolskiej <span class="nowrap">akcji <a href="http://nieczytasz.pl/">Nie czytasz? Nie idę z Tobą do łóżka!</a></span></p>
                <p>Od 2010 akty jego autorstwa budują nastrój w warszawskim klubie <a href="http://www.lodidodi.pl/pl">Lodi Dodi</a>.</p>
            </div>
        ]]>
        </data>
        <data lang="en" url="about" title="about" desc="Radoslaw Cetra was born in 1974...">
            <![CDATA[
            <div class="info_foto">
                <img src="/img/portret.jpg" height="400" width="266" title="Seflportrait" alt="Seflportrait"/>
            </div>
            <div class="tekst">
                <p>Radoslaw Cetra was born in 1974, studied computer science in <a href="http://www.wi.pb.edu.pl/en/">Bialystok University of Technology</a> and photography in <a href="http://wsfoto.art.pl">Warsaw School of Photography</a>. Between 2005 and 2011 he worked for Grupa Wydawnicza INFOR. Since 2011, employed as a programmer in BDK.</p>
                <p>Freelance photographer since 2006. He took part in key Polish LGBT projects, such as <a href="http://www.miloscniewyklucza.pl/about-the-campaign-love-does-not-exclude.php">Love Does Not Exclude</a> and <a href="http://www.przeciwdzialajdyskryminacji.pl">Przeciwdzialaj Dyskryminacji</a>. He was in charge of the graphic aspects of (His photos illustrated) the book <a href="http://www.literatura.gildia.pl/tworcy/krzysztof_zablocki/queerwarsaw">Queer Warsaw</a> – historical and cultural guide to Warsaw, and were collected in the book <a href="http://www.culture.pl/web/english/resources-visual-arts-full-page/-/eo_event_asset_publisher/eAN5/content/pawel-leszkowicz-art-pride-gay-art-from-poland">Art Pride – gay art from Poland</a>. Between 2008 and 2011, he collaborated with the publishing company <a href="http://abiekt.pl">Abiekt.pl</a>.</p>
                <p>In 2011 his works were shown as a part of the PSA campaign <a href="http://nieczytasz.pl/">Nie czytasz? Nie ide z Toba do lozka!</a></p>
                <p>His artistic creations are displayed in the LGBT club <a href="http://www.lodidodi.pl/en">Lodi Dodi</a>.</p>
            </div>
        ]]>

        </data>
    </page>

    <page photo="no" show="no" action="404" domain="firstone">

        <data lang="pl" url="404" title="Ten adres jest niepoprawny" desc="Ten adres jest niepoprawny">
            <![CDATA[
                <p>Za chwilę zostaniesz przeniesiony na stronę główną.</p>
            ]]>
        </data>
        <data lang="en" url="404" title="This address is not valid" desc="This address is not valid">
            <![CDATA[
                <p>In a moment you will be transferred to the main page.</p>
            ]]>
        </data>
    </page>

    <page photo="no" show="no" action="start" domain="firstone">

        <data lang="pl" url="start" title="Start" about="start" desc="Portret, akt męski, fotografia dla Ciebie"/>
        <data lang="en" url="start" title="Start" about="start" desc="Portrait, male nude, photography for you"/>
    </page>

</pages>`;
    //endregion

    const pagesObj = x2js.xml_str2json(xmlString);

    return {
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
          if(page._domain === domainName) {
            page._domain = newName;
          }
        });
        console.log(pagesObj.pages.page);

      },
      movePageUp() {

      }
    }
  }]);