(this.webpackJsonpface_detection=this.webpackJsonpface_detection||[]).push([[0],{291:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(39),r=a.n(i),o=(a(80),a(11)),l=a(12),c=a(14),m=a(13),p=(a(81),{display:"flex",justifyContent:"flex-end"}),u=function(e){return e.isSignedIn?s.a.createElement("nav",{style:p},s.a.createElement("p",{onClick:function(){return e.onRouteChange("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:p},s.a.createElement("p",{onClick:function(){return e.onRouteChange("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return e.onRouteChange("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},d=a(72),h=a.n(d),g=a(73),b=a.n(g),f={},w=function(){return s.a.createElement("div",{className:"ma4 mt0",style:f},s.a.createElement(h.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150,backgroundImage:"linear-gradient(to right,#dde8d8, #bfcf1b)"}},s.a.createElement("div",{className:"Tilt-inner pa3"},s.a.createElement("img",{style:{paddingTop:"5px"},src:b.a,alt:"brain-icon"}))))},E=(a(82),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Magic Brain will detect face in your pictures. Give it a try."),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form pa4 br3 shadow-5 center",style:v},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Enter url",onChange:this.props.onInputChange}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv3 dib white bg-light-purple",onClick:this.props.onSubmit},"Detect Me"))))}}]),a}(n.Component)),v={},C=E,y=function(e){return{position:"absolute",boxShadow:"0 0 0 3px #149df2 inset",display:"flex",flexWrap:"wrap",justifyContent:"center",cursor:"pointer",left:e.leftCol,top:e.topRow,bottom:e.bottomRow,right:e.rightCol}},N=function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt3"},s.a.createElement("img",{id:"inputImage",src:t,alt:"",width:"500px",height:"auto"}),s.a.createElement("div",{className:"bounding-box",style:y(a)})))},S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",null,s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center pa2  shadow-5"},s.a.createElement("main",{className:"pa5 black-80"},s.a.createElement("div",{className:"measure pa3"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{href:"#0",className:"f6 link dim black db pointer",onClick:function(){e("register")}},"Register"))))))}}]),a}(s.a.Component),U=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onSubmitRegister=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})),console.log(n.state)},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center pa2  shadow-5"},s.a.createElement("main",{className:"pa5 black-80"},s.a.createElement("div",{className:"measure pa3"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange}),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:this.onSubmitRegister}))))))}}]),a}(s.a.Component),A=(a(83),function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,"".concat(t," , your current rank is..."),s.a.createElement("span",{className:" white f1 "},a))}),O=a(74),R=a.n(O),j={input:"",imageUrl:"",box:[],route:"signin",signedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},I=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onRouteChange=function(t){"home"===t?e.setState({signedIn:!0}):"signin"===t&&e.setState({initialState:j}),e.setState({route:t})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.name,entries:t.entries,joined:new Date}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3000/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){}))},e.state=j,e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(R.a,{params:P,className:"particles"}),s.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:this.state.signedIn}),"home"===this.state.route?s.a.createElement(s.a.Fragment,null,s.a.createElement(w,null),s.a.createElement(A,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(C,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),s.a.createElement(N,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?s.a.createElement(S,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):s.a.createElement(U,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),a}(s.a.Component),P={particles:{number:{value:100,density:{enable:!0,value_area:800}}}},k=I;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t){e.exports="data:image/png;base64,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"},75:function(e,t,a){e.exports=a(291)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.b3de9e5b.chunk.js.map