_N_E=("object"!==typeof self?self:this.webpackJsonp_N_E="object"!==typeof self?self:this.webpackJsonp_N_E||[]).push([[36],{"0pvq":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var r,n=a("nKUr"),i=a("vJKn"),o=a.n(i),c=a("rg98"),u=a("q1tI"),l=a("sN8P"),s=a("qQ3w"),O=a("RVlQ"),p=a.n(O),T=a("IjUz"),_=a("qACY"),d={acceptFiles:".graphql, .gql"};function f(){var e=Object(u.useState)(T.a.TO_REACT_APOLLO.toString(10)),t=e[0],a=e[1],i=Object(u.useCallback)(function(){var e=Object(c.a)(o.a.mark((function e(a){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.value,i=a.splitEditorValue,r=r||Object(s.a)(p.a),e.abrupt("return",r.send({type:parseInt(t,10),value:n,document:i}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.jsx)(l.a,{settings:t,transformer:i,resultTitle:Object(n.jsxs)(_.a,{value:t,onChange:function(e){return a(e.target.value)},children:[Object(n.jsx)("option",{value:T.a.TO_REACT_APOLLO,children:"TypeScript React Apollo"}),Object(n.jsx)("option",{value:T.a.TO_APOLLO_ANGULAR,children:"TypeScript Apollo Angular"}),Object(n.jsx)("option",{value:T.a.TO_STENCIL_APOLLO,children:"TypeScript Stencil Apollo"}),Object(n.jsx)("option",{value:T.a.TO_URQL,children:"TypeScript urql"})]}),editorTitle:"GraphQL Schema",editorLanguage:"graphql",editorDefaultValue:"graphql1",resultLanguage:"typescript",editorProps:d,splitEditorProps:d,splitTitle:"Document",splitLanguage:"graphql",splitEditorDefaultValue:"graphqlDocument"})}},IjUz:function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),function(e){e[e.TO_TYPESCRIPT=1]="TO_TYPESCRIPT",e[e.TO_FLOW=2]="TO_FLOW",e[e.TO_INTROSPECTION_JSON=3]="TO_INTROSPECTION_JSON",e[e.TO_FRAGMENT_MATCHER=4]="TO_FRAGMENT_MATCHER",e[e.TO_SCHEMA_AST=5]="TO_SCHEMA_AST",e[e.TO_JAVA=6]="TO_JAVA",e[e.TO_REACT_APOLLO=7]="TO_REACT_APOLLO",e[e.TO_APOLLO_ANGULAR=8]="TO_APOLLO_ANGULAR",e[e.TO_STENCIL_APOLLO=9]="TO_STENCIL_APOLLO",e[e.TO_JAVA_RESOLVERS_SIGNATURE=10]="TO_JAVA_RESOLVERS_SIGNATURE",e[e.TO_TYPESCRIPT_RESOLVERS_SIGNATURE=11]="TO_TYPESCRIPT_RESOLVERS_SIGNATURE",e[e.TO_FLOW_RESOLVERS_SIGNATURE=12]="TO_FLOW_RESOLVERS_SIGNATURE",e[e.TO_URQL=13]="TO_URQL",e[e.TO_TYPESCRIPT_MONGODB=14]="TO_TYPESCRIPT_MONGODB"}(r||(r={}))},RVlQ:function(e,t){e.exports=function(){return new Worker("/_next/static/5d2c7f426e9147e13595.worker.js")}},d9vK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/graphql-to-components",function(){return a("0pvq")}])},qACY:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("1OyB"),o=a("vuIU"),c=a("md7G"),u=a("foSv"),l=a("Ji7U"),s=a("rePB"),O=a("q1tI"),p=a.n(O),T=a("17x9"),_=a.n(T),d=a("AnIz"),f=a.n(d),E=a("raqX"),h=a("Hq2Y"),S=a("9/s7");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.id,i=e.name,o=e.height,c=e.children,u=e.defaultValue,l=e.disabled,s=e.onChange,O=e.value,T=e.required,_=e.autoFocus,d=e.isInvalid,S=e.appearance,b=Object(n.a)(e,["theme","id","name","height","children","defaultValue","disabled","onChange","value","required","autoFocus","isInvalid","appearance"]),g=t.getSelectClassName(S),A=t.getTextSizeForControlHeight(o),R=t.getBorderRadiusForControlHeight(o),j=t.getIconSizeForSelect(o),L=o>=36?12:8;return p.a.createElement(f.a,Object(r.a)({display:"inline-flex",flex:1,position:"relative",width:"auto",height:o},b),p.a.createElement(E.a,{is:"select",className:g,id:a,name:i,onChange:s,defaultValue:u,value:O,required:T,autoFocus:_,disabled:l,"aria-invalid":String(d),size:A,borderRadius:R,textTransform:"default",paddingLeft:Math.round(o/3.2),paddingRight:2*L+j},c),p.a.createElement(h.a,{color:"default",size:j,position:"absolute",top:"50%",marginTop:-j/2,right:L,pointerEvents:"none"}))}}]),t}(O.PureComponent);g.displayName="Select",Object(s.a)(g,"propTypes",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},d.dimensions.propTypes,{},d.spacing.propTypes,{},d.position.propTypes,{},d.layout.propTypes,{id:_.a.string,name:_.a.string,children:_.a.node,defaultValue:_.a.any,onChange:_.a.func,value:_.a.any,required:_.a.bool,autoFocus:_.a.bool,isInvalid:_.a.bool,appearance:_.a.string.isRequired,theme:_.a.object.isRequired})),Object(s.a)(g,"defaultProps",{appearance:"default",height:32,isInvalid:!1}),t.a=Object(S.a)(g)}},[["d9vK",1,2,0,3]]]);