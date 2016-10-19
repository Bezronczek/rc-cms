angular
.module('photoDetail')
.component('photoDetail', {
  bindings: {
    photo: '=',
    files: '=',
    close: '&',
    dismiss: '&',
    resolve: "="
  },
  templateUrl: 'photo-detail/photo-detail.template.html',
  controller: [function(){
    console.log(this.photo);
    console.log(this.files);
    console.log(this.resolve);
  }]
});