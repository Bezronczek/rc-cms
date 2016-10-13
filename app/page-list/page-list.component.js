angular
.module('pageList')
.component('pageList', {
  templateUrl: 'page-list/page-list.template.html',
  controller: ['$scope', 'lodash', function ($scope, lodash) {
    this.pages = [
      {
        action: "razem",
        photo: true,
        show: true,
        groups: [
          {
            name: "jesien",
            position: "gorny",
            languages: [
              {
                lang: "pl",
                url: "portrety",
                title: "Portrety"
              },
              {
                lang: "en",
                url: "portraits",
                title: "Portraits"
              }
            ],
            photos: [
              {
                id: 433,
                languages: [
                  {
                    lang: "pl",
                    title: "Wojtek"
                  },
                  {
                    lang: "en",
                    title: "Wojtek"
                  }
                ],
                data: {
                    id: 433,
                    subdomain: "s3.",
                    gallery_height: 277,
                    gallery_width: 277,
                    gallery_top: 2,
                    gallery_right: 35,
                    files: [
                      {
                        name: "max",
                        path: "/photos/max/433.jpg",
                        width: 796,
                        height:1024
                      },
                      {
                        name: "min",
                        path: "photos/min/433.jpg",
                        width: 255,
                        height: 290
                      },
                      {
                        name: "preview",
                        path: "/photos/preview/433.jpg",
                        width: 69,
                        height: 90
                      }
                    ]
                  }
              },
              {
                id: 433,
                languages: [
                  {
                    lang: "pl",
                    title: "Wojtek"
                  },
                  {
                    lang: "en",
                    title: "Wojtek"
                  }
                ],
                data: {
                  id: 433,
                  subdomain: "s3.",
                  gallery_height: 277,
                  gallery_width: 277,
                  gallery_top: 2,
                  gallery_right: 35,
                  files: [
                    {
                      name: "max",
                      path: "/photos/max/433.jpg",
                      width: 796,
                      height:1024
                    },
                    {
                      name: "min",
                      path: "photos/min/433.jpg",
                      width: 255,
                      height: 290
                    },
                    {
                      name: "preview",
                      path: "/photos/preview/433.jpg",
                      width: 69,
                      height: 90
                    }
                  ]
                }
              },
              {
                id: 433,
                languages: [
                  {
                    lang: "pl",
                    title: "Wojtek"
                  },
                  {
                    lang: "en",
                    title: "Wojtek"
                  }
                ],
                data: {
                  id: 433,
                  subdomain: "s3.",
                  gallery_height: 277,
                  gallery_width: 277,
                  gallery_top: 2,
                  gallery_right: 35,
                  files: [
                    {
                      name: "max",
                      path: "/photos/max/433.jpg",
                      width: 796,
                      height:1024
                    },
                    {
                      name: "min",
                      path: "photos/min/433.jpg",
                      width: 255,
                      height: 290
                    },
                    {
                      name: "preview",
                      path: "/photos/preview/433.jpg",
                      width: 69,
                      height: 90
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      // {
      //   action: "o-mnie",
      //   photo: true,
      //   show: false
      // }
    ];

    this.savePage = function () {
      console.log("asd");
      console.log(this.pages);
    };

    this.addPage = function () {
      this.pages.push({
        action: "",
        photo: true,
        show: false,
        groups: []
      })
    };

    this.addLanguage = function (page, group) {
      const pageIndex = lodash.findIndex(this.pages, page);

      let groupIndex = lodash.findIndex(this.pages[pageIndex].groups, group);
      this.pages[pageIndex].groups[groupIndex].languages.push({
        lang: "",
        url: "",
        title: ""
      });
    }
  }]
});