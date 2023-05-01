(()=>{"use strict";const t=function(){function t(t,e,n,o){void 0===e&&(e="div"),void 0===n&&(n=""),void 0===o&&(o="");var r=document.createElement(e);r.className=n,r.innerHTML=o,t&&t.append(r),this.node=r}return t.prototype.destroy=function(){this.node.remove()},t}();var e,n=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),o=function(t){function e(e){return t.call(this,e,"div","keyboard_output")||this}return n(e,t),Object.defineProperty(e.prototype,"content",{set:function(t){this.node.textContent=t;var e=t.split("\n").map((function(t){return"<div>\n    ".concat(t,"\n    </div>")}));this.node.innerHTML=e.join("")},enumerable:!1,configurable:!0}),e}(t),r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),i=function(){return i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)},a=function(t){function e(e,n,o){var r=t.call(this,e,"div","keyboard_key")||this;return r.state=o,r.data=n,r.node.textContent=n,r.node.onmousedown=function(){r.down(),document.addEventListener("mouseup",(function(){r.input(),r.up()}),{once:!0})},r.node.onmouseenter=function(){r.node.classList.add("keyboard_key__hover")},r.node.onmouseleave=function(){r.node.classList.remove("keyboard_key__hover")},r}return r(e,t),e.prototype.handleDownHighlight=function(){this.highlight(),this.input(),this.down()},e.prototype.handleUpHighlight=function(){this.unhighlight(),this.up()},e.prototype.handleDown=function(){this.input(),this.down()},e.prototype.handleUp=function(){this.up()},e.prototype.highlight=function(){this.node.classList.add("keyboard_key__pressed")},e.prototype.unhighlight=function(){this.node.classList.remove("keyboard_key__pressed")},e.prototype.input=function(){var t=this.state;this.state.data=i(i({},this.state.data),{content:t.data.content+this.data})},e.prototype.up=function(){this.node.classList.remove("keyboard_key__down")},e.prototype.down=function(){this.node.classList.add("keyboard_key__down")},e.prototype.setData=function(t){this.data=t,this.node.textContent=t},e}(t),c=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),s=function(){return s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},s.apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.input=function(){var t=this.state;t.data=s(s({},t.data),{langIndex:(t.data.langIndex+1)%t.langs.length})},e}(a),p=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),y=function(){return y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},y.apply(this,arguments)},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.input=function(){var t=this.state;console.log("I am backspace"),this.state.data=y(y({},t.data),{content:t.data.content.slice(0,-1)})},e}(a),l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(){return h=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},h.apply(this,arguments)},g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.down=function(){var e=this.state;e.data=h(h({},e.data),{shift:!0}),t.prototype.down.call(this)},e.prototype.input=function(){var t=this.state;t.data=h(h({},t.data),{shift:!0})},e.prototype.up=function(){var e=this.state;e.data=h(h({},e.data),{shift:!1}),t.prototype.up.call(this)},e}(a),K=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),d=function(){return d=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},d.apply(this,arguments)},w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return K(e,t),e.prototype.input=function(){var t=this.state;t.data=d(d({},t.data),{caps:!t.data.caps}),t.data.caps?this.node.classList.add("keyboard_key_down"):this.node.classList.remove("keyboard_key_down")},e}(a),_=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=function(){return b=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},b.apply(this,arguments)},v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.input=function(){var t=this.state;this.state.data=b(b({},t.data),{content:t.data.content+" "})},e}(a),O=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),D=function(){return D=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},D.apply(this,arguments)},L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return O(e,t),e.prototype.input=function(){var t=this.state;this.state.data=D(D({},t.data),{content:t.data.content+" "})},e}(a),k=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),A=function(){return A=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},A.apply(this,arguments)},C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return k(e,t),e.prototype.input=function(){var t=this.state;this.state.data=A(A({},t.data),{content:t.data.content+" "})},e}(a),S=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),j=function(){return j=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},j.apply(this,arguments)},E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return S(e,t),e.prototype.input=function(){var t=this.state;this.state.data=j(j({},t.data),{content:t.data.content+"\n"})},e}(a),m=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),B={Lang:u,Backspace:f,ShiftLeft:g,ShiftRight:g,CapsLock:w,Tab:v,Enter:E,AltLeft:L,AltRight:L,ControlLeft:C,ControlRight:C},P=function(e){function n(n,o,r){var i=e.call(this,n)||this;return i.mapKey={},o.forEach((function(e){var n=new t(i.node,"div","keyboard_row");e.forEach((function(t){var e=new(B[t]||a)(n.node,t,r);i.mapKey[t]=e}))})),i}return m(n,e),n.prototype.setLang=function(t){for(var e in t)this.mapKey[e].setData(t[e])},n.prototype.handleDown=function(t){var e=this.mapKey[t];e&&e.handleDownHighlight()},n.prototype.handleUp=function(t){var e=this.mapKey[t];e&&e.handleUpHighlight()},n}(t);const R=[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight","Lang"]];var T=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),I=function(t){function e(e,n){var r=t.call(this,e)||this;r.langIndex=0;var i=function(t){r.output.content=t.content;var e=n.langs[t.langIndex];t.shift?r.board.setLang(e.shift):t.caps?r.board.setLang(e.caps):r.board.setLang(e.base)};return n.onChange.add(i),r.output=new o(r.node),r.board=new P(r.node,R,n),document.addEventListener("keydown",(function(t){console.log(t.code),r.board.handleDown(t.code)})),document.addEventListener("keyup",(function(t){console.log(t.code),r.board.handleUp(t.code)})),i(n.data),r}return T(e,t),e}(t);const x=function(){function t(){this.listeners=[]}return t.prototype.add=function(t){this.listeners.push(t)},t.prototype.remove=function(t){this.listeners=this.listeners.filter((function(e){return e!==t}))},t.prototype.edit=function(t){this.listeners.forEach((function(e){return e(t)}))},t}(),U={base:{Backquote:"`",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"Backspace",Tab:"Tab",KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",KeyT:"t",KeyY:"y",KeyU:"u",KeyI:"i",KeyO:"o",KeyP:"p",BracketLeft:"[",BracketRight:"]",Backslash:"\\",CapsLock:"CapsLk",KeyA:"a",KeyS:"s",KeyD:"d",KeyF:"f",KeyG:"g",KeyH:"h",KeyJ:"j",KeyK:"k",KeyL:"l",Semicolon:";",Quote:"'",Enter:"Enter",ShiftLeft:"Shift",KeyZ:"z",KeyX:"x",KeyC:"c",KeyV:"v",KeyB:"b",KeyN:"n",KeyM:"m",Comma:",",Period:".",Slash:"/",ArrowUp:"↑",ShiftRight:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→",Lang:"Lang"},shift:{Backquote:"`",Digit1:"!",Digit2:"@",Digit3:"#",Digit4:"$",Digit5:"%",Digit6:"^",Digit7:"&",Digit8:"*",Digit9:"(",Digit0:")",Minus:"_",Equal:"+",Backspace:"Backspace",Tab:"Tab",KeyQ:"Q",KeyW:"W",KeyE:"E",KeyR:"R",KeyT:"T",KeyY:"Y",KeyU:"U",KeyI:"I",KeyO:"O",KeyP:"P",BracketLeft:"{",BracketRight:"}",Backslash:"|",CapsLock:"CapsLk",KeyA:"A",KeyS:"S",KeyD:"D",KeyF:"F",KeyG:"G",KeyH:"H",KeyJ:"J",KeyK:"K",KeyL:"L",Semicolon:":",Quote:'"',Enter:"Enter",ShiftLeft:"Shift",KeyZ:"Z",KeyX:"X",KeyC:"C",KeyV:"V",KeyB:"B",KeyN:"N",KeyM:"M",Comma:"<",Period:">",Slash:"?",ArrowUp:"↑",ShiftRight:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→",Lang:"Lang"},caps:{Backquote:"`",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"Backspace",Tab:"Tab",KeyQ:"Q",KeyW:"W",KeyE:"E",KeyR:"R",KeyT:"T",KeyY:"Y",KeyU:"U",KeyI:"I",KeyO:"O",KeyP:"P",BracketLeft:"[",BracketRight:"]",Backslash:"\\",CapsLock:"CapsLk",KeyA:"A",KeyS:"S",KeyD:"D",KeyF:"F",KeyG:"G",KeyH:"H",KeyJ:"J",KeyK:"K",KeyL:"L",Semicolon:";",Quote:"'",Enter:"Enter",ShiftLeft:"Shift",KeyZ:"Z",KeyX:"X",KeyC:"C",KeyV:"V",KeyB:"B",KeyN:"N",KeyM:"M",Comma:",",Period:".",Slash:"/",ArrowUp:"↑",ShiftRight:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→",Lang:"Lang"}},M={base:{Backquote:"ё",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"Backspace",Tab:"Tab",KeyQ:"й",KeyW:"ц",KeyE:"у",KeyR:"к",KeyT:"е",KeyY:"н",KeyU:"г",KeyI:"ш",KeyO:"щ",KeyP:"з",BracketLeft:"х",BracketRight:"ъ",Backslash:"\\",CapsLock:"CapsLk",KeyA:"ф",KeyS:"ы",KeyD:"в",KeyF:"а",KeyG:"п",KeyH:"р",KeyJ:"о",KeyK:"л",KeyL:"д",Semicolon:"ж",Quote:"э",Enter:"Enter",ShiftLeft:"Shift",KeyZ:"я",KeyX:"ч",KeyC:"с",KeyV:"м",KeyB:"и",KeyN:"т",KeyM:"ь",Comma:"б",Period:"ю",Slash:".",ArrowUp:"↑",ShiftRight:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→",Lang:"Язык"},shift:{Backquote:"Ё",Digit1:"!",Digit2:'"',Digit3:"№",Digit4:";",Digit5:"%",Digit6:":",Digit7:"?",Digit8:"*",Digit9:"(",Digit0:")",Minus:"_",Equal:"+",Backspace:"Backspace",Tab:"Tab",KeyQ:"Й",KeyW:"Ц",KeyE:"У",KeyR:"К",KeyT:"Е",KeyY:"Н",KeyU:"Г",KeyI:"Ш",KeyO:"Щ",KeyP:"З",BracketLeft:"Х",BracketRight:"Ъ",Backslash:"/",CapsLock:"CapsLk",KeyA:"Ф",KeyS:"Ы",KeyD:"В",KeyF:"А",KeyG:"П",KeyH:"Р",KeyJ:"О",KeyK:"Л",KeyL:"Д",Semicolon:"Ж",Quote:"Э",Enter:"Enter",ShiftLeft:"Shift",KeyZ:"Я",KeyX:"Ч",KeyC:"С",KeyV:"М",KeyB:"И",KeyN:"Т",KeyM:"Ь",Comma:"Б",Period:"Ю",Slash:",",ArrowUp:"↑",ShiftRight:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→",Lang:"Язык"},caps:{Backquote:"Ё",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"Backspace",Tab:"Tab",KeyQ:"Й",KeyW:"Ц",KeyE:"У",KeyR:"К",KeyT:"Е",KeyY:"Н",KeyU:"Г",KeyI:"Ш",KeyO:"Щ",KeyP:"З",BracketLeft:"Х",BracketRight:"Ъ",Backslash:"\\",CapsLock:"CapsLk",KeyA:"Ф",KeyS:"Ы",KeyD:"В",KeyF:"А",KeyG:"П",KeyH:"Р",KeyJ:"О",KeyK:"Л",KeyL:"Д",Semicolon:"Ж",Quote:"Э",Enter:"Enter",ShiftLeft:"Shift",KeyZ:"Я",KeyX:"Ч",KeyC:"С",KeyV:"М",KeyB:"И",KeyN:"Т",KeyM:"Ь",Comma:"Б",Period:"Ю",Slash:".",ArrowUp:"↑",ShiftRight:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→",Lang:"Язык"}};var Q=function(){function t(t){this.langs=[U,M],this.onChange=new x,this._data=t}return Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t,this.onChange.edit(this.data)},enumerable:!1,configurable:!0}),t}();console.log("I work");var q,H=function(){function t(t){if("string"!=typeof t.content)throw new Error("Wrong content type. It should be 'string'!");if("number"!=typeof t.langIndex)throw new Error("Wrong langIndex type. It should be 'number'!");if("boolean"!=typeof t.shift)throw new Error("Wrong shift type. It should be 'boolean'!");if("boolean"!=typeof t.caps)throw new Error("Wrong caps type. It should be 'boolean'!");this.content=t.content,this.langIndex=t.langIndex,this.shift=t.shift,this.caps=t.caps}return t.loadInfo=function(){var e=localStorage.getItem("localState");return new t(JSON.parse(e))},t.prototype.saveInfo=function(){localStorage.setItem("localState",JSON.stringify(this))},t}();try{q=H.loadInfo()}catch(t){q=new H({content:"",langIndex:0,shift:!1,caps:!1})}var W=new Q(q),N=new I(document.body,W);window.keyboard=N,window.onbeforeunload=function(){new H(W.data).saveInfo()}})();