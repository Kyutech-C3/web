(window.webpackJsonp=window.webpackJsonp||[]).push([[9,15],{463:function(t,e,r){var content=r(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("4ede0936",content,!0,{sourceMap:!1})},466:function(t,e,r){"use strict";r(463)},467:function(t,e,r){var n=r(26)(!1);n.push([t.i,'@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-08b01bb6]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-08b01bb6]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-08b01bb6]{font-size:10px}}.user[data-v-08b01bb6]{height:var(--user-height);padding:2px 10px 2px 2px;border-radius:100px;display:flex;justify-content:center;align-items:center;border:1px solid;text-decoration:none}.white-style[data-v-08b01bb6]{border-color:#fff;color:#fff}.black-style[data-v-08b01bb6]{border-color:#d8d8d8;color:#707070}.shadow[data-v-08b01bb6]{box-shadow:0 2px 8px rgba(0,0,0,.2)}.user[data-v-08b01bb6]:hover{border-color:#707070}.icon-wrapper[data-v-08b01bb6]{height:var(--img-height);width:var(--img-height);margin:0 5px 0 0;position:relative;overflow:hidden;border-radius:100%;background-color:#fff}.icon-wrapper img[data-v-08b01bb6]{height:100%;width:auto;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.name[data-v-08b01bb6]{width:-moz-max-content;width:max-content;font-size:15px;text-decoration:none;font-family:"游ゴシック体",YuGothic,"游ゴシック Medium","Yu Gothic Medium","游ゴシック","Yu Gothic",sans-serif}',""]),t.exports=n},468:function(t,e,r){"use strict";r.r(e);r(36);var n={props:{id:{type:String,required:!0,default:function(){return""}},name:{type:String,required:!0,default:function(){return""}},icon:{type:String,required:!0,default:function(){return""}},showName:{type:Boolean,required:!0,default:function(){return!0}},color:{type:String,required:!0},shadow:{type:Boolean,required:!0}}},o=(r(466),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"user",class:["".concat(t.color,"-style"),{shadow:t.shadow}],attrs:{to:"/author/".concat(t.id)}},[e("div",{staticClass:"icon-wrapper"},[e("img",{staticClass:"icon",attrs:{src:"".concat(t.icon,"?fm=webp&q=50&w=50"),alt:"user icon"}})]),t._v(" "),t.showName?e("div",{staticClass:"name"},[t._v(t._s(t.name))]):t._e()])}),[],!1,null,"08b01bb6",null);e.default=component.exports},473:function(t,e,r){var content=r(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("6dde39e4",content,!0,{sourceMap:!1})},482:function(t,e,r){"use strict";r(473)},483:function(t,e,r){var n=r(26)(!1);n.push([t.i,"@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-1e47e2b0]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-1e47e2b0]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-1e47e2b0]{font-size:10px}}.users[data-v-1e47e2b0]{display:flex;align-items:center;justify-content:flex-start}.user[data-v-1e47e2b0]{margin:0 5px 0 0}",""]),t.exports=n},487:function(t,e,r){"use strict";r.r(e);r(36);var n={components:{User:r(468).default},props:{users:{type:Array,required:!0,default:function(){return[]}}}},o=(r(482),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"users"},t._l(t.users,(function(t,r){return e("user",{key:r,staticClass:"user",attrs:{id:t.sys.id,name:t.fields.name,icon:t.fields.icon.fields.file.url,"show-name":!0,color:"black",shadow:!1}})})),1)}),[],!1,null,"1e47e2b0",null);e.default=component.exports}}]);