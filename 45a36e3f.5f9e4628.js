(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(101)),c={id:"erc20",title:"ERC20"},i={unversionedId:"crypto/erc20",id:"crypto/erc20",isDocsHomePage:!1,title:"ERC20",description:"Interface",source:"@site/docs/crypto/erc20.md",slug:"/crypto/erc20",permalink:"/dev/docs/crypto/erc20",editUrl:"https://github.com/vampiro/dev/edit/master/website/docs/crypto/erc20.md",version:"current",sidebar:"someSidebar",next:{title:"Create App",permalink:"/dev/docs/"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface"},"Interface"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function totalSupply() public constant returns (uint);\nfunction balanceOf(address tokenOwner) public constant returns (uint balance);\nfunction allowance(address tokenOwner, address spender) public constant returns (uint remaining);\nfunction transfer(address to, uint tokens) public returns (bool success);\nfunction approve(address spender, uint tokens) public returns (bool success);\nfunction transferFrom(address from, address to, uint tokens) public returns (bool success);\n\nevent Transfer(address indexed from, address indexed to, uint tokens);\nevent Approval(address indexed tokenOwner, address indexed spender, uint tokens);\n")),Object(a.b)("p",null,"Explanation of each method:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.bitcoinwiki.org/wiki/ERC20"},"https://en.bitcoinwiki.org/wiki/ERC20")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol"},"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol"))),Object(a.b)("h1",{id:"code-notes"},"Code Notes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'You cannot get "existing" keys for a mapping. You\'d have to store them separately.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"public")," contract variables automatically have a getter created for them, but not a setter."),Object(a.b)("li",{parentName:"ul"},"When a ",Object(a.b)("inlineCode",{parentName:"li"},"require")," condition is not met, all prior transactions are undone."),Object(a.b)("li",{parentName:"ul"},"Useful variables available in Solidity",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"msg.sender: The address of the sender of the whatever function is being executed."),Object(a.b)("li",{parentName:"ul"},"block.timestamp: The current block timestamp as seconds since unix epoch.")))))}p.isMDXComponent=!0}}]);