(this.webpackJsonpd3_challenge=this.webpackJsonpd3_challenge||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(87),a(19)),i=(a(88),a(75)),m=a(153),s=a(152),u=a(144),p=a(74),d=a.n(p),b=a(23),h=a(10),g=a(66),x=a(34),f=a.n(x),E=a(42),y=a(67),w=a.n(y),v={getCountries:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://restcountries.eu/rest/v2/all");case 3:if(t=e.sent,console.log(t),!t){e.next=7;break}return e.abrupt("return",t.data);case 7:return e.abrupt("return",null);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},j=Object(n.createContext)(null),O=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],i=o[1],m=Object(n.useState)(null),s=Object(l.a)(m,2),u=s[0],p=s[1],d=Object(n.useState)(!0),b=Object(l.a)(d,2),x=b[0],y=b[1];Object(n.useEffect)((function(){Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getCountries();case 2:(t=e.sent)&&(i(t),y(!1));case 4:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement(j.Provider,{value:{selectCountry:function(e){var t=e.borders.map((function(e){return c.filter((function(t){return t.alpha3Code===e}))[0]}));return p(Object(g.a)({},e,{borders:t})),r.a.createElement(h.a,{to:"/country"})},countries:c,selectedCountry:u,loading:x}},t)},C=function(){return Object(n.useContext)(j)},k=a(156),S=Object(k.a)(u.a)((function(e){var t=e.theme;return{padding:"0 5%",height:"15vh",maxHeight:"80px",backgroundColor:t.palette.background.second,boxShadow:"5px 5px 5px 0px ".concat(t.palette.boxShadow)}})),N=Object(k.a)(u.a)((function(e){return{minHeight:"100vh",backgroundColor:e.theme.palette.background.main}})),W=a(115),B=Object(k.a)(W.a)((function(e){var t=e.theme;return{color:t.palette.primary.main,fontFamily:t.typography.fontFamily}})),I=a(12),F=a(145),A=Object(F.a)((function(e){var t;return{container:(t={backgroundColor:e.palette.background.second,boxShadow:"5px 5px 5px 0px ".concat(e.palette.boxShadow),borderRadius:"10px",height:"350px",overflow:"hidden",margin:"30px 0"},Object(I.a)(t,e.breakpoints.up("sm"),{maxWidth:"250px"}),Object(I.a)(t,e.breakpoints.up("lg"),{maxWidth:"275px"}),Object(I.a)(t,"&:hover",{cursor:"pointer"}),t),bold:{fontWeight:"600"},bolder:{fontWeight:"800"},media:{width:"100%",height:"50%"},filterSelect:{width:"200px",backgroundColor:e.palette.background.second,color:e.palette.primary.main,boxShadow:"5px 5px 5px 0px ".concat(e.palette.boxShadow),borderColor:e.palette.background.second,paddingBottom:"17px",height:"50px"},filterLabel:{color:e.palette.primary.main},searchAndFilter:{width:"100%",margin:"20px 0"},searchInput:Object(I.a)({backgroundColor:e.palette.background.second,boxShadow:"5px 5px 5px 0px ".concat(e.palette.boxShadow),padding:"10px 20px",fontSize:"14px",borderRadius:"5px",color:e.palette.primary.main,width:"100%",height:"100%"},e.breakpoints.down("md"),{marginBottom:"40px"}),formControl:{padding:"10px 20px",minWidth:120}}})),R=a(149),D=a(150),_=a(151),z=a(154),H=a(155),L=a(148),T=a(72),M=a.n(T),P=Object(k.a)(u.a)((function(e){e.theme;return{minHeight:"85vh",padding:"20px 5%",width:"100%"}})),J=a(146),U=a(147),$=a(47),q=r.a.memo((function(e){var t=e.country,a=e.selectCountry,n=A();return r.a.createElement(u.a,{container:!0,item:!0,className:n.container,xs:12,sm:6,md:4,lg:3,xl:3,onClick:function(){return a(t)}},r.a.createElement(b.b,{to:"/d3_challenge/country",style:{width:"100%",textDecoration:"none"}},r.a.createElement(J.a,{className:n.media,image:t.flag,title:t.name}),r.a.createElement(U.a,null,r.a.createElement(B,{variant:"h6",component:"p",fontFamily:"Nunito Sans",className:n.bolder},t.name),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:n.bold},"Population:")," ",r.a.createElement($.a,{value:t.population,displayType:"text",thousandSeparator:!0})),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:n.bold},"Region:")," ",t.region),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:n.bold},"Capital:")," ",t.capital))))})),G=a(71),K=function(e){return r.a.createElement(G.a,Object.assign({speed:2,width:"100%",height:"100%",viewBox:"0 0 400 160",backgroundColor:"#e3e3e3",foregroundColor:"#ededed"},e),r.a.createElement("rect",{x:"330",y:"4",width:"65",height:"20"}),r.a.createElement("rect",{x:"1",y:"4",width:"130",height:"20"}),r.a.createElement("rect",{x:"1",y:"40",rx:"3",ry:"2",width:"85",height:"110"}),r.a.createElement("rect",{x:"104",y:"40",rx:"3",ry:"2",width:"85",height:"110"}),r.a.createElement("rect",{x:"207",y:"40",rx:"3",ry:"2",width:"85",height:"110"}),r.a.createElement("rect",{x:"310",y:"40",rx:"3",ry:"2",width:"85",height:"110"}))},Q="Filter by Region",V="Africa",X="Americas",Y="Asia",Z="Europe",ee="Oceania",te=function(){var e=A(),t=C(),a=t.countries,o=t.selectCountry,c=t.loading,i=Object(n.useState)(a),m=Object(l.a)(i,2),s=m[0],p=m[1],d=Object(n.useState)(Q),b=Object(l.a)(d,2),h=b[0],g=b[1],x=Object(n.useState)(""),f=Object(l.a)(x,2),E=f[0],y=f[1];Object(n.useEffect)((function(){return p(h===Q?a:a.filter((function(e){return e.region===h})))}),[h,a]),Object(n.useEffect)((function(){return p(a.filter((function(e){return e.name.toLowerCase().includes(E.toLowerCase())})))}),[E,a]);var w=Object(L.a)("(min-width: 1024px)");return r.a.createElement(P,{container:!0,justify:"space-between"},c?w?r.a.createElement(K,null):r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(R.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{container:!0,justify:"space-between",wrap:"wrap",alignItems:"center",className:e.searchAndFilter},r.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},r.a.createElement(D.a,{className:e.searchInput,id:"search-input",placeholder:"Search for a country...",disableUnderline:!0,value:E,onChange:function(e){return y(e.target.value)},startAdornment:r.a.createElement(_.a,{position:"start"},r.a.createElement(M.a,{fontSize:"small"}))})),r.a.createElement(z.a,{variant:"filled",disableUnderline:!0,value:h,onChange:function(e){return g(e.target.value)},className:e.filterSelect},r.a.createElement(H.a,{value:Q},"Filter by Region"),r.a.createElement(H.a,{value:V},"Africa"),r.a.createElement(H.a,{value:X},"America"),r.a.createElement(H.a,{value:Y},"Asia"),r.a.createElement(H.a,{value:Z},"Europe"),r.a.createElement(H.a,{value:ee},"Oceania"))),r.a.createElement(u.a,{container:!0,justify:"space-between",style:{height:"100%"}},s.length>0?s.map((function(e){return r.a.createElement(q,{country:e,key:e.alpha3Code,selectCountry:o})})):r.a.createElement(B,null,"No countries found."))))},ae=a(73),ne=a.n(ae),re=Object(F.a)((function(e){return{backButton:{backgroundColor:e.palette.background.second,color:e.palette.primary.main,boxShadow:"5px 5px 5px 0px ".concat(e.palette.boxShadow),height:"40px",padding:"10px 30px",textTransform:"capitalize"},borderButton:{backgroundColor:e.palette.background.second,color:e.palette.primary.main,boxShadow:"5px 5px 5px 0px ".concat(e.palette.boxShadow),margin:"5px",padding:"5px 30px"},backContainer:{marginBottom:"60px"},container:{maxHeight:"400px"},image:{width:"100%",height:"100%"},infoContainer:{maxHeight:"400px",padding:"0 5% 0 0"},bold:{fontWeight:"800"},rightInfoContainer:Object(I.a)({},e.breakpoints.down("md"),{margin:"30px 0px"})}})),oe=function(){var e,t,a=re(),n=C().selectedCountry,o=Object(L.a)("(max-width: 600px)");return n?r.a.createElement(P,{container:!0,direction:"column",alignItems:"flex-start"},r.a.createElement(u.a,{container:!0,className:a.backContainer},r.a.createElement(b.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(s.a,{className:a.backButton,startIcon:r.a.createElement(ne.a,null)},"Back"))),r.a.createElement(u.a,{container:!0,justify:"space-between"},r.a.createElement(u.a,(e={container:!0,item:!0,xl:12,sm:12,md:5,lg:5},Object(I.a)(e,"xl",5),Object(I.a)(e,"className",a.container),e),r.a.createElement("img",{src:n.flag,alt:"Country Flag",className:a.image})),r.a.createElement(u.a,(t={container:!0,item:!0,xl:12,sm:12,md:6,lg:6},Object(I.a)(t,"xl",6),Object(I.a)(t,"className",a.infoContainer),Object(I.a)(t,"direction",o?"row":"column"),Object(I.a)(t,"justify","space-between"),t),r.a.createElement(u.a,{container:!0},r.a.createElement(B,{variant:"h5",component:"h1"},n.name),r.a.createElement(u.a,{container:!0,justify:"space-between"},r.a.createElement(u.a,null,r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:a.bold},"Native Name:")," ",n.nativeName),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:a.bold},"Population:")," ",r.a.createElement($.a,{value:n.population,displayType:"text",thousandSeparator:!0})),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:a.bold},"Region:")," ",n.region),r.a.createElement(B,null,r.a.createElement("span",{className:a.bold},"Sub Region:")," ",n.subregion),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:a.bold},"Capital:")," ",n.capital)),r.a.createElement(u.a,{className:a.rightInfoContainer},r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:a.bold},"Top Level Domain:")," ",n.topLevelDomain),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:a.bold},"Currencies:")," ",n.currencies.map((function(e){return e.name})).join(", ")),r.a.createElement(B,{variant:"body2"},r.a.createElement("span",{className:a.bold},"languages:")," ",n.languages.map((function(e){return e.name})).join(", "))))),r.a.createElement(u.a,{container:!0,wrap:"wrap",direction:o?"column":"row",alignItems:o?"flex-start":"center",style:{marginBottom:o&&"30px"}},r.a.createElement(B,{className:a.bold},"Border Countries:"),n.borders.map((function(e){return r.a.createElement(s.a,{key:e.alpha3Code,className:a.borderButton},e.name)})))))):r.a.createElement(h.a,{to:"/"})},ce=Object(i.a)({typography:{fontFamily:["Nunito Sans","sans-serif"].join(","),fontWeightRegular:300,fontWeightMedium:600},palette:{primary:{main:"hsl(0, 0%, 100%)"},background:{main:"hsl(207, 26%, 17%)",second:"hsl(209, 23%, 22%)"},boxShadow:"rgba(18,18,18,0.57)"}}),le=Object(i.a)({typography:{fontFamily:["Nunito Sans","sans-serif"].join(","),fontWeightRegular:300,fontWeightMedium:600},palette:{primary:{main:"hsl(200, 15%, 8%)"},background:{main:"hsl(0, 0%, 98%)",second:"#fff"},boxShadow:"rgba(227,227,227,1)"}}),ie=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],o=t[1];return r.a.createElement(m.a,{theme:a?le:ce},r.a.createElement(O,null,r.a.createElement(b.a,null,r.a.createElement(N,{container:!0},r.a.createElement(S,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(b.b,{to:"/d3_challenge/",style:{textDecoration:"none"}},r.a.createElement(B,{style:{fontWeight:"800"}},"Where in the world?")),r.a.createElement(s.a,{style:{textTransform:"capitalize",color:a?le.palette.primary.main:ce.palette.primary.main},onClick:function(){return o((function(e){return!e}))},startIcon:r.a.createElement(d.a,{fontSize:"small"})},"Dark Mode")),r.a.createElement(u.a,{container:!0},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/d3_challenge/"},r.a.createElement(te,null)),r.a.createElement(h.b,{exact:!0,path:"/d3_challenge/country"},r.a.createElement(oe,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a(113)},87:function(e,t,a){},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.fdd3f426.chunk.js.map