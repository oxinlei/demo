webpackJsonp([1],{"+f7x":function(t,e){},4693:function(t,e){},"6c1g":function(t,e){},Co8Q:function(t,e){},D4Yk:function(t,e){},"J+O6":function(t,e){},L9mk:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop"},[s("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"pop-box"},[s("header",[t._v("\n      "+t._s(t.title)+"\n      "),s("i",{staticClass:"iconfont icon-guanbi",on:{click:function(e){return t.closePop()}}})]),t._v(" "),s("div",{staticClass:"pop-main"})])])},staticRenderFns:[]};var a=s("VU/8")({name:"PopUp",props:["title"],methods:{closePop:function(){this.$emit("closePop")}}},n,!1,function(t){s("VL5E")},"data-v-7d5c275c",null).exports,o={name:"App",components:{PopUp:a},data:function(){return{menus:[{id:"001",name:"button",icon:"icon-anniu"},{id:"002",name:"box",icon:"icon-checkbox-weixuan"},{id:"003",name:"ShowCon",icon:"icon-16gl-S"},{id:"004",name:"TabControl",icon:"icon-doufukuai"},{id:"005",name:"ColorText",icon:"icon-wenzi"},{id:"006",name:"EditorForm",icon:"icon-biaodanzujian-xialakuang"},{id:"007",name:"Test",icon:"icon-ceshi"},{id:"008",name:"UploadFiles",icon:"icon-yunshangchuan_o"}],isHide:!1}},methods:{toggle:function(){this.isHide=!this.isHide;var t=document.querySelector("nav"),e=document.querySelector(".view");this.isHide?(t.className="hide",e.className="view viewmini"):(t.className="",e.className="view")}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",[s("div",{staticClass:"sidebar-icon",on:{click:t.toggle}},[s("i",{staticClass:"iconfont icon-shousuo"})]),t._v(" "),t._l(t.menus,function(e,i){return s("router-link",{key:i,staticClass:"nav-item",attrs:{"active-class":"active",tag:"span",to:{path:e.name}}},[s("a",[s("i",{class:["iconfont",e.icon]}),t._v(" "),s("b",[t._v("\n            "+t._s(e.name)+"\n          ")])])])})],2),t._v(" "),s("div",{staticClass:"view"},[s("div",{staticClass:"view-width"},[s("router-view")],1)])])},staticRenderFns:[]};var l=s("VU/8")(o,r,!1,function(t){s("wCEC")},null,null).exports,c=s("/ocq"),u={name:"Button",components:{PopUp:a},data:function(){return{}},methods:{clickPopUpShow:function(){var t=this.$refs.PopUp.$el;t.style.display="flex",setTimeout(function(){t.className="pop show"},500)},closePop:function(){var t=this.$refs.PopUp.$el;t.className="pop hide",setTimeout(function(){t.style.display="none"},800)},focusInput:function(t){t.currentTarget.previousElementSibling.className="move",t.target.style.borderBottom="1px solid #42A7FF"},blurInput:function(t){console.log(t.target.value),t.currentTarget.previousElementSibling.className="",t.target.style.borderBottom="",""!=t.target.value&&(t.currentTarget.previousElementSibling.className="move")},tipShow:function(t){var e=this.$refs.tipBox;e.className="tip-box show";var s=t.target.offsetTop,i=t.target.offsetLeft,n=t.target.clientWidth,a=t.target.clientHeight,o=e.clientWidth,r=e.clientHeight,l=(o-n)/2,c=i-o,u=a+20;i>l&&i>c?e.style.left=-l+"px":i<l?e.style.left="0px":i>=c&&(e.style.left=-(o-n)+"px"),s<r?(e.style.top=a+20+"px",e.style.bottom="",e.className="tip-box show show-bottom"):s>r&&(e.style.top="",e.style.bottom=u+"px",e.className="tip-box show show-top")},tipHide:function(){this.$refs.tipBox.className="tip-box"}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"login"},[s("form",{attrs:{action:"#"}},[s("h2",[t._v("可移动窗口")]),t._v(" "),s("div",{staticClass:"item"},[s("label",{attrs:{for:"username"}},[t._v("获取焦点时文字上移")]),t._v(" "),s("input",{attrs:{type:"text",name:"username",id:"username",placeholder:""},on:{focus:function(e){return t.focusInput(e)},blur:function(e){return t.blurInput(e)}}})]),t._v(" "),s("div",{staticClass:"item"},[s("label",{attrs:{for:"password"}},[t._v("获取焦点时文字上移")]),t._v(" "),s("input",{attrs:{type:"text",name:"password",id:"password",placeholder:""},on:{focus:function(e){return t.focusInput(e)},blur:function(e){return t.blurInput(e)}}})]),t._v(" "),s("button",{staticClass:"login-btn"},[t._v("登录")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"blur-btn-box"},[s("div",{staticClass:"blur-btn",on:{click:t.clickPopUpShow}},[s("a",{attrs:{href:"#"}},[t._v("点击出现弹窗")])]),t._v(" "),s("div",{staticClass:"blur-btn",on:{click:t.clickPopUpShow}},[s("a",{attrs:{href:"#"}},[t._v("read More")]),t._v("点击出现侧边栏")]),t._v(" "),t._m(5)]),t._v(" "),s("div"),t._v(" "),s("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"big-btn",on:{mouseover:function(e){return t.tipShow(e)},mouseleave:function(e){return t.tipHide(e)}}},[t._v("\n    鼠标经过显示提示窗口\n    "),s("div",{ref:"tipBox",staticClass:"tip-box"})]),t._v(" "),s("PopUp",{ref:"PopUp",attrs:{title:"弹窗"},on:{closePop:t.closePop}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"change-all-btn"},[e("span",[this._v("鼠标经过试试-背景色+边框+阴影+文字")]),this._v(" "),e("em")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"bj-change-btn m20"},[this._v("背景色渐变按钮")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"filter-btn"},[this._v("鼠标经过试试-毛玻璃")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filter-img"},[e("p",[this._v("鼠标经过图片-毛玻璃")]),this._v(" "),e("img",{attrs:{src:s("kOq+")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"mouseover-bj-change-btn"},[this._v("鼠标经过-背景渐变")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blur-btn"},[e("a",{attrs:{href:"#"}},[this._v("read More")])])}]};var m=s("VU/8")(u,v,!1,function(t){s("PgjZ")},"data-v-039ac2ed",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-a"},[s("header",[t.list.minTitle?s("p",[t._v(t._s(t.list.minTitle))]):t._e(),t._v(" "),s("h2",[t._v(t._s(t.list.title))]),t._v(" "),s("i",{staticClass:"iconfont icon-gengduo-shuxiang",on:{click:function(e){return t.clickMore()}}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.list.isTipShow,expression:"list.isTipShow"}],staticClass:"tips"},[s("ul",t._l(t.list.tipList,function(e){return s("li",[t._v(t._s(e))])}),0)])]),t._v(" "),s("div",{staticClass:"box"},[t.list.textList?s("ul",t._l(t.list.textList,function(e){return s("li",{key:e},[t._v(t._s(e))])}),0):t._e(),t._v(" "),t.list.imgList?s("ol",t._l(t.list.imgList,function(t){return s("li",{key:t.id},[s("img",{attrs:{src:t.url}})])}),0):t._e()]),t._v(" "),t.list.otherList?s("div",{staticClass:"other"},[s("b",[t._v(t._s(t.list.otherList.title))]),t._v(" "),s("span",[t._v(t._s(t.list.otherList.text))]),t._v(" "),t.list.otherList.text?s("em",[s("i",{staticClass:"iconfont icon-guanbi"})]):t._e(),t._v(" "),s("div",{staticClass:"circle"})]):t._e()])},staticRenderFns:[]};var p={name:"Box",components:{BoxA:s("VU/8")({name:"BoxA",props:["list"],data:function(){return{}},methods:{clickMore:function(){this.list.isTipShow=!this.list.isTipShow}}},f,!1,function(t){s("Co8Q")},"data-v-f01de948",null).exports},data:function(){return{first:{title:"Cooling/Hearsjlfjasupply",isTipShow:!1,tipList:["Add New","Edit","Delete"],textList:["Helvetica Neue,Helvetica,","HingFang SC,Hiragino Sans GB,raginoragino  ","Microsoft YaHei,Arial"],imgList:[{id:"001",url:s("iGsB")},{id:"002",url:s("jyhS")},{id:"003",url:s("R+ox")}],otherList:{}},two:{title:"HearsjlfjasupplyCooling",isTipShow:!1,tipList:["Add New","Edit","Delete"],textList:["Helvetica Neue,Helvetica,","HingFang SC,Hiragino Sans GB,raginoragino  "],imgList:[{id:"003",url:s("R+ox")}],otherList:{}},three:{title:"HearsjlfjasupplyCooling",isTipShow:!1,tipList:["Add New","Edit","Delete"],textList:["Helvetica Neue,Helvetica,"],imgList:[{id:"003",url:s("R+ox")}],otherList:{}},four:{minTitle:"minTitle",title:"HearsjlfjasupplyCooling",isTipShow:!1,tipList:["Add New","Edit","Delete"],imgList:[{id:"003",url:s("R+ox")}],otherList:{title:"VIEW",text:"Electic Heat Lockout"}}}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("BoxA",{attrs:{list:this.first}}),this._v(" "),e("BoxA",{attrs:{list:this.two}}),this._v(" "),e("BoxA",{attrs:{list:this.three}}),this._v(" "),e("BoxA",{staticClass:"blue",attrs:{list:this.four}})],1)},staticRenderFns:[]};var h=s("VU/8")(p,d,!1,function(t){s("vf0p")},"data-v-d67c92ce",null).exports,_={name:"ShowCon",mounted:function(){for(var t=document.querySelectorAll("#logo path"),e=0;e<t.length;e++)console.log("第"+e+"个字长度为："+t[e].getTotalLength())}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("svg",{staticClass:"logo",attrs:{id:"logo",width:"460",height:"75",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 458.17 70.7"}},[s("path",{staticClass:"cls-1",attrs:{d:"M96.64,455.8c-6.89,0-12.85-1.6-17.71-4.75a22.72,22.72,0,0,1-9.7-14.14l-.12-.5,15.42-3.49.12.47c1.57,6,5.85,8.95,13.06,8.95,3.45,0,6-.66,7.69-2a5.65,5.65,0,0,0,2.44-4.57,4.64,4.64,0,0,0-2.17-4.12c-1.53-1-4.57-2-9-3-8.53-1.77-14.7-4.23-18.36-7.31s-5.59-7.75-5.59-13.73a20.41,20.41,0,0,1,6.62-15.36c4.39-4.14,10.4-6.24,17.88-6.24,13.25,0,21.89,5.39,25.69,16l.17.48-14.24,4.76-.16-.47c-1.72-5.09-5.28-7.57-10.87-7.57-5.89,0-8.76,1.8-8.76,5.51a4.9,4.9,0,0,0,1.58,3.69c1.08,1,3.63,2,7.58,2.75,6.79,1.37,11.85,2.78,15,4.19a19.66,19.66,0,0,1,8.18,6.93,18.37,18.37,0,0,1,3.34,10.71,21.42,21.42,0,0,1-7.11,16C112.89,453.53,105.84,455.8,96.64,455.8ZM70.33,437.16a21.57,21.57,0,0,0,9.14,13c4.7,3,10.47,4.59,17.17,4.59,8.94,0,15.75-2.18,20.27-6.46a20.42,20.42,0,0,0,6.8-15.26A17.35,17.35,0,0,0,120.55,423a18.64,18.64,0,0,0-7.76-6.59c-3.11-1.38-8.1-2.77-14.82-4.13-4.2-.84-6.84-1.82-8.07-3A5.91,5.91,0,0,1,88,404.81c0-4.32,3.29-6.51,9.76-6.51,5.82,0,9.74,2.62,11.66,7.78L121.75,402c-3.73-9.87-12-14.87-24.57-14.87-7.21,0-13,2-17.19,6a19.4,19.4,0,0,0-6.31,14.63c0,5.67,1.76,10,5.24,13s9.55,5.36,17.91,7.09c4.66,1,7.73,2,9.4,3.11a5.66,5.66,0,0,1,2.61,4.95,6.66,6.66,0,0,1-2.82,5.35c-1.84,1.45-4.63,2.18-8.31,2.18-7.44,0-12.11-3.1-13.9-9.23Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-1",attrs:{d:"M186.38,454.77H170V427.28h-19.8v27.49H133.91V387.12h16.33v26H170v-26h16.34Zm-15.34-1h14.34V388.12H171v26h-21.8v-26H134.91v65.65h14.33V426.28H171Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-1",attrs:{d:"M224.28,455.8c-9.1,0-16.25-3.47-21.24-10.32s-7.46-15.12-7.46-24.75c0-9.8,2.55-18.1,7.57-24.67s12.34-10,21.67-10,16.65,3.59,21.46,10.65a42,42,0,0,1,7.19,24.13c0,9.73-2.5,18.06-7.42,24.76S233.77,455.8,224.28,455.8Zm.54-68.71c-9,0-16,3.22-20.88,9.57s-7.36,14.49-7.36,24.07c0,9.41,2.45,17.55,7.27,24.16s11.66,9.91,20.43,9.91c9.15,0,16.21-3.29,21-9.76s7.23-14.65,7.23-24.17a41,41,0,0,0-7-23.57C240.84,390.53,233.9,387.09,224.82,387.09Zm-.1,56c-8.48,0-12.78-7.44-12.78-22.13s4.3-22.08,12.78-22.08c8.22,0,12.39,7.44,12.39,22.13S232.94,443.05,224.72,443.05Zm0-43.21c-7.82,0-11.78,7.09-11.78,21.08s4,21.13,11.78,21.13c7.56,0,11.39-7.09,11.39-21.08S232.28,399.84,224.72,399.84Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-1",attrs:{d:"M325.39,454.77H309.26L298.7,412.29l-10.19,42.48h-16L255.1,387.12h17l9.28,41.06c0,.15.13.62.53,2.14,0,0,0,.08,0,.13l10.54-43.33h15.18l10.81,43.29c.15-.64.31-1.37.49-2.22l9.55-41.07h13.88l-.16.62Zm-15.35-1h14.57l16.48-65.65h-11.8l-9.36,40.29c-.43,2-.75,3.36-1,4.21l-.5,1.87-11.58-46.37H293.25L282,434.58l-.49-2c-.23-.9-.4-1.58-.53-2-.45-1.7-.53-2.07-.55-2.21l-9.1-40.25H256.39l16.89,65.65h14.44l11-45.7Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-1",attrs:{d:"M374.35,455.8c-8.92,0-16.29-3.13-21.88-9.3s-8.4-14.76-8.4-25.58c0-10.13,2.73-18.55,8.12-25s12.9-9.8,22.26-9.8c16.24,0,25.5,8.84,27.55,26.28l.06.52L384.66,414l0-.52c-.22-9.17-3.66-13.62-10.51-13.62-7.78,0-11.73,7.14-11.73,21.23,0,8.21,1.09,13.84,3.23,16.72a10.37,10.37,0,0,0,8.89,4.26c6.24,0,10-4,11.35-12.18l.08-.44,16.11,1-.06.53c-1,8.07-4.05,14.3-9.09,18.51A28.08,28.08,0,0,1,374.35,455.8Zm.1-68.71c-9.05,0-16.28,3.18-21.49,9.44s-7.89,14.5-7.89,24.39c0,10.57,2.74,18.95,8.14,24.91s12.51,9,21.14,9a27.15,27.15,0,0,0,17.92-6.11c4.73-4,7.64-9.79,8.67-17.34l-14.16-.87c-1.54,8.34-5.66,12.57-12.26,12.57a11.43,11.43,0,0,1-9.69-4.67c-2.31-3.09-3.43-8.76-3.43-17.31,0-14.75,4.29-22.23,12.73-22.23,7.27,0,11.14,4.73,11.5,14.08l15.31-1C398.82,395.23,390.15,387.09,374.45,387.09Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-1",attrs:{d:"M435.51,455.8c-9.1,0-16.25-3.47-21.24-10.32s-7.46-15.12-7.46-24.75c0-9.8,2.55-18.1,7.57-24.67s12.34-10,21.67-10,16.65,3.59,21.46,10.65a42,42,0,0,1,7.19,24.13c0,9.73-2.5,18.06-7.42,24.76S445,455.8,435.51,455.8Zm.54-68.71c-9,0-16,3.22-20.88,9.57s-7.36,14.49-7.36,24.07c0,9.41,2.45,17.55,7.27,24.16s11.66,9.91,20.43,9.91c9.15,0,16.21-3.29,21-9.76s7.23-14.65,7.23-24.17a41,41,0,0,0-7-23.57C452.07,390.53,445.13,387.09,436.05,387.09Zm-.1,56c-8.48,0-12.78-7.44-12.78-22.13s4.3-22.08,12.78-22.08c8.22,0,12.39,7.44,12.39,22.13S444.17,443.05,436,443.05Zm0-43.21c-7.82,0-11.78,7.09-11.78,21.08s4,21.13,11.78,21.13c7.56,0,11.39-7.09,11.39-21.08S443.51,399.84,436,399.84Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-1",attrs:{d:"M526.17,454.77H512.06l-25.21-43.52c0,.08,0,.14,0,.2a27,27,0,0,1,.2,2.93v40.39H473.9V387.12h17.62l21.69,37.6c-.07-.9-.1-1.65-.1-2.24V387.12h13.06Zm-13.53-1h12.53V388.12H514.11v34.36c0,1,.1,2.47.29,4.4l.23,2.31-23.69-41.07h-16v65.65h11.16V414.38a27.8,27.8,0,0,0-.19-2.83c0-.37-.07-1.12-.1-2.29l-.06-2Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-2",attrs:{d:"M121.84,401.77l-13.28,4.44q-2.69-7.9-11.35-7.91-9.25,0-9.26,6a5.42,5.42,0,0,0,1.73,4.05q1.74,1.67,7.83,2.88,10.18,2.07,14.92,4.16a19.08,19.08,0,0,1,8,6.76,17.78,17.78,0,0,1,3.25,10.42,20.84,20.84,0,0,1-7,15.63q-6.94,6.59-20.61,6.59-10.24,0-17.44-4.67a22.15,22.15,0,0,1-9.49-13.84L83.61,433q2.43,9.33,13.54,9.32c3.58,0,6.24-.69,8-2.07a6.17,6.17,0,0,0,2.63-5,5.18,5.18,0,0,0-2.39-4.54q-2.4-1.61-9.22-3Q83.45,425.1,78,420.54t-5.41-13.35a19.8,19.8,0,0,1,6.46-15q6.47-6.1,17.54-6.11Q116.23,386.09,121.84,401.77Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-2",attrs:{d:"M185.32,387.12v66.65H170V426.28h-20.8v27.49H133.85V387.12h15.33v26H170v-26Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-2",attrs:{d:"M223.72,454.8q-13.47,0-20.83-10.11t-7.37-24.46q0-14.61,7.47-24.37t21.27-9.77q14,0,21.05,10.43a41.39,41.39,0,0,1,7.1,23.85q0,14.5-7.32,24.46T223.72,454.8Zm.44-56q-12.28,0-12.28,21.58t12.28,21.63q11.9,0,11.89-21.58T224.16,398.84Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-2",attrs:{d:"M341.18,387.12l-16.74,66.65H309.09l-11-44.09-10.57,44.09H272.34l-17.15-66.65h15.93l9.19,40.67c0,.2.21.92.54,2.15.13.46.31,1.14.54,2.05l10.91-44.87h14.4L317.91,432c.23-.84.55-2.24,1-4.2l9.46-40.67Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-2",attrs:{d:"M400.94,411.92l-16.36,1q-.33-14.11-11-14.11-12.24,0-12.24,21.73,0,12.54,3.33,17a10.93,10.93,0,0,0,9.29,4.47q9.69,0,11.84-12.6l15.14.93q-1.47,12-8.91,18.19t-18.24,6.23q-13.23,0-21.51-9.13T344,420.42q0-15.09,8-24.71t21.87-9.62Q397.92,386.09,400.94,411.92Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-2",attrs:{d:"M435,454.8q-13.47,0-20.83-10.11t-7.37-24.46q0-14.61,7.47-24.37t21.27-9.77q14,0,21.05,10.43a41.39,41.39,0,0,1,7.1,23.85q0,14.5-7.32,24.46T435,454.8Zm.44-56q-12.28,0-12.28,21.58t12.28,21.63q11.89,0,11.89-21.58T435.39,398.84Z",transform:"translate(-68.5 -385.59)"}}),t._v(" "),s("path",{staticClass:"cls-2",attrs:{d:"M525.11,387.12v66.65H511.79l-26.08-45q0,1.71.09,2.25a26.3,26.3,0,0,1,.2,2.88v39.89H473.84V387.12h16.83l22.67,39.31c-.19-2-.29-3.44-.29-4.45V387.12Z",transform:"translate(-68.5 -385.59)"}})])])},staticRenderFns:[]};var C=s("VU/8")(_,x,!1,function(t){s("L9mk")},"data-v-fca3f456",null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box"},[s("span"),t._v(" "),s("div",{staticClass:"content"},[s("h2",[t._v("sf sajf a")]),t._v(" "),s("p",[t._v("sfh jshaljkhf jls jhfj hljhf jshjkfhajksfhjshfjshajfhal")]),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("fkdsjfkslj")])])]),t._v(" "),s("div",{staticClass:"box"},[s("span"),t._v(" "),s("div",{staticClass:"content"},[s("h2",[t._v("sf sajf a")]),t._v(" "),s("p",[t._v("sfh jshaljkhf jls jhfj hljhf jshjkfhajksfhjshfjshajfhal")]),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("fkdsjfkslj")])])]),t._v(" "),s("div",{staticClass:"box"},[s("span"),t._v(" "),s("div",{staticClass:"content"},[s("h2",[t._v("sf sajf a")]),t._v(" "),s("p",[t._v("sfh jshaljkhf jls jhfj hljhf jshjkfhajksfhjshfjshajfhal")]),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("fkdsjfkslj")])])])])}]};var b=s("VU/8")({name:"TabControl"},g,!1,function(t){s("cvzA")},"data-v-1357c898",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"color-text"},[e("h3",[this._v("SHOWCON")])])}]};var k=s("VU/8")({name:"ColorText"},w,!1,function(t){s("kC1M")},"data-v-43b510d9",null).exports,y={name:"InputText",props:["form","timeCost"],methods:{lockInput:function(){this.form.isLockInput=!1,this.form.isUnlockInput=!0;var t=this.$refs.input;t.disabled=!0,t.style.borderBottom="2px solid #EBEBEB"},unlockInput:function(){this.form.isLockInput=!0,this.form.isUnlockInput=!1;var t=this.$refs.input;t.disabled=!1,""==t.value&&(t.target.style.borderBottom="2px solid #EBEBEB")},focusInput:function(t){t.currentTarget.previousElementSibling.className="move",t.target.style.borderBottom="1px solid #42A7FF"},blurInput:function(t){t.currentTarget.previousElementSibling.className="",t.target.style.borderBottom="",""!=t.target.value?(t.currentTarget.previousElementSibling.className="move",t.target.style.borderBottom="2px solid #F89E81"):t.target.style.borderBottom="2px solid #EBEBEB"},showAlarmBox:function(t){var e=this.$refs.alarm,s=this.$refs.alarmBox;s.style.display="block",document.onmousemove=function(t){s.style.left=t.pageX-e.getBoundingClientRect().left+"px"}},hideAlarmBox:function(){this.$refs.alarmBox.style.display="none"}},mounted:function(){var t=this.$refs.input,e=this.$refs.label;1==t.disabled?t.style.borderBottom="2px solid #EBEBEB":t.style.borderBottom="2px solid #F89E81",""!=t.value?e.className="move":t.style.borderBottom="2px solid #EBEBEB"}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"form-item-box"},[s("label",{ref:"label",attrs:{for:t.form.title}},[t._v(t._s(t.form.title))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.value,expression:"form.value"}],ref:"input",attrs:{id:t.form.title,type:"text",name:"firstname",disabled:t.form.isUnlockInput,s:""},domProps:{value:t.form.value},on:{focus:function(e){return t.focusInput(e)},blur:function(e){return t.blurInput(e)},input:function(e){e.target.composing||t.$set(t.form,"value",e.target.value)}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.form.isLockInput,expression:"form.isLockInput"}],staticClass:"iconfont icon-jiesuo",on:{click:function(e){return t.lockInput()}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:!t.form.isLockInput,expression:"!form.isLockInput"}],staticClass:"iconfont icon-suoding",on:{click:function(e){return t.unlockInput()}}}),t._v(" "),t.timeCost?s("div",{staticClass:"time-cost"},[t._v("\n      "+t._s(t.timeCost)+"年\n    ")]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.form.alarm,expression:"form.alarm"}],ref:"alarm",staticClass:"alarm",on:{mouseover:function(e){return t.showAlarmBox(e)},mouseleave:function(e){return t.hideAlarmBox(e)}}},[s("span",[t._v(t._s(t.form.alarm))]),t._v(" "),s("b",[t._v(t._s(t.form.alarmText))]),t._v(" "),s("div",{ref:"alarmBox",staticClass:"alarm-box"},[s("h5",[t._v("财务类>违约金>违约比例")]),t._v(" "),s("p",[t._v("信用违约风险是指在商业交易中由于交易一方的违约，使交易另一方得到的预期现金流量现值减少而遭受的风险。")]),t._v(" "),s("strong",[t._v("参考")]),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("span",[t._v("<5%em")]),t._v(" "),s("em",[t._v("正常")])]),t._v(" "),s("li",[s("span",[t._v("5%~15%")]),t._v(" "),s("em",[t._v("正常")])]),t._v(" "),s("li",[s("span",[t._v(">15%")]),t._v(" "),s("em",[t._v("正常")])])])}]};var E={name:"InputSelect",props:["form"],data:function(){return{isActive:!1,isInputActive:!1}},methods:{dropDown:function(){console.log("dropDown"),this.isInputActive=!1,this.isActive=!this.isActive;var t=this.$refs.input;console.log("dropDown",t.placeholder,t.value)},showDropDown:function(t){console.log("showDropDown");var e=this.$refs.input,s=document.querySelector(".dropdown");e.value!=this.form.title&&(this.$refs.label.className="move");e.placeholder==this.form.title&&(e.value=t,s.className="dropdown"),this.isInputActive=!0,this.isActive=!1}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-box"},[s("div",{staticClass:"dropdown",class:{arrows:t.isActive,active:t.isInputActive}},[s("label",{ref:"label",attrs:{for:t.form.title}},[t._v(t._s(t.form.title))]),t._v(" "),s("p",[t._v("\n      fsjfljaflj;fjsa;l\n      fsjfljaflj;fjsa;l\n    ")]),t._v(" "),s("input",{ref:"input",staticClass:"textBox",attrs:{id:t.form.title,type:"text",placeholder:t.form.title,readonly:""},on:{click:function(e){return t.dropDown()}}}),t._v(" "),s("div",{staticClass:"option"},t._l(t.form.value,function(e,i){return s("div",{key:i,on:{click:function(s){return t.showDropDown(e)}}},[t._v(t._s(e))])}),0)])])},staticRenderFns:[]};var T={name:"ContractMain",props:["main"],data:function(){return{isActive:!1}},methods:{clickContractMain:function(){this.isActive=!this.isActive},addOrientation:function(){var t=this.$refs.orientationBoxUl,e=document.createElement("li");t.appendChild(e),e.innerHTML="此次的质量标准为<span>标准</span>"}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contract-main-box",on:{click:t.clickContractMain}},[s("div",{staticClass:"main-box",class:{active:t.isActive}},[s("h5",[t._v(t._s(t.main.title))]),t._v(" "),s("ul",{staticClass:"main-box-ul"},t._l(t.main.value,function(e){return s("li",{key:e},[t._v(t._s(e))])}),0),t._v(" "),s("div",{staticClass:"orientation-box"},[t._m(0),t._v(" "),s("ul",{ref:"orientationBoxUl",staticClass:"orientation-box-ul"},[t._m(1),t._v(" "),t._m(2)]),t._v(" "),s("div",{staticClass:"button-box"},[s("b",[t._v("框选文本中需定位的地方，点击增加定位")]),t._v(" "),s("button",{on:{click:[function(t){t.stopPropagation()},t.addOrientation]}},[t._v("增加定位")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[this._v("公司库"),e("span",[this._v("定位")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("决定的质量标准为"),e("span",[this._v("标准")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("此次的质量标准为"),e("span",[this._v("标准")]),this._v("，如果违反")])}]};var L={name:"Form",components:{Input:s("VU/8")(y,j,!1,function(t){s("spJZ")},"data-v-630a1221",null).exports,InputSelect:s("VU/8")(E,B,!1,function(t){s("Z/5z")},"data-v-aabd2296",null).exports,ContractMain:s("VU/8")(T,I,!1,function(t){s("4693"),s("6c1g")},"data-v-509a7e79",null).exports},data:function(){return{comeTimeValue:"2022-01-18",offTimeValue:"2025-01-18",form:{total:{title:"总收入",value:"290,000元",isLockInput:!0,isUnlockInput:!1},comeTime:{title:"生效时间",value:"2022-01-18",isLockInput:!1,isUnlockInput:!0},offTime:{title:"截止时间",value:"2025-01-18",isLockInput:!1,isUnlockInput:!0},purchaseNum:{title:"采购数量",value:"290,000元",isLockInput:!0,isUnlockInput:!1},afterTheStandard:{title:"售后标准",value:"优质",isLockInput:!0,isUnlockInput:!1},defaultRate:{title:"违约比例",value:"25%",isLockInput:!0,isUnlockInput:!1,alarm:"风险警报",alarmText:"违约比例操作正常值"},qualityStandard:{title:"质量标准",value:["标准1","标准2","标准3"]},typeOfPayment:{title:"支付类型",value:["支付宝","微信","云闪付"]},typeOfPayment1:{title:"支付类型1",value:["支付宝1","微信1","云闪付1"]}},main:{firstParty:{title:"甲方",value:["靠窗网络科技有限公司"]},secondParty:{title:"乙方",value:["靠墙网络科技有限公司","靠门网络科技有限公司"]},thirdParty:{title:"丙方",value:["靠边网络科技有限公司"]}}}},computed:{timeCost:function(){var t=this.form.comeTime.value,e=this.form.offTime.value;t=t.replace(/-/g,"/"),e=e.replace(/-/g,"/"),console.log(t,e);var s=new Date(t).getTime(),i=new Date(e).getTime();console.log(s,i);return console.log(i-s),3}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-box"},[s("h5",[t._v("基本信息")]),t._v(" "),s("form",{attrs:{action:""}},[s("Input",{staticClass:"form-item",attrs:{form:t.form.total}}),t._v(" "),s("Input",{staticClass:"form-item",attrs:{form:t.form.comeTime}}),t._v(" "),s("Input",{staticClass:"form-item",attrs:{form:t.form.offTime,timeCost:t.timeCost}}),t._v(" "),s("Input",{staticClass:"form-item",attrs:{form:t.form.purchaseNum}}),t._v(" "),s("Input",{staticClass:"form-item",attrs:{form:t.form.afterTheStandard}}),t._v(" "),s("Input",{staticClass:"form-item",attrs:{form:t.form.defaultRate}}),t._v(" "),s("InputSelect",{staticClass:"form-item",attrs:{form:t.form.qualityStandard}}),t._v(" "),s("InputSelect",{staticClass:"form-item",attrs:{form:t.form.typeOfPayment}}),t._v(" "),s("InputSelect",{staticClass:"form-item",attrs:{form:t.form.typeOfPayment1}})],1),t._v(" "),s("h5",{staticStyle:{"margin-top":"80px"}},[t._v("合同主体")]),t._v(" "),s("div",{staticClass:"contract-main"},[s("ContractMain",{attrs:{main:t.main.firstParty}}),t._v(" "),s("ContractMain",{attrs:{main:t.main.secondParty}}),t._v(" "),s("ContractMain",{attrs:{main:t.main.thirdParty}})],1),t._v(" "),s("h5",{staticStyle:{"margin-top":"30px"}},[t._v("扩展字段")])])},staticRenderFns:[]};var H=s("VU/8")(L,S,!1,function(t){s("X47o")},"data-v-749899e4",null).exports,$={name:"Editor",components:{VueEditor:s("+qPk").a},data:function(){return{content:"<h1>Some initial content</h1>"}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vue-editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},staticRenderFns:[]};var N={name:"EditorForm",components:{Form:H,Editor:s("VU/8")($,A,!1,function(t){s("+f7x")},null,null).exports}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor-form"},[e("Editor"),this._v(" "),e("Form")],1)},staticRenderFns:[]};var q=s("VU/8")(N,U,!1,function(t){s("J+O6")},"data-v-2f11da37",null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"left"}),this._v(" "),e("div",{staticClass:"right"})])}]};var V=s("VU/8")({name:"Test"},F,!1,function(t){s("dXct")},"data-v-6278002c",null).exports,Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"upload-box"},[e("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[e("div",{staticClass:"text"},[e("p",[this._v("拖拽文件到此处或"),e("b",[this._v("点击上传")])]),this._v(" "),e("span",[this._v("最大10MB，支持jpg,png,doc,pdf")])])])],1)},staticRenderFns:[]};var M=s("VU/8")({name:"UploadFiles"},Z,!1,function(t){s("D4Yk"),s("kINh")},"data-v-7c7bc93e",null).exports;i.default.use(c.a);var P=new c.a({routes:[{path:"/Button",name:"Button",component:m},{path:"/Box",name:"Box",component:h},{path:"/ShowCon",name:"ShowCon",component:C},{path:"/TabControl",name:"TabControl",component:b},{path:"/ColorText",name:"ColorText",component:k},{path:"/EditorForm",name:"EditorForm",component:q},{path:"/Test",name:"Test",component:V},{path:"/UploadFiles",name:"UploadFiles",component:M}]});s("yh13"),s("mQA3");i.default.directive("drag",{bind:function(t){var e=t;e.style.position="fixed",e.style.zIndex="1",e.style.cursor="move",e.onmousedown=function(s){var i=s.clientX-e.offsetLeft,n=s.clientY-e.offsetTop;document.onmousemove=function(s){var a=s.clientX-i,o=s.clientY-n,r=t.offsetWidth,l=t.clientHeight,c=document.body.clientWidth-r,u=document.body.clientHeight-l;e.style.left=a+"px",e.style.top=o+"px",a<0&&(e.style.left="0px"),o<0&&(e.style.top="0px"),a>c&&(e.style.left=c+"px"),o>u&&(e.style.top=u+"px")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}});var R=s("zL8q"),D=s.n(R);s("tvR6");i.default.use(D.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:P,components:{App:l},template:"<App/>"})},PgjZ:function(t,e){},"R+ox":function(t,e,s){t.exports=s.p+"static/img/tx2.5592eb3.jpg"},VL5E:function(t,e){},X47o:function(t,e){},"Z/5z":function(t,e){},cvzA:function(t,e){},dXct:function(t,e){},iGsB:function(t,e,s){t.exports=s.p+"static/img/tx.137b0c1.jpg"},jyhS:function(t,e,s){t.exports=s.p+"static/img/tx1.7d5444e.jpg"},kC1M:function(t,e){},kINh:function(t,e){},"kOq+":function(t,e,s){t.exports=s.p+"static/img/m.d3748c2.jpg"},mQA3:function(t,e){},spJZ:function(t,e){},tvR6:function(t,e){},vf0p:function(t,e){},wCEC:function(t,e){},yh13:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c508ecd7256cea11eabf.js.map