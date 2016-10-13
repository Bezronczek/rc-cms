angular
.module('core.domain')
.factory('Domain', ['lodash', function(lodash) {

  const domains = [
    {
      name: "firstone",
      pages: [
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
      ]
    },
    {
      name: "someother",
      pages: []
    },
    {
      name: "unpublished",
      pages: []
    }
  ];

  return {
    list() {
      return domains;
    },

    loadPages(name) {
      const domainIndex = lodash.findIndex(domains, {
        name: name
      });

      return domains[domainIndex].pages;
    },

    add(name) {
      domains.push({
        name: name
      })
    },

    remove(name) {
      console.log(name);
      lodash.remove(domains, {
        name: name
      })
    }
  }
}]);