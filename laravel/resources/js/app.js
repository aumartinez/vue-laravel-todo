(function(){"use strict";var e={7564:function(e,t,n){var a=n(9242),o=n(1020),s=n(7749),r=n(3494),l=n(8539),c=n(4551),i=n(8429),u=(n(2166),n(3396)),d=(n(7658),n(4870)),p=n(7139);const f="http://localhost:8000/api",h={GET_API:f+"/task",POST_API:f+"/task",DEL_API:f+"/task/"};var b=n(6265),v=n.n(b),k=n(7387),g=n.n(k);const m={async get(e){let t=await v().get(e).then(this.sleeper(500)).then((e=>e.data)).catch((e=>e));return t},async post(e,t){let n=await v().post(e,t).then(this.sleeper(500)).then((e=>{console.log(e)})).catch((e=>e));return n},async delete(e){let t=await v()["delete"](e).then(this.sleeper(500)).then((e=>{console.log(e)})).catch((e=>e));return t},ajaxPost(e,t){let n=g().ajax({url:e,type:"post",data:t,processData:!1,contentType:!1,success:function(e){console.log(e)}});return n},sleeper(e){return function(t){return new Promise((n=>setTimeout((()=>n(t)),e)))}}},y=(0,o.Q_)({id:"VueStore",state:()=>({loaded:!1,tasks:[],removed:[],newTask:"",success:!1}),actions:{fetchList(){try{let e=m.get(h.GET_API);e.then((e=>{let t=e.sort(((e,t)=>e.index-t.index));t.forEach((e=>{this.tasks.push(e)})),this.loaded=!0}))}catch(e){console.log(e)}},saveTask(e){try{m.post(h.POST_API,e),this.success=!0}catch(t){console.log(t)}},deleteTask(e){try{m["delete"](h.DEL_API+e)}catch(t){console.log(t)}}}}),_=e=>((0,u.dD)("data-v-6cb25568"),e=e(),(0,u.Cn)(),e),w={class:"todolist"},x={class:"container"},T={class:"row"},S={class:"offset-md-3 col-md-6 pt-5 pb-5"},O={class:"task-heading text-center pt-3 pb-3 mb-3"},P=(0,u.Uk)(" Lista de tareas "),j={class:"list-wrapper"},A={key:0,class:"alert alert-success text-center"},D={class:"btns-wrapper"},C=_((()=>(0,u._)("span",null," Borrar todo ",-1))),E=_((()=>(0,u._)("span",null," Borrar seleccionadas ",-1))),I={class:"list-unstyled todo-container mt-3 mb-3"},U={key:0},W=_((()=>(0,u._)("span",null," Cargando tareas de la API ... ",-1))),L=[W],q={key:1},B={class:"text-danger"},G=_((()=>(0,u._)("span",null," No hay tareas en la lista ",-1))),N={class:"form-check"},K=["value","id"],M=["for"],V={class:"input-group pt-3 pb-3"},$=["onKeyup"],z={class:"list-bottom"},F=_((()=>(0,u._)("span",null," Guardar ",-1)));var H={name:"TodoList",setup(e){const t=y();function n(){let e=t.tasks.map((e=>e.index));t.removed=e,t.tasks.length=0}function o(){if(!t.newTask)return;let e={};e.name=t.newTask,e.index=t.tasks.length,t.tasks.push(e),t.newTask=null}function s(){let e=document.querySelectorAll("input:checked"),n=[],a={};e.forEach((e=>{let o=e.value;e.checked=!1,n.push(Number(o)),t.removed.push(a.index=o)}));let o=t.tasks.filter((e=>!n.includes(e.index)));t.tasks=o}function r(){t.tasks.forEach((e=>{t.saveTask(e)})),t.removed.forEach((e=>{t.deleteTask(e)})),this.success="Tarea guardada"}return(0,u.bv)((()=>{t.fetchList()})),(e,l)=>{const c=(0,u.up)("font-awesome-icon");return(0,u.wg)(),(0,u.iD)("div",w,[(0,u._)("div",x,[(0,u._)("div",T,[(0,u._)("div",S,[(0,u._)("h1",O,[P,(0,u._)("span",null,[(0,u.Wm)(c,{icon:"fa-solid fa-clipboard"})])]),(0,u._)("div",j,[(0,d.SU)(t).success?((0,u.wg)(),(0,u.iD)("div",A," Tarea guardada ")):(0,u.kq)("",!0),(0,u._)("div",D,[(0,u._)("button",{onClick:l[0]||(l[0]=e=>n()),class:"btn bg-danger",type:"button"},[C,(0,u.Wm)(c,{icon:"fa-solid fa-trash"})]),(0,u._)("button",{onClick:l[1]||(l[1]=e=>s()),class:"btn bg-warning",type:"button"},[E,(0,u.Wm)(c,{icon:"fa-solid fa-trash"})])]),(0,u._)("ul",I,[(0,d.SU)(t).loaded?(0,u.kq)("",!0):((0,u.wg)(),(0,u.iD)("li",U,L)),0===(0,d.SU)(t).tasks.length&&(0,d.SU)(t).loaded?((0,u.wg)(),(0,u.iD)("li",q,[(0,u._)("span",B,[(0,u.Wm)(c,{icon:"fa-solid fa-xmark"})]),G])):(0,u.kq)("",!0),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,d.SU)(t).tasks,(e=>((0,u.wg)(),(0,u.iD)("li",{key:e.index},[(0,u._)("div",N,[(0,u._)("input",{class:"form-check-input",type:"checkbox",value:e.index,id:`item-${e.index}`},null,8,K),(0,u._)("label",{class:"form-check-label",for:`item-${e.index}`},(0,p.zw)(e.name),9,M)])])))),128))]),(0,u._)("div",V,[(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>(0,d.SU)(t).newTask=e),onKeyup:(0,a.D2)(o,["enter"]),type:"text",class:"form-control",placeholder:"Agregua una tarea","aria-label":"Agregar tarea","aria-describedby":"button-add"},null,40,$),[[a.nr,(0,d.SU)(t).newTask]]),(0,u._)("button",{onClick:l[3]||(l[3]=e=>o()),class:"btn btn-outline-secondary btn-primary",type:"button",id:"button-add"},[(0,u.Wm)(c,{icon:"fa-solid fa-plus"})])]),(0,u._)("div",z,[(0,u._)("button",{onClick:l[4]||(l[4]=e=>r()),class:"btn bg-success",type:"button"},[F,(0,u.Wm)(c,{icon:"fa-solid fa-cloud-arrow-up"})])])])])])])])}}},Q=n(89);const R=(0,Q.Z)(H,[["__scopeId","data-v-6cb25568"]]);var X=R,Y={name:"App",setup(e){return(e,t)=>((0,u.wg)(),(0,u.j4)(X))}};const Z=Y;var J=Z;r.vI.add(l.mRB,i.NCV,c.vnX);const ee=(0,a.ri)(J);ee.use((0,o.WB)()),ee.component("font-awesome-icon",s.GN),ee.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],s=e[u][2];for(var l=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(l=!1,s<r&&(r=s));if(l){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,r=a[0],l=a[1],c=a[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var u=c(n)}for(t&&t(a);i<r.length;i++)s=r[i],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self["webpackChunkvue_laravel_todo"]=self["webpackChunkvue_laravel_todo"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7564)}));a=n.O(a)})();
//# sourceMappingURL=app.js.map