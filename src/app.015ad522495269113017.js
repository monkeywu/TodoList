webpackJsonp([1],{"1g02":function(t,e){},"6whG":function(t,e){},"9+JB":function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),i=o("Dd8w"),s=o.n(i),n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("div",{staticClass:"container"},t._l(t.links,function(e,a){return o("div",{staticClass:"link",class:{active:a==t.active},on:{click:function(e){t.toggle(a)}}},[t._v("\n            "+t._s(e)+"\n        ")])}))])},staticRenderFns:[]};var c=o("VU/8")({data:function(){return{active:0,links:["All","Todo","Completed"]}},methods:{toggle:function(t){this.active=t}}},n,!1,function(t){o("6whG")},"data-v-8e4902b8",null).exports,d=o("NYxO"),l={data:function(){return{showTodo:!0,time:"",date:"",textContent:"",title:""}},methods:s()({},Object(d.b)(["setTodo"]),{clear:function(){this.time="",this.date="",this.textContent="",this.title="",this.showTodo=!this.showTodo}})},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrap"},[t.showTodo?o("input",{staticClass:"add",attrs:{type:"text",placeholder:"＋ Add Task"},on:{click:function(e){t.showTodo=!t.showTodo}}}):o("div",{staticClass:"newTodoBox"},[o("div",{staticClass:"newTodoHeader"},[o("input",{staticClass:"check",attrs:{type:"checkbox"}}),t._v(" "),o("div",{staticStyle:{flex:"1"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"headertodo",attrs:{type:"text",placeholder:"Type Something Here…"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),o("i",{staticClass:"far fa-star"}),t._v(" "),o("i",{staticClass:"far fa-edit"})]),t._v(" "),o("hr",{staticStyle:{border:"2px solid #C8C8C8",margin:"0"}}),t._v(" "),o("div",{staticClass:"todoContent"},[o("ul",[o("li",[t._m(0),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"time"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})])]),t._v(" "),o("li",[t._m(1),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textContent,expression:"textContent"}],attrs:{placeholder:"add some comment..."},domProps:{value:t.textContent},on:{input:function(e){e.target.composing||(t.textContent=e.target.value)}}})])])])]),t._v(" "),o("div",{staticClass:"TodoFooter"},[o("div",{staticClass:"cancel",on:{click:function(e){t.showTodo=!t.showTodo}}},[t._v("\n                X Cancle\n            ")]),t._v(" "),o("div",{staticClass:"addtodo",on:{click:function(e){t.setTodo({title:t.title,date:t.date,time:t.time,textContent:t.textContent}),t.clear()}}},[t._v("\n                + Add Task\n            ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"far fa-calendar-alt"}),this._v(" "),e("span",[this._v("DeadLine")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"far fa-comment-dots"}),this._v(" "),e("span",[this._v("Comment")])])}]};var v=o("VU/8")(l,r,!1,function(t){o("1g02")},"data-v-6edc52f5",null).exports,u={props:["todo","idx"],data:function(){return{show:!1}},methods:s()({a:function(t){console.log(t)}},Object(d.b)(["remove"]))},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("ul",[o("li",{staticStyle:{padding:"30px 20px"}},[o("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[o("input",{attrs:{type:"checkbox"}}),t._v(" "),t.show?o("input",{staticClass:"title",attrs:{type:"text"},domProps:{value:t.todo.title}}):o("label",{staticClass:"title"},[t._v(t._s(t.todo.title))]),t._v(" "),o("i",{staticClass:"far fa-star"}),t._v(" "),o("i",{staticClass:"far fa-edit",on:{click:function(e){t.show=!t.show}}}),t._v(" "),o("i",{staticClass:"fas fa-times",on:{click:function(e){t.remove(t.idx)}}})]),t._v(" "),t.show?o("div",[o("hr",{staticStyle:{border:"2px solid #C8C8C8",margin:"0"}}),t._v(" "),o("div",{staticClass:"todoContent"},[o("ul",[o("li",[t._m(0),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("input",{attrs:{type:"date"},domProps:{value:t.todo.date}}),t._v(" "),o("input",{attrs:{type:"time"},domProps:{value:t.todo.time}})])]),t._v(" "),o("li",[t._m(1),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("textarea",{attrs:{placeholder:"add some comment..."},domProps:{value:t.todo.textContent}})])])])]),t._v(" "),o("div",{staticClass:"TodoFooter"},[o("div",{staticClass:"cancel",on:{click:function(e){t.show=!t.show}}},[t._v("\n                        X Cancle\n                    ")]),t._v(" "),o("div",{staticClass:"addtodo",on:{click:function(e){t.a(t.todo)}}},[t._v("\n                        + Save\n                    ")])])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"far fa-calendar-alt"}),this._v(" "),e("span",[this._v("DeadLine")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"far fa-comment-dots"}),this._v(" "),e("span",[this._v("Comment")])])}]};var p={components:{Header:c,NewTodo:v,Todo:o("VU/8")(u,m,!1,function(t){o("oxkd")},"data-v-2d8b19e6",null).exports},computed:s()({},Object(d.c)(["todos"]))},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"background-color":"#e1e1e1","min-height":"100vh"}},[e("Header"),this._v(" "),e("NewTodo"),this._v(" "),this._l(this.todos,function(t,o){return e("Todo",{attrs:{idx:o,todo:t}})})],2)},staticRenderFns:[]};var h=o("VU/8")(p,f,!1,function(t){o("9+JB")},null,null).exports;a.a.use(d.a);var _=new d.a.Store({state:{todos:[]},mutations:{setTodo:function(t,e){t.todos.push(e)},remove:function(t,e){t.todos.splice(e,1)}}});a.a.config.productionTip=!1,new a.a({el:"#app",store:_,components:{App:h},template:"<App/>"})},oxkd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.015ad522495269113017.js.map