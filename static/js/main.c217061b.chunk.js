(this["webpackJsonpecommerce-clothing"]=this["webpackJsonpecommerce-clothing"]||[]).push([[0],{20:function(e,t,i){e.exports=i(39)},25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(17),c=i.n(r),l=(i(25),i(26),i(1)),o=i(2),s=i(4),m=i(3),p=i(5),b=(i(27),i(10)),u=(i(28),i(29),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.imageUrl;return a.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(e,")")}})}}]),t}(n.Component)),h=i(9),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,i=e.imageUrl,n=e.linkUrl,r=e.history,c=e.match;return a.a.createElement("div",{className:"menu-item",onClick:function(){return r.push("".concat(c.url).concat(n))}},a.a.createElement(u,{imageUrl:i}),a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title"},t),a.a.createElement("span",{className:"subtitle"},"Shop Now")))}}]),t}(n.Component),d=Object(h.f)(g),f=(i(35),function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/clothes"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/shoes"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},i}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.sections;return a.a.createElement("div",{className:"directory-menu"},e.map((function(e){var t=e.id,i=Object(b.a)(e,["id"]);return a.a.createElement(d,Object.assign({key:t},i))})))}}]),t}(n.Component)),v=function(e){function t(e){var i;return Object(l.a)(this,t),i=Object(s.a)(this,Object(m.a)(t).call(this,e)),console.log(i.props),i}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"homepage"},a.a.createElement(f,null))}}]),t}(n.Component),k=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],j=(i(36),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,i=e.imageUrl,n=e.price;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},t),a.a.createElement("span",{className:"price"},n)))}}]),t}(n.Component)),O=(i(37),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,i=e.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},t),a.a.createElement("div",{className:"preview"},i.filter((function(e,t){return t<4})).map((function(e){var t=e.id,i=Object(b.a)(e,["id"]);return a.a.createElement(j,Object.assign({key:t},i))}))))}}]),t}(n.Component)),E=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={collections:k},i}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.collections;return a.a.createElement("div",null,e.map((function(e){var t=e.id,i=Object(b.a)(e,["id"]);return a.a.createElement(O,Object.assign({key:t},i))})))}}]),t}(n.Component),y=i(8);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var N=a.a.createElement("title",null,"Group"),B=a.a.createElement("desc",null,"Created with Sketch."),C=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),T=function(e){var t=e.svgRef,i=e.title,n=w(e,["svgRef","title"]);return a.a.createElement("svg",U({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===i?N:i?a.a.createElement("title",null,i):null,B,C)},J=a.a.forwardRef((function(e,t){return a.a.createElement(T,U({svgRef:t},e))})),W=(i.p,i(38),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"header"},a.a.createElement(y.b,{to:"/",className:"logo-container"},a.a.createElement(J,{className:"logo"})),a.a.createElement("div",{className:"options"},a.a.createElement(y.b,{className:"option",to:"/shop"}," SHOP "),a.a.createElement(y.b,{className:"option",to:"/contact"}," CONTACT ")))}}]),t}(n.Component)),x=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Contact Page"))};var S=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(W,null),a.a.createElement(h.c,null,a.a.createElement(h.a,{exact:!0,path:"/",component:v}),a.a.createElement(h.a,{exact:!0,path:"/shop",component:E}),a.a.createElement(h.a,{exact:!0,path:"/contact",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y.a,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.c217061b.chunk.js.map