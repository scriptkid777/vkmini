(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},206:function(e,t,a){e.exports=a(316)},309:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);a(207),a(233),a(235),a(236),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275);var n=a(0),c=a.n(n),r=a(105),i=a.n(r),l=a(39),s=a.n(l),o=a(70),u=a.n(o),m=a(106),p=a(51),d=a(69),f=a.n(d),E=a(115),h=a.n(E),b=(a(284),a(49)),g=a.n(b),k=a(50),v=a.n(k),j=a(110),O=a.n(j),y=a(71),x=a.n(y),w=a(107),P=a.n(w),U=a(109),_=a.n(U),A=a(108),C=a.n(A),I=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(g.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(x.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(P.a,{before:n.photo_200?c.a.createElement(C.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(x.a,{title:"Navigation Example"},c.a.createElement(_.a,null,c.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},K=a(72),S=a(112),V=a.n(S),N=a(113),W=a.n(N),z=a(114),B=a.n(z),J=a(111),T=a.n(J),D=(a(309),Object(K.b)()),F=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(V.a,{onClick:e.go,"data-to":"home"},D===K.a?c.a.createElement(W.a,null):c.a.createElement(B.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},G=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),o=l[0],d=l[1],E=Object(n.useState)(c.a.createElement(h.a,{size:"large"})),b=Object(p.a)(E,2),g=b[0],k=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:g},c.a.createElement(I,{id:"home",fetchedUser:o,go:v}),c.a.createElement(F,{id:"persik",go:v}))};s.a.send("VKWebAppInit"),i.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.d5655bbe.chunk.js.map