!function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(d&&d(e);m.length;)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={6:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([224,0]),s()}({220:function(t,e,s){"use strict";var n=s(57);s.n(n).a},221:function(t,e,s){"use strict";var n=s(58);s.n(n).a},224:function(t,e,s){"use strict";s.r(e);var n=s(20),a=s(0),i=s(35),o=s(30),r=(s(78),s(9)),c=s.n(r),l=s(3),d=s(14),u={scripts:[],commands:[],domain:""},m={isApplied:l.a.get("isApplied")};l.a.hook((function(t){"isApplied"in t&&(m.isApplied=t.isApplied)}));var p={components:{Icon:d.a},data:()=>({store:u,options:m,activeMenu:"scripts"}),computed:{commands(){return this.store.commands.map((function(t){var e=c()(t,2),s=e[0];return{name:e[1],key:s}}))},scripts(){return this.store.scripts.map((function(t){return{name:t.custom.name||Object(a.h)(t.meta,"name"),data:t}}))}},methods:{toggleMenu(t){this.activeMenu=this.activeMenu===t?null:t},getSymbolCheck:t=>"toggle-"+(t?"on":"off"),onToggle(){l.a.set("isApplied",!this.options.isApplied),this.checkReload()},onManage(){browser.runtime.openOptionsPage(),window.close()},onEditScript(t){browser.tabs.create({url:browser.runtime.getURL("/options/index.html#scripts/"+t.data.props.id)}),window.close()},onFindSameDomainScripts(){browser.tabs.create({url:"https://os.obeyi.com"})},onCommand(t){browser.tabs.sendMessage(this.store.currentTab.id,{cmd:"Command",data:t.key})},onToggleScript(t){var e=this,s=t.data,n=!s.config.enabled;Object(a.s)({cmd:"UpdateScriptInfo",data:{id:s.props.id,config:{enabled:n}}}).then((function(){s.config.enabled=n,e.checkReload()}))},checkReload(){l.a.get("autoReload")&&browser.tabs.reload(this.store.currentTab.id)},onCreateScript(){var t=this.store,e=t.currentTab;(t.domain?Object(a.s)({cmd:"CacheNewScript",data:{url:e.url.split("#")[0].split("?")[0]}}):Promise.resolve()).then((function(t){var e=["scripts","_new",t].filter(Boolean).join("/");browser.tabs.create({url:browser.runtime.getURL("/options/index.html#"+e)}),window.close()}))}}},v=(s(220),s(221),s(4)),b=Object(v.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-popup"},[s("div",{staticClass:"e7m container"},[t._m(0),t._m(1),t._m(2),s("br"),s("div",{staticClass:"e7m center",staticStyle:{"padding-bottom":"1rem"}},[s("a",{staticClass:"e7m waves-effect waves-light waves-raised show-all-comments-button",attrs:{href:"https://emailfake.com/",target:"_blank"}},[t._v("Check Inbox")]),t._m(3),s("div",{staticClass:"toggler"},[s("input",{attrs:{id:"toggler-2",name:"toggler-2",type:"checkbox",value:"1"}}),s("label",{attrs:{for:"toggler-2"}},[s("svg",{staticClass:"toggler-on",staticStyle:{"border-radius":"13px"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"}},[s("polyline",{staticClass:"path check",attrs:{points:"100.2,40.2 51.5,88.8 29.8,67.5 "}})]),s("svg",{staticClass:"toggler-off",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"}},[s("line",{staticClass:"path line",attrs:{x1:"34.4",y1:"34.4",x2:"95.8",y2:"95.8"}}),s("line",{staticClass:"path line",attrs:{x1:"95.8",y1:"34.4",x2:"34.4",y2:"95.8"}})])])]),s("div",{staticClass:"text_swc"},[t._v("Notification")]),s("button",{staticClass:"e7m btn btn-success waves-effect waves-light waves-raised",staticStyle:{padding:"5px 12px","margin-top":"10px"},attrs:{id:"recmlbtn",type:"button"}},[t._v("Recent email")]),s("div",{attrs:{id:"recml"}}),s("button",{staticClass:"e7m btn btn-danger waves-effect waves-raised",staticStyle:{display:"none"},attrs:{type:"button",id:"recmlbtnclear",value:"Delete Recent"}},[t._v("Clear Recent")])])]),s("div",{staticClass:"logo",class:{disabled:!t.options.isApplied}},[s("img",{attrs:{src:"/public/images/icon128.png"}})]),s("div",{staticClass:"menu-item",class:{disabled:!t.options.isApplied},on:{click:t.onToggle}},[s("icon",{attrs:{name:t.getSymbolCheck(t.options.isApplied)}}),s("div",{staticClass:"flex-1",domProps:{textContent:t._s(t.options.isApplied?t.i18n("menuScriptEnabled"):t.i18n("menuScriptDisabled"))}})],1),s("div",{staticClass:"menu"},[s("div",{staticClass:"menu-item",on:{click:t.onManage}},[s("icon",{attrs:{name:"cog"}}),s("div",{staticClass:"flex-1",domProps:{textContent:t._s(t.i18n("menuDashboard"))}})],1)]),s("div",{staticClass:"menu"},[s("div",{staticClass:"menu-item",on:{click:t.onCreateScript}},[s("icon",{attrs:{name:"code"}}),s("div",{staticClass:"flex-1",domProps:{textContent:t._s(t.i18n("menuNewScript"))}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.store.domain,expression:"store.domain"}],staticClass:"menu"},[s("div",{staticClass:"menu-item",on:{click:t.onFindSameDomainScripts}},[s("icon",{attrs:{name:"search"}}),s("div",{staticClass:"flex-1",domProps:{textContent:t._s(t.i18n("menuFindScripts"))}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.commands.length,expression:"commands.length"}],staticClass:"menu menu-commands",class:{expand:"commands"===t.activeMenu}},[s("div",{staticClass:"menu-item",on:{click:function(e){return t.toggleMenu("commands")}}},[s("div",{staticClass:"flex-auto",domProps:{textContent:t._s(t.i18n("menuCommands"))}}),s("icon",{staticClass:"icon-collapse",attrs:{name:"arrow"}})],1),s("div",{staticClass:"submenu"},t._l(t.commands,(function(e){return s("div",{staticClass:"menu-item",on:{click:function(s){return t.onCommand(e)}}},[s("span",{domProps:{textContent:t._s(e.name)}})])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.scripts.length,expression:"scripts.length"}],staticClass:"menu menu-scripts",class:{expand:"scripts"===t.activeMenu}},[s("div",{staticClass:"menu-item",on:{click:function(e){return t.toggleMenu("scripts")}}},[s("div",{staticClass:"flex-auto",domProps:{textContent:t._s(t.i18n("menuMatchedScripts"))}}),s("icon",{staticClass:"icon-collapse",attrs:{name:"arrow"}})],1),s("div",{staticClass:"submenu"},t._l(t.scripts,(function(e){return s("div",[s("div",{staticClass:"menu-item",class:{disabled:!e.data.config.enabled},on:{click:function(s){return t.onToggleScript(e)}}},[s("icon",{attrs:{name:t.getSymbolCheck(e.data.config.enabled)}}),s("div",{staticClass:"flex-auto ellipsis",attrs:{title:e.name},domProps:{textContent:t._s(e.name)}})],1),s("div",{staticClass:"submenu-buttons"},[s("div",{staticClass:"submenu-button",on:{click:function(s){return t.onEditScript(e)}}},[s("icon",{attrs:{name:"code"}})],1)])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"e7m center"},[e("h2",[this._v("meanEmail")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"e7m center",staticStyle:{"padding-bottom":"1rem"}},[e("span",{staticStyle:{"font-size":"1.2rem"},attrs:{id:"email_ch_text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"e7m center",staticStyle:{"padding-bottom":"1rem"}},[e("button",{staticClass:"e7m btn btn-success waves-effect waves-light waves-raised",staticStyle:{padding:"5px 12px"},attrs:{id:"copbt1n",type:"button"}},[this._v("New email")]),e("button",{staticClass:"e7m btn btn-success waves-effect waves-light waves-raised",staticStyle:{padding:"5px 12px"},attrs:{id:"copbtn",type:"button"}},[this._v("Copy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticStyle:{"font-size":"1.2rem"}},[this._v("\n          you have\n          "),e("span",{attrs:{id:"mess_number"}},[this._v("0")]),this._v(" message\n          "),e("span",{attrs:{id:"odnun"}})])])}],!1,null,null,null).exports;o.c(),n.default.prototype.i18n=a.k;var f=document.createElement("div");document.body.appendChild(f),new n.default({render:function(t){return t(b)}}).$mount(f),Object.assign(i.a,{SetPopup(t,e){u.currentTab.id===e.tab.id&&(u.commands=t.menus,Object(a.s)({cmd:"GetMetas",data:t.ids}).then((function(t){u.scripts=t})))}}),browser.tabs.query({currentWindow:!0,active:!0}).then((function(t){var e={id:t[0].id,url:t[0].url};if(u.currentTab=e,browser.tabs.sendMessage(e.id,{cmd:"GetPopup"}),/^https?:\/\//i.test(e.url)){var s=e.url.match(/:\/\/([^/]*)/)[1];u.domain=o.a(s)||s}}))},57:function(t,e,s){},58:function(t,e,s){}});