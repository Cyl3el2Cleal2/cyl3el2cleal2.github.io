(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{182:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("1b7833da",content,!0,{sourceMap:!1})},183:function(t,e,n){"use strict";var r=n(182);n.n(r).a},184:function(t,e,n){(e=n(47)(!1)).push([t.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;margin-left:auto;margin-right:auto}.menu-close{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=e},185:function(t,e,n){"use strict";n.r(e);n(35);var r=n(3),o={props:{title:{type:String,required:!0},link:{type:String,required:!0}},data:function(){return{itemClass:"text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 menu-close"}},methods:{openNewTab:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.preventDefault();case 2:return n.next=4,window.open(e,"_blank");case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},openLink:function(t){window.location=t}}},l=n(31),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.itemClass,on:{click:function(e){return t.openLink(t.link)},contextmenu:function(e){return t.openNewTab(e,t.link)}}},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},186:function(t,e,n){"use strict";n.r(e);var r={asyncData:function(){return{boxColClass:"flex flex-col bg-gray-200",boxRowClass:"flex justify-center bg-gray-200",linkData:[[{title:"youtube",link:"https://www.youtube.com"},{title:"youtube",link:"https://www.youtube.com"}],[{title:"youtube",link:"https://www.youtube.com"}],[{title:"youtube",link:"https://www.youtube.com"}]]}},methods:{}},o=(n(183),n(31)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{class:t.boxColClass},t._l(t.linkData,(function(e,i){return n("div",{key:i,class:t.boxRowClass},t._l(e,(function(e){return n("MyLink",t._b({key:e.title},"MyLink",e,!1))})),1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MyLink:n(185).default})}}]);