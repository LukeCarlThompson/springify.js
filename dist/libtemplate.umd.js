!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("libtemplate",e):(t=t||self).libtemplate=e()}(this,function(){"use strict";return function(){for(var t=this,e=[],i=arguments.length;i--;)e[i]=arguments[i];this.animating=!1;var n,a,o,p,s=10,m=30,u=20,f={input:0,output:0,velocity:0,amplitude:0},r=[],c=function(t,e,i){return t*(i-e)/100+e};e.map(function(e){void 0!==e.propName?(t[e.propName]=Object.assign({},f),t[e.propName].stiffness=e.stiffness||s,t[e.propName].damping=e.damping||m,t[e.propName].mass=e.mass||u,r.push(t[e.propName])):t.callback=e}),this.animate=function(){var e;a=Date.now(),t.animating||(n=a-1),o=a-n,n=a,t.animating=!0,r.forEach(function(t){var e,i,n,a,p,s;i=c((e=t).stiffness,-1,-300),n=c(e.damping,-.4,-20),a=c(e.mass,.1,10),p=i*(e.output-e.input),s=n*e.velocity,e.amplitude=(p+s)/a,e.velocity+=e.amplitude*(o/1e3),e.output+=e.velocity*(o/1e3)}),(e=t).callback.apply(e,r),r.every(function(t){return Math.abs(t.velocity)<.5&&Math.abs(t.output-t.input)<.5})?(t.animating=!1,console.log("finished spring animation")):(cancelAnimationFrame(p),p=requestAnimationFrame(t.animate))}}});