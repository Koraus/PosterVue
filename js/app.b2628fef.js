(function(e){function t(t){for(var s,o,c=t[0],i=t[1],l=t[2],u=0,g=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&g.push(r[o][0]),r[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);p&&p(t);while(g.length)g.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/PosterVue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01f0":function(e,t,a){},"27f3":function(e,t,a){e.exports=a.p+"img/logo.93dc752e.svg"},4753:function(e,t,a){"use strict";a("8a6e")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o=(a("5c0b"),a("2877")),c={},i=Object(o["a"])(c,r,n,!1,null,null,null),l=i.exports,p=a("8c4f"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"catalog-page"},[s("header",{staticClass:"header"},[s("img",{attrs:{src:a("27f3"),alt:""}}),e._m(0),s("div",{staticClass:"header-right"},[s("span",[e._v("Random")]),s("img",{attrs:{src:a("62e4"),alt:""},on:{click:function(t){return t.stopPropagation(),e.randomSearch()}}})])]),s("section",{staticClass:"search-settings-panel"},[s("h1",{staticClass:"search-settings-panel__title"},[e._v("Explore the world")]),s("p",{staticClass:"search-settings-panel__paragraph"},[e._v(" Platform gives you the best wallpaper ")]),s("label",{staticClass:"search-settings-panel__search-lable"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"search-settings-panel__input",attrs:{type:"text",placeholder:"Enter your request"},domProps:{value:e.searchInput},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.serarchRequest()},input:function(t){t.target.composing||(e.searchInput=t.target.value)}}}),s("button",{staticClass:"search-settings-panel__search-btn",on:{click:function(t){return t.stopPropagation(),e.serarchRequest()}}},[e._v(" Search ")])]),s("ul",{staticClass:"categories"},[s("li",{staticClass:"categorie",class:{activeTag:e.categories.general}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.categories.general,expression:"categories.general"}],attrs:{type:"checkbox",id:"general",value:"1"},domProps:{checked:Array.isArray(e.categories.general)?e._i(e.categories.general,"1")>-1:e.categories.general},on:{click:function(t){return t.stopPropagation(),e.serarchRequest()},change:function(t){var a=e.categories.general,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n="1",o=e._i(a,n);s.checked?o<0&&e.$set(e.categories,"general",a.concat([n])):o>-1&&e.$set(e.categories,"general",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.categories,"general",r)}}}),s("label",{attrs:{for:"general"}},[e._v(" general ")])]),s("li",{staticClass:"categorie",class:{activeTag:e.categories.anime}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.categories.anime,expression:"categories.anime"}],attrs:{type:"checkbox",id:"anime",value:"1"},domProps:{checked:Array.isArray(e.categories.anime)?e._i(e.categories.anime,"1")>-1:e.categories.anime},on:{click:function(t){return t.stopPropagation(),e.serarchRequest()},change:function(t){var a=e.categories.anime,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n="1",o=e._i(a,n);s.checked?o<0&&e.$set(e.categories,"anime",a.concat([n])):o>-1&&e.$set(e.categories,"anime",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.categories,"anime",r)}}}),s("label",{attrs:{for:"anime"}},[e._v("anime")])]),s("li",{staticClass:"categorie",class:{activeTag:e.categories.people}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.categories.people,expression:"categories.people"}],attrs:{type:"checkbox",id:"people",value:"1"},domProps:{checked:Array.isArray(e.categories.people)?e._i(e.categories.people,"1")>-1:e.categories.people},on:{click:function(t){return t.stopPropagation(),e.serarchRequest()},change:function(t){var a=e.categories.people,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n="1",o=e._i(a,n);s.checked?o<0&&e.$set(e.categories,"people",a.concat([n])):o>-1&&e.$set(e.categories,"people",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.categories,"people",r)}}}),s("label",{attrs:{for:"people"}},[e._v("people")])])])]),s("div",{staticClass:"cards-area__wrap"},[s("h2",{staticClass:"title-sorting"},[e._v(e._s(e.sortByTitle()))]),s("div",{staticClass:"filter-panels-area"},[s("form",{staticClass:"filter-panel",on:{click:function(t){t.stopPropagation(),e.isDrListSortByOpen?e.isDrListSortByOpen=!1:e.isDrListSortByOpen=!0}}},[s("span",{staticClass:"filter-panel__text"},[e._v(" Sorting by: "),s("span",{staticClass:"filter-panel__text-selected"},[e._v(e._s(e.sortByTitle()))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isDrListSortByOpen,expression:"isDrListSortByOpen"}],staticClass:"filter-panel__drop-list"},[s("label",{attrs:{for:"Choice1"},on:{click:function(t){t.stopPropagation(),e.isDrListSortByOpen=!1}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sortBy,expression:"sortBy"}],attrs:{type:"radio",id:"Choice1",name:"filter",value:"relevance"},domProps:{checked:e._q(e.sortBy,"relevance")},on:{click:function(t){return t.stopPropagation(),e.serarchRequest()},change:function(t){e.sortBy="relevance"}}}),e._v(" Relevance ")]),s("label",{attrs:{for:"Choice2"},on:{click:function(t){t.stopPropagation(),e.isDrListSortByOpen=!1}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sortBy,expression:"sortBy"}],attrs:{type:"radio",id:"Choice2",name:"filter",value:"random"},domProps:{checked:e._q(e.sortBy,"random")},on:{click:function(t){return t.stopPropagation(),e.serarchRequest()},change:function(t){e.sortBy="random"}}}),e._v("Random")]),s("label",{attrs:{for:"Choice3"},on:{click:function(t){t.stopPropagation(),e.isDrListSortByOpen=!1}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sortBy,expression:"sortBy"}],attrs:{type:"radio",id:"Choice3",name:"filter",value:"views"},domProps:{checked:e._q(e.sortBy,"views")},on:{click:function(t){return t.stopPropagation(),e.serarchRequest()},change:function(t){e.sortBy="views"}}}),e._v("Views ")])])]),s("form",{staticClass:"filter-panel filter-panel__color",on:{click:function(t){t.stopPropagation(),e.isColorBarOpen?e.isColorBarOpen=!1:e.isColorBarOpen=!0}}},[s("span",{staticClass:"filter-panel__text"},[e._v(" Color: "),s("span",{staticClass:"filter-panel__selected-color",style:{backgroundColor:"#"+e.colorFilter}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isColorBarOpen,expression:"isColorBarOpen"}],staticClass:"filter-panel__drop-list_for-color"},[s("div",{staticClass:"color-style-div",on:{click:function(t){t.stopPropagation(),e.isColorBarOpen=!0}}},[s("ul",{staticClass:"color-ul-style",attrs:{"v-show":e.isColorBarOpen}},e._l(e.colorForChoose,(function(t){return s("li",{key:e.colorForChoose.indexOf(t),staticClass:"color-li-style",style:{backgroundColor:"#"+t},on:{click:[function(a){a.stopPropagation(),e.colorFilter=t,e.isColorBarOpen=!1},function(t){return t.stopPropagation(),e.serarchRequest()}]}},[e._v(" "+e._s(t)+" ")])})),0)])])])]),void 0!==e.searchResponse?s("div",[s("div",{staticClass:"cards-area"},[e._l(e.searchResponse.data,(function(t){return s("PosterCard",{key:t.id,staticClass:"card",attrs:{thumbSrc:t.thumbs.small,posterCategory:t.category,item:t},nativeOn:{click:function(a){e.selectedItem=t}}})})),s("PopupWindow",{attrs:{isOpen:void 0!==e.selectedItem,item:e.selectedItem},on:{a:function(t){e.selectedItem=void 0}}})],2),s("div",{staticClass:"pagination-bar"},[s("button",{staticClass:"\n            pagination-bar__btn\n            pagination-bar__btn-prev\n            pagination-bar__btn--bg\n          ",class:{paginationBarBtnDisabled:!e.hasPrevPage},on:{click:function(t){return e.goToPage(e.searchResponse.meta.current_page-1)}}}),s("button",{staticClass:"pagination-bar__btn",class:{activCrtPg:1==e.searchResponse.meta.current_page},on:{click:function(t){return e.goToPage(1)}}},[e._v("1")]),1!=e.searchResponse.meta.current_page&&e.searchResponse.meta.current_page!=e.searchResponse.meta.last_page?s("button",{staticClass:"pagination-bar__btn activCrtPg "},[e._v(" "+e._s(e.searchResponse.meta.current_page)+" ")]):e._e(),e.searchResponse.meta.current_page===e.searchResponse.meta.last_page&&e.searchResponse.meta.last_page>3?s("span",{staticClass:"pagination-bar__btn-for-last-page"},[s("button",{staticClass:"pagination-bar__btn",on:{click:function(t){return e.goToPage(e.searchResponse.meta.last_page-2)}}},[e._v(e._s(e.searchResponse.meta.last_page-2))]),s("button",{staticClass:"pagination-bar__btn",on:{click:function(t){return e.goToPage(e.searchResponse.meta.last_page-1)}}},[e._v(e._s(e.searchResponse.meta.last_page-1))])]):e._e(),e.searchResponse.meta.last_page>1?s("span",{staticClass:"nav-btn"},[1==e.searchResponse.meta.current_page||e.searchResponse.meta.last_page?e._e():s("button",{staticClass:"pagination-bar__btn",on:{click:function(t){return e.goToPage(e.searchResponse.meta.current_page)}}},[e._v(" "+e._s(e.searchResponse.meta.current_page)+" ")]),e.searchResponse.meta.current_page+1<e.searchResponse.meta.last_page?s("button",{staticClass:"pagination-bar__btn",on:{click:function(t){return e.goToPage(e.searchResponse.meta.current_page+1)}}},[e._v(e._s(e.searchResponse.meta.current_page+1))]):e._e(),e.searchResponse.meta.current_page+2<e.searchResponse.meta.last_page?s("button",{staticClass:"pagination-bar__btn",on:{click:function(t){return e.goToPage(e.searchResponse.meta.current_page+2)}}},[e._v(e._s(e.searchResponse.meta.current_page+2))]):e._e(),e.searchResponse.meta.last_page>=6&&e.searchResponse.meta.current_page<e.searchResponse.meta.last_page-3?s("button",{staticClass:"pagination-bar__btn"},[e._v("....")]):e._e(),s("button",{staticClass:"pagination-bar__btn",class:{activCrtPg:e.searchResponse.meta.current_page==e.searchResponse.meta.last_page},on:{click:function(t){return e.goToPage(e.searchResponse.meta.last_page)}}},[e._v(e._s(e.searchResponse.meta.last_page))])]):e._e(),s("button",{staticClass:"\n            pagination-bar__btn\n            pagination-bar__btn-next\n            pagination-bar__btn--bg\n          ",class:{paginationBarBtnDisabled:!e.hasNextPage},attrs:{disabled:!e.hasNextPage},on:{click:function(t){return e.goToPage(e.searchResponse.meta.current_page+1)}}})]),s("div",{staticClass:"search-info"},[s("span",[e._v("Got "+e._s(e.searchResponse.meta.total)+" results ")]),e._v(" "),s("br"),s("span",[e._v("Current page "+e._s(e.searchResponse.meta.current_page)+" / "+e._s(e.searchResponse.meta.last_page)+" ")])])]):e._e()])])},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"quick-tags"},[a("li",{staticClass:"quick-tag"},[e._v("Latest")]),a("li",{staticClass:"quick-tag"},[e._v("Hot")]),a("li",{staticClass:"quick-tag"},[e._v("Toplist")])])}],_=a("1da1"),f=(a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("a9e3"),a("99af"),a("fb6a"),a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"poster-card",on:{click:function(t){return e.logg()}}},[a("span",{staticClass:"poster-card__category"},[e._v(" Category: "+e._s(e.item.category))]),a("img",{staticClass:"poster-card__img",attrs:{src:e.thumbSrc}}),a("span",{staticClass:"poster-card__resolution"},[e._v(" Resolution: "),a("br"),e._v(" "+e._s(e.item.resolution)+" ")]),a("span",{staticClass:"poster-card__views"},[e._v(" Views: "+e._s(e.item.views)+" ")])])}),h=[],m={name:"PosterCard",data:function(){return{}},props:{thumbSrc:String,posterCategory:String,thumbSrcLarge:String,isHovered:Boolean,item:Object},emits:{},methods:{logg:function(){console.log(this.item)}}},d=m,v=(a("db4e"),Object(o["a"])(d,f,h,!1,null,"11f3200e",null)),b=v.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isOpen?a("div",{staticClass:"bg-drop",on:{click:e.close}},[a("div",{staticClass:"popup-window"},[a("img",{staticClass:"popup-window__img",attrs:{src:e.item.path,alt:"",referrerPolicy:"no-referrer"}}),e._t("default")],2)]):e._e()},y=[],R={name:"PopupWindow",data:function(){return{}},props:{item:Object,isOpen:{type:Boolean,required:!0}},emits:{ok:null,a:null},methods:{close:function(){this.$emit("a")},log:function(){console.log("Лог зпрацював"),this.$emit("testEvent",{test:"testEv"})}}},P=R,k=(a("6990"),Object(o["a"])(P,C,y,!1,null,"2dbb9f8a",null)),w=k.exports,x="https://thingproxy.freeboard.io/fetch/",O="https://wallhaven.cc/api/v1",B={name:"CataloguePage",components:{PosterCard:b,PopupWindow:w},data:function(){return{searchInput:"",searchResponse:void 0,confirmation:"",selectedItem:void 0,sortBy:"relevance",colorForChoose:["660000","990000","cc0000","cc3333","ea4c88","993399","663399","333399","0066cc","0099cc","66cccc","77cc33","669900","336600","666600","999900","cccc33","ffff00","ffcc33","ff9900","ff6600","cc6633","996633","663300","000000","999999","cccccc","ffffff","424153"],isColorBarOpen:!1,colorFilter:"",categories:{general:"",anime:"",people:""},isDrListSortByOpen:!1}},computed:{forReturn:function(){return"SomeText"},hasNextPage:function(){return this.searchResponse.meta.current_page<this.searchResponse.meta.last_page},hasPrevPage:function(){return this.searchResponse.meta.current_page-1>=1}},methods:{serarchRequest:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.goToPage(1);case 2:case"end":return t.stop()}}),t)})))()},goToPage:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=new URLSearchParams({q:t.searchInput,categories:String(Number(t.categories.general))+String(Number(t.categories.anime))+String(Number(t.categories.people)),colors:t.colorFilter,sorting:t.sortBy,page:e}),a.next=3,fetch("".concat(x).concat(O,"/search?").concat(s));case 3:return a.next=5,a.sent.json();case 5:t.searchResponse=a.sent;case 6:case"end":return a.stop()}}),a)})))()},openPopup:function(){this.isPopupOpen=!0},log:function(e){console.log(e)},sortByTitle:function(){return this.sortBy[0].toUpperCase()+this.sortBy.slice(1)},randomSearch:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x).concat(O,"/search?random"));case 2:return t.next=4,t.sent.json();case 4:e.searchResponse=t.sent;case 5:case"end":return t.stop()}}),t)})))()}}},S=B,T=(a("4753"),Object(o["a"])(S,u,g,!1,null,"3f0ba1f4",null)),j=T.exports;s["a"].use(p["a"]);var q=[{path:"/CataloguePage",name:"catalogue",component:j}],$=new p["a"]({routes:q}),N=$;s["a"].config.productionTip=!1,new s["a"]({router:N,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"62e4":function(e,t,a){e.exports=a.p+"img/header-ellipse.4d203231.svg"},6990:function(e,t,a){"use strict";a("01f0")},"8a6e":function(e,t,a){},"9c0c":function(e,t,a){},db4e:function(e,t,a){"use strict";a("f8a7")},f8a7:function(e,t,a){}});
//# sourceMappingURL=app.b2628fef.js.map