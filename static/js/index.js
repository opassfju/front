
var vm = null;

$(document).ready(function(){

  app_init();
  console.log('test');
});


function app_init(){
  vm = new Vue({
    el: '#wrapper',
    data: {
      page : 'index',
      data:[],
    },
    created: function () {
    // `this` 指向 vm 实例
    console.log(get_token());
    },
    methods: {
      route:function(page){
        vm.$data.webpage = page;
      },
      outlink:function (link){
        window.open(link, '_blank');
      }
    }
  });
};

