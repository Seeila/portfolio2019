(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{91:function(e,t,n){"use strict";n.r(t);var a=n(28),i=n.n(a),r=n(32),o=n.n(r),c=n(13),l=n.n(c),s=n(0),m=n.n(s),p=n(2),d=n.n(p),u=n(8),h=n.n(u),f=n(1),g=n(16),y=n(18),b=n(33),w=n(43),v=f.e.div.withConfig({displayName:"MovingImgWithBgstyles__BgContainer"})(["width:",';position:relative;&::before{content:"";width:calc(100% - 1.25rem);height:100%;position:absolute;top:1.25rem;left:1.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.isMobile?"250px":"100%"}),(function(e){return e.theme.color.primary})),j=f.e.div.withConfig({displayName:"MovingImgWithBgstyles__PlaceHolder"})(["width:calc(100% - 1.25rem);height:100%;position:absolute;top:0;filter:blur(5px);overflow:hidden;transition:opacity 0.15s ease-in;"]),x=f.e.div.withConfig({displayName:"MovingImgWithBgstyles__ImgContainer"})(["width:100%;padding-top:",";position:relative;overflow:hidden;.lazy-load-image-background{width:calc(100% - 1.25rem);height:auto;position:absolute;top:0;left:0;bottom:auto;display:block;transform-origin:top center;&.lazy-load-image-loaded{animation:"," "," linear infinite;animation-play-state:",";animation-delay:1s;& + ","{opacity:0;}}@media (min-width:",") and (orientation:landscape){&.lazy-load-image-loaded{animation:"," 10s linear infinite;animation-play-state:",";animation-delay:1s;}}@media (min-width:",") and (orientation:landscape){&.lazy-load-image-loaded{animation:"," 10s linear infinite;animation-play-state:",";animation-delay:1s;}}}"],(function(e){return e.isMobile?"150%":"56%"}),(function(e){return e.isMobile?w.c:w.d}),(function(e){return e.isMobile?"12s":"10s"}),(function(e){return e.isActive?"running":"paused"}),j,(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.isMobile?w.c:w.b}),(function(e){return e.isActive?"running":"paused"}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.isMobile?w.c:w.e}),(function(e){return e.isActive?"running":"paused"})),k=(n(62),function(e){return m.a.createElement(v,{className:e.className,isMobile:e.isMobile,key:e.imgSrc},m.a.createElement(x,{isMobile:e.isMobile,isActive:e.isActive},m.a.createElement(b.LazyLoadImage,{src:"../img/".concat(e.imgSrc),alt:e.imgAlt,effect:"blur"}),m.a.createElement(j,null,m.a.createElement("img",{src:"../img/".concat(e.imgLazy),alt:""}))))});k.prototype={imgSrc:d.a.string.isRequired,imgAlt:d.a.string};var E=k,O=n(45),_=Object(f.d)(["transform:translateY(5rem);opacity:0;transition:",";.change-route-enter-done &,.project-enter-done &{transform:translateY(0);opacity:1;transition:",";}"],(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")})),C=Object(f.d)(["transform:translateX(-5rem);opacity:0;transition:",";.change-route-enter-done &,.project-enter-done &{transform:translateX(0);opacity:1;transition:",";}"],(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")})),N=Object(f.e)(O.a).withConfig({displayName:"ProjectSliderStyles__ProjectSliderStyles"})(["margin:auto;position:relative;",' &::before{content:"";width:50vw;height:100%;position:absolute;top:50%;left:50%;background:',";transform:translate(100%,-50%);transition:",";transition-delay:0.25s;.project-enter-done &{transform:translate(0,-50%);transition:",";transition-delay:0.25s;}}.slider-wrapper{overflow:visible;}.carousel-slider{overflow:visible;.control-arrow{height:1.5rem;position:absolute;bottom:1.25rem;left:calc(50vw - 7.5rem);&.control-next{left:calc(50vw - 4.5rem);}}}@media (min-width:",') and (orientation:landscape){&::before{content:"";width:100%;height:60vh;position:absolute;top:50vh;left:40%;background:',";transform:translate(0,-50%);}&.carousel-root{height:100vh;}.carousel-slider{height:100vh;padding:0 0 0 2rem;display:flex;align-items:center;overflow:hidden;.control-arrow{height:1.5rem;position:absolute;top:calc(50% - 1.5rem);left:0.5rem;transform-origin:center;transform:rotate(90deg);&.control-next{top:calc(50% + 1.5rem);left:0.5rem;}}}}@media (min-width:",') and (orientation:landscape){&::before{content:"";width:80%;height:0;padding-top:80%;}}'],_,(function(e){return e.theme.color.primaryLight}),(function(e){return"transform 0.5s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"transform 0.5s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.theme.color.primaryLight}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),P=f.e.div.withConfig({displayName:"ProjectSliderStyles__Slide"})(["height:45vh;min-height:550px;padding:2rem 2rem 3rem;display:flex;justify-content:center;align-items:center;@media (min-width:",") and (orientation:landscape){height:55vh;padding:2rem 0 3rem 2rem;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")})),L=function(e){var t=e.photos,n=e.theme,a=e.projectId,i=Object(g.b)(),r=Object(s.useContext)(f.a),o=Object(s.useState)(0),c=l()(o,2),p=c[0],d=c[1],u={infiniteLoop:!0,centerMode:!0,centerSlidePercentage:65,axis:i<r.bp.desktops||i<window.innerHeight?"horizontal":"vertical",onChange:function(e){p!==e&&d(e)},swipeable:!0,emulateTouch:!1};return m.a.createElement(N,{additionalSettings:u,colors:n},t&&t.map((function(e,t){return m.a.createElement(P,{key:"photo".concat(t),index:t},m.a.createElement(E,{imgSrc:"".concat(a,"/").concat(e.src),imgLazy:"".concat(a,"/").concat(e.lazy),imgAlt:e.alt,isActive:t==p,isMobile:e.isMobile}),m.a.createElement(y.a,{externalLink:!0,url:e.url,ariaLabel:"Visit ".concat(e.alt),srOnly:!0}))})))};L.prototype={photos:d.a.object.isRequired,theme:d.a.object.isRequired};var S=L,z=n(17),I=n(19),R=f.e.div.withConfig({displayName:"ImgWithBgstyle__PlaceHolder"})(["width:100%;transition:opacity 0.25s ease-in;"]),D=Object(f.e)(b.LazyLoadImage).withConfig({displayName:"ImgWithBgstyle__Img"})(["width:100%;opacity:0;"]),M=f.e.div.withConfig({displayName:"ImgWithBgstyle__ImgContainer"})(['width:calc(100% - 1.25rem);min-height:250px;position:relative;&::before{content:"";width:calc(100%);height:100%;position:absolute;top:1.25rem;left:1.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}.lazy-load-image-background{min-height:100%;&.lazy-load-image-loaded{& + ","{opacity:0;}","{opacity:1;}}}"],(function(e){return e.theme.color.primary}),R,D);D.prototype={imgSrc:d.a.string.isRequired,imgAlt:d.a.string};var A=function(e){return m.a.createElement(M,{className:e.className,key:e.imgSrc},m.a.createElement(D,{src:"../img/".concat(e.imgSrc),alt:e.imgAlt,placeholderSrc:"../img/".concat(e.imgLazy)}))},T=function(e){return m.a.createElement("svg",{viewBox:"0 0 13 13",xmlns:"http://www.w3.org/2000/svg",className:e.className},m.a.createElement("g",{transform:"matrix(1,0,0,1,-141.207,-5226.83)"},m.a.createElement("g",{transform:"matrix(1,0,0,2.9122,-6119.92,4622.49)"},m.a.createElement("g",{transform:"matrix(1,0,0,0.343383,6119.92,-1587.29)"},m.a.createElement("path",{d:"M149.672,5234.29L142.274,5234.29C141.685,5234.29 141.207,5233.81 141.207,5233.22L141.207,5233.04C141.207,5232.45 141.685,5231.97 142.274,5231.97L149.735,5231.97L146.088,5228.85C145.641,5228.47 145.589,5227.79 145.971,5227.35L146.092,5227.2C146.475,5226.76 147.149,5226.7 147.596,5227.09L153.325,5231.99C153.458,5232.05 153.58,5232.14 153.681,5232.26L153.802,5232.4C153.976,5232.61 154.06,5232.86 154.058,5233.1C154.06,5233.35 153.976,5233.6 153.802,5233.8L153.681,5233.94C153.58,5234.06 153.458,5234.15 153.325,5234.22L147.596,5239.12C147.149,5239.5 146.475,5239.45 146.092,5239L145.971,5238.86C145.589,5238.41 145.641,5237.74 146.088,5237.36L149.672,5234.29Z",fill:e.color})))))};T.prototype={colors:d.a.object.isRequired};var q=T,X=n(7),B=Object(f.d)(["display:flex;color:",";"],(function(e){return e.theme.color.primary})),H=Object(f.e)(X.b).withConfig({displayName:"ArrowLinkStyles__LinkTag"})(["",""],B),W=f.e.a.withConfig({displayName:"ArrowLinkStyles__ExternalLinkTag"})(["",""],B),Y=Object(f.e)(q).withConfig({displayName:"ArrowLinkStyles__ArrowIcon"})(["width:0.75rem;margin:",";order:",";transform:",";transition:transform 0.25s ease-in-out;",":hover &{transform:",";}"],(function(e){return e.isReversed?"0 0.75rem 0 0":"0 0 0 0.75rem"}),(function(e){return e.isReversed?-1:1}),(function(e){return e.isReversed?"translateX(0) scaleX(-1)":"translateX(0)"}),H,(function(e){return e.isReversed?"translateX(-50%) scaleX(-1)":"translateX(50%)"})),F=function(e){return e.externalLink?m.a.createElement(W,{href:e.url,target:"_blank",rel:"noreferrer",className:e.className},e.linkText,m.a.createElement(Y,{color:e.color,isReversed:e.isReversed})):m.a.createElement(H,{to:{pathname:e.url,state:{prevHash:location.hash}},className:e.className},e.linkText,m.a.createElement(Y,{color:e.color,isReversed:e.isReversed}))};F.proptypes={externalLink:d.a.bool,isReversed:d.a.bool,url:d.a.string.isRequired,linkText:d.a.string.isRequired,color:d.a.string.isRequired};var J=F,V=f.e.section.withConfig({displayName:"ProjectNavstyles__ProjectsNavigation"})(["padding-top:4.75rem;display:flex;font-family:",";font-size:1rem;font-weight:400;@media (min-width:","){padding-top:3rem;}@media (min-width:",") and (orientation:landscape){padding-top:calc(50vh - 5.3rem);display:block;}"],(function(e){return e.theme.font.poppins}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),Z=Object(f.e)(X.b).withConfig({displayName:"ProjectNavstyles__NavLink"})(["padding:0 1rem 1rem;position:relative;flex:1;display:flex;flex-direction:column;align-items:center;color:",";&:first-of-type{border-right:2px solid ",";}@media (min-width:","){padding:0 1rem;}@media (min-width:",") and (orientation:landscape){padding:1rem;display:block;& > span{display:block;}& > span,&::after,&:first-of-type::before{",'}&::after,&:first-of-type::before{content:"";width:100%;height:2px;position:absolute;display:block;background:',";}&::after{bottom:0;left:0;}&:first-of-type::before{top:0;left:0;transition-delay:0s;}&:first-of-type{border-right:none;& > span{transition-delay:0.1s;}&::after{transition-delay:0.15s;}}&:last-of-type{& > span{transition-delay:0.2s;}&::after{transition-delay:0.25s;}}}"],(function(e){return e.theme.color.dark}),(function(e){return e.theme.color.primary}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),C,(function(e){return e.theme.color.primary})),G=f.e.span.withConfig({displayName:"ProjectNavstyles__LegendSpan"})(["display:block;color:",";font-size:0.75rem;"],(function(e){return e.theme.color.primary})),K=f.e.span.withConfig({displayName:"ProjectNavstyles__LinkText"})(["color:inherit;"]),Q=function(e){var t=e.prevProject,n=e.nextProject,a=e.className,i=e.clickHandler;return m.a.createElement(V,{className:a},t&&m.a.createElement(Z,{to:{pathname:"/project/".concat(t.id),state:{prevHash:location.hash}},onClick:function(e){return i(e,"/project/".concat(t.id))},"aria-label":"See ".concat(t.name,"'s details")},m.a.createElement("span",null,m.a.createElement(G,null,"Previous project:"),m.a.createElement(K,null,t.name))),n&&m.a.createElement(Z,{to:{pathname:"/project/".concat(n.id),state:{prevHash:location.hash}},onClick:function(e){return i(e,"/project/".concat(n.id))},"aria-label":"See ".concat(n.name,"'s details")},m.a.createElement("span",null,m.a.createElement(G,null,"Next project:"),m.a.createElement(K,null,n.name))))};Q.propTypes={prevProject:d.a.oneOfType([d.a.object.isRequired,d.a.oneOf([null]).isRequired]),nextProject:d.a.oneOfType([d.a.object.isRequired,d.a.oneOf([null]).isRequired])};var U=Q,$=f.e.main.withConfig({displayName:"ProjectDetailsstyles__Main"})(["width:100%;max-width:",";margin:auto;@media (min-width:","){padding:0 0 2rem;}@media (min-width:",") and (orientation:landscape){padding:0;display:flex;}"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),ee=Object(f.e)(I.a).withConfig({displayName:"ProjectDetailsstyles__ProjectTitle"})(["margin:5rem 0 0.5rem;padding:0.5rem 0.25rem;line-height:0.8;font-size:3.2rem;&::after{transform:translateX(-100%);transition:",";}.title-span{opacity:0;transition:",";transition-delay:0.12s;}.project-enter-done &{&::after{transform:translateX(100%);transition:",";}.title-span{opacity:1;transition:",";transition-delay:0.45s;}}@media (min-width:","){font-size:8rem;margin-top:10rem;}@media (min-width:",") and (orientation:portrait){font-size:",";}@media (min-width:",") and (orientation:landscape){margin-top:0;font-size:",";}@media (min-width:",") and (orientation:landscape){font-size:",";}"],(function(e){return"transform 0.6s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"opacity 0.1s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"transform 1s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"opacity 0.1s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 5.5rem)":"clamp(4rem, 15.5vw, 11.5rem); "}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 4.5rem)":"clamp(4rem, 15.5vw, 8rem); "}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 4.75rem)":"clamp(4rem, 15.5vw, 11.5rem); "})),te=f.e.h3.withConfig({displayName:"ProjectDetailsstyles__CatTitle"})(["margin-top:1.5rem;font-family:",";font-size:1.125rem;font-weight:500;"],(function(e){return e.theme.font.poppins})),ne=f.e.p.withConfig({displayName:"ProjectDetailsstyles__CatDescription"})(["max-width:40ch;font-size:0.875rem;"]),ae=f.e.li.withConfig({displayName:"ProjectDetailsstyles__ListItem"})(["max-width:40ch;margin-bottom:0.5rem;font-size:0.875rem;"]),ie=Object(f.e)(J).withConfig({displayName:"ProjectDetailsstyles__Link"})(["margin-top:1.5rem;display:block;",""],_),re=Object(f.e)(A).withConfig({displayName:"ProjectDetailsstyles__Img"})(["width:100%;padding:0;",""],_),oe=f.e.section.withConfig({displayName:"ProjectDetailsstyles__LeftSection"})(["padding:0 1rem;@media (min-width:",") and (orientation:landscape){min-height:100vh;padding:5rem 1rem 3rem 2rem;margin:0 8.3333%;flex-basis:33.333%;display:flex;flex-direction:column;justify-content:center;}@media (min-width:",") and (orientation:landscape){padding:3rem 1rem 3rem;margin:0 16.666%;flex-basis:33.333%;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),ce=f.e.section.withConfig({displayName:"ProjectDetailsstyles__RightSection"})(["margin-top:2.65rem;padding:0 1rem 1.5rem;overflow:hidden;@media (min-width:",") and (orientation:landscape){margin-top:0;position:fixed;width:50%;top:0;right:0;bottom:0;overflow:hidden;}@media (min-width:",") and (orientation:landscape){margin-top:0;width:",";left:50%;right:auto;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(".concat(e.theme.container,"px / 12 * 5)")})),le=f.e.div.withConfig({displayName:"ProjectDetailsstyles__FlexContainer"})([""," @media (min-width:",") and (orientation:portrait){display:flex;}"],_,(function(e){return"".concat(e.theme.bp.tablets,"px")})),se=f.e.div.withConfig({displayName:"ProjectDetailsstyles__FlexChilds"})(["padding-right:1rem;flex-basis:50%;"]),me=Object(f.e)(U).withConfig({displayName:"ProjectDetailsstyles__ProjectNavigation"})(["@media (min-width:",") and (orientation:landscape){width:calc(100% / 12);position:fixed;top:0;left:0;bottom:0;}@media (min-width:",") and (orientation:landscape){width:",";left:",";}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(".concat(e.theme.container,"px / 12)")}),(function(e){return"calc(50vw - ".concat(e.theme.container,"px / 2)")}));function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){var t=Object(s.useContext)(f.a),n=Object(s.useState)(!0),a=l()(n,2),r=a[0],c=a[1],p=e.project,d=e.nextProject,u=e.prevProject,h=e.history,y=de({},t,{color:de({},t.color,{primary:p.colors.primary,primaryLight:p.colors.primaryLight})});function b(){return(b=o()(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c(!1);case 3:window.scrollTo({top:0,behavior:"smooth"}),window.setTimeout((function(){h.push(n),c(!0)}),750);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=Object(g.b)();return m.a.createElement(f.b,{theme:y},m.a.createElement(z.a,{classNames:"project",timeout:{enter:0,exit:750},appear:!0,enter:!0,exit:!0,in:r},m.a.createElement($,null,m.a.createElement(oe,null,m.a.createElement(ee,{title:p.name}),m.a.createElement(le,null,m.a.createElement(se,null,m.a.createElement(te,null,"Year :"),m.a.createElement(ne,null,p.year),m.a.createElement(te,null,"Client :"),m.a.createElement(ne,null,p.client),m.a.createElement(te,null,"Technologies :"),m.a.createElement(ne,null,p.technologies.map((function(e,t){return t==p.technologies.length-1?e:"".concat(e,", ")})))),m.a.createElement(se,null,m.a.createElement(te,null,"Challenges :"),m.a.createElement("ul",null," ",p.challenges.map((function(e,t){return m.a.createElement(ae,{key:"challenge-".concat(t)},e)}))))),p.url&&m.a.createElement(ie,{url:p.url,linkText:"Visit ".concat(p.name,"'s website"),externalLink:!0,color:y.color.primary})),m.a.createElement(ce,null,w<t.bp.tablets&&m.a.createElement(re,{imgSrc:"".concat(p.id,"/").concat(p.photos.project[0].src),imgLazy:"".concat(p.id,"/").concat(p.photos.project[0].lazy),imgAlt:""}),w>=t.bp.tablets&&m.a.createElement(S,{photos:p.photos.project,theme:y,projectId:p.id})),m.a.createElement(me,{prevProject:u,nextProject:d,clickHandler:function(e,t){return b.apply(this,arguments)}}))))};ue.prototype={project:d.a.object.isRequired};var he=ue,fe=n(44),ge=function(e){var t=Object(s.useState)(null),n=l()(t,2),a=n[0],r=n[1],c=Object(s.useState)(!0),p=l()(c,2),d=p[0],u=p[1],h=Object(s.useRef)(null),f=Object(s.useRef)(null),g=e.match.params.id;return Object(s.useEffect)((function(){function e(){return(e=o()(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fe.find((function(e){return e.id==g})),n=fe.findIndex((function(e){return e.id==g})),h.current=n&&n>0?fe[n-1]:0==n?fe[fe.length-1]:null,(n||0==n)&&n<fe.length-1?f.current=fe[n+1]:n&&n==fe.length-1?f.current=fe[0]:f.current=null,e.next=6,r(t||{});case 6:u(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g]),d?m.a.createElement("h1",null,"Loading"):m.a.createElement(he,{project:a,nextProject:f.current,prevProject:h.current,history:e.history})};ge.prototype={match:d.a.shape({params:d.a.shape({id:d.a.string.isRequired})})};t.default=ge}}]);
//# sourceMappingURL=3.bundle.js.map