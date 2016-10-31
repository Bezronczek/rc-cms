angular
  .module('xmlLoader')
  .component('xmlLoader', {
    templateUrl: '/xml-loader/xml-loader.template.html',
    controller: ['Domain', 'Page', 'Group', 'Photo', 'File', 'x2js', 'lodash', '$state',
      function (Domain, Page, Group, Photo, File, x2js, _) {
        const self = this;

        self.loadedFiles = [];

        const handlers = {
          "domains": Domain.setDomainsObject,
          "pages": Page.setPagesObject,
          "groups": Group.setGroupsObject,
          "photos": Photo.setPhotosObject,
          "files": File.setFilesObject
        };

        self.parseXMLFile = function (files) {
          for (let file of files) {
            if(file.type !== "text/xml") continue;

            const reader = new FileReader();

            reader.onload = (function (file) {
              return function (event) {
                const xmlString = event.target.result;
                const parsedObj = x2js.xml_str2json(xmlString);
                const rootName = _.keys(parsedObj)[0];

                console.log('Handler');
                handlers[rootName](parsedObj).then(() => {
                  self.loadedFiles.push(file.name);
                });
              }

            })(file);

            reader.readAsText(file);
          }
        };

        self.closeAlert = function (index) {
          self.loadedFiles.splice(index, 1);
        };

        self.exportDomains = function () {
          saveAs(Domain.exportToXML(), 'domains.xml');
        };

        self.exportPages = function () {
          saveAs(Page.exportToXML(), 'pages.xml');
        };

        self.exportGroups = function () {
          saveAs(Group.exportToXML(), 'groups.xml');
        };

        self.exportPhotos = function () {
          saveAs(Photo.exportToXML(), 'photos.xml');
        };

        self.exportFiles = function () {
          saveAs(File.exportToXML(), 'files.xml');
        };

        self.clearLocalStorage = function () {
          localStorage.clear();
        };

        self.clearAppData = function() {
          localStorage.clear();
          Domain.clear();
          Page.clear();
          Group.clear();
          Photo.clear();
          File.clear();
        }
      }]
  });