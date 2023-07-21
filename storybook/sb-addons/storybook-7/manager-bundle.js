try{
var Je=__STORYBOOKADDONS__,{addons:G,types:Qe,mockChannel:Xe}=__STORYBOOKADDONS__;var L=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var it=__STORYBOOKCLIENTLOGGER__,{deprecate:st,logger:Y,once:pt,pretty:lt}=__STORYBOOKCLIENTLOGGER__;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)}function re(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},x(e,t)}function ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,x(e,t)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(e)}function ne(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function C(e,t,r){return oe()?C=Reflect.construct.bind():C=function(a,n,o){var i=[null];i.push.apply(i,n);var p=Function.bind.apply(a,i),l=new p;return o&&x(l,o.prototype),l},C.apply(null,arguments)}function H(e){var t=typeof Map=="function"?new Map:void 0;return H=function(r){if(r===null||!ne(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return C(r,arguments,M(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),x(a,r)},H(e)}var ie={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function se(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}var f=function(e){ae(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a=e.call(this,se.apply(void 0,[ie[r]].concat(o)))||this,re(a)}return t}(H(Error));function z(e){return Math.round(e*255)}function pe(e,t,r){return z(e)+","+z(t)+","+z(r)}function F(e,t,r,a){if(a===void 0&&(a=pe),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(n%2-1)),p=0,l=0,d=0;n>=0&&n<1?(p=o,l=i):n>=1&&n<2?(p=i,l=o):n>=2&&n<3?(l=o,d=i):n>=3&&n<4?(l=i,d=o):n>=4&&n<5?(p=i,d=o):n>=5&&n<6&&(p=o,d=i);var b=r-o/2,y=p+b,u=l+b,j=d+b;return a(y,u,j)}var K={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function le(e){if(typeof e!="string")return e;var t=e.toLowerCase();return K[t]?"#"+K[t]:e}var de=/^#[a-fA-F0-9]{6}$/,fe=/^#[a-fA-F0-9]{8}$/,ue=/^#[a-fA-F0-9]{3}$/,ce=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,me=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,he=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,ge=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function B(e){if(typeof e!="string")throw new f(3);var t=le(e);if(t.match(de))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(fe)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(ue))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(ce)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=R.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=me.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=he.exec(t);if(i){var p=parseInt(""+i[1],10),l=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,b="rgb("+F(p,l,d)+")",y=R.exec(b);if(!y)throw new f(4,t,b);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var u=ge.exec(t.substring(0,50));if(u){var j=parseInt(""+u[1],10),ee=parseInt(""+u[2],10)/100,te=parseInt(""+u[3],10)/100,N="rgb("+F(j,ee,te)+")",S=R.exec(N);if(!S)throw new f(4,t,N);return{red:parseInt(""+S[1],10),green:parseInt(""+S[2],10),blue:parseInt(""+S[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new f(5)}function be(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),i=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var p,l=n-o,d=i>.5?l/(2-n-o):l/(n+o);switch(n){case t:p=(r-a)/l+(r<a?6:0);break;case r:p=(a-t)/l+2;break;default:p=(t-r)/l+4;break}return p*=60,e.alpha!==void 0?{hue:p,saturation:d,lightness:i,alpha:e.alpha}:{hue:p,saturation:d,lightness:i}}function J(e){return be(B(e))}var ye=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},A=ye;function g(e){var t=e.toString(16);return t.length===1?"0"+t:t}function _(e){return g(Math.round(e*255))}function ve(e,t,r){return A("#"+_(e)+_(t)+_(r))}function P(e,t,r){return F(e,t,r,ve)}function xe(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return P(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return P(e.hue,e.saturation,e.lightness);throw new f(1)}function Fe(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?P(e,t,r):"rgba("+F(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?P(e.hue,e.saturation,e.lightness):"rgba("+F(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new f(2)}function $(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return A("#"+g(e)+g(t)+g(r));if(typeof e=="object"&&t===void 0&&r===void 0)return A("#"+g(e.red)+g(e.green)+g(e.blue));throw new f(6)}function w(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=B(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?$(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?$(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new f(7)}var we=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Se=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Ce=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ke=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function Q(e){if(typeof e!="object")throw new f(8);if(Se(e))return w(e);if(we(e))return $(e);if(ke(e))return Fe(e);if(Ce(e))return xe(e);throw new f(8)}function X(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):X(e,t,a)}}function T(e){return X(e,e.length,[])}function I(e,t,r){return Math.max(e,Math.min(t,r))}function Pe(e,t){if(t==="transparent")return t;var r=J(t);return Q(v({},r,{lightness:I(0,1,r.lightness-parseFloat(e))}))}var Oe=T(Pe),Be=Oe;function Te(e,t){if(t==="transparent")return t;var r=J(t);return Q(v({},r,{lightness:I(0,1,r.lightness+parseFloat(e))}))}var Ie=T(Te),je=Ie;function ze(e,t){if(t==="transparent")return t;var r=B(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:I(0,1,(a*100+parseFloat(e)*100)/100)});return w(n)}var gt=T(ze);function Re(e,t){if(t==="transparent")return t;var r=B(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:I(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return w(n)}var _e=T(Re),Ee=_e,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},W={app:"#F6F9FC",bar:s.lightest,content:s.lightest,gridCellSize:10,hoverable:Ee(.93,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},O={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},De={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:W.app,appContentBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:O.fonts.base,fontCode:O.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.mediumdark,barTextColor:s.mediumdark,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:W.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},U=De,Me={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:O.fonts.base,fontCode:O.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},He=Me,{window:E}=L;var Ae=e=>typeof e!="string"?(Y.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,$e=e=>!/(gradient|var|calc)/.test(e),qe=(e,t)=>e==="darken"?w(`${Be(1,t)}`,.95):e==="lighten"?w(`${je(1,t)}`,.95):t,Z=e=>t=>{if(!Ae(t)||!$e(t))return t;try{return qe(e,t)}catch{return t}},bt=Z("lighten"),yt=Z("darken"),Ne=()=>!E||!E.matchMedia?"light":E.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",k={light:U,dark:He,normal:U},D=Ne(),q=(e={base:D},t)=>{let r={...k[D],...k[e.base]||{},...e,base:k[e.base]?e.base:D};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var V=q({base:"light",colorPrimary:"#ff7900",colorSecondary:"#000",appBg:"#fff",appContentBg:"#fff",appBorderColor:"grey",appBorderRadius:4,fontBase:'"Helvetica Sans", sans-serif',fontCode:"monospace",textColor:"#000",textInverseColor:"rgba(255,255,255,0.9)",barTextColor:"#fff",barSelectedColor:"#ff7900",barBg:"#000",inputBg:"white",inputBorder:"silver",inputTextColor:"black",inputBorderRadius:4,brandTitle:"Orange Design System",brandUrl:"https://system.design.orange.com/",brandImage:"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2050%2050%27%3e%3cdefs%3e%3cstyle%3e@media%28max-width:49.98px%29%7b%23b%7bdisplay:none%7d%7d@media%28min-width:50px%29%7b%23c%7bdisplay:none%7d%7d%3c/style%3e%3c/defs%3e%3cpath%20fill=%27%23ff7900%27%20d=%27M0%200h50v50H0z%27/%3e%3cpath%20fill=%27%23fff%27%20id=%27c%27%20d=%27M7%2035h35v7H7z%27/%3e%3cpath%20fill=%27%23fff%27%20id=%27b%27%20stroke-width=%27.18%27%20d=%27M19.61%2045.16a4.1%204.1%200%2001-2.29.69c-1.3%200-2.06-.87-2.06-2.02%200-1.56%201.43-2.39%204.38-2.72v-.39c0-.5-.39-.8-1.1-.8a2.07%202.07%200%2000-1.69.8l-1.23-.7q.97-1.36%202.96-1.36c1.82%200%202.83.78%202.83%202.06v5.05h-1.63zm-2.56-1.47c0%20.47.3.9.82.9.58%200%201.14-.23%201.7-.73v-1.64c-1.71.21-2.52.65-2.52%201.48zm5.8-4.7l1.51-.2.17.82c.86-.63%201.54-.96%202.4-.96%201.42%200%202.16.76%202.16%202.27v4.84h-1.83v-4.52c0-.86-.22-1.24-.88-1.24-.55%200-1.1.25-1.71.77v5h-1.82zm18.37%206.9c-2.05%200-3.27-1.31-3.27-3.6%200-2.3%201.23-3.64%203.24-3.64%202.01%200%203.2%201.28%203.2%203.54l-.01.36h-4.64c.02%201.31.57%201.98%201.64%201.98.7%200%201.15-.28%201.58-.88l1.34.74c-.59.99-1.65%201.5-3.08%201.5zm1.37-4.52c0-.93-.53-1.48-1.4-1.48-.82%200-1.34.53-1.41%201.48zm-36.44%204.6c-1.8%200-3.44-1.15-3.44-3.67s1.63-3.67%203.44-3.67c1.82%200%203.45%201.16%203.45%203.67%200%202.52-1.64%203.67-3.45%203.67zm0-5.8c-1.36%200-1.62%201.24-1.62%202.12%200%20.88.26%202.13%201.62%202.13%201.37%200%201.63-1.24%201.63-2.13%200-.9-.26-2.12-1.63-2.12zm4.7-1.36h1.74v.81a2.7%202.7%200%20011.92-.96%201.52%201.52%200%2001.24.02v1.71h-.09c-.8%200-1.67.13-1.94.75v4.62h-1.87zm22.72%205.46c1.4%200%201.51-1.42%201.51-2.34%200-1.09-.53-1.98-1.52-1.98-.66%200-1.39.48-1.39%202.05%200%20.86.06%202.28%201.4%202.27zm3.27-5.48v6.58c0%201.17-.09%203.08-3.4%203.1-1.37%200-2.64-.54-2.9-1.73l1.81-.3c.08.35.29.7%201.31.7.95%200%201.41-.46%201.41-1.55v-.81l-.02-.03c-.3.52-.73%201.02-1.8%201.02-1.62%200-2.9-1.13-2.9-3.48%200-2.33%201.32-3.63%202.8-3.63%201.39%200%201.9.63%202.02.96h-.02l.15-.83zm8.27-2.31h-.72v1.99h-.38v-2h-.72v-.3h1.82zm3%201.99h-.38v-1.92h-.01l-.75%201.92h-.24l-.76-1.92v1.92h-.39v-2.3h.59l.68%201.75.68-1.74h.58z%27/%3e%3c/svg%3e%0a"});G.setConfig({theme:V});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
