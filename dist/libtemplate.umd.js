!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define("libtemplate",i):(t=t||self).libtemplate=i()}(this,function(){"use strict";return function(){for(var t=this,i=[],e=arguments.length;e--;)i[e]=arguments[e];this.animating=!1;var n,a,o,p=5,u=10,s={input:0,output:0,velocity:0,amplitude:0,mass:.2},m=[],f=function(t,i,e){return t*(e-i)/100+i};i.map(function(i){void 0!==i.propName?(t[i.propName]=Object.assign({},s),t[i.propName].stiffness=i.stiffness||p,t[i.propName].damping=i.damping||u,m.push(t[i.propName])):t.callback=i}),this.animate=function(){var i;a=Date.now(),t.animating||(n=a-1),o=a-n,n=a,t.animating=!0,m.forEach(function(t){var i,e,n,a,p;e=f((i=t).stiffness,-1,-300),n=f(i.damping,-.4,-10),a=e*(i.output-i.input),p=n*i.velocity,i.amplitude=(a+p)/i.mass,i.velocity+=i.amplitude*(o/1e3),i.output+=i.velocity*(o/1e3)}),(i=t).callback.apply(i,m),m.every(function(t){return Math.abs(t.velocity)<.5&&Math.abs(t.output-t.input)<.5})?(t.animating=!1,console.log("finished spring animation")):requestAnimationFrame(t.animate)}}});