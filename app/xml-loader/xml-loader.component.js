angular
  .module('xmlLoader')
  .component('xmlLoader', {
    templateUrl: '/xml-loader/xml-loader.template.html',
    controller: ['Domain', 'Page', 'Group', 'Photo', 'File', 'x2js', 'lodash', 'Resources',
      function (Domain, Page, Group, Photo, File, x2js, _, Resources) {
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

        //<editor-fold desc="exports">
        self.exportDomains = function () {
          saveAs(Domain.exportToXMLFile(), 'domains.xml');
        };

        self.exportPages = function () {
          saveAs(Page.exportToXMLFile(), 'pages.xml');
        };

        self.exportGroups = function () {
          saveAs(Group.exportToXMLFile(), 'groups.xml');
        };

        self.exportPhotos = function () {
          saveAs(Photo.exportToXMLFile(), 'photos.xml');
        };

        self.exportFiles = function () {
          saveAs(File.exportToXMLFile(), 'files.xml');
        };

        self.clearLocalStorage = function () {
          localStorage.clear();
        };
        //</editor-fold>

        self.clearAppData = function() {
          localStorage.clear();
          Domain.clear();
          Page.clear();
          Group.clear();
          Photo.clear();
          File.clear();
        }

        self.saveFiles = function () {
          Resources.saveFiles();
        };

        self.loadFiles = function () {
          Resources.loadFiles()
            .then(self.loadComplete = true);
        }
      }]
  });