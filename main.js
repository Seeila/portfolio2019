!function(e){function t(t){for(var r,o,l=t[0],s=t[1],c=t[2],m=0,d=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([53,1]),n()}([,,,,,,,,,function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(2),o=n.n(a),l=n(1).e.h2.withConfig({displayName:"Titlestyle__TitleTag"})(["padding:0.8125rem 0.5rem;font-size:4rem;font-family:",";color:#fff;line-height:1;display:inline-flex;align-items:center;background:",";transition:all 0.25s ease-in-out;"],(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.primary})),s=function(e){return i.a.createElement(l,{className:e.className},e.title)};s.prototype={title:o.a.string.isRequired,className:o.a.string};t.a=s},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(8),i=n.n(r),a=n(0),o=n.n(a),l=Object(a.createContext)(null);t.a=function(e){var t=e.children,n=Object(a.useState)(window.innerWidth),r=i()(n,2),s=r[0],c=r[1];return Object(a.useEffect)((function(){var e=function(){return c(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),o.a.createElement(l.Provider,{value:s},t)};var s=function(){return Object(a.useContext)(l)}},,,,,,,,function(e){e.exports=JSON.parse('[{"id":"cfl","name":"CFL","year":"2018-2019","client":"Société Nationale des Chemins de Fer Luxembourgeois","url":"https://www.cfl.lu","technologies":["HTML","SASS","JS","Webpack","PHP","Bootstrap","jQuery"],"challenges":["128 different pages","3 different web sites with shared styles and functions","support of legacy browsers","accessibility","crossbrowser printing styles","99% of the time, the only developper on the front-end part of the project"],"photos":{"thumb":{"default":"./img/cfl-thumb.png","retina":"./img/cfl-thumb2x.png"},"project":["./img/cfl-home.png","./img/cfl-home-mobile.png","./img/cfl-home-tablet.png"]},"colors":{"primary":"#CC0033","primaryLight":"#FCADA9"}},{"id":"aea","name":"A&A","year":"2019","client":"a&a gérence","url":"https://www.aea.lu","technologies":["HTML","SASS","JS","Webpack","PHP","Drupal","Twig","Bootstrap","jQuery"],"challenges":["Learning Drupal and Twig ecosystem"],"photos":{"thumb":{"default":"./img/aea-thumb.png","retina":"./img/aea-thumb2x.png"},"project":["./img/aea-home.png","./img/aea-home-mobile.png","./img/aea-home-tablet.png"]},"colors":{"primary":"#006083","primaryLight":"#86C2D2"}},{"id":"aeo","name":"A&O","year":"2019","client":"Allen & Overy Luxemburg","url":"","technologies":["HTML","SASS","JS","React Native","Drupal","Twig","Bootstrap","jQuery"],"challenges":["Intranet website and internal app","Learning the difference between React & React Native"],"photos":{"thumb":{"default":"./img/aeo-thumb.png","retina":"./img/aeo-thumb2x.png"},"project":["./img/aeo-home.png","./img/aeo-home-mobile.png","./img/aeo-home-tablet.png"]},"colors":{"primary":"#B23427","primaryLight":"#EA9289"}},{"id":"raiffeisen","name":"Raiffeisen","year":"2019","client":"Raiffeisen Luxembourg","photos":{"thumb":{"default":"./img/cfl-thumb.png","retina":"./img/cfl-thumb2x.png"},"slider":[{"type":"video","url":"./img/cfl-home.mp4"},{"type":"image","url":"./img/cfl_home.png"}]},"technologies":["HTML","LESS","JS","Drupal","Bootstrap 3","JQuery"],"challenges":["Working at the client location with extremely limited tools","No access to Github, Figma and Browserstack","Using old version of Bootstrap","Learning LESS on the fly"],"colors":{"primary":"#006083","primaryLight":"#86C2D2"}},{"id":"mytrainer","name":"My Trainer And Me","year":"2019","client":"My Trainer And Me","photos":{"thumb":{"default":"./img/cfl-thumb.png","retina":"./img/cfl-thumb2x.png"},"slider":[{"type":"video","url":"./img/cfl-home.mp4"},{"type":"image","url":"./img/cfl_home.png"}]},"technologies":["HTML","SASS","JS","Webpack","Drupal","Twig","Bootstrap","JQuery"],"challenges":["Installing the project on Drupal myself with the hooks instead of the Back-End Developpers doing it"],"colors":{"primary":"#006083","primaryLight":"#86C2D2"}}]')},,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){var r=n(0),i=n.n(r),a=n(7),o=n(4),l=n(1),s=n(12),c=n(48),u=n(45),m=n(50),d=n(49),p=n(51),f=n(47);n(80);t.a=function(){return i.a.createElement(a.a,{basename:e.env.PUBLIC_URL},i.a.createElement(l.b,{theme:f.a},i.a.createElement(d.a,null),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement(p.a,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/",component:c.a}),i.a.createElement(o.a,{exact:!0,path:"/project/:id",component:m.a}),i.a.createElement(o.a,{exact:!0,path:"/about",component:u.a}))))))}}).call(this,n(29))},,,,,,,,,function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(){return i.a.createElement("h1",null,"About")}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={color:{primary:"#EA6616",primaryLight:"#FFBC93",secondary:"#260914",dark:"#2F2E2E"},font:{raleway:"'Raleway', 'Roboto', Helvetica, Arial, sans-serif",poppins:"'Poppins', 'Roboto', Helvetica, Arial, sans-serif"},bp:{phones:568,tablets:767,desktops:1023,largeDesktops:1200},container:1920}},function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(10),o=n.n(a),l=n(13),s=n.n(l),c=n(8),u=n.n(c),m=function(){return i.a.createElement("main",{className:"loader"},i.a.createElement("h1",{className:"read-only"},"Sarah Hick"),i.a.createElement("span",{className:"loaderFirstName"},"Sarah"),i.a.createElement("span",{className:"loaderLastName"},"Hick"),i.a.createElement("p",null,"Front-ENd Developper"))},d=n(37),p=n.n(d),f=n(14),h=n.n(f),g=n(15),y=n.n(g),b=n(16),w=n.n(b),v=n(18),x=n.n(v),E=n(17),j=n.n(E),k=n(19),S=n.n(k),O=n(21),P=n.n(O),C=n(2),_=n.n(C),L=n(38),N=(n(73),function(e){return i.a.createElement("svg",{viewBox:"0 0 11 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{transform:"matrix(1,0,0,1,-100.65,-2969.05)"},i.a.createElement("g",{transform:"matrix(1,0,0,1,-5908.75,2498.26)"},i.a.createElement("g",{transform:"matrix(1,0,0,1,5899.75,-2489.26)"},i.a.createElement("path",{d:"M115.53,2968.75L110.185,2963.25C109.458,2962.51 109.474,2961.31 110.222,2960.58C110.97,2959.85 112.167,2959.87 112.895,2960.62L119.339,2967.24C119.744,2967.66 119.918,2968.21 119.865,2968.75C119.918,2969.28 119.744,2969.84 119.339,2970.25L112.895,2976.88C112.167,2977.63 110.97,2977.64 110.222,2976.91C109.474,2976.19 109.458,2974.99 110.185,2974.24L115.53,2968.75Z",fill:e.colors.color.primary})))))});N.prototype={colors:_.a.object.isRequired};var I=N,T=n(1),R=T.e.button.withConfig({displayName:"SliderButtonstyles__SliderButtonStyles"})([":focus{outline:none;}&&.control-prev,&&.control-next{svg{width:0.75rem;}&.control-disabled{opacity:0.4;display:inline-block;}}&&.control-prev{svg{transform:scaleX(-1);}}@media (min-width:","){padding:0 0.5rem;}"],(function(e){return"".concat(e.theme.bp.tablets,"px")})),M=function(e){var t=e.onClickHandler,n=e.hasFollowingSlide,r=e.label,a=e.isPrev,o=e.colors,l="boolean"==typeof n?n:n(a);return i.a.createElement(R,{type:"button",onClick:t,title:r,className:"control-arrow ".concat(a?"control-prev":"control-next"," ").concat(l?"":"control-disabled")},i.a.createElement(I,{colors:o}))};M.propTypes={onClickHandler:_.a.func.isRequired,hasFollowingSlide:_.a.oneOfType([_.a.func,_.a.bool]),label:_.a.string.isRequired,isPrev:_.a.bool.isRequired,colors:_.a.object.isRequired};var D=M,A=n(7),z=Object(T.e)(A.b).withConfig({displayName:"Stretched-linkstyles__LinkTag"})(["visibility:",';&::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:"auto";z-index:1;}'],(function(e){return e.srOnly?"hidden":""})),H=i.a.forwardRef((function(e,t){return i.a.createElement(z,{to:"/project/".concat(e.id),"aria-label":e.ariaLabel,ref:t})}));H.displayName="ImgWithOverflowingBg",H.prototype={id:_.a.string.isRequired,ariaLabel:_.a.string.isRequired};var B=H,F=n(9),q=T.e.div.withConfig({displayName:"ImgWithOverflowinBgstyle__ImgContainer"})(['width:100%;padding-top:100%;position:relative;overflow:hidden;&::before{content:"";width:calc(100% - 1.25rem);height:100%;position:absolute;top:1.25rem;left:0;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.theme.color.primary})),W=T.e.img.withConfig({displayName:"ImgWithOverflowinBgstyle__Img"})(["width:calc(100% - 1.25rem);height:calc(100% - 1.25rem);position:absolute;top:0;left:1.25rem;object-fit:cover;"]),J=i.a.forwardRef((function(e,t){return i.a.createElement(q,{className:e.className,ref:t},i.a.createElement(W,{src:e.imgSrc,alt:e.imgAlt}))}));J.displayName="ImgWithOverflowingBg",q.prototype={className:_.a.string.isRequired},W.prototype={imgSrc:_.a.string.isRequired,imgAlt:_.a.string};var U=J,Q=T.e.section.withConfig({displayName:"ProjectMobilestyles__ProjectSection"})(["width:100%;max-width:",";position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:",";grid-gap:0 1.875rem;font-family:",";"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.title.length<=10?"repeat(8, minmax(1fr, 2.25rem))":"repeat(6, minmax(1fr, 2.25rem)) repeat(2, minmax(1fr, 3rem))"}),(function(e){return e.theme.font.poppins})),V=Object(T.e)(U).withConfig({displayName:"ProjectMobilestyles__ProjectImg"})(["grid-column:1 / span 3;grid-row:1 / span 7;"]),G=T.e.p.withConfig({displayName:"ProjectMobilestyles__ProjectIndex"})(["grid-column:4;grid-row:5;padding-left:0.875rem;position:relative;font-size:1.5rem;line-height:1;letter-spacing:3px;text-align:left;color:",';transition:all 0.25s ease-in-out;&::before{content:"";width:100%;height:0.25rem;position:absolute;right:100%;bottom:0.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.primary})),Y=T.e.div.withConfig({displayName:"ProjectMobilestyles__ProjectTitle"})(["grid-column:2 / span 3;grid-row:7 / span 2;display:flex;align-items:center;z-index:2;h2{width:100%;font-size:",";}@media (min-width:","){h2{font-size:",";}}"],(function(e){return e.title.length>=4?"2.4rem":"4rem"}),(function(e){return"".concat(e.theme.bp.phones,"px")}),(function(e){return e.title.length>=4?"4.5rem":"6rem"})),X=function(e){return i.a.createElement(Q,{title:e.slide.name,className:e.className+" project"},i.a.createElement(Y,{title:e.slide.name},i.a.createElement(F.a,{title:e.slide.name})),i.a.createElement(V,{imgSrc:" ".concat(e.slide.photos.thumb.default),imgAlt:""}),i.a.createElement(G,null,e.slideIndex+1>=10?e.slideIndex+1:"0".concat(e.slideIndex+1)),i.a.createElement(B,{id:e.slide.id,ariaLabel:"See ".concat(e.slide.name," details"),srOnly:!0}))};X.propTypes={slide:_.a.object.isRequired,slideIndex:_.a.number.isRequired};var Z=X,K=T.e.p.withConfig({displayName:"Paginationstyles__PaginationTag"})(["width:5rem;height:5rem;padding:0.75rem;font-family:",";font-size:1.125rem;letter-spacing:3px;text-align:right;color:#fff;background-color:",';span{display:block;text-align:left;&::after{content:"";position:relative;display:block;width:100%;height:2px;background:#fff;}}@media (min-width:',"){width:8.75rem;height:8.75rem;padding:1.5rem;font-size:1.875rem;}@media (min-width:","){width:9.875rem;height:9.875rem;font-size:2.25rem;}"],(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.primary}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),$=function(e){return i.a.createElement(K,{className:e.className,"aria-label":"slide ".concat(e.activeIndex+1," on ").concat(e.sliderLenght)},i.a.createElement("span",null,e.activeIndex+1>=10?e.activeIndex+1:"0".concat(e.activeIndex+1))," ",e.sliderLenght>=10?e.sliderLenght:"0".concat(e.sliderLenght))};$.propTypes={activeIndex:_.a.number.isRequired,sliderLenght:_.a.number.isRequired};var ee=$,te=T.e.section.withConfig({displayName:"MobileSliderstyles__SliderStyle"})(['width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;position:relative;.slider-container{position:relative;&::before{content:"";width:50%;height:70%;position:absolute;top:0%;left:0;background:',";transform:translate(100%,43%);transition:all 0.25s ease-in-out;z-index:-1;}}.slider-container,.carousel{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-gap:0 1.875rem;}.carousel{grid-template-rows:6fr 1fr;&-root{padding-top:2.5rem;grid-column:1 / span 4;grid-row:1;}}.slider-wrapper{grid-column:1 / span 4;overflow:visible;}.slide{background:none;}.control-arrow{&.control-prev,&.control-next{padding:0;position:relative;top:auto;right:auto;bottom:0;left:auto;grid-row:2;align-self:end;opacity:1;&::before{display:none;}:hover{background:none;}}&.control-prev{grid-column:1;justify-self:end;}&.control-next{grid-column:2;justify-self:start;left:-0.3rem;}}"],(function(e){return e.theme.color.primaryLight})),ne=Object(T.e)(ee).withConfig({displayName:"MobileSliderstyles__WorkSliderPagination"})(["grid-column:3;grid-row:1;z-index:2;transition:all 0.25s ease-in-out;"]);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ie=function(e){function t(){var e,n;h()(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=w()(this,(e=x()(t)).call.apply(e,[this].concat(i))),P()(j()(n),"state",{activeIndex:0,theme:{color:{primary:n.props.slides[0].colors.primary,primaryLight:n.props.slides[0].colors.primaryLight}}}),P()(j()(n),"handleSlideChanges",(function(e){if(n.state.activeIndex!==e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.theme);t.color.primary=n.props.slides[e].colors.primary,t.color.primaryLight=n.props.slides[e].colors.primaryLight,n.setState({activeIndex:e,theme:t})}})),n}return S()(t,e),y()(t,[{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=this.props.slides;return i.a.createElement(T.b,{theme:this.state.theme},i.a.createElement(te,null,i.a.createElement("div",{className:"slider-container"},i.a.createElement(ne,{activeIndex:t,sliderLenght:n.length}),i.a.createElement(L.Carousel,p()({},{showThumbs:!1,showIndicators:!1,showArrows:!0,swipeable:!0,emulateTouch:!0,showStatus:!1},{onChange:this.handleSlideChanges,renderArrowPrev:function(t,n,r){return i.a.createElement(D,{onClickHandler:t,hasFollowingSlide:n,label:r,isPrev:!0,colors:e.state.theme})},renderArrowNext:function(t,n,r){return i.a.createElement(D,{onClickHandler:t,hasFollowingSlide:n,label:r,isPrev:!1,colors:e.state.theme})}}),n&&n.map((function(e,t){return i.a.createElement(Z,{slide:e,slideIndex:t,key:"slide"+t})}))))))}}]),t}(i.a.Component);ie.propTypes={slides:_.a.array.isRequired};var ae,oe,le=Object(T.f)(ie),se=n(6),ce=n(11),ue=T.e.section.withConfig({displayName:"ProjectDesktopstyles__ProjectSection"})(["width:100%;max-width:",";position:relative;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:repeat(10,minmax(0,1fr));grid-gap:1.875rem;font-family:",";@media (min-width:","){grid-template-columns:repeat(12,minmax(0,1fr));}"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.theme.font.poppins}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),me=Object(T.e)(U).withConfig({displayName:"ProjectDesktopstyles__ProjectImg"})(["width:min(70vh,40rem,90%);padding-top:min(70vh,40rem,100%);margin-top:1vh;grid-column:2 / span 4;grid-row:3 / span 7;align-self:center;@media (min-width:","){grid-row:2 / span 8;grid-column:3 / span 5;}@media (orientation:portrait) and (min-width:","){grid-column:2 / span 7;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),de=T.e.p.withConfig({displayName:"ProjectDesktopstyles__ProjectIndex"})(["width:0;grid-column:4 / span 3;grid-row:7;align-self:end;color:",';font-size:2.25rem;line-height:0.8;letter-spacing:3px;transform-origin:left;overflow:hidden;z-index:-1;&::before{content:"";width:68%;height:0.25rem;margin-right:1rem;position:relative;bottom:0.25rem;display:inline-block;background:',";z-index:-1;}span{display:inline-block;transform:translateY(200%);}@media (min-width:","){grid-column:7 / span 5;}@media (min-width:","){grid-column:6 / span 5;&::before{width:86%;}}"],(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.primary}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),pe=T.e.div.withConfig({displayName:"ProjectDesktopstyles__ProjectTitle"})(["grid-column:4 / span 3;grid-row:5 / span 2;display:flex;align-items:center;overflow:hidden;z-index:1;h2{width:auto;font-size:",";}@media (min-width:","){grid-column:6 / span 4;grid-row:4 / span 3;h2{font-size:",";}}@media (orientation:portrait) and (min-width:","){grid-column:6 / span 5;h2{font-size:",";}}"],(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 5.5rem)":"clamp(4rem, 15.5vw, 11.5rem); "}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 4.75vw, 4.5rem)":"clamp(4rem, 9.5vw, 11.5rem); "}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 9.5vw, 4.5rem)":"clamp(4rem, 12.5vw, 11.5rem); "})),fe=n(22),he=function(){return ae||"undefined"!=typeof window&&(ae=window.gsap)&&ae.registerPlugin&&ae},ge=function(){(ae=he())?(ae.registerEase("_CE",Ee.create),oe=1):console.warn("Please gsap.registerPlugin(CustomEase)")},ye=function(e){return~~(1e3*e+(e<0?-.5:.5))/1e3},be=1,we=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,ve=/[cLlsSaAhHvVtTqQ]/g,xe=function e(t,n,r,i,a,o,l,s,c,u,m){var d,p=(t+r)/2,f=(n+i)/2,h=(r+a)/2,g=(i+o)/2,y=(a+l)/2,b=(o+s)/2,w=(p+h)/2,v=(f+g)/2,x=(h+y)/2,E=(g+b)/2,j=(w+x)/2,k=(v+E)/2,S=l-t,O=s-n,P=Math.abs((r-l)*O-(i-s)*S),C=Math.abs((a-l)*O-(o-s)*S);return u||(u=[{x:t,y:n},{x:l,y:s}],m=1),u.splice(m||u.length-1,0,{x:j,y:k}),(P+C)*(P+C)>c*(S*S+O*O)&&(d=u.length,e(t,n,p,f,w,v,j,k,c,u,m),e(j,k,x,E,y,b,l,s,c,u,m+1+(u.length-d))),u},Ee=function(){function e(e,t,n){oe||ge(),this.id=e,be&&this.setData(t,n)}var t=e.prototype;return t.setData=function(e,t){t=t||{};var n,r,i,a,o,l,s,c,u,m=(e=e||"0,0,1,1").match(we),d=1,p=[],f=[],h=t.precision||1,g=h<=1;if(this.data=e,(ve.test(e)||~e.indexOf("M")&&e.indexOf("C")<0)&&(m=Object(fe.b)(e)[0]),4===(n=m.length))m.unshift(0,0),m.push(1,1),n=8;else if((n-2)%6)throw"Invalid CustomEase";for(0==+m[0]&&1==+m[n-2]||function(e,t,n){n||0===n||(n=Math.max(+e[e.length-1],+e[1]));var r,i=-1*+e[0],a=-n,o=e.length,l=1/(+e[o-2]+i),s=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?function(e){var t,n=e.length,r=1e20;for(t=1;t<n;t+=6)+e[t]<r&&(r=+e[t]);return r}(e)+a:+e[o-1]+a);for(s=s?1/s:-l,r=0;r<o;r+=2)e[r]=(+e[r]+i)*l,e[r+1]=(+e[r+1]+a)*s}(m,t.height,t.originY),this.segment=m,a=2;a<n;a+=6)r={x:+m[a-2],y:+m[a-1]},i={x:+m[a+4],y:+m[a+5]},p.push(r,i),xe(r.x,r.y,+m[a],+m[a+1],+m[a+2],+m[a+3],i.x,i.y,1/(2e5*h),p,p.length-1);for(n=p.length,a=0;a<n;a++)s=p[a],c=p[a-1]||s,s.x>c.x||c.y!==s.y&&c.x===s.x||s===c?(c.cx=s.x-c.x,c.cy=s.y-c.y,c.n=s,c.nx=s.x,g&&a>1&&Math.abs(c.cy/c.cx-p[a-2].cy/p[a-2].cx)>2&&(g=0),c.cx<d&&(c.cx?d=c.cx:(c.cx=.001,a===n-1&&(c.x-=.001,d=Math.min(d,.001),g=0)))):(p.splice(a--,1),n--);if(o=1/(n=1/d+1|0),l=0,s=p[0],g){for(a=0;a<n;a++)u=a*o,s.nx<u&&(s=p[++l]),r=s.y+(u-s.x)/s.cx*s.cy,f[a]={x:u,cx:o,y:r,cy:0,nx:9},a&&(f[a-1].cy=r-f[a-1].y);f[n-1].cy=p[p.length-1].y-r}else{for(a=0;a<n;a++)s.nx<a*o&&(s=p[++l]),f[a]=s;l<p.length-1&&(f[a-1]=p[p.length-2])}return this.ease=function(e){var t=f[e*n|0]||f[n-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&ae.registerEase(this.id,this.ease),this},t.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,n,r){return new e(t,n,r).ease},e.register=function(e){ae=e,ge()},e.get=function(e){return ae.parseEase(e)},e.getSVGData=function(t,n){var r,i,a,o,l,s,c,u,m,d,p=(n=n||{}).width||100,f=n.height||100,h=n.x||0,g=(n.y||0)+f,y=ae.utils.toArray(n.path)[0];if(n.invert&&(f=-f,g=0),"string"==typeof t&&(t=ae.parseEase(t)),t.custom&&(t=t.custom),t instanceof e)r=Object(fe.a)(Object(fe.c)([t.segment],p,0,0,-f,h,g));else{for(r=[h,g],o=1/(c=Math.max(5,200*(n.precision||1))),u=5/(c+=2),m=ye(h+o*p),i=((d=ye(g+t(o)*-f))-g)/(m-h),a=2;a<c;a++)l=ye(h+a*o*p),s=ye(g+t(a*o)*-f),(Math.abs((s-d)/(l-m)-i)>u||a===c-1)&&(r.push(m,d),i=(s-d)/(l-m)),m=l,d=s;r="M"+r.join(",")}return y&&y.setAttribute("d",r),r},e}();he()&&ae.registerPlugin(Ee),Ee.version="3.3.3",se.a.registerPlugin(Ee);var je=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),a=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),c=Object(r.useRef)(),u=Object(r.useRef)();return Object(r.useEffect)((function(){return t.current=se.a.timeline({paused:!0}),Ee.create("easeOut","0.22, 0.61, 0.35, 1"),Ee.create("easeIn","0.55, 0.05, 0.67, 0.19"),Ee.create("easeInOut","0.64, 0.04, 0.35, 1"),t.current.add((n.current=se.a.timeline(),n.current.fromTo(c.current.firstChild,{duration:.1,ease:"none",yPercent:-200},{yPercent:0},0).fromTo(c.current,{width:"100%"},{duration:.2,ease:"easeIn",width:0},.2).fromTo(l.current,{width:"100%"},{duration:.5,ease:"easeInOut",width:0},.2).fromTo(s.current,{x:0},{duration:.4,ease:"easeIn",x:-3e3},.5).to(o.current,{zIndex:-100}),n.current),"leaveScene"),t.current.add((a.current=se.a.timeline(),a.current.to(o.current,{zIndex:100}).fromTo(s.current,{x:-3e3},{duration:.5,ease:"easeOut",x:0},1).fromTo(l.current,{width:0},{duration:.5,ease:"easeInOut",width:"100%"},1.3).fromTo(c.current,{width:0},{duration:.3,ease:"easeInOut",width:"100%"},1.1).fromTo(c.current.firstChild,{yPercent:200},{duration:.2,ease:"easeOut",yPercent:-200},1.6),a.current),"enterScene"),function(){t.current.kill(),n.current.kill(),a.current.kill()}}),[]),Object(r.useEffect)((function(){e.isActive?t.current.seek("enterScene").play():t.current.tweenFromTo("leaveScene","enterScene").play()}),[e.isActive]),i.a.createElement(ue,{className:e.className+" project",ref:o,id:e.slide.id},i.a.createElement(pe,{title:e.slide.name,ref:l},i.a.createElement(F.a,{title:e.slide.name})),i.a.createElement(me,{imgSrc:" ".concat(e.slide.photos.thumb.default),imgAlt:"",ref:s}),i.a.createElement(de,{ref:c},i.a.createElement("span",null,e.slideIndex+1>=10?e.slideIndex+1:"0".concat(e.slideIndex+1))),i.a.createElement(B,{id:e.slide.id,ariaLabel:"See ".concat(e.slide.name," details"),srOnly:!0,ref:u,isActive:e.isActive}))};je.propTypes={slide:_.a.object.isRequired,slideIndex:_.a.number.isRequired,isActive:_.a.bool.isRequired};var ke=je,Se=T.e.div.withConfig({displayName:"DesktopSliderstyles__SliderContainer"})(['width:100vw;position:relative;overflow:hidden;&::before{content:"";width:100%;max-width:49rem;height:69.5vh;position:fixed;top:20.4vh;left:33.6vw;display:block;background:',";transition:background-color 0.25s ease-in-out;z-index:-1;}@media (min-width:","){&::before{width:calc(100% / 12 * 5);height:79.3vh;top:10.3vh;}}@media (min-width:","){&::before{left:",";}}"],(function(e){return e.theme.color.primaryLight}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(50vw - ".concat(e.theme.container,"px/6)")})),Oe=Object(T.e)(ke).withConfig({displayName:"DesktopSliderstyles__SliderProject"})(["width:100%;height:100%;max-height:1080px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);"]),Pe=Object(T.e)(ee).withConfig({displayName:"DesktopSliderstyles__WorkSliderPagination"})(["position:fixed;top:13.5vh;right:5.5vw;z-index:10;transition:background-color 0.25s ease-in-out;@media (min-width:","){top:17.5vh;right:18.5vw;}@media (min-width:","){right:",";}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(50vw - ".concat(e.theme.container,"px/4 - ").concat(e.theme.container,"px/28)")})),Ce=T.e.div.withConfig({displayName:"DesktopSliderstyles__SliderButtons"})(["position:fixed;bottom:10vh;left:14vw;z-index:100;@media (min-width:","){display:none;}@media (orientation:portrait) and (min-width:","){bottom:20vh;left:8vw;}"],(function(e){return"".concat(e.theme.bp.largeDesktops,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}));se.a.registerPlugin(ce.a),se.a.core.globals("ScrollTrigger",ce.a);var _e=function(e){function t(e){var n;return h()(this,t),(n=w()(this,x()(t).call(this,e))).timeOut=0,n.isUnMounted=!1,n.state={slides:null,currentSlide:null,activeIndex:0,theme:{color:{primary:n.props.slides[0].colors.primary,primaryLight:n.props.slides[0].colors.primaryLight}}},n}return S()(t,e),y()(t,[{key:"componentDidMount",value:function(){var e=this,t=se.a.utils.toArray(".project");this.setState({slides:t,currentSlide:t[0]},(function(){se.a.set(".slider-container",{height:100*t.length+"vh"}),e.animateSlides()}))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut),this.timeOut=0,this.isUnMounted=!0,this.state.slides.forEach((function(e,t){ce.a.getById("slide".concat(t)).kill()}))}},{key:"animateSlides",value:function(){var e=this;this.state.slides.forEach((function(t,n){ce.a.create({start:function(){return(n-.5)*innerHeight},end:function(){return(n+.5)*innerHeight},onUpdate:function(r){return r.isActive&&e.updateSlider(t,n)},id:"slide".concat(n)}).refresh()}))}},{key:"updateSlider",value:function(e,t){var n=this.state.currentSlide;e!==n&&this.updateTheme(n,t,e)}},{key:"updateTheme",value:function(e,t,n){var r=this,i={color:{primary:this.props.slides[t].colors.primary,primaryLight:this.props.slides[t].colors.primaryLight}};this.isUnMounted||this.setState({currentSlide:n,activeIndex:t},(function(){r.timeOut=setTimeout((function(){r.setState({theme:i})}),1e3)}))}},{key:"onClickHandler",value:function(e){this.hasFollowingSlide(e)&&window.scrollTo({top:e?(this.state.activeIndex-1)*window.innerHeight:(this.state.activeIndex+1)*window.innerHeight})}},{key:"hasFollowingSlide",value:function(e){return!!(e&&this.state.activeIndex-1>=0)||!e&&this.state.activeIndex+1<this.props.slides.length}},{key:"render",value:function(){var e=this,t=this.state,n=t.theme,r=t.activeIndex,a=this.props.slides;return i.a.createElement(T.b,{theme:n},i.a.createElement(Se,null,i.a.createElement(Pe,{activeIndex:r,sliderLenght:a.length}),i.a.createElement("div",{className:"slider-container"},a&&a.map((function(e,t){return i.a.createElement(Oe,{slide:e,slideIndex:t,key:"slide"+t,isActive:r==t})}))),i.a.createElement(Ce,null,i.a.createElement(D,{onClickHandler:function(){return e.onClickHandler(!0)},hasFollowingSlide:function(){return e.hasFollowingSlide(!0)},label:"Prevous work",isPrev:!0,colors:this.state.theme}),i.a.createElement(D,{onClickHandler:function(){return e.onClickHandler(!1)},hasFollowingSlide:function(){return e.hasFollowingSlide(!1)},label:"Next work",isPrev:!1,colors:this.state.theme}))))}}]),t}(i.a.Component);_e.propTypes={slides:_.a.array.isRequired};var Le=_e,Ne=n(12),Ie=n(20),Te=function(){var e=Object(r.useState)(!0),t=u()(e,2),n=t[0],a=t[1],l=Object(r.useState)([]),c=u()(l,2),d=c[0],p=c[1],f=Object(r.useContext)(T.a),h=Object(Ne.b)();function g(){return(g=s()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){a(!1)}),0),e.next=3,p(Ie||[]);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),n||0==d.length?i.a.createElement(m,null):h<f.bp.tablets?i.a.createElement(le,{slides:d}):i.a.createElement(Le,{slides:d})};t.a=function(){return i.a.createElement(r.Fragment,null,i.a.createElement(Te,null))}},function(e,t,n){"use strict";var r=n(46),i=n.n(r),a=n(1),o=n.p+"fonts/Raleway-Regular.woff2",l=n.p+"fonts/Raleway-Regular.woff",s=n.p+"fonts/Raleway-Regular.ttf",c=n.p+"fonts/Poppins-Bold.woff2",u=n.p+"fonts/Poppins-Bold.woff",m=n.p+"fonts/Poppins-Bold.ttf",d=n.p+"fonts/Poppins-Medium.woff2",p=n.p+"fonts/Poppins-Medium.woff",f=n.p+"fonts/Poppins-Medium.ttf",h=Object(a.d)(['@font-face{font-family:"Raleway";src:url(',') format("woff2"),url(',') format("woff"),url(',') format("ttf");font-weight:normal;font-style:normal;}@font-face{font-family:"Poppins";src:url(',') format("woff2"),url(',') format("woff"),url(',') format("ttf");font-weight:bold;font-style:normal;}@font-face{font-family:"Poppins";src:url(',') format("woff2"),url(',') format("woff"),url(',') format("ttf");font-weight:500;font-style:normal;}'],o,l,s,c,u,m,d,p,f);function g(){var e=i()(["\n    ","\n\n    * {\n        box-sizing: border-box;\n    }\n\n    html {\n        font-size: 16px;\n    }\n\n    body {\n        width: 100%;\n        overflow-x: hidden;\n        font-family: ",";\n        color: ",";\n        font-size: 1rem;\n    }\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        vertical-align: baseline;\n        text-align: left;\n    }\n\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n\n\n    a {\n        font-family: ",";\n        text-decoration: none;\n    }\n\n    ol, ul {\n\tlist-style: none;\n}\n\nbutton {\n    border: none;\n    background: none;\n    color: ",";\n}\n"]);return g=function(){return e},e}n.d(t,"a",(function(){return y}));var y=Object(a.c)(g(),h,(function(e){return e.theme.font.raleway}),(function(e){return e.theme.color.dark}),(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.primary}))},function(e,t,n){"use strict";var r=n(10),i=n.n(r),a=n(13),o=n.n(a),l=n(8),s=n.n(l),c=n(0),u=n.n(c),m=n(1),d=n(9),p=m.e.main.withConfig({displayName:"ProjectDetailsstyles__Main"})(["width:100%;max-width:",";margin:auto;padding:0 1rem;@media (min-width:","){display:flex;}"],(function(e){return e.theme.container}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),f=Object(m.e)(d.a).withConfig({displayName:"ProjectDetailsstyles__ProjectTitle"})(["margin:3.75rem 0 0.5rem;"]),h=m.e.h3.withConfig({displayName:"ProjectDetailsstyles__ProjectCategoryTitle"})(["margin-top:1.5rem;font-family:",";font-size:1.125rem;font-weight:500;"],(function(e){return e.theme.font.poppins})),g=function(e){var t=e.project,n={color:{primary:t.colors.primary,primaryLight:t.colors.primaryLight}};return u.a.createElement(m.b,{theme:n},u.a.createElement(p,null,u.a.createElement("section",null,u.a.createElement(f,{title:t.name}),u.a.createElement(h,null,"Year"),u.a.createElement("p",null,t.year),u.a.createElement(h,null,"Client"),u.a.createElement("p",null,t.client),u.a.createElement(h,null,"Technologies"),u.a.createElement("p",null,t.technologies.map((function(e,n){return n==t.technologies.length-1?e:"".concat(e,", ")}))),u.a.createElement(h,null,"Challenges"),u.a.createElement("ul",null," ",t.challenges.map((function(e,t){return u.a.createElement("li",{key:"challenge-".concat(t)},e)}))),u.a.createElement("a",{href:t.url,target:"_blank",rel:"noreferrer"},"Visit ".concat(t.name,"'s website")))))},y=n(20);t.a=function(e){var t=e.match.params.id,n=Object(c.useState)(null),r=s()(n,2),a=r[0],l=r[1],m=Object(c.useState)(!0),d=s()(m,2),p=d[0],f=d[1];return Object(c.useEffect)((function(){function e(){return(e=o()(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.find((function(e){return e.id==t})),e.next=3,l(n||{});case 3:f(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),p?u.a.createElement("h1",null,"Loading"):u.a.createElement(g,{project:a})}},function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(7),o=n(1),l=o.e.nav.withConfig({displayName:"Navstyles__NavTag"})(["width:100%;max-width:",";margin:auto;padding:0.875rem;position:fixed;left:0;top:0;right:0;display:flex;justify-content:space-between;align-items:center;font-weight:500;z-index:9999;a{color:",";}@media (min-width:","){padding:3rem;font-size:1.125rem;}"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.theme.color.dark}),(function(e){return"".concat(e.theme.bp.tablets,"px")})),s=Object(o.e)(a.b).withConfig({displayName:"Navstyles__Logo"})(["font-family:",";text-transform:uppercase;color:",";line-height:0.9;font-weight:bold;span{display:block;font-size:1.175rem;letter-spacing:3px;}@media (min-width:","){font-size:1.125rem;span{font-size:1.35rem;}}"],(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.secondary}),(function(e){return"".concat(e.theme.bp.tablets,"px")}));t.a=function(){return i.a.createElement(l,null,i.a.createElement(s,{to:"","aria-label":"home"},"Sarah ",i.a.createElement("span",null,"Hick")),i.a.createElement(a.b,{to:"/about"},"About"))}},,function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(24),o=n.n(a),l=n(36);o.a.render(i.a.createElement(l.a,null),document.getElementById("root"))},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var r={"./aea-home-mobile.png":81,"./aea-home-tablet.png":82,"./aea-home.png":83,"./aea-thumb.png":84,"./aea-thumb2x.png":85,"./aeo-thumb.png":86,"./aeo-thumb2x.png":87,"./arrow.svg":88,"./cfl-home-mobile.png":89,"./cfl-home.png":90,"./cfl-thumb.png":91,"./cfl-thumb2x.png":92,"./cflhome-tablet.png":93};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=80},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/aea-home-mobile.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/aea-home-tablet.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/aea-home.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/aea-thumb.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/aea-thumb2x.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/aeo-thumb.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/aeo-thumb2x.png"},function(e,t,n){"use strict";n.r(t);var r=n(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=r.createElement("path",{d:"M5.88 8.7L.535 3.2A1.888 1.888 0 113.245.57l6.444 6.62c.405.42.579.97.526 1.51.053.53-.121 1.09-.526 1.5l-6.444 6.63c-.728.75-1.925.76-2.673.03a1.888 1.888 0 01-.037-2.67L5.88 8.7z",fill:"#c03"});t.default=function(e){return r.createElement("svg",i({viewBox:"0 0 11 18",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},e),a)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/cfl-home-mobile.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/cfl-home.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/cfl-thumb.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/cfl-thumb2x.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/cflhome-tablet.png"}]);
//# sourceMappingURL=main.js.map