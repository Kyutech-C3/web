(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{476:function(t,e,r){"use strict";var n=r(495);e.a=n.createClient({space:"9y06rk98t3s7",accessToken:"WOkXAfm-pYQTJEA7eqNAuVBo7tezsUQwJXap2H4xDp0"})},497:function(t,e){},571:function(t,e,r){var content=r(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("0a55e64c",content,!0,{sourceMap:!1})},645:function(t,e,r){"use strict";r(571)},646:function(t,e,r){var n=r(26)(!1);n.push([t.i,"@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-7325385a]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-7325385a]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-7325385a]{font-size:10px}}.blog[data-v-7325385a]{max-width:1920px;margin:0 auto}",""]),t.exports=n},664:function(t,e,r){"use strict";r.r(e);var n=r(23),o=r(11),l=(r(53),r(15),r(32),r(33),r(31),r(45),r(81),r(1)),c=r(522),d=r(476),m=l.a.extend({components:{EntryDetail:c.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,o=t.params,l=t.error,!(c=t.payload)){e.next=3;break}return e.abrupt("return",{blog_item:c});case 3:return e.prev=3,e.t0=Promise,e.next=7,d.a.getEntry(o.id);case 7:return e.t1=e.sent,e.next=10,d.a.getEntries({content_type:"blog",limit:3});case 10:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.abrupt("return",e.t0.all.call(e.t0,e.t3).then((function(t){var e=Object(n.a)(t,2),l=e[0],c=e[1];return r.commit("breadcrumbs/setBreadcrumbs",{breadcrumbs:[{url:"/",text:"ホーム"},{url:"/blog",text:"ブログ一覧"},{url:"/blog/".concat(o.id),text:l.fields.title}]}),{blog_item:l,recent_blog:c.items}})));case 15:e.prev=15,e.t4=e.catch(3),l({errorCode:e.t4.errorCode,message:e.t4.message});case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()},data:function(){return{title:"",description:"",img_url:""}},head:function(){return this.title="ブログ - ".concat(this.blog_item.fields.title),this.description="".concat(this.title," - ").concat(this.blog_item.fields.digest),this.img_url="http:".concat(this.blog_item.fields.thumbnail.fields.file.url),{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:url",property:"og:url",content:"".concat("https://compositecomputer.club/","blog/").concat(this.$route.params.id)},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.img_url}],link:[{hid:"canonical",rel:"canonical",href:"".concat("https://compositecomputer.club/","blog/").concat(this.$route.params.id)}]}}}),f=(r(645),r(28)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"blog"},[e("entry-detail",{attrs:{"page-name":"ブログ",title:t.blog_item.fields.title,tags:t.blog_item.fields.tags,img:t.blog_item.fields.thumbnail.fields.file.url,body:t.blog_item.fields.body,"created-at":t.blog_item.sys.createdAt,"updated-at":t.blog_item.sys.updatedAt,"recent-blog":t.recent_blog,users:t.blog_item.fields.user,type:"blog"}})],1)}),[],!1,null,"7325385a",null);e.default=component.exports;installComponents(component,{EntryDetail:r(522).default})}}]);