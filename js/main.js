(function(){
  'use strict';

  var likeComponent = Vue.extend({
    // props: ['message'],
    props:{
      message:{ 
        type: String,
        default: 'Like'
      }
    },
    data: function(){
      return{
        count:0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function(){
        this.count++;
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    }
  });
})();
// (function(){
//   'use strict';
//   var vm = new Vue({
//     el: '#app',
//     data:{ 
//       newItem:'',
//       todos:[]
//     },
//     watch:{
//       todos:{ 
//         handler: function(){
//           localStorage.setItem('todos',JSON.stringify(this.todos));
//         },
//       deep: true
//       }
//     },
//     mounted: function(){
//       this.todos = JSON.parse(localStorage.getItem('todos')) || [];
//     },
//     methods: {
//       addItem: function(){
//         var item = { 
//           title: this.newItem,
//           isDone: false
//         };
//         this.todos.push(item);
//         this.newItem ='';
//       },
//       deleteItem: function(index){
//         if(confirm('are you sure?')){
//           this.todos.splice(index,1);
//         }
//       },
//       purge: function(){
//         if(!confirm('delete finished')){
//           return;
//         }
//         // this.todos = this.todos.filter(function(todo){
//         //     return !todo.isDone;
//         this.todos = this.remaining;
//       }
//     },
//     computed: {
//       remaining: function(){
//         // var items = this.todos.filter(function(todo){
//         //   return !todo.isDone;
//         // });
//         return this.todos.filter(function(todo){
//           return !todo.isDone;  
//         });
//       }
//     }
//   });
// })();