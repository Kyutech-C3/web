(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{476:function(t,e,n){"use strict";var r=n(495);e.a=r.createClient({space:"9y06rk98t3s7",accessToken:"WOkXAfm-pYQTJEA7eqNAuVBo7tezsUQwJXap2H4xDp0"})},497:function(t,e){},573:function(t,e,n){var content=n(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6e1d50b7",content,!0,{sourceMap:!1})},649:function(t,e,n){"use strict";n(573)},650:function(t,e,n){var r=n(26)(!1);r.push([t.i,"@font-face{src:url(https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)}@media screen and (max-width:600px){html[data-v-46a67a36]{font-size:7px!important}}@media screen and (max-width:1000px){html[data-v-46a67a36]{font-size:9px}}@media screen and (min-width:1000px){html[data-v-46a67a36]{font-size:10px}}.news[data-v-46a67a36]{max-width:1920px;margin:0 auto}",""]),t.exports=r},666:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(11),c=(n(53),n(15),n(32),n(33),n(31),n(45),n(81),n(1)),l=n(522),d=n(476),m=c.a.extend({components:{EntryDetail:l.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,o=t.store,c=t.error,!(l=t.payload)){e.next=3;break}return e.abrupt("return",{news_item:l});case 3:return e.prev=3,e.t0=Promise,e.next=7,d.a.getEntry(n.id);case 7:return e.t1=e.sent,e.next=10,d.a.getEntries({content_type:"news",limit:3});case 10:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.abrupt("return",e.t0.all.call(e.t0,e.t3).then((function(t){var e=Object(r.a)(t,2),c=e[0],l=e[1];return o.commit("breadcrumbs/setBreadcrumbs",{breadcrumbs:[{url:"/",text:"ホーム"},{url:"/news",text:"お知らせ一覧"},{url:"/news/".concat(n.id),text:c.fields.title}]}),{news_item:c,recent_news:l.items}})));case 15:e.prev=15,e.t4=e.catch(3),c({errorCode:e.t4.errorCode,message:e.t4.message});case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()},data:function(){return{title:"",description:"",img_url:""}},head:function(){return this.title="お知らせ - ".concat(this.news_item.fields.title),this.description="".concat(this.title," - ").concat(this.news_item.fields.digest),this.img_url="http:".concat(this.news_item.fields.thumbnail.fields.file.url),{title:this.title,htmlAttrs:{lang:"ja",prefix:"og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# article: https://ogp.me/ns/article#"},meta:[{hid:"description",name:"description",content:this.description},{hid:"og:url",property:"og:url",content:"".concat("https://compositecomputer.club/","news/").concat(this.$route.params.id)},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.img_url}],link:[{hid:"canonical",rel:"canonical",href:"".concat("https://compositecomputer.club/","news/").concat(this.$route.params.id)}]}}}),f=(n(649),n(28)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"news"},[e("entry-detail",{attrs:{"page-name":"お知らせ",title:t.news_item.fields.title,tags:t.news_item.fields.tags,img:t.news_item.fields.thumbnail.fields.file.url,body:t.news_item.fields.body,"created-at":t.news_item.sys.createdAt,"updated-at":t.news_item.sys.updatedAt,"recent-blog":t.recent_news,users:t.news_item.fields.user,type:"news"}})],1)}),[],!1,null,"46a67a36",null);e.default=component.exports;installComponents(component,{EntryDetail:n(522).default})}}]);