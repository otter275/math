(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(174)),o={id:"01",title:"03\uc8fc\ucc28 \ud655\ub960\ub860 \ud034\uc988 with R",sidebar_label:"03\uc8fc\ucc28 \ud655\ub960\ub860 \ud034\uc988 with R"},c={id:"01-probability-theory/01",isDocsHomePage:!1,title:"03\uc8fc\ucc28 \ud655\ub960\ub860 \ud034\uc988 with R",description:"Example 4.26",source:"@site/docs/01-probability-theory/01-03-weeks-prob-quiz-with-R.md",permalink:"/math/docs/01-probability-theory/01",sidebar_label:"03\uc8fc\ucc28 \ud655\ub960\ub860 \ud034\uc988 with R",sidebar:"someSidebar",previous:{title:"\ubaac\ud2f0\ud640 \ubb38\uc81c",permalink:"/math/docs/01-probability-theory/00"},next:{title:"00",permalink:"/math/docs/02-analysis/00"}},l=[{value:"Example 4.26",id:"example-426",children:[]},{value:"\ubb38\uc81c\ud480\uc774 (R\uc744 \ud65c\uc6a9\ud55c \uc2dc\ubbac\ub808\uc774\uc158)",id:"\ubb38\uc81c\ud480\uc774-r\uc744-\ud65c\uc6a9\ud55c-\uc2dc\ubbac\ub808\uc774\uc158",children:[]},{value:"\ubb38\uc81c 1",id:"\ubb38\uc81c-1",children:[]},{value:"\ubb38\uc81c 2",id:"\ubb38\uc81c-2",children:[]},{value:"\ubb38\uc81c 3",id:"\ubb38\uc81c-3",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"}),Object(i.b)("h3",{id:"example-426"},"Example 4.26"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Jane and Amy are gambling together. A fair coin is tossed repeatedly. Each time a\nhead comes up, Jane wins a dollar from Amy, and each time a tail comes up, Jace loses\na dollar to Amy.\n"),Object(i.b)("li",{parentName:"ul"},"Carry out this experiment 50 times, and estimate the number of times that Jane is ahead\nin these 50 tosses. How much has Jane won or lost?\n")),Object(i.b)("h3",{id:"\ubb38\uc81c\ud480\uc774-r\uc744-\ud65c\uc6a9\ud55c-\uc2dc\ubbac\ub808\uc774\uc158"},"\ubb38\uc81c\ud480\uc774 (R\uc744 \ud65c\uc6a9\ud55c \uc2dc\ubbac\ub808\uc774\uc158)"),Object(i.b)("p",null,"To generate the 50 tosses, we could write"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-{r}"}),"x <- sample(c(1, -1), 50000, replace = T)\n# x\n")),Object(i.b)("p",null,"To calculate the accumulated losses and gains at each toss, write in R"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-{r}"}),"winnings <- cumsum(x)\n# winnings\n")),Object(i.b)("p",null,"A plot of this is obtained with"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-{r",metastring:"pressure, echo=FALSE}","pressure,":!0,echo:"FALSE}"}),'num <- 1:50000\nplot(num, winnings, type = "o",\n     xlab = "Toss number", ylab = "Winnings")\nabline(0,0)\n')),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://images.velog.io/images/otter275/post/0279d597-ad3b-4800-9067-7592d7ce74c9/plot.png",alt:null}))),Object(i.b)("h3",{id:"\ubb38\uc81c-1"},"\ubb38\uc81c 1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\uc6d0\uc758 \ub458\ub808\uc5d0 5\uac1c\uc758 \uc810\uc774 \ucc0d\ud600 \uc788\ub2e4. \uc774 5\uac1c\uc758 \uc810\uc744 \uac00\uc9c0\uace0 \ub9cc\ub4e4 \uc218 \uc788\ub294 \uc9c1\uc120\uacfc \ubc18\uc9c1\uc120\uc758\n\uac00\ub2a5\ud55c \uac2f\uc218\ub97c \uad6c\ud558\uc2dc\uc624.")),Object(i.b)("h3",{id:"\ubb38\uc81c-2"},"\ubb38\uc81c 2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A card is selected at random from an ordinary deck of 52 playing cards. If E is the\nevent that the selected card is an ace and F is the event that it is a spade, then\nE and F are independent. This follows because...")),Object(i.b)("h3",{id:"\ubb38\uc81c-3"},"\ubb38\uc81c 3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Suppose that we toss 2 fair dice. Let E denote the event that the sum of the dice\nis 6 and F denote the event that the first die equals 4. Is E independent from F?")))}p.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);