(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7,9,14,15],{463:function(t,e,r){var content=r(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("4ede0936",content,!0,{sourceMap:!1})},464:function(t,e,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("24382730",content,!0,{sourceMap:!1})},466:function(t,e,r){"use strict";r(463)},467:function(t,e,r){var o=r(26)(!1);o.push([t.i,'@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-08b01bb6]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-08b01bb6]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-08b01bb6]{font-size:10px}}.user[data-v-08b01bb6]{height:var(--user-height);padding:2px 10px 2px 2px;border-radius:100px;display:flex;justify-content:center;align-items:center;border:1px solid;text-decoration:none}.white-style[data-v-08b01bb6]{border-color:#fff;color:#fff}.black-style[data-v-08b01bb6]{border-color:#d8d8d8;color:#707070}.shadow[data-v-08b01bb6]{box-shadow:0 2px 8px rgba(0,0,0,.2)}.user[data-v-08b01bb6]:hover{border-color:#707070}.icon-wrapper[data-v-08b01bb6]{height:var(--img-height);width:var(--img-height);margin:0 5px 0 0;position:relative;overflow:hidden;border-radius:100%;background-color:#fff}.icon-wrapper img[data-v-08b01bb6]{height:100%;width:auto;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.name[data-v-08b01bb6]{width:-moz-max-content;width:max-content;font-size:15px;text-decoration:none;font-family:"游ゴシック体",YuGothic,"游ゴシック Medium","Yu Gothic Medium","游ゴシック","Yu Gothic",sans-serif}',""]),t.exports=o},468:function(t,e,r){"use strict";r.r(e);r(36);var o={props:{id:{type:String,required:!0,default:function(){return""}},name:{type:String,required:!0,default:function(){return""}},icon:{type:String,required:!0,default:function(){return""}},showName:{type:Boolean,required:!0,default:function(){return!0}},color:{type:String,required:!0},shadow:{type:Boolean,required:!0}}},d=(r(466),r(28)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"user",class:["".concat(t.color,"-style"),{shadow:t.shadow}],attrs:{to:"/author/".concat(t.id)}},[e("div",{staticClass:"icon-wrapper"},[e("img",{staticClass:"icon",attrs:{src:"".concat(t.icon,"?fm=webp&q=50&w=50"),alt:"user icon"}})]),t._v(" "),t.showName?e("div",{staticClass:"name"},[t._v(t._s(t.name))]):t._e()])}),[],!1,null,"08b01bb6",null);e.default=component.exports},469:function(t,e,r){"use strict";r(464)},470:function(t,e,r){var o=r(26)(!1);o.push([t.i,"@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-e625ecf0]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-e625ecf0]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-e625ecf0]{font-size:10px}}.tag[data-v-e625ecf0]{border:1px solid #d8d8d8;border-radius:8px;padding:2px 10px;height:var(--height);display:flex;align-items:center;justify-content:center}.tag-item[data-v-e625ecf0]{width:-moz-max-content;width:max-content}",""]),t.exports=o},471:function(t,e,r){"use strict";r.r(e);var o={props:{tag:{type:String,required:!0,default:function(){return""}}}},d=(r(469),r(28)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tag"},[e("div",{staticClass:"tag-item"},[t._v(t._s(t.tag))])])}),[],!1,null,"e625ecf0",null);e.default=component.exports},473:function(t,e,r){var content=r(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("6dde39e4",content,!0,{sourceMap:!1})},478:function(t,e,r){var content=r(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("10149238",content,!0,{sourceMap:!1})},481:function(t,e,r){"use strict";r.r(e);r(36),r(31),r(45),r(81);var o=r(471),d=r(487),n={components:{Tag:o.default,Users:d.default},props:{id:{type:String,required:!0},title:{type:String,required:!0},author:{type:Array,required:!0},tags:{type:Array,required:!0},description:{type:String,required:!0},cardImage:{type:String,required:!0},createdAt:{type:String,required:!0},updatedAt:{type:String,required:!0},entryType:{type:String,required:!0}},data:function(){return{style:!0,isHoverFlag:!1}},computed:{entryURL:function(){return"/".concat(this.entryType,"/").concat(this.id)},isNew:function(){return this.$dayjs().diff(this.createdAt,"day")<1}},methods:{dateFormatter:function(t){var e="MM月DD日 HH:mm:ss",r=this.$dayjs(),o=r.diff(t,"second");if(o<60)return o+" 秒前";var d=Math.floor(r.diff(t,"minute"));if(d<60)return d+" 分前";var n=Math.floor(r.diff(t,"hour"));return n<6?n+" 時前":(r.format("YYYY")!==this.$dayjs(t).format("YYYY")&&(e="YYYY年"+e),this.$dayjs(t).format(e))}}},l=(r(490),r(28)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"card-link",attrs:{to:t.entryURL}},[e("article",{staticClass:"article"},[e("div",{staticClass:"thumbnail-wrapper"},[e("img",{staticClass:"thumbnail",attrs:{src:"".concat(t.cardImage,"?fm=webp&q=50&w=500"),alt:"thumbnail",title:"thumbnail",loading:"lazy"}}),t._v(" "),t.isNew?e("div",{staticClass:"new-ravel"},[t._v("New")]):t._e()]),t._v(" "),t.isHoverFlag?e("div",{staticClass:"tag_viewer1"}):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"tag_wrap"},[e("div",{staticClass:"tag",on:{mouseover:function(e){t.isHoverFlag=!0},mouseleave:function(e){t.isHoverFlag=!1}}},t._l(t.tags,(function(t){return e("Tag",{key:t.sys.name,attrs:{tag:t.fields.name}})})),1)]),t._v(" "),e("div",{staticClass:"user-wrapper"},[e("users",{staticClass:"user",attrs:{users:t.author}})],1),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),e("div",{staticClass:"date"},[e("div",[t._v("作成日："+t._s(t.dateFormatter(t.createdAt)))]),t._v(" "),e("div",[t._v("更新日："+t._s(t.dateFormatter(t.updatedAt)))])])])])])}),[],!1,null,"519deb1a",null);e.default=component.exports},482:function(t,e,r){"use strict";r(473)},483:function(t,e,r){var o=r(26)(!1);o.push([t.i,"@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-1e47e2b0]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-1e47e2b0]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-1e47e2b0]{font-size:10px}}.users[data-v-1e47e2b0]{display:flex;align-items:center;justify-content:flex-start}.user[data-v-1e47e2b0]{margin:0 5px 0 0}",""]),t.exports=o},484:function(t,e,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("57e76f16",content,!0,{sourceMap:!1})},487:function(t,e,r){"use strict";r.r(e);r(36);var o={components:{User:r(468).default},props:{users:{type:Array,required:!0,default:function(){return[]}}}},d=(r(482),r(28)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"users"},t._l(t.users,(function(t,r){return e("user",{key:r,staticClass:"user",attrs:{id:t.sys.id,name:t.fields.name,icon:t.fields.icon.fields.file.url,"show-name":!0,color:"black",shadow:!1}})})),1)}),[],!1,null,"1e47e2b0",null);e.default=component.exports},490:function(t,e,r){"use strict";r(478)},491:function(t,e,r){var o=r(26)(!1);o.push([t.i,"@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-519deb1a]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-519deb1a]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-519deb1a]{font-size:10px}}.new-ravel[data-v-519deb1a]{color:red;font-size:medium;font-weight:700;position:absolute;left:0;top:20px;z-index:40;border-radius:0 7px 7px 0;background-color:hsla(0,0%,100%,.8);padding:2px 10px;-moz-filter:drop-shadow(0 0 3px rgba(0,0,0,.2));-ms-filter:drop-shadow(0 0 3px rgba(0,0,0,.2));filter:drop-shadow(0 0 3px rgba(0,0,0,.2))}.card-link[data-v-519deb1a]{text-decoration:none;color:#000}.article[data-v-519deb1a]{height:440px;border-radius:20px;box-shadow:0 0 10px 0 #d8d8d8;transition:.3s;cursor:pointer;overflow:hidden}.article[data-v-519deb1a]:hover{box-shadow:0 0 20px 2px #d8d8d8}.content[data-v-519deb1a]{height:200px;padding:10px 15px}.content[data-v-519deb1a],.thumbnail-wrapper[data-v-519deb1a]{position:relative;overflow:hidden}.thumbnail-wrapper[data-v-519deb1a]{width:100%;height:220px}.thumbnail[data-v-519deb1a]{height:100%;position:absolute;-o-object-fit:cover;object-fit:cover;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.title[data-v-519deb1a]{font-size:22px;margin-bottom:7px;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tag_wrap[data-v-519deb1a]{overflow:hidden;overflow-x:auto;cursor:default;margin-right:3px;margin-bottom:4px}.tag_wrap[data-v-519deb1a]::-webkit-scrollbar{height:3px}.tag_wrap[data-v-519deb1a]::-webkit-scrollbar-thumb{background:#d8d8d8;border-radius:3px}.tag_wrap[data-v-519deb1a]::-webkit-scrollbar-track{background:hsla(0,0%,86.7%,.219)}.tag[data-v-519deb1a]{display:flex;flex-direction:row;justify-content:flex-start;margin-right:3px;margin-bottom:1px;---height:18px}.user-wrapper[data-v-519deb1a]{width:100%;--user-height:20px;--img-height:20px;overflow:hidden;overflow-x:auto;cursor:default;margin-right:3px;margin-bottom:4px}.user-wrapper[data-v-519deb1a]::-webkit-scrollbar{height:3px}.user-wrapper[data-v-519deb1a]::-webkit-scrollbar-thumb{background:rgba(153,216,255,.6431372549);border-radius:3px}.user-wrapper[data-v-519deb1a]::-webkit-scrollbar-track{background:hsla(0,0%,86.7%,.219)}.user[data-v-519deb1a]{margin-right:3px;margin-bottom:2px}.description[data-v-519deb1a]{position:relative;font-size:12px;margin-top:8px;display:-webkit-box;-webkit-line-clamp:3;text-overflow:ellipsis;white-space:normal;overflow:hidden;-webkit-box-orient:vertical}.date[data-v-519deb1a]{position:absolute;bottom:15px;right:15px}",""]),t.exports=o},494:function(t,e,r){"use strict";r.r(e);var o={components:{Card:r(481).default},props:{cardItems:{type:Array,required:!0},entryType:{type:String,required:!0}}},d=(r(503),r(28)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-list"},t._l(t.cardItems,(function(r,i){return e("card",{key:i,attrs:{id:r.sys.id,title:r.fields.title,author:r.fields.user,tags:r.fields.tags,description:r.fields.digest,"card-image":r.fields.thumbnail.fields.file.url,"created-at":r.sys.createdAt,"updated-at":r.sys.updatedAt,"entry-type":t.entryType}})})),1)}),[],!1,null,"43252c20",null);e.default=component.exports;installComponents(component,{Card:r(481).default})},503:function(t,e,r){"use strict";r(484)},504:function(t,e,r){var o=r(26)(!1);o.push([t.i,".card-list[data-v-43252c20]{display:grid;grid-template-columns:repeat(auto-fill,minmax(315px,1fr));grid-row-gap:38px;row-gap:38px;grid-column-gap:26px;-moz-column-gap:26px;column-gap:26px}",""]),t.exports=o}}]);