(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(20),r=n.n(i),c=n(6),l=n(7),u=n(9),s=n(8),m=n(5),d=n(10),p=n(4);var h=function(e){return o.a.createElement("h1",null,e.title)};var f=function(e){var t=e.post;return o.a.createElement("figure",{className:"figure"},o.a.createElement("img",{className:"photo",src:t.imageLink,alt:t.description}),o.a.createElement("figcaption",null,o.a.createElement("p",null,t.description)),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{style:{marginRight:"10px"},onClick:function(){e.onRemovePhoto(t)}},"Remove"),o.a.createElement(p.b,{className:"",to:"/UpdatePhoto"},o.a.createElement("button",{style:{paddingLeft:"25px",paddingRight:"25px"}},"Update"))))};var v=function(e){return o.a.createElement("div",null,o.a.createElement(p.b,{className:"addIcon",to:"/AddPhoto"}),o.a.createElement("div",{className:"photoGrid"},e.posts.sort(function(e,t){return t.id-e.id}).map(function(t,n){return o.a.createElement(f,{key:n,post:t,onRemovePhoto:e.onRemovePhoto})})))},b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.link.value,n=e.target.elements.description.value,a={id:Number(new Date),description:n,imageLink:t};n&&t&&this.props.onAddPhoto(a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"This is Add Photo Page"),o.a.createElement("div",{className:"form"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Link",name:"link"}),o.a.createElement("input",{type:"text",placeholder:"Description",name:"description"}),o.a.createElement("button",null,"Post"))))}}]),t}(a.Component),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleSave=e.handleSave.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSave",value:function(e){e.preventDefault();var t=e.target.elements.link.value,n=e.target.elements.description.value,a={id:Number(new Date),description:n,imageLink:t};n&&t&&this.props.onUpdatePhoto(a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"This is Update Photo Page"),o.a.createElement("div",{className:"form"},o.a.createElement("form",{onSubmit:this.handleSave},o.a.createElement("input",{type:"text",name:"link",defalutValue:this.imageLink}),o.a.createElement("input",{type:"text",name:"description",defalutValue:this.description}),o.a.createElement("button",null,"Save"),this.imageLink)))}}]),t}(a.Component),g=(n(34),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={posts:[{id:0,description:"beautiful landscape",imageLink:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg3919321_1443393332_n.jpg"},{id:1,description:"Aliens???",imageLink:"https://free-images.com/md/af2c/truffula_trees_at_kilauea.jpg"},{id:2,description:"On a vacation!",imageLink:"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"}]},e.removePhoto=e.removePhoto.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"removePhoto",value:function(e){this.setState(function(t){return{posts:t.posts.filter(function(t){return t!==e})}})}},{key:"addPhoto",value:function(e){this.setState(function(t){return{posts:t.posts.concat(e)}})}},{key:"updatePhoto",value:function(e){this.setState(function(t){return{posts:t.posts.filter(function(t){return t!==e})}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p.c,{exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement(h,{title:"Photo Frame"}),o.a.createElement(v,{posts:e.state.posts,onRemovePhoto:e.removePhoto}))}}),o.a.createElement(p.c,{exact:!0,path:"/AddPhoto",render:function(t){var n=t.history;return o.a.createElement(b,{onAddPhoto:function(t){e.addPhoto(t),n.push("/")}})}}),o.a.createElement(p.c,{exact:!0,path:"/UpdatePhoto",render:function(t){var n=t.history;return o.a.createElement(E,{onUpdatePhoto:function(t){e.updatePhoto(t),n.push("/")}})}}))}}]),t}(a.Component));r.a.render(o.a.createElement(p.a,null,o.a.createElement(g,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1158ee73.chunk.js.map