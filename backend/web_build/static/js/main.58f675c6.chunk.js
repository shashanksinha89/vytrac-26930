(this["webpackJsonpvytrac-web"]=this["webpackJsonpvytrac-web"]||[]).push([[0],{14:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(24),i=n.n(s),c=(n(32),n(5)),r=n(6),o=n(10),l=n(9),u=(n(14),n(19)),h=n.n(u),j=n(25),m=function(){function e(){Object(c.a)(this,e)}return Object(r.a)(e,null,[{key:"init",value:function(e){return this.data||(this.data=new d,this.data.init(e)),this.data}}]),e}();m.data=void 0;var d=function(){function e(){Object(c.a)(this,e),this.userId=void 0,this.username=void 0,this.name=void 0,this.token=void 0,this.guest=!0,this.requestHandler=void 0,this.firebaseToken=void 0}return Object(r.a)(e,[{key:"init",value:function(e){}},{key:"login",value:function(){var e=Object(j.a)(h.a.mark((function e(t,n){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,s={username:t,password:n},e.abrupt("return",fetch("https://vytrac-24106.botics.co/api/v1/login/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){return console.log(e),!(!e||!e.token)&&(a.token=e.token,console.log("tokens",a.token),!0)})).catch((function(e){console.error(e)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),g=n(20),A=n(15),b=n(3),f=n(11),x=n(7),p=n.p+"static/media/login_background.79d8f1be.png",v=n.p+"static/media/vytrac_white.76b0c138.png",O=n(0),y=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),m.init(),(a=t.call(this,e)).state={},a}return Object(r.a)(n,[{key:"validate",value:function(){return this.state.username?!!this.state.password||(alert("Please fill your password"),!1):(alert("Please fill your username"),!1)}},{key:"login",value:function(){if(this.validate())try{m.data.login(this.state.username+"",this.state.password+"").then((function(e){e?alert("Successful login!"):alert("Could not login")}))}catch(e){alert("Could not login")}}},{key:"resetPassword",value:function(){this.props.changeItem("reset-password")}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{style:{height:"100%"},children:[Object(O.jsxs)(f.a,{className:"vertical-container",children:[Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"green-line"})}),Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"grey-line"})})]}),Object(O.jsxs)("p",{className:"text-left",children:["Welcome to ",Object(O.jsx)("span",{className:"bold-blue",children:"VyTrac"})]}),Object(O.jsx)("p",{className:"text-left dynamic-font-normal",children:"Lorem ipsum dolor sit amet, cons cdipiscing elit. Duis non turpis nec nunc "}),Object(O.jsx)("p",{className:"grey-text username-label dynamic-font-normal",children:"Username, Email or Phone number"}),Object(O.jsx)("input",{onChange:function(t){return e.setState({username:t})},className:"text-field",type:"text",name:"username"}),Object(O.jsx)("p",{className:"grey-text password-label dynamic-font-normal",children:"Password"}),Object(O.jsx)("input",{onChange:function(t){return e.setState({password:t})},className:"text-field",type:"password",name:"password"}),Object(O.jsx)(f.a,{className:"vertical-container remember-me",children:Object(O.jsxs)(b.a,{style:{padding:0,margin:0},xs:12,children:[Object(O.jsx)("input",{type:"checkbox",className:"greycheck dynamic-font-normal"}),Object(O.jsx)("span",{className:"grey-text dynamic-font-normal",children:"\xa0\xa0\xa0\xa0Remember me"})]})}),Object(O.jsx)("div",{style:{height:"35%"}}),Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{xs:2,children:Object(O.jsx)(x.a,{className:"dynamic-font-normal",onClick:function(){return e.resetPassword()},style:{marginRight:"50%"},variant:"light",children:"FORGOT PASSWORD"})}),Object(O.jsx)(b.a,{xs:8}),Object(O.jsx)(b.a,{xs:2,children:Object(O.jsx)(x.a,{className:"dynamic-font-normal",onClick:function(){return e.login()},children:"LOGIN"})})]})]})}}]),n}(a.Component),C=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),m.init(),(a=t.call(this,e)).state={},a}return Object(r.a)(n,[{key:"validate",value:function(){return this.state.username?!!this.state.password||(alert("Please fill your password"),!1):(alert("Please fill your username"),!1)}},{key:"login",value:function(){if(this.validate())try{m.data.login(this.state.username+"",this.state.password+"").then((function(e){e?alert("Successful login!"):alert("Could not login")}))}catch(e){alert("Could not login")}}},{key:"gotNumber",value:function(e){var t=document.querySelector("input[name=number".concat(e+1,"]"));null!==t&&t.focus()}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(f.a,{className:"vertical-container",children:[Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"grey-line-inv"})}),Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"green-line-inv"})})]}),Object(O.jsx)("div",{className:"centered-logo",children:Object(O.jsx)("div",{className:"logo-container",children:Object(O.jsx)("img",{className:"shield-logo",src:"data:image/png;base64,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"})})}),Object(O.jsx)("p",{className:"text-left normal-text top25",style:{marginTop:30},children:"Security token"}),Object(O.jsxs)("p",{className:"text-left smaller-text",children:["Enter your 6 digit verification code sent to ",Object(O.jsx)("b",{children:"user@email.com"}),". Didn\u2019t receive your code yet? ",Object(O.jsx)("a",{href:"#",children:"Send it again."})]}),Object(O.jsxs)("div",{className:"vertical-container centered top25",children:[Object(O.jsx)("input",{autocomplete:"off",onChange:function(t){e.gotNumber(1),e.setState({number1:t})},className:"text-field-token",style:{marginLeft:0},type:"text",name:"number1"}),Object(O.jsx)("input",{autocomplete:"off",onChange:function(t){e.gotNumber(2),e.setState({number2:t})},className:"text-field-token",type:"text",name:"number2"}),Object(O.jsx)("input",{autocomplete:"off",onChange:function(t){e.gotNumber(3),e.setState({number3:t})},className:"text-field-token",type:"text",name:"number3"}),Object(O.jsx)("input",{autocomplete:"off",onChange:function(t){e.gotNumber(4),e.setState({number4:t})},className:"text-field-token",type:"text",name:"number4"}),Object(O.jsx)("input",{autocomplete:"off",onChange:function(t){e.gotNumber(6),e.setState({number6:t})},className:"text-field-token",style:{marginRight:0},type:"text",name:"number5"})]}),Object(O.jsxs)("div",{className:"token-bottom-buttons-container",children:[Object(O.jsx)(x.a,{onClick:function(){return e.props.changeItem("login")},style:{marginRight:"55%"},variant:"light",children:"CANCEL"}),Object(O.jsx)(x.a,{onClick:function(){return e.login()},children:"CONTINUE"})]})]})}}]),n}(a.Component),N="data:image/png;base64,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",w=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),m.init(),(a=t.call(this,e)).state={},a}return Object(r.a)(n,[{key:"validate",value:function(){return!!this.state.username||(alert("Please fill your email"),!1)}},{key:"login",value:function(){if(this.validate())try{this.props.changeItem("reset-password-input")}catch(e){alert("Could not login")}}},{key:"gotNumber",value:function(e){var t=document.querySelector("input[name=number".concat(e+1,"]"));null!==t&&t.focus()}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{style:{height:"100%"},children:[Object(O.jsxs)(f.a,{className:"vertical-container",children:[Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"green-line"})}),Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"grey-line"})})]}),Object(O.jsx)("div",{className:"centered-logo",children:Object(O.jsx)("div",{className:"logo-container",children:Object(O.jsx)("img",{className:"shield-logo",src:N})})}),Object(O.jsx)("p",{className:"text-left normal-text top25",style:{marginTop:30},children:"Forgot my password"}),Object(O.jsx)("p",{className:"text-left smaller-text",children:"Enter the email you used to register your Vytrac account."}),Object(O.jsx)("p",{className:"grey-text password-label top25",children:"Email"}),Object(O.jsx)("input",{onChange:function(t){return e.setState({username:t})},className:"text-field",type:"input",name:"password"}),Object(O.jsxs)("div",{className:"token-bottom-buttons-container",children:[Object(O.jsx)(x.a,{onClick:function(){return e.props.changeItem("login")},style:{marginRight:"55%"},variant:"light",children:"CANCEL"}),Object(O.jsx)(x.a,{onClick:function(){return e.login()},children:"NEXT"})]})]})}}]),n}(a.Component),I=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),m.init(),(a=t.call(this,e)).state={},a}return Object(r.a)(n,[{key:"validate",value:function(){return this.state.password1?!!this.state.password2||(alert("Please fill your password"),!1):(alert("Please fill your username"),!1)}},{key:"login",value:function(){if(this.validate())try{m.data.login(this.state.username+"",this.state.password+"").then((function(e){e?alert("Successful login!"):alert("Could not login")}))}catch(e){alert("Could not login")}}},{key:"gotNumber",value:function(e){var t=document.querySelector("input[name=number".concat(e+1,"]"));null!==t&&t.focus()}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(f.a,{className:"vertical-container",children:[Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"grey-line-inv"})}),Object(O.jsx)(b.a,{className:"line-container",children:Object(O.jsx)("div",{className:"green-line-inv"})})]}),Object(O.jsx)("div",{className:"centered-logo",children:Object(O.jsx)("div",{className:"logo-container",children:Object(O.jsx)("img",{className:"shield-logo",src:N})})}),Object(O.jsx)("p",{className:"text-left normal-text",style:{marginTop:30},children:"Reset my password"}),Object(O.jsx)("p",{className:"text-left smaller-text",children:"Set your new password"}),Object(O.jsx)("p",{className:"grey-text password-label top25",children:"Password"}),Object(O.jsx)("input",{onChange:function(t){return e.setState({password1:t})},className:"text-field",type:"password",name:"password1"}),Object(O.jsx)("p",{className:"grey-text password-label",style:{fontSize:8,marginTop:5},children:"It must be 8 characters or more, have at least 1 number, 1 special character and 1 upper case"}),Object(O.jsx)("p",{className:"grey-text password-label top15",children:"Confirm password"}),Object(O.jsx)("input",{onChange:function(t){return e.setState({password2:t})},className:"text-field",type:"password",name:"password2"}),Object(O.jsxs)("div",{className:"token-bottom-buttons-container-smaller",children:[Object(O.jsx)(x.a,{onClick:function(){return e.props.changeItem("login")},style:{marginRight:"55%"},variant:"light",children:"CANCEL"}),Object(O.jsx)(x.a,{onClick:function(){return e.login()},children:"CONTINUE"})]})]})}}]),n}(a.Component),E=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),m.init(),(a=t.call(this,e)).state={currentItem:"login"},a}return Object(r.a)(n,[{key:"validate",value:function(){return this.state.username?!!this.state.password||(alert("Please fill your password"),!1):(alert("Please fill your username"),!1)}},{key:"login",value:function(){if(this.validate())try{m.data.login(this.state.username+"",this.state.password+"").then((function(e){e?alert("Successful login!"):alert("Could not login")}))}catch(e){alert("Could not login")}}},{key:"showItem",value:function(){return"login"==this.state.currentItem?Object(O.jsx)(y,{changeItem:this.changeItem.bind(this)}):"login-token"==this.state.currentItem?Object(O.jsx)(C,{changeItem:this.changeItem.bind(this)}):"reset-password"==this.state.currentItem?Object(O.jsx)(w,{changeItem:this.changeItem.bind(this)}):"reset-password-input"==this.state.currentItem?Object(O.jsx)(I,{changeItem:this.changeItem.bind(this)}):Object(O.jsx)(y,{changeItem:this.changeItem.bind(this)})}},{key:"changeItem",value:function(e){this.setState({currentItem:e})}},{key:"render",value:function(){var e;return Object(O.jsx)(A.a,{className:"login-container",children:Object(O.jsxs)(f.a,{className:"login-row",children:[Object(O.jsxs)(b.a,{className:"login-background-image-gradient",xs:7,children:[Object(O.jsx)("img",{className:"login-background-image",src:p}),Object(O.jsx)("div",{className:"login-user-thumb"}),Object(O.jsxs)("div",{className:"logos-container",children:[Object(O.jsx)("img",{className:"login-logo-top",src:"data:image/png;base64,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"}),Object(O.jsx)("img",{className:"login-logo-bottom",src:v})]})]}),Object(O.jsx)(b.a,(e={xs:5,className:"login-form"},Object(g.a)(e,"xs",5),Object(g.a)(e,"children",this.showItem()),e))]})})}}]),n}(a.Component),k=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),m.init(),(a=t.call(this,e)).state={},a}return Object(r.a)(n,[{key:"validate",value:function(){return this.state.username?!!this.state.password||(alert("Please fill your password"),!1):(alert("Please fill your username"),!1)}},{key:"login",value:function(){if(this.validate())try{m.data.login(this.state.username+"",this.state.password+"").then((function(e){e?alert("Successful login!"):alert("Could not login")}))}catch(e){alert("Could not login")}}},{key:"render",value:function(){return Object(O.jsx)(E,{})}}]),n}(a.Component),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))},Q=n(27);i.a.render(Object(O.jsx)(Q.a,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),Y()}},[[40,1,2]]]);
//# sourceMappingURL=main.58f675c6.chunk.js.map