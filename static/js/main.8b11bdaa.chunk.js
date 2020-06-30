(this["webpackJsonprail-decoder"]=this["webpackJsonprail-decoder"]||[]).push([[0],{41:function(e,t,n){},58:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(18),o=n(16),i=n(23),l=n(21),c=n(0),d=n.n(c),s=n(9),u=n.n(s),h=n(96),p=n(102),y=n(101),g=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(h.a,{container:!0,id:"encodeGrid",className:"cipherGrid",direction:"column",justify:"flex-start",alignItems:"flex-start"},d.a.createElement(p.a,{id:"decodedText",className:"inputField",label:"Decoded Text:",multiline:!0,rows:6,variant:"outlined",onChange:this.props.onChange,value:this.props.textContent}),d.a.createElement(y.a,{color:"secondary",id:"encodeButton",className:"cipherButton",variant:"contained",onClick:this.props.onClick},"Encode")))}}]),n}(d.a.Component),f=n(106),m=n(105),v=n(103),C=(n(41),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"KeyBox",value:function(e){return e.ordered?d.a.createElement("div",null,d.a.createElement(f.a,{control:d.a.createElement(m.a,{title:"Ordered keys consist of a series of unique integers, starting at 0 and all below the length of the series (ex: 3 0 4 1 2)",placement:"right",arrow:!0},d.a.createElement(p.a,{variant:"standard",error:0!==e.errorMessage.length,helperText:e.errorMessage,id:"orderedKeyInput",onKeyDown:function(e){(e.keyCode<48||e.keyCode>57)&&8!==e.keyCode&&32!==e.keyCode&&188!==e.keyCode&&e.preventDefault()},onBlur:e.orderedBlur,size:"small"})),label:"Ordered Key:  ",labelPlacement:"start"})):d.a.createElement("div",null,d.a.createElement(f.a,{control:d.a.createElement(m.a,{title:"A standard rail-fence cipher key consists of a single integer, >0 and ideally on the smaller side (depending on text length).",placement:"right",arrow:!0},d.a.createElement(p.a,{variant:"standard",error:0!==e.errorMessage.length,helperText:e.errorMessage,id:"basicKeyInput",onKeyDown:function(e){(e.keyCode<48||e.keyCode>57)&&8!==e.keyCode&&e.preventDefault()},onBlur:e.keyBlur,size:"small"})),label:"Key: ",labelPlacement:"start"}))}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(f.a,{control:d.a.createElement(v.a,{id:"order=toggle=checkbox",color:"primary",onClick:this.props.onCheck}),label:"Use Ordered Key:",labelPlacement:"start"}),d.a.createElement(this.KeyBox,{ordered:this.props.ordered,keyBlur:this.props.keyBlur,orderedBlur:this.props.orderedBlur,errorMessage:this.props.errorMessage}))}}]),n}(d.a.Component)),k=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(h.a,{container:!0,id:"decodeGrid",className:"cipherGrid",direction:"column",justify:"flex-start",alignItems:"flex-start"},d.a.createElement(p.a,{id:"encodedText",className:"inputField",label:"Encoded Text:",multiline:!0,rows:6,variant:"outlined",onChange:this.props.onChange,value:this.props.textContent}),d.a.createElement(y.a,{color:"primary",id:"decodeButton",className:"cipherButton",variant:"contained",onClick:this.props.onClick},"Decode")))}}]),n}(d.a.Component),b=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={intKey:0,orderKey:[],encodeContent:"",decodeContent:"",isOrdered:!1,keyErrorLabel:""},a.onDecodeChange=a.onDecodeChange.bind(Object(o.a)(a)),a.onEncodeChange=a.onEncodeChange.bind(Object(o.a)(a)),a.onKeyBlur=a.onKeyBlur.bind(Object(o.a)(a)),a.onOrderedBlur=a.onOrderedBlur.bind(Object(o.a)(a)),a.encodeInput=a.encodeInput.bind(Object(o.a)(a)),a.decodeInput=a.decodeInput.bind(Object(o.a)(a)),a}return Object(a.a)(n,[{key:"isValidOrder",value:function(e){if(!Array.isArray(e))return!1;for(var t=0;t<e.length;t++){if(e[t]>e.length)return!1;for(var n=0;n<t;n++)if(e[n]===e[t])return!1}return!0}},{key:"doKeyError",value:function(e,t){var n=this;this.setState({keyErrorLabel:e}),setTimeout((function(){n.setState({keyErrorLabel:""})}),1e3*t)}},{key:"checkKeyInput",value:function(e,t){return 0!==e&&e?this.state.isOrdered===this.isValidOrder(t)||(this.doKeyError("Invalid key order",3),!1):(this.doKeyError("Invalid key",3),!1)}},{key:"encodeCipher",value:function(e,t){var n=this.isValidOrder(t),r=n?t.length:t;if(this.checkKeyInput(r,t)){for(var a=new Array(r),o=0;o<a.length;o++)a[o]="";var i=0,l=!1;for(o=0;o<e.length;o++)a[i]=a[i].concat(e.charAt(o)),i===r-1?l=!1:0===i&&(l=!0),l?i++:i--;return console.log(a),n?t.map((function(e){return a[e]})).join(""):a.join("")}}},{key:"decodeCipher",value:function(e,t){var n=this.isValidOrder(t),r=n?t.length:t;if(this.checkKeyInput(r,t)){var a=new Array(r);a.fill(0);for(var o=0,i=!1,l=0;l<e.length;l++)a[o]++,o===a.length-1?i=!1:0===o&&(i=!0),i?o++:o--;console.log(a),n&&(a=t.map((function(e){return a[e]}))),console.log(a);var c=a.map((function(t){var n=e.slice(0,t);return e=e.slice(t,e.length),n}));if(console.log(c),n){var d=[];for(l=0;l<c.length;l++)d.push(c[t.indexOf(l)]);c=d}console.log(c);var s="";for(o=0,i=!1;""!==c[o];)s=s.concat(c[o].charAt(0)),c[o]=c[o].slice(1,c[o].length),o===c.length-1?i=!1:0===o&&(i=!0),i?o++:o--;return s}}},{key:"encodeInput",value:function(e){console.log("Encoding text");var t=this.state.isOrdered?this.state.orderKey:this.state.intKey,n=this.encodeCipher(this.state.encodeContent,t);console.log(n),this.setState({decodeContent:n})}},{key:"decodeInput",value:function(e){console.log("Decoding text");var t=this.state.isOrdered?this.state.orderKey:this.state.intKey,n=this.decodeCipher(this.state.decodeContent,t);this.setState({encodeContent:n})}},{key:"onEncodeChange",value:function(e){this.setState({encodeContent:e.target.value})}},{key:"onDecodeChange",value:function(e){this.setState({decodeContent:e.target.value})}},{key:"onKeyBlur",value:function(e){console.log("Key input read."),this.setState({intKey:parseInt(e.target.value)})}},{key:"onOrderedBlur",value:function(e){console.log("Ordered input read.");var t=e.target.value;console.log(t);var n=t.match(/\d+/g);n&&this.setState({orderKey:n.map(Number)})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(C,{onCheck:function(){return e.setState({isOrdered:!e.state.isOrdered})},ordered:this.state.isOrdered,keyBlur:this.onKeyBlur,orderedBlur:this.onOrderedBlur,errorMessage:this.state.keyErrorLabel,id:"keyInput"}),d.a.createElement("br",null),d.a.createElement(h.a,{container:!0,direction:"row",id:"cipherRow",justify:"flex-start",alignItems:"center"},d.a.createElement(g,{onChange:this.onEncodeChange,onClick:this.encodeInput,textContent:this.state.encodeContent}),d.a.createElement(k,{onChange:this.onDecodeChange,onClick:this.decodeInput,textContent:this.state.decodeContent})))}}]),n}(d.a.Component);u.a.render(d.a.createElement(b,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.8b11bdaa.chunk.js.map