(this.webpackJsonpwyr=this.webpackJsonpwyr||[]).push([[0],{119:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=(a(80),a(9)),l=a(10),i=a(12),u=a(11),d=a(13),m=a(8),h=a(31),p=a(74),b=a(17),v=a(14),f=a(64),E=a.n(f),O=a(65),j=a.n(O),g=a(66),y=a.n(g),w={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:j.a,answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:y.a,answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:E.a,answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},x={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function k(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){x=Object(v.a)({},x,Object(b.a)({},r.id,r)),w=Object(v.a)({},w,Object(b.a)({},n,Object(v.a)({},w[n],{questions:w[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function U(e){return function(e){return new Promise((function(t,a){var n,r={id:(n=e).id,name:n.name,avatarURL:n.avatarURL,answers:{},questions:[]};setTimeout((function(){w=Object(v.a)({},w,Object(b.a)({},r.id,r)),t(r)}),1e3)}))}(e)}function q(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){w=Object(v.a)({},w,Object(b.a)({},t,Object(v.a)({},w[t],{answers:Object(v.a)({},w[t].answers,Object(b.a)({},a,n))}))),x=Object(v.a)({},x,Object(b.a)({},a,Object(v.a)({},x[a],Object(b.a)({},n,Object(v.a)({},x[a][n],{votes:x[a][n].votes.concat([t])}))))),e()}),500)}))}(e)}var T="RECEIVE_USERS",N="ADD_ANSWER_TO_USER",S="ADD_QUESTION_TO_USER",C="ADD_USER";var L="RECEIVE_QUESTIONS",R="ADD_QUESTION",A="ANSWER_QUESTION";var I="SET_AUTHED_USER",z="UNSET_AUTHED_USER";function D(e){return{type:I,id:e}}var _="SET_CALLBACK_LINK",P="UNSET_CALLBACK_LINK";var B=a(19),V=a.n(B);function Q(e){return function(t){return t(Object(B.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},w))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},x))}),1e3)}))]).then((function(e){var t=Object(p.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(a){var n=a.users,r=a.questions;t(function(e){return{type:T,users:e}}(n)),t(function(e){return{type:L,questions:e}}(r)),t(D(null)),t({type:_,callback:e}),t(Object(B.hideLoading)())}))}}function F(e,t,a){return function(n){return n(Object(B.showLoading)()),U({id:e,name:t,avatarURL:a}).then((function(e){n(function(e){return{type:C,user:e}}(e)),n(D(e.id)),n(Object(B.hideLoading)())}))}}function H(){return function(e){e(Object(B.showLoading)()),e({type:P}),e({type:z}),e(Object(B.hideLoading)())}}function M(e,t){return function(a,n){a(Object(B.showLoading)());var r,o=n().authedUser;return(r={optionOneText:e,optionTwoText:t,author:o},k(r)).then((function(e){a(function(e){return{type:R,question:e}}(e)),a(function(e,t){return{type:S,qid:e,authedUser:t}}(e.id,o)),a(Object(B.hideLoading)())}))}}function Y(e){var t=e.qid,a=e.answer;return function(e,n){e(Object(B.showLoading)());var r=n().authedUser;return q({authedUser:r,qid:t,answer:a}).then((function(){e(function(e){var t=e.qid,a=e.authedUser,n=e.answer;return{type:A,qid:t,authedUser:a,answer:n}}({authedUser:r,qid:t,answer:a})),e(function(e){var t=e.qid,a=e.authedUser,n=e.answer;return{type:N,qid:t,authedUser:a,answer:n}}({authedUser:r,qid:t,answer:a})),e(Object(B.hideLoading)())}))}}var W=a(24),J=a(128),K=a(129),G=a(68),$=a(125),X=a(126),Z=a(156),ee=a(67),te=a.n(ee);Z.a.addLocale(te.a);var ae=new Z.a("en-US"),ne=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.name,n=e.username,o=e.score,c=e.posted;return r.a.createElement($.a,{className:"flex"},r.a.createElement("div",{className:"user-icon",style:{backgroundImage:"url(".concat(t.avatarURL,")")}}),r.a.createElement("div",{className:"user-info"},n," @",a," ",c&&r.a.createElement("div",null," \u2022 ",c),r.a.createElement("br",null),r.a.createElement(X.a,{color:"info"},"Score: ",o)," "))}}]),t}(n.Component);var re=Object(m.connect)((function(e,t){var a=e.users,n=e.questions,r=e.authedUser,o=t.qid,c=n[o],s=a[o?c.author:r],l=o?c.author:r,i=a[o?c.author:r].name,u=Object.keys(s.answers).length,d=Object.keys(s.questions).length;return{user:s,name:l,username:i,score:u+d,posted:o?ae.format(c.timestamp):"",answersLength:u,questionsLength:d}}))(ne),oe=a(127),ce=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.question;return r.a.createElement("div",null,r.a.createElement(oe.a,{className:"question"},"Would you rather ",e.optionOne.text," or"," ",e.optionTwo.text,"?"))}}]),t}(n.Component);var se=Object(m.connect)((function(e,t){return{question:e.questions[t.qid]}}))(ce),le=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.answerCheck,a=e.qid;return r.a.createElement("div",null,r.a.createElement(J.a,{className:"card"},r.a.createElement(re,{qid:a}),r.a.createElement(K.a,null,r.a.createElement(se,{qid:a}),r.a.createElement(W.b,{to:"/questions/".concat(a)},r.a.createElement(G.a,{color:t?"info":"primary",size:"md",block:!0},t?"View Question":"Answer Question")))))}}]),t}(n.Component);var ie=Object(m.connect)((function(e,t){var a=e.questions,n=e.authedUser,r=e.users,o=t.qid,c=a[o],s=r[c.author].name,l=r[c.author];return{question:c,answerCheck:Object.keys(r[n].answers).includes(o),user:l,author:s}}))(le),ue=a(130),de=a(131),me=a(132),he=a(133),pe=a(134),be=a(5),ve=a.n(be),fe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:"unanswered"},a.setActiveTab=function(e){a.setState((function(){return{activeTab:e}}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.answered,n=t.unanswered,o=t.yours,c=t.user,s=this.state.activeTab,l=function(t){s!==t&&e.setActiveTab(t)};return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h3",{className:"flex"},r.a.createElement("div",{className:"user-icon",style:{backgroundImage:"url(".concat(c.avatarURL,")"),margin:"10px"}}),"Hi ",c?c.name:null,"!"),r.a.createElement(ue.a,{className:"dash-tabs",tabs:!0},r.a.createElement(de.a,null,r.a.createElement(me.a,{className:ve()({active:"unanswered"===s}),onClick:function(){return l("unanswered")}},"Unanswered Questions")),r.a.createElement(de.a,null,r.a.createElement(me.a,{className:ve()({active:"answered"===s}),onClick:function(){return l("answered")}},"Answered Questions")),r.a.createElement(de.a,null,r.a.createElement(me.a,{className:ve()({active:"yours"===s}),onClick:function(){return l("yours")}},"Your Questions"))),r.a.createElement(he.a,{activeTab:s},r.a.createElement(pe.a,{tabId:"unanswered"},n.map((function(e){return r.a.createElement(ie,{qid:e,key:e})}))),r.a.createElement(pe.a,{tabId:"answered"},a.map((function(e){return r.a.createElement(ie,{qid:e,key:e})}))),r.a.createElement(pe.a,{tabId:"yours"},o.map((function(e){return r.a.createElement(ie,{qid:e,key:e})})))))}}]),t}(n.Component);var Ee=Object(m.connect)((function(e){var t=e.questions,a=e.authedUser,n=e.users[a],r=Object.keys(t),o=n.questions,c=Object.keys(n.answers),s=r.filter((function(e){return c.includes(e)})),l=r.filter((function(e){return!c.includes(e)}));return{user:n,answered:s.sort((function(e,a){return t[a].timestamp-t[e].timestamp})),unanswered:l.sort((function(e,a){return t[a].timestamp-t[e].timestamp})),yours:o.sort((function(e,a){return t[a].timestamp-t[e].timestamp}))}}))(fe),Oe=a(135),je=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.ids,n=0;return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"},"Leaderboard"),r.a.createElement(Oe.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ranking"),r.a.createElement("th",null,"Avatar"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Answered"),r.a.createElement("th",null,"Asked"),r.a.createElement("th",null,"Score"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,n+=1),r.a.createElement("td",{className:"flex"},r.a.createElement("div",{className:"user-icon",style:{backgroundImage:"url(".concat(t[e].avatarURL,")"),width:"30px",height:"30px"}})),r.a.createElement("td",null,"@",e),r.a.createElement("td",null,t[e].name),r.a.createElement("td",null,Object.keys(t[e].answers).length),r.a.createElement("td",null,Object.keys(t[e].questions).length),r.a.createElement("td",null,Object.keys(t[e].answers).length+Object.keys(t[e].questions).length))})))))}}]),t}(n.Component);var ge=Object(m.connect)((function(e){var t=e.users;return{ids:Object.keys(t).sort((function(e,a){return Object.keys(t[a].answers).length+t[a].questions.length-(Object.keys(t[e].answers).length+t[e].questions.length)})),users:t}}))(je),ye=a(136),we=a(137),xe=a(138),ke=a(139),Ue=a(69),qe=a(140),Te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={optionOneText:"",optionTwoText:""},a.handleOptionOneChange=function(e){var t=e.target.value;a.setState((function(){return{optionOneText:t}}))},a.handleOptionTwoChange=function(e){var t=e.target.value;a.setState((function(){return{optionTwoText:t}}))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.optionOneText,r=t.optionTwoText,o=a.props,c=(o.authedUser,o.dispatch),s=o.history;c(M(n,r)).then((function(e){a.setState((function(){return{optionOneText:"",optionTwoText:""}})),s.push("/")}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionOneText,a=e.optionTwoText,n=this.props.loadingBar;return r.a.createElement(ye.a,{onSubmit:this.handleSubmit},r.a.createElement(J.a,null,r.a.createElement(re,null),r.a.createElement(K.a,{className:"justify-flex"},r.a.createElement(oe.a,null,"Create a new question:"),r.a.createElement(we.a,null,"Would you rather"," ",r.a.createElement(X.a,null,""===t?"Option One":t)," ","or"," ",r.a.createElement(X.a,null,""===a?"Option Two":a),"?"),r.a.createElement(xe.a,{className:"margin"},r.a.createElement(ke.a,{addonType:"prepend"},r.a.createElement(Ue.a,null,"Option One")),r.a.createElement(qe.a,{type:"text",onChange:this.handleOptionOneChange,value:t,ref:t,placeholder:"Example: 'float like a butterfly'"})),r.a.createElement(xe.a,null,r.a.createElement(ke.a,{addonType:"prepend"},r.a.createElement(Ue.a,null,"Option Two")),r.a.createElement(qe.a,{type:"text",onChange:this.handleOptionTwoChange,value:a,ref:a,placeholder:"Example: 'sting like a bee'"})),r.a.createElement(G.a,{disabled:""===a||""===t||1===n.default,type:"submit",className:"margin",color:"success",size:"md",block:!0},"Submit"))))}}]),t}(n.Component);var Ne=Object(m.connect)((function(e){return{authedUser:e.authedUser,loadingBar:e.loadingBar}}))(Te),Se=a(144),Ce=a(50),Le=a(157),Re=a(158),Ae=a(145),Ie=a(146),ze=a(159),De=a(147),_e=a(148),Pe=a(41),Be=a.n(Pe),Ve=a(141),Qe=a(142),Fe=a(143),He=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",firstname:"",lastname:"",avatarURL:""},a.handleId=function(e){var t=e.target.value.trim().toLowerCase();a.setState({id:t})},a.handleFirstName=function(e){var t=e.target.value.trim().replace(/^\w/,(function(e){return e.toUpperCase()}));a.setState({firstname:t})},a.handleLastName=function(e){var t=e.target.value.trim().replace(/^\w/,(function(e){return e.toUpperCase()}));a.setState({lastname:t})},a.handleAvatarURL=function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){a.setState({avatarURL:n.result})}},a.handleSubmit=function(e){e.preventDefault();var t=a.props.dispatch,n=a.state;t(F(n.id,n.firstname+" "+n.lastname,n.avatarURL))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.id,n=t.firstname,o=t.lastname,c=t.avatarURL,s=this.props,l=s.users,i=s.loadingBar;return r.a.createElement(ye.a,{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"justify-flex"},r.a.createElement("div",{className:"user-icon",style:{width:"150px",height:"150px",backgroundImage:"url(".concat(""===c?Be.a:c,")")}}),r.a.createElement("br",null),r.a.createElement(xe.a,null,r.a.createElement(ke.a,{addonType:"prepend"},r.a.createElement(Ue.a,null,"@")),r.a.createElement(qe.a,{type:"text",placeholder:"Username",onChange:function(t){return e.handleId(t)},invalid:l.includes(a)}),r.a.createElement(Ve.a,null,'Username "',a,'" is already taken.')),r.a.createElement("br",null),r.a.createElement(xe.a,null,r.a.createElement(ke.a,{addonType:"prepend"},r.a.createElement(Ue.a,null,"First Name")),r.a.createElement(qe.a,{type:"text",placeholder:"First Name",onChange:function(t){return e.handleFirstName(t)}})),r.a.createElement("br",null),r.a.createElement(xe.a,null,r.a.createElement(ke.a,{addonType:"prepend"},r.a.createElement(Ue.a,null,"Last Name")),r.a.createElement(qe.a,{type:"text",placeholder:"Last Name",onChange:function(t){return e.handleLastName(t)}})),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(Qe.a,{for:"avatar"},"Upload Avatar Image"),r.a.createElement(qe.a,{type:"file",ref:"file",name:"avatar",accept:"image/png, image/jpeg",onChange:function(t){return e.handleAvatarURL(t)}})),r.a.createElement(Fe.a,null,"Supported file types: JPEG, PNG")),r.a.createElement("br",null),r.a.createElement(G.a,{disabled:""===a||""===n||""===o||""===c||l.includes(a)||1===i.default,type:"submit",color:"success",block:!0},"Create Account"))}}]),t}(n.Component);var Me=Object(m.connect)((function(e){var t=e.users,a=e.loadingBar;return{users:Object.keys(t),loadingBar:a}}))(He),Ye=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedUser:"",dropdownOpen:!1,modal:!1},a.toggle=function(){a.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},a.toggleModal=function(){a.setState((function(e){return{modal:!e.modal}}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSignIn",value:function(e){e.preventDefault();var t=this.props,a=t.dispatch,n=t.callback,r=t.history;a(D(this.state.selectedUser)),n&&r.push(n)}},{key:"setSignIn",value:function(e){e.preventDefault(),this.setState({selectedUser:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props,a=t.users,n=t.callback,o=this.state,c=o.selectedUser,s=o.modal;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(J.a,null,r.a.createElement($.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Would You Rather?"))),r.a.createElement(K.a,null,null!==n&&"/"!==n&&r.a.createElement(Se.a,{color:"danger",className:"text-center"},'Please log in first before attempting to view page at "',n,'"'),r.a.createElement("div",{className:"justify-flex"},r.a.createElement("div",{className:"user-icon",style:{backgroundImage:"url(".concat(""===this.state.selectedUser?Be.a:a[this.state.selectedUser].avatarURL,")"),width:"150px",height:"150px"}}),r.a.createElement("h4",null,""===this.state.selectedUser?r.a.createElement("br",null):a[this.state.selectedUser].name)),r.a.createElement(ye.a,{onSubmit:function(t){return e.handleSignIn(t)}},r.a.createElement(Ce.a,{group:!0,isOpen:this.state.dropdownOpen,size:"md",toggle:this.toggle,className:"btn-block"},r.a.createElement(Le.a,{caret:!0,color:"info"},"Select a user"),r.a.createElement(Re.a,{className:"btn-block"},a?Object.keys(a).map((function(t){return r.a.createElement("div",{key:t},r.a.createElement(Ae.a,{onClick:function(t){return e.setSignIn(t)},value:t},a[t].name))})):null)),r.a.createElement(G.a,{disabled:""===c,color:"success",size:"md",type:"submit",block:!0},"Log In"))),r.a.createElement(Ie.a,null,r.a.createElement(G.a,{color:"success",onClick:this.toggleModal,block:!0},"Sign Up")),r.a.createElement(ze.a,{isOpen:s,modalTransition:{timeout:100},backdropTransition:{timeout:100},toggle:this.toggleModal},r.a.createElement(De.a,{toggle:this.toggleModal},"Sign Up"),r.a.createElement(_e.a,null,r.a.createElement(Me,null)))))}}]),t}(n.Component);var We=Object(m.connect)((function(e){return{users:e.users,callback:e.callback}}))(Ye),Je=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return null===this.props.authedUser?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"404: Page Not Found."),r.a.createElement("h3",null,"The link you are attempting to visit does not exist."),r.a.createElement(W.b,{to:"/"},"Return to dashboard."))}}]),t}(n.Component);var Ke=Object(m.connect)((function(e){return{authedUser:e.authedUser}}))(Je),Ge=a(149),$e=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedOption:""},a.handleSelectOption=function(e){a.setState({selectedOption:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.dispatch,r=t.question;n(Y({authedUser:t.authedUser,qid:r.id,answer:a.state.selectedOption}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.selectedOption,t=this.props,a=t.question,n=t.loadingBar;return r.a.createElement("div",null,r.a.createElement(Ge.a,{tag:"fieldset"},r.a.createElement(Ge.a,{check:!0},r.a.createElement(Qe.a,{check:!0},r.a.createElement(qe.a,{type:"radio",name:"radio1",onChange:this.handleSelectOption,value:"optionOne"})," ",a.optionOne.text)),r.a.createElement(Ge.a,{check:!0},r.a.createElement(Qe.a,{check:!0},r.a.createElement(qe.a,{type:"radio",name:"radio1",onChange:this.handleSelectOption,value:"optionTwo"})," ",a.optionTwo.text))),r.a.createElement(G.a,{color:"success",disabled:""===e||1===n.default,onClick:this.handleSubmit,size:"md",block:!0},"Submit Answer"))}}]),t}(n.Component);var Xe=Object(m.connect)((function(e){return{loadingBar:e.loadingBar}}))($e),Ze=a(150),et=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,a=e.totalVotes,n=e.optionOnePerc,o=e.authedUser,c=e.totalOptionOneVotes,s=e.optionTwoPerc,l=e.users,i=e.totalOptionTwoVotes;return r.a.createElement("div",null,r.a.createElement("div",{className:"text-left"},r.a.createElement(oe.a,{className:"text-center"},a," Total Votes"),t.optionOne.text," (",n,"%)"," ",t.optionOne.votes.includes(o)&&r.a.createElement(X.a,{color:"success"},"You Voted")),r.a.createElement(Ze.a,{color:"success",value:n}),r.a.createElement(Oe.a,{size:"sm",hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,c," Votes"))),r.a.createElement("tbody",null,t.optionOne.votes.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"flex"},r.a.createElement("div",{className:"user-icon",style:{backgroundImage:"url(".concat(l[e].avatarURL,")"),width:"25px",height:"25px"}}),e===o?"You":l[e].name," voted"))})))),r.a.createElement("div",{className:"text-left"},t.optionTwo.text," (",s,"%)"," ",t.optionTwo.votes.includes(o)&&r.a.createElement(X.a,{color:"success"},"You Voted")),r.a.createElement(Ze.a,{color:"success",value:s}),r.a.createElement(Oe.a,{size:"sm",hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,i," Votes"))),r.a.createElement("tbody",null,t.optionTwo.votes.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"flex"},r.a.createElement("div",{className:"user-icon",style:{backgroundImage:"url(".concat(l[e].avatarURL,")"),width:"25px",height:"25px"}}),e===o?"You":l[e].name," voted"))})))))}}]),t}(n.Component);var tt=Object(m.connect)((function(e,t){var a=e.authedUser,n=e.users,r=t.question,o=r.optionOne.votes.length,c=r.optionTwo.votes.length,s=o+c;return{question:r,authedUser:a,users:n,totalOptionOneVotes:o,totalOptionTwoVotes:c,totalVotes:s,optionOnePerc:(100*o/s).toFixed(),optionTwoPerc:(100*c/s).toFixed()}}))(et),at=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,a=e.answerCheck,n=e.qid;return void 0===t?r.a.createElement(h.b,{component:Ke}):r.a.createElement("div",{className:"dashboard"},r.a.createElement(J.a,{className:"card"},r.a.createElement(re,{qid:n}),r.a.createElement(K.a,null,r.a.createElement(se,{qid:n}),a?r.a.createElement(tt,{question:t}):r.a.createElement(Xe,{question:t}))))}}]),t}(n.Component);var nt=Object(m.connect)((function(e,t){var a=e.questions,n=e.authedUser,r=e.users,o=t.match.params.id,c=a[o],s=r[n],l=s.answers;return{question:c,user:s,qid:o,answerCheck:Object.keys(l).includes(o)}}))(at),rt=a(151),ot=a(152),ct=a(153),st=a(154),lt=a(155),it=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.handleLogOut=function(){(0,a.props.dispatch)(H())},a.handleHistory=function(e){a.props.history.push(e)},a.toggleNavbar=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user;return r.a.createElement("div",null,r.a.createElement(rt.a,{color:"light",light:!0,expand:"lg"},r.a.createElement(ot.a,{onClick:function(){return e.handleHistory("/")}},"Would You Rather?"),r.a.createElement(ct.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(st.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(ue.a,{className:"mr-auto",navbar:!0},r.a.createElement(de.a,{onClick:function(){return e.handleHistory("/")}},r.a.createElement(me.a,null,"Dashboard")),r.a.createElement(de.a,{onClick:function(){return e.handleHistory("/leaderboard")}},r.a.createElement(me.a,null,"Leaderboard"))),r.a.createElement(lt.a,{className:"flex"},r.a.createElement("div",{className:"user-icon",style:{backgroundImage:"url(".concat(t.avatarURL,")"),width:"30px",height:"30px",marginRight:"-10px"}}),r.a.createElement(Le.a,{nav:!0,caret:!0},t.name),r.a.createElement(Re.a,{right:!0},r.a.createElement(Ae.a,null,r.a.createElement(de.a,{onClick:function(){return e.handleHistory("/add")}},r.a.createElement(me.a,null,"Create Question"))),r.a.createElement(Ae.a,{divider:!0}),r.a.createElement(Ae.a,{onClick:this.handleLogOut,value:null},"Logout"))))))}}]),t}(n.Component);var ut=Object(m.connect)((function(e){var t=e.authedUser;return{user:e.users[t]}}))(it),dt=a(72),mt=function(e){var t=e.component,a=e.authedUser,n=Object(dt.a)(e,["component","authedUser"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/"})}}))},ht=(a(119),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.dispatch)(Q(e.location.pathname))}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.authedUser;return r.a.createElement("div",null,r.a.createElement(V.a,{style:{position:"fixed",zIndex:"90000"}}),t?r.a.createElement(ut,{history:this.props.history}):r.a.createElement(h.b,{exact:!0,path:"/",component:We}),r.a.createElement("div",{className:"dashboard"},r.a.createElement(h.d,null,r.a.createElement(mt,{authedUser:a,exact:!0,path:"/",component:Ee}),r.a.createElement(mt,{authedUser:a,path:"/add",component:Ne}),r.a.createElement(mt,{authedUser:a,path:"/leaderboard",component:ge}),r.a.createElement(mt,{authedUser:a,path:"/questions/:id",component:nt}),r.a.createElement(h.b,{location:this.props.location,component:Ke}))))}}]),t}(n.Component));var pt=Object(h.g)(Object(m.connect)((function(e){var t=e.authedUser;return{user:e.users[t],authedUser:t}}))(ht)),bt=a(29);var vt=Object(bt.c)({loadingBar:B.loadingBarReducer,authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return t.id;case z:return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(v.a)({},e,{},t.users);case C:return Object(v.a)({},e,Object(b.a)({},t.user.id,t.user));case S:return Object(v.a)({},e,Object(b.a)({},t.authedUser,Object(v.a)({},e[t.authedUser],{questions:e[t.authedUser].questions.concat([t.qid])})));case N:var a=t.qid,n=t.authedUser,r=t.answer;return Object(v.a)({},e,Object(b.a)({},n,Object(v.a)({},e[n],{answers:Object(v.a)({},e[n].answers,Object(b.a)({},a,[r]))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(v.a)({},e,{},t.questions);case R:return Object(v.a)({},e,Object(b.a)({},t.question.id,t.question));case A:var a=t.authedUser,n=t.qid,r=t.answer;return Object(v.a)({},e,Object(b.a)({},n,Object(v.a)({},e[n],Object(b.a)({},r,Object(v.a)({},e[n][r],{votes:e[n][r].votes.concat([a])})))));default:return e}},callback:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.callback;case P:return"/";default:return e}}}),ft=a(73),Et=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state is: ",e.getState()),console.groupEnd(),n}}},Ot=Object(bt.a)(ft.a,Et),jt=a(20),gt=Object(jt.a)(),yt=(a(120),Object(bt.d)(vt,Ot));c.a.render(r.a.createElement(m.Provider,{store:yt},r.a.createElement(W.a,{history:gt},r.a.createElement(pt,null))),document.getElementById("root"))},41:function(e,t,a){e.exports=a.p+"static/media/avatar.d5f51047.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/john-doe.528ddb19.png"},65:function(e,t,a){e.exports=a.p+"static/media/sarah-hedo.c67fb091.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/tyler-mcginnis.ab3a62a2.jpg"},75:function(e,t,a){e.exports=a(121)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.a52b18ea.chunk.js.map