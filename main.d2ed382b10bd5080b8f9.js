!function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],d=0,m=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+""+({1:"projects"}[e]||e)+".bundle.js"}(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([69,2]),n()}({69:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(19),a=n.n(o),l=n(6),s=n(7),c=n(1),u=n(8),d=n.n(u),m=Object(r.createContext)(null),p=function(e){var t=e.children,n=Object(r.useState)(window.innerWidth),o=d()(n,2),a=o[0],l=o[1];return Object(r.useEffect)((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i.a.createElement(m.Provider,{value:a},t)},f=n(20),h=n.n(f),g=n(31),y=n.n(g),b=function(){return i.a.createElement("main",{className:"loader"},i.a.createElement("h1",{className:"read-only"},"Sarah Hick"),i.a.createElement("span",{className:"loaderFirstName"},"Sarah"),i.a.createElement("span",{className:"loaderLastName"},"Hick"),i.a.createElement("p",null,"Front-ENd Developper"))},w=n(32),v=n.n(w),x=n(10),E=n.n(x),k=n(11),j=n.n(k),O=n(12),S=n.n(O),P=n(14),C=n.n(P),_=n(13),N=n.n(_),I=n(15),T=n.n(I),R=n(16),z=n.n(R),L=n(2),M=n.n(L),A=n(33),q=(n(61),function(e){return i.a.createElement("svg",{viewBox:"0 0 11 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{transform:"matrix(1,0,0,1,-100.65,-2969.05)"},i.a.createElement("g",{transform:"matrix(1,0,0,1,-5908.75,2498.26)"},i.a.createElement("g",{transform:"matrix(1,0,0,1,5899.75,-2489.26)"},i.a.createElement("path",{d:"M115.53,2968.75L110.185,2963.25C109.458,2962.51 109.474,2961.31 110.222,2960.58C110.97,2959.85 112.167,2959.87 112.895,2960.62L119.339,2967.24C119.744,2967.66 119.918,2968.21 119.865,2968.75C119.918,2969.28 119.744,2969.84 119.339,2970.25L112.895,2976.88C112.167,2977.63 110.97,2977.64 110.222,2976.91C109.474,2976.19 109.458,2974.99 110.185,2974.24L115.53,2968.75Z",fill:e.colors.color.primary})))))});q.prototype={colors:M.a.object.isRequired};var D=q,H=c.e.button.withConfig({displayName:"SliderButtonstyles__SliderButtonStyles"})([":focus{outline:none;}&&.control-prev,&&.control-next{svg{width:0.75rem;}&.control-disabled{opacity:0.4;display:inline-block;}}&&.control-prev{svg{transform:scaleX(-1);}}@media (min-width:","){padding:0 0.5rem;}"],(function(e){return"".concat(e.theme.bp.tablets,"px")})),F=function(e){var t=e.onClickHandler,n=e.hasFollowingSlide,r=e.label,o=e.isPrev,a=e.colors,l="boolean"==typeof n?n:n(o);return i.a.createElement(H,{type:"button",onClick:t,title:r,className:"control-arrow ".concat(o?"control-prev":"control-next"," ").concat(l?"":"control-disabled")},i.a.createElement(D,{colors:a}))};F.propTypes={onClickHandler:M.a.func.isRequired,hasFollowingSlide:M.a.oneOfType([M.a.func,M.a.bool]),label:M.a.string.isRequired,isPrev:M.a.bool.isRequired,colors:M.a.object.isRequired};var B=F,W=Object(c.e)(l.b).withConfig({displayName:"Stretched-linkstyles__LinkTag"})(["visibility:",';&::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:"auto";z-index:1;}'],(function(e){return e.srOnly?"hidden":""})),U=i.a.forwardRef((function(e,t){return i.a.createElement(W,{to:"/portfolio2020/".concat(e.id),"aria-label":e.ariaLabel,ref:t})}));U.displayName="ImgWithOverflowingBg",U.prototype={id:M.a.string.isRequired,ariaLabel:M.a.string.isRequired};var V=U,G=c.e.h2.withConfig({displayName:"Titlestyle__TitleTag"})(["padding:0.8125rem 0.5rem;font-size:4rem;font-family:",";color:#fff;line-height:1;display:flex;align-items:center;background:",";transition:all 0.25s ease-in-out;"],(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.primary})),J=function(e){return i.a.createElement(G,{className:e.className},e.title)};J.prototype={title:M.a.string.isRequired,className:M.a.string};var Y=J,Q=c.e.div.withConfig({displayName:"ImgWithOverflowinBgstyle__ImgContainer"})(['width:100%;padding-top:100%;position:relative;overflow:hidden;&::before{content:"";width:calc(100% - 1.25rem);height:100%;position:absolute;top:1.25rem;left:0;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.theme.color.primary})),X=c.e.img.withConfig({displayName:"ImgWithOverflowinBgstyle__Img"})(["width:calc(100% - 1.25rem);height:calc(100% - 1.25rem);position:absolute;top:0;left:1.25rem;object-fit:cover;"]),Z=i.a.forwardRef((function(e,t){return i.a.createElement(Q,{className:e.className,ref:t},i.a.createElement(X,{src:e.imgSrc,alt:e.imgAlt}))}));Z.displayName="ImgWithOverflowingBg",Q.prototype={className:M.a.string.isRequired},X.prototype={imgSrc:M.a.string.isRequired,imgAlt:M.a.string};var K=Z,$=c.e.section.withConfig({displayName:"ProjectMobilestyles__ProjectSection"})(["width:100%;max-width:",";position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:",";grid-gap:0 1.875rem;font-family:",";"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.title.length<=10?"repeat(8, minmax(1fr, 2.25rem))":"repeat(6, minmax(1fr, 2.25rem)) repeat(2, minmax(1fr, 3rem))"}),(function(e){return e.theme.font.poppins})),ee=Object(c.e)(K).withConfig({displayName:"ProjectMobilestyles__ProjectImg"})(["grid-column:1 / span 3;grid-row:1 / span 7;"]),te=c.e.p.withConfig({displayName:"ProjectMobilestyles__ProjectIndex"})(["grid-column:4;grid-row:5;padding-left:0.875rem;position:relative;font-size:1.5rem;line-height:1;letter-spacing:3px;text-align:left;color:",';transition:all 0.25s ease-in-out;&::before{content:"";width:100%;height:0.25rem;position:absolute;right:100%;bottom:0.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.primary})),ne=c.e.div.withConfig({displayName:"ProjectMobilestyles__ProjectTitle"})(["grid-column:2 / span 3;grid-row:7 / span 2;display:flex;align-items:center;z-index:2;h2{width:100%;font-size:",";}@media (min-width:","){h2{font-size:",";}}"],(function(e){return e.title.length>=4?"2.4rem":"4rem"}),(function(e){return"".concat(e.theme.bp.phones,"px")}),(function(e){return e.title.length>=4?"4.5rem":"6rem"})),re=function(e){return i.a.createElement($,{title:e.slide.name,className:e.className+" project"},i.a.createElement(ne,{title:e.slide.name},i.a.createElement(Y,{title:e.slide.name})),i.a.createElement(ee,{imgSrc:"../public/".concat(e.slide.photos.thumb.default),imgAlt:""}),i.a.createElement(te,null,e.slideIndex+1>=10?e.slideIndex+1:"0".concat(e.slideIndex+1)),i.a.createElement(V,{id:e.slide.id,ariaLabel:"See ".concat(e.slide.name," details"),srOnly:!0}))};re.propTypes={slide:M.a.object.isRequired,slideIndex:M.a.number.isRequired};var ie=re,oe=c.e.p.withConfig({displayName:"Paginationstyles__PaginationTag"})(["width:5rem;height:5rem;padding:0.75rem;font-family:",";font-size:1.125rem;letter-spacing:3px;text-align:right;color:#fff;background-color:",';span{display:block;text-align:left;&::after{content:"";position:relative;display:block;width:100%;height:2px;background:#fff;}}@media (min-width:',"){width:8.75rem;height:8.75rem;padding:1.5rem;font-size:1.875rem;}@media (min-width:","){width:9.875rem;height:9.875rem;font-size:2.25rem;}"],(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.primary}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),ae=function(e){return i.a.createElement(oe,{className:e.className,"aria-label":"slide ".concat(e.activeIndex+1," on ").concat(e.sliderLenght)},i.a.createElement("span",null,e.activeIndex+1>=10?e.activeIndex+1:"0".concat(e.activeIndex+1))," ",e.sliderLenght>=10?e.sliderLenght:"0".concat(e.sliderLenght))};ae.propTypes={activeIndex:M.a.number.isRequired,sliderLenght:M.a.number.isRequired};var le=ae,se=c.e.section.withConfig({displayName:"MobileSliderstyles__SliderStyle"})(['width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;position:relative;.slider-container{position:relative;&::before{content:"";width:50%;height:70%;position:absolute;top:0%;left:0;background:',";transform:translate(100%,43%);transition:all 0.25s ease-in-out;z-index:-1;}}.slider-container,.carousel{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-gap:0 1.875rem;}.carousel{grid-template-rows:6fr 1fr;&-root{padding-top:2.5rem;grid-column:1 / span 4;grid-row:1;}}.slider-wrapper{grid-column:1 / span 4;overflow:visible;}.slide{background:none;}.control-arrow{&.control-prev,&.control-next{padding:0;position:relative;top:auto;right:auto;bottom:0;left:auto;grid-row:2;align-self:end;opacity:1;&::before{display:none;}:hover{background:none;}}&.control-prev{grid-column:1;justify-self:end;}&.control-next{grid-column:2;justify-self:start;left:-0.3rem;}}"],(function(e){return e.theme.color.primaryLight})),ce=Object(c.e)(le).withConfig({displayName:"MobileSliderstyles__WorkSliderPagination"})(["grid-column:3;grid-row:1;z-index:2;transition:all 0.25s ease-in-out;"]);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var de=function(e){function t(){var e,n;E()(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=S()(this,(e=C()(t)).call.apply(e,[this].concat(i))),z()(N()(n),"state",{activeIndex:0,theme:{color:{primary:n.props.slides[0].colors.primary,primaryLight:n.props.slides[0].colors.primaryLight}}}),z()(N()(n),"handleSlideChanges",(function(e){if(n.state.activeIndex!==e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.theme);t.color.primary=n.props.slides[e].colors.primary,t.color.primaryLight=n.props.slides[e].colors.primaryLight,n.setState({activeIndex:e,theme:t})}})),n}return T()(t,e),j()(t,[{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=this.props.slides;return i.a.createElement(c.b,{theme:this.state.theme},i.a.createElement(se,null,i.a.createElement("div",{className:"slider-container"},i.a.createElement(ce,{activeIndex:t,sliderLenght:n.length}),i.a.createElement(A.Carousel,v()({},{showThumbs:!1,showIndicators:!1,showArrows:!0,swipeable:!0,emulateTouch:!0,showStatus:!1},{onChange:this.handleSlideChanges,renderArrowPrev:function(t,n,r){return i.a.createElement(B,{onClickHandler:t,hasFollowingSlide:n,label:r,isPrev:!0,colors:e.state.theme})},renderArrowNext:function(t,n,r){return i.a.createElement(B,{onClickHandler:t,hasFollowingSlide:n,label:r,isPrev:!1,colors:e.state.theme})}}),n&&n.map((function(e,t){return i.a.createElement(ie,{slide:e,slideIndex:t,key:"slide"+t})}))))))}}]),t}(i.a.Component);de.propTypes={slides:M.a.array.isRequired};var me,pe,fe=Object(c.f)(de),he=n(5),ge=n(9),ye=c.e.section.withConfig({displayName:"ProjectDesktopstyles__ProjectSection"})(["width:100%;max-width:",";position:relative;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:repeat(10,minmax(0,1fr));grid-gap:1.875rem;font-family:",";@media (min-width:","){grid-template-columns:repeat(12,minmax(0,1fr));}"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.theme.font.poppins}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),be=Object(c.e)(K).withConfig({displayName:"ProjectDesktopstyles__ProjectImg"})(["width:min(70vh,40rem,90%);padding-top:min(70vh,40rem,100%);margin-top:1vh;grid-column:2 / span 4;grid-row:3 / span 7;align-self:center;@media (min-width:","){grid-row:2 / span 8;grid-column:3 / span 5;}@media (orientation:portrait) and (min-width:","){grid-column:2 / span 7;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),we=c.e.p.withConfig({displayName:"ProjectDesktopstyles__ProjectIndex"})(["width:0;grid-column:4 / span 3;grid-row:7;align-self:end;color:",';font-size:2.25rem;line-height:0.8;letter-spacing:3px;transform-origin:left;overflow:hidden;z-index:-1;&::before{content:"";width:68%;height:0.25rem;margin-right:1rem;position:relative;bottom:0.25rem;display:inline-block;background:',";z-index:-1;}span{display:inline-block;transform:translateY(200%);}@media (min-width:","){grid-column:7 / span 5;}@media (min-width:","){grid-column:6 / span 5;&::before{width:86%;}}"],(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.primary}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),ve=c.e.div.withConfig({displayName:"ProjectDesktopstyles__ProjectTitle"})(["grid-column:4 / span 3;grid-row:5 / span 2;display:flex;align-items:center;overflow:hidden;z-index:1;h2{width:auto;font-size:",";}@media (min-width:","){grid-column:6 / span 4;grid-row:4 / span 3;h2{font-size:",";}}@media (orientation:portrait) and (min-width:","){grid-column:6 / span 5;h2{font-size:",";}}"],(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 5.5rem)":"clamp(4rem, 15.5vw, 11.5rem); "}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 4.75vw, 4.5rem)":"clamp(4rem, 9.5vw, 11.5rem); "}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 9.5vw, 4.5rem)":"clamp(4rem, 12.5vw, 11.5rem); "})),xe=n(17),Ee=function(){return me||"undefined"!=typeof window&&(me=window.gsap)&&me.registerPlugin&&me},ke=function(){(me=Ee())?(me.registerEase("_CE",_e.create),pe=1):console.warn("Please gsap.registerPlugin(CustomEase)")},je=function(e){return~~(1e3*e+(e<0?-.5:.5))/1e3},Oe=1,Se=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Pe=/[cLlsSaAhHvVtTqQ]/g,Ce=function e(t,n,r,i,o,a,l,s,c,u,d){var m,p=(t+r)/2,f=(n+i)/2,h=(r+o)/2,g=(i+a)/2,y=(o+l)/2,b=(a+s)/2,w=(p+h)/2,v=(f+g)/2,x=(h+y)/2,E=(g+b)/2,k=(w+x)/2,j=(v+E)/2,O=l-t,S=s-n,P=Math.abs((r-l)*S-(i-s)*O),C=Math.abs((o-l)*S-(a-s)*O);return u||(u=[{x:t,y:n},{x:l,y:s}],d=1),u.splice(d||u.length-1,0,{x:k,y:j}),(P+C)*(P+C)>c*(O*O+S*S)&&(m=u.length,e(t,n,p,f,w,v,k,j,c,u,d),e(k,j,x,E,y,b,l,s,c,u,d+1+(u.length-m))),u},_e=function(){function e(e,t,n){pe||ke(),this.id=e,Oe&&this.setData(t,n)}var t=e.prototype;return t.setData=function(e,t){t=t||{};var n,r,i,o,a,l,s,c,u,d=(e=e||"0,0,1,1").match(Se),m=1,p=[],f=[],h=t.precision||1,g=h<=1;if(this.data=e,(Pe.test(e)||~e.indexOf("M")&&e.indexOf("C")<0)&&(d=Object(xe.b)(e)[0]),4===(n=d.length))d.unshift(0,0),d.push(1,1),n=8;else if((n-2)%6)throw"Invalid CustomEase";for(0==+d[0]&&1==+d[n-2]||function(e,t,n){n||0===n||(n=Math.max(+e[e.length-1],+e[1]));var r,i=-1*+e[0],o=-n,a=e.length,l=1/(+e[a-2]+i),s=-t||(Math.abs(+e[a-1]-+e[1])<.01*(+e[a-2]-+e[0])?function(e){var t,n=e.length,r=1e20;for(t=1;t<n;t+=6)+e[t]<r&&(r=+e[t]);return r}(e)+o:+e[a-1]+o);for(s=s?1/s:-l,r=0;r<a;r+=2)e[r]=(+e[r]+i)*l,e[r+1]=(+e[r+1]+o)*s}(d,t.height,t.originY),this.segment=d,o=2;o<n;o+=6)r={x:+d[o-2],y:+d[o-1]},i={x:+d[o+4],y:+d[o+5]},p.push(r,i),Ce(r.x,r.y,+d[o],+d[o+1],+d[o+2],+d[o+3],i.x,i.y,1/(2e5*h),p,p.length-1);for(n=p.length,o=0;o<n;o++)s=p[o],c=p[o-1]||s,s.x>c.x||c.y!==s.y&&c.x===s.x||s===c?(c.cx=s.x-c.x,c.cy=s.y-c.y,c.n=s,c.nx=s.x,g&&o>1&&Math.abs(c.cy/c.cx-p[o-2].cy/p[o-2].cx)>2&&(g=0),c.cx<m&&(c.cx?m=c.cx:(c.cx=.001,o===n-1&&(c.x-=.001,m=Math.min(m,.001),g=0)))):(p.splice(o--,1),n--);if(a=1/(n=1/m+1|0),l=0,s=p[0],g){for(o=0;o<n;o++)u=o*a,s.nx<u&&(s=p[++l]),r=s.y+(u-s.x)/s.cx*s.cy,f[o]={x:u,cx:a,y:r,cy:0,nx:9},o&&(f[o-1].cy=r-f[o-1].y);f[n-1].cy=p[p.length-1].y-r}else{for(o=0;o<n;o++)s.nx<o*a&&(s=p[++l]),f[o]=s;l<p.length-1&&(f[o-1]=p[p.length-2])}return this.ease=function(e){var t=f[e*n|0]||f[n-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&me.registerEase(this.id,this.ease),this},t.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,n,r){return new e(t,n,r).ease},e.register=function(e){me=e,ke()},e.get=function(e){return me.parseEase(e)},e.getSVGData=function(t,n){var r,i,o,a,l,s,c,u,d,m,p=(n=n||{}).width||100,f=n.height||100,h=n.x||0,g=(n.y||0)+f,y=me.utils.toArray(n.path)[0];if(n.invert&&(f=-f,g=0),"string"==typeof t&&(t=me.parseEase(t)),t.custom&&(t=t.custom),t instanceof e)r=Object(xe.a)(Object(xe.c)([t.segment],p,0,0,-f,h,g));else{for(r=[h,g],a=1/(c=Math.max(5,200*(n.precision||1))),u=5/(c+=2),d=je(h+a*p),i=((m=je(g+t(a)*-f))-g)/(d-h),o=2;o<c;o++)l=je(h+o*a*p),s=je(g+t(o*a)*-f),(Math.abs((s-m)/(l-d)-i)>u||o===c-1)&&(r.push(d,m),i=(s-m)/(l-d)),d=l,m=s;r="M"+r.join(",")}return y&&y.setAttribute("d",r),r},e}();Ee()&&me.registerPlugin(_e),_e.version="3.3.3",he.a.registerPlugin(_e);var Ne=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),o=Object(r.useRef)(),a=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),c=Object(r.useRef)(),u=Object(r.useRef)();return Object(r.useEffect)((function(){return t.current=he.a.timeline({paused:!0}),_e.create("easeOut","0.22, 0.61, 0.35, 1"),_e.create("easeIn","0.55, 0.05, 0.67, 0.19"),_e.create("easeInOut","0.64, 0.04, 0.35, 1"),t.current.add((n.current=he.a.timeline(),n.current.fromTo(c.current.firstChild,{duration:.1,ease:"none",yPercent:-200},{yPercent:0},0).fromTo(c.current,{width:"100%"},{duration:.2,ease:"easeIn",width:0},.2).fromTo(l.current,{width:"100%"},{duration:.5,ease:"easeInOut",width:0},.2).fromTo(s.current,{x:0},{duration:.4,ease:"easeIn",x:-3e3},.5).to(a.current,{zIndex:-100}),n.current),"leaveScene"),t.current.add((o.current=he.a.timeline(),o.current.to(a.current,{zIndex:100}).fromTo(s.current,{x:-3e3},{duration:.5,ease:"easeOut",x:0},1).fromTo(l.current,{width:0},{duration:.5,ease:"easeInOut",width:"100%"},1.3).fromTo(c.current,{width:0},{duration:.3,ease:"easeInOut",width:"100%"},1.1).fromTo(c.current.firstChild,{yPercent:200},{duration:.2,ease:"easeOut",yPercent:-200},1.6),o.current),"enterScene"),function(){t.current.kill(),n.current.kill(),o.current.kill()}}),[]),Object(r.useEffect)((function(){e.isActive?t.current.seek("enterScene").play():t.current.tweenFromTo("leaveScene","enterScene").play()}),[e.isActive]),i.a.createElement(ye,{className:e.className+" project",ref:a,id:e.slide.id},i.a.createElement(ve,{title:e.slide.name,ref:l},i.a.createElement(Y,{title:e.slide.name})),i.a.createElement(be,{imgSrc:"../public/".concat(e.slide.photos.thumb.default),imgAlt:"",ref:s}),i.a.createElement(we,{ref:c},i.a.createElement("span",null,e.slideIndex+1>=10?e.slideIndex+1:"0".concat(e.slideIndex+1))),i.a.createElement(V,{id:e.slide.id,ariaLabel:"See ".concat(e.slide.name," details"),srOnly:!0,ref:u,isActive:e.isActive}))};Ne.propTypes={slide:M.a.object.isRequired,slideIndex:M.a.number.isRequired,isActive:M.a.bool.isRequired};var Ie=Ne,Te=c.e.div.withConfig({displayName:"DesktopSliderstyles__SliderContainer"})(['width:100vw;position:relative;overflow:hidden;&::before{content:"";width:100%;max-width:49rem;height:69.5vh;position:fixed;top:20.4vh;left:33.6vw;display:block;background:',";transition:background-color 0.25s ease-in-out;z-index:-1;}@media (min-width:","){&::before{width:calc(100% / 12 * 5);height:79.3vh;top:10.3vh;}}@media (min-width:","){&::before{left:",";}}"],(function(e){return e.theme.color.primaryLight}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(50vw - ".concat(e.theme.container,"px/6)")})),Re=Object(c.e)(Ie).withConfig({displayName:"DesktopSliderstyles__SliderProject"})(["width:100%;height:100%;max-height:1080px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);"]),ze=Object(c.e)(le).withConfig({displayName:"DesktopSliderstyles__WorkSliderPagination"})(["position:fixed;top:13.5vh;right:5.5vw;z-index:10;transition:background-color 0.25s ease-in-out;@media (min-width:","){top:17.5vh;right:18.5vw;}@media (min-width:","){right:",";}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(50vw - ".concat(e.theme.container,"px/4 - ").concat(e.theme.container,"px/28)")})),Le=c.e.div.withConfig({displayName:"DesktopSliderstyles__SliderButtons"})(["position:fixed;bottom:10vh;left:14vw;z-index:100;@media (min-width:","){display:none;}@media (orientation:portrait) and (min-width:","){bottom:20vh;left:8vw;}"],(function(e){return"".concat(e.theme.bp.largeDesktops,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}));he.a.registerPlugin(ge.a),he.a.core.globals("ScrollTrigger",ge.a);var Me=function(e){function t(e){var n;return E()(this,t),(n=S()(this,C()(t).call(this,e))).timeOut=0,n.isUnMounted=!1,n.state={slides:null,currentSlide:null,activeIndex:0,theme:{color:{primary:n.props.slides[0].colors.primary,primaryLight:n.props.slides[0].colors.primaryLight}}},n}return T()(t,e),j()(t,[{key:"componentDidMount",value:function(){var e=this,t=he.a.utils.toArray(".project");this.setState({slides:t,currentSlide:t[0]},(function(){he.a.set(".slider-container",{height:100*t.length+"vh"}),e.animateSlides()}))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut),this.timeOut=0,this.isUnMounted=!0,this.state.slides.forEach((function(e,t){ge.a.getById("slide".concat(t)).kill()}))}},{key:"animateSlides",value:function(){var e=this;this.state.slides.forEach((function(t,n){ge.a.create({start:function(){return(n-.5)*innerHeight},end:function(){return(n+.5)*innerHeight},onUpdate:function(r){return r.isActive&&e.updateSlider(t,n)},id:"slide".concat(n)}).refresh()}))}},{key:"updateSlider",value:function(e,t){var n=this.state.currentSlide;e!==n&&this.updateTheme(n,t,e)}},{key:"updateTheme",value:function(e,t,n){var r=this,i={color:{primary:this.props.slides[t].colors.primary,primaryLight:this.props.slides[t].colors.primaryLight}};this.isUnMounted||this.setState({currentSlide:n,activeIndex:t},(function(){r.timeOut=setTimeout((function(){r.setState({theme:i})}),1e3)}))}},{key:"onClickHandler",value:function(e){this.hasFollowingSlide(e)&&window.scrollTo({top:e?(this.state.activeIndex-1)*window.innerHeight:(this.state.activeIndex+1)*window.innerHeight})}},{key:"hasFollowingSlide",value:function(e){return!!(e&&this.state.activeIndex-1>=0)||!e&&this.state.activeIndex+1<this.props.slides.length}},{key:"render",value:function(){var e=this,t=this.state,n=t.theme,r=t.activeIndex,o=this.props.slides;return i.a.createElement(c.b,{theme:n},i.a.createElement(Te,null,i.a.createElement(ze,{activeIndex:r,sliderLenght:o.length}),i.a.createElement("div",{className:"slider-container"},o&&o.map((function(e,t){return i.a.createElement(Re,{slide:e,slideIndex:t,key:"slide"+t,isActive:r==t})}))),i.a.createElement(Le,null,i.a.createElement(B,{onClickHandler:function(){return e.onClickHandler(!0)},hasFollowingSlide:function(){return e.hasFollowingSlide(!0)},label:"Prevous work",isPrev:!0,colors:this.state.theme}),i.a.createElement(B,{onClickHandler:function(){return e.onClickHandler(!1)},hasFollowingSlide:function(){return e.hasFollowingSlide(!1)},label:"Next work",isPrev:!1,colors:this.state.theme}))))}}]),t}(i.a.Component);Me.propTypes={slides:M.a.array.isRequired};var Ae=Me,qe=function(){var e=Object(r.useState)(!0),t=d()(e,2),o=t[0],a=t[1],l=Object(r.useState)([]),s=d()(l,2),u=s[0],p=s[1],f=Object(r.useContext)(c.a),g=Object(r.useContext)(m);function w(){return(w=y()(h.a.mark((function e(){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){a(!1)}),0),e.next=3,n.e(1).then(n.t.bind(null,70,3));case 3:return t=e.sent,r=t.default,e.next=7,p(r||[]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),o||0==u.length?i.a.createElement(b,null):g<f.bp.tablets?i.a.createElement(fe,{slides:u}):i.a.createElement(Ae,{slides:u})},De=function(){return i.a.createElement(r.Fragment,null,i.a.createElement(qe,null))},He=n(40),Fe=n.n(He),Be=n.p+"fonts/Raleway-Regular.woff2",We=n.p+"fonts/Raleway-Regular.woff",Ue=n.p+"fonts/Raleway-Regular.ttf",Ve=n.p+"fonts/Poppins-Bold.woff2",Ge=n.p+"fonts/Poppins-Bold.woff",Je=n.p+"fonts/Poppins-Bold.ttf",Ye=n.p+"fonts/Poppins-Medium.woff2",Qe=n.p+"fonts/Poppins-Medium.woff",Xe=n.p+"fonts/Poppins-Medium.ttf",Ze=Object(c.d)(['@font-face{font-family:"Raleway";src:url(',') format("woff2"),url(',') format("woff"),url(',') format("ttf");font-weight:normal;font-style:normal;}@font-face{font-family:"Poppins";src:url(',') format("woff2"),url(',') format("woff"),url(',') format("ttf");font-weight:bold;font-style:normal;}@font-face{font-family:"Poppins";src:url(',') format("woff2"),url(',') format("woff"),url(',') format("ttf");font-weight:500;font-style:normal;}'],Be,We,Ue,Ve,Ge,Je,Ye,Qe,Xe);function Ke(){var e=Fe()(["\n    ","\n\n    * {\n        box-sizing: border-box;\n    }\n\n    html {\n        font-size: 16px;\n    }\n\n    body {\n        width: 100%;\n        overflow-x: hidden;\n        font-family: ",";\n        color: ",";\n        font-size: 1rem;\n    }\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        vertical-align: baseline;\n        text-align: left;\n    }\n\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n\n\n    a {\n        font-family: ",";\n        text-decoration: none;\n    }\n\n    ol, ul {\n\tlist-style: none;\n}\n\nbutton {\n    border: none;\n    background: none;\n    color: ",";\n}\n"]);return Ke=function(){return e},e}var $e=Object(c.c)(Ke(),Ze,(function(e){return e.theme.font.raleway}),(function(e){return e.theme.color.dark}),(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.primary})),et=c.e.nav.withConfig({displayName:"Navstyles__NavTag"})(["width:100%;max-width:",";margin:auto;padding:0.875rem;position:fixed;left:0;top:0;right:0;display:flex;justify-content:space-between;align-items:center;font-weight:500;z-index:9999;a{color:",";}@media (min-width:","){padding:3rem;font-size:1.125rem;}"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.theme.color.dark}),(function(e){return"".concat(e.theme.bp.tablets,"px")})),tt=Object(c.e)(l.b).withConfig({displayName:"Navstyles__Logo"})(["font-family:",";text-transform:uppercase;color:",";line-height:0.9;font-weight:bold;span{display:block;font-size:1.175rem;letter-spacing:3px;}@media (min-width:","){font-size:1.125rem;span{font-size:1.35rem;}}"],(function(e){return e.theme.font.poppins}),(function(e){return e.theme.color.secondary}),(function(e){return"".concat(e.theme.bp.tablets,"px")}));var nt=function(){return i.a.createElement(et,null,i.a.createElement(tt,{to:"/portfolio2020/","aria-label":"home"},"Sarah ",i.a.createElement("span",null,"Hick")),i.a.createElement(l.b,{to:"/portfolio2020/about"},"About"))},rt={color:{primary:"#EA6616",primaryLight:"#FFBC93",secondary:"#260914",dark:"#2F2E2E"},font:{raleway:"'Raleway', 'Roboto', Helvetica, Arial, sans-serif",poppins:"'Poppins', 'Roboto', Helvetica, Arial, sans-serif"},bp:{phones:568,tablets:767,desktops:1023,largeDesktops:1200},container:1920},it=c.e.h1.withConfig({displayName:"About__Title"})(["padding-top:5rem;color:",";"],(function(e){return e.theme.color.primary})),ot=function(){return i.a.createElement(it,null,"About")},at=function(){return i.a.createElement(l.a,null,i.a.createElement(c.b,{theme:rt},i.a.createElement($e,null),i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null,i.a.createElement(nt,null),i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/",component:De}),i.a.createElement(s.a,{exact:!0,path:"/about",component:ot}))))))};a.a.render(i.a.createElement(at,null),document.getElementById("root"))}});
//# sourceMappingURL=main.d2ed382b10bd5080b8f9.js.map