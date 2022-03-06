(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,p(p({ref:t},l),{},{components:r})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(101)),c={id:"cra",title:"Create App",slug:"/"},p={unversionedId:"react/cra",id:"react/cra",isDocsHomePage:!1,title:"Create App",description:"Create React App",source:"@site/docs/react/cra.md",slug:"/",permalink:"/dev/docs/",editUrl:"https://github.com/vampiro/dev/edit/master/website/docs/react/cra.md",version:"current",sidebar:"someSidebar",previous:{title:"ERC20",permalink:"/dev/docs/crypto/erc20"},next:{title:"Electron w/ CRA",permalink:"/dev/docs/react/electron"}},i=[{value:"Create React App",id:"create-react-app",children:[]},{value:"Prettier",id:"prettier",children:[]},{value:"React Router",id:"react-router",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-react-app"},"Create React App"),Object(o.b)("p",null,"Run ",Object(o.b)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-typescript/"},"create-react-app"),", substitute ",Object(o.b)("inlineCode",{parentName:"p"},"my-app")," for your app name."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-app --template typescript --use-npm\n")),Object(o.b)("h2",{id:"prettier"},"Prettier"),Object(o.b)("p",null,"Instructions from ",Object(o.b)("a",{parentName:"p",href:"https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically"},"CRA Docs"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install -D husky lint-staged prettier\n")),Object(o.b)("p",null,"Add the following to ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'"husky": {\n  "hooks": {\n    "pre-commit": "lint-staged"\n  }\n},\n"lint-staged": {\n  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [\n    "prettier --write"\n  ]\n}\n')),Object(o.b)("h2",{id:"react-router"},"React Router"),Object(o.b)("p",null,"Install the following packages."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install react-router-dom @types/react-router-dom\n")),Object(o.b)("p",null,"You could now paste/use the following in ",Object(o.b)("inlineCode",{parentName:"p"},"App.tsx"),". You will make your own ",Object(o.b)("inlineCode",{parentName:"p"},"Page")," components - this is only an example of where to start with the Router."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";\n\nexport default function App() {\n  return (\n    <Router>\n      <div>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/about">About</Link>\n          </li>\n        </ul>\n        <Switch>\n          <Route exact path="/">\n            <div>Home Page</div>\n          </Route>\n          <Route path="/about">\n            <div>About Page</div>\n          </Route>\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n')))}u.isMDXComponent=!0}}]);