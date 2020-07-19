(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(170)),l={},c={permalink:"/math/blog/2020/07/08/01-\ud655\ub960\ub860 1\uc8fc\ucc28 \ud034\uc988",source:"@site/blog/2020-07-08-01-\ud655\ub960\ub860 1\uc8fc\ucc28 \ud034\uc988.md",description:"1. Smoking and Lung Cancer",date:"2020-07-08T00:00:00.000Z",tags:[],title:"01-\ud655\ub960\ub860 1\uc8fc\ucc28 \ud034\uc988",readingTime:2.655,truncated:!1,nextItem:{title:"02-\ud655\ub960\ub860 2\uc8fc\ucc28 \ud034\uc988",permalink:"/math/blog/2020/07/08/02-\ud655\ub960\ub860 2\uc8fc\ucc28 \ud034\uc988"}},s=[{value:"1. Smoking and Lung Cancer",id:"1-smoking-and-lung-cancer",children:[{value:"Solutions",id:"solutions",children:[]}]},{value:"2. False Positives",id:"2-false-positives",children:[]}],i={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-smoking-and-lung-cancer"},"1. Smoking and Lung Cancer"),Object(o.b)("p",null,"Suppose 0.1% of the American population currently has lung cancer, that 90% of all lung cancer cases are smokers, and that 21% of those without lung cancer also smoke. (These values are fairly close to the values given on the American Lung Association web site as of 2011.) Consider the following questions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"What percent of smokers have lung cancer?\nWhat percent of non-smokers have lung cancer?\nHow much more likely is a smoker to have lung cancer than a non-smoker?\n")),Object(o.b)("h3",{id:"solutions"},"Solutions"),Object(o.b)("p",null,"Suppose 0.1% of the American population currently has lung cancer"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"LC <- 0.1/100\nLC\n")),Object(o.b)("p",null,"0.001"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"notLC <- 1-LC\nnotLC\n")),Object(o.b)("p",null,"0.999"),Object(o.b)("p",null,"90% of all lung cancer cases are smokers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"Smokers_Given_LC <- 90/100\nSmokers_Given_LC\n")),Object(o.b)("p",null,"0.9"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"Nonsmokers_Given_LC <- 1 - Smokers_Given_LC\nNonsmokers_Given_LC\n")),Object(o.b)("p",null,"0.1"),Object(o.b)("p",null,"21% of those without lung cancer"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"Smokers_Given_notLC <- 21/100\nSmokers_Given_notLC\n")),Object(o.b)("p",null,"0.21"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"Nonsmokers_Given_notLC <- 1 - Smokers_Given_notLC\nNonsmokers_Given_notLC\n")),Object(o.b)("p",null,"0.79"),Object(o.b)("p",null,"Total Probability for Smokers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"Smokers <- (LC * Smokers_Given_LC) + (notLC * Smokers_Given_notLC)\nSmokers\n")),Object(o.b)("p",null,"0.21069"),Object(o.b)("p",null,"Total Probability for Non-smokers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"Nonsmokers <- (LC * Nonsmokers_Given_LC) + (notLC * Nonsmokers_Given_notLC)\nNonsmokers\n")),Object(o.b)("p",null,"0.78931"),Object(o.b)("p",null,"What percent of smokers have lung cancer? Using Bayes' Theorem P(LC|Smokers)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"LC_Given_Smokers <- ((LC * Smokers_Given_LC) / Smokers)*100\nLC_Given_Smokers\n")),Object(o.b)("p",null,"0.427167876975651"),Object(o.b)("p",null,"What percent of non-smokers have lung cancer? Using Bayes' Theorem P(LC|Non-smokers)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"LC_Given_Nonsmokers <- ((LC * Nonsmokers_Given_LC) / Nonsmokers)*100\nLC_Given_Nonsmokers\n")),Object(o.b)("p",null,"0.0126692934335052"),Object(o.b)("p",null,"How much more likely is a smoker to have lung cancer than a non-smoker?"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"LC_Given_Smokers / LC_Given_Nonsmokers\n")),Object(o.b)("p",null,"33.7167876975652"),Object(o.b)("h2",{id:"2-false-positives"},"2. False Positives"),Object(o.b)("p",null," One prominent manufacturer of medical tests offers a test for chlamydia\n(a sexually transmitted disease) that has a sensitivity of 76.4% and a specificity of 93.2%. In other words,\nthe test correctly identifies 76.4% of individuals tested who have the disease by giving a positive result, and correctly identifies 93.2% of the individuals who are healthy by giving a negative result. Currently, it is estimated that 1.5% of the American population has chlamydia. If one individual is randomly selected from the population and tests positive\nfor chlamydia, what is the probability that he/she does not have the disease?"),Object(o.b)("p",null,"1.5% of the American population has chlamydia"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"C <- 1.5/100\nC\n")),Object(o.b)("p",null,"0.015"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"notC <- 1 - C\nnotC\n")),Object(o.b)("p",null,"0.985"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"the test correctly identifies 76.4% of individuals tested who have the disease by giving a positive result\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"PositiveTest_Given_C <- 76.4/100\nPositiveTest_Given_C\n")),Object(o.b)("p",null,"0.764"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"NegativeTest_Given_C <- 1 - PositiveTest_Given_C\nNegativeTest_Given_C\n")),Object(o.b)("p",null,"0.236"),Object(o.b)("p",null,"correctly identifies 93.2% of the individuals who are healthy by giving a negative result."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"NegativeTest_Given_notC <- 93.2/100\nNegativeTest_Given_notC\n")),Object(o.b)("p",null,"0.932"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"PositiveTest_Given_notC <- 1 - NegativeTest_Given_notC\nPositiveTest_Given_notC\n")),Object(o.b)("p",null,"0.0679999999999999"),Object(o.b)("p",null,"Total Probability for Positive Test"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"PositiveTest <- (C * PositiveTest_Given_C) + (notC * PositiveTest_Given_notC)\nPositiveTest\n")),Object(o.b)("p",null,"0.0784399999999999"),Object(o.b)("p",null,"Total Protability for Negative Test"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"NegativeTest <- (C * NegativeTest_Given_C) + (notC * NegativeTest_Given_notC)\nNegativeTest\n")),Object(o.b)("p",null,"0.92156"),Object(o.b)("p",null,"If one individual is randomly selected from the population and tests positive for chlamydia, what is the probability that\nhe/she does not have the disease? Using Bayes' Theorem P(notC|PositiveTest)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"notC_Given_PositiveTest <- (notC * PositiveTest_Given_notC) / PositiveTest\nnotC_Given_PositiveTest\n")),Object(o.b)("p",null,"0.853901070882203"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-R"}),"C_Given_PositiveTest <- 1 - notC_Given_PositiveTest\nC_Given_PositiveTest\n")),Object(o.b)("p",null,"0.146098929117797"))}b.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,O=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);