(this.webpackJsonpgaussian=this.webpackJsonpgaussian||[]).push([[51,81],{162:function(e,n,a){"use strict";var t=a(69);function s(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=s,s.displayName="handlebars",s.aliases=[]},69:function(e,n,a){"use strict";function t(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,s,i){if(a.language===t){var o=a.tokenStack=[];a.code=a.code.replace(s,(function(e){if("function"===typeof i&&!i(e))return e;for(var s,r=o.length;-1!==a.code.indexOf(s=n(t,r));)++r;return o[r]=e,s})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var s=0,i=Object.keys(a.tokenStack);!function o(r){for(var u=0;u<r.length&&!(s>=i.length);u++){var l=r[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var c=i[s],p=a.tokenStack[c],g="string"===typeof l?l:l.content,f=n(t,c),d=g.indexOf(f);if(d>-1){++s;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,o([k])),m.push(b),h&&m.push.apply(m,o([h])),"string"===typeof l?r.splice.apply(r,[u,1].concat(m)):l.content=m}}else l.content&&o(l.content)}return r}(a.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.7de9cca4.chunk.js.map