"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[494],{3309:function(e,n,t){t.d(n,{l:function(){return s}});var a,r=t(168),s=t(8789).ZP.form(a||(a=(0,r.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 10px;\n"])))},3494:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a=t(4942),r=t(1413),s=t(885),i=t(2791),c=t(9434),l=t(2644),o=t(7205),u=t(3309),d=t(3634),m=t(1538),x=t(184),p=function(){var e=(0,i.useState)({name:"",number:""}),n=(0,s.Z)(e,2),t=n[0],p=n[1],f=(0,c.I0)(),h=(0,c.v9)(m.K2),Z=function(e){return p((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,a.Z)({},e.target.name,e.target.value))}))},j=t.name,b=t.number;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(u.l,{onSubmit:function(e){e.preventDefault(),function(e){if(h.some((function(n){return n.name===e.name})))return alert("".concat(e.name," is already in contacts"));console.log(e),f((0,d.el)((0,r.Z)({},e)))}(t),p({name:"",number:""})},children:[(0,x.jsx)(l.Z,{id:"outlined-password-input",label:"Name",type:"name",name:"name",value:j,onChange:Z,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)(l.Z,{id:"outlined-password-input",label:"Number",type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:Z,required:!0}),(0,x.jsx)(o.Z,{variant:"contained",type:"submit",children:"Add contact"})]})})},f=t(4565),h=t(803),Z=t(6580),j=t(3811),b=t(8916),v=t(7247),g=t(5629),y=t(2087),C=t(1048),w=t(4808),k=function(){var e=(0,c.I0)(),n=(0,c.v9)(w.zK),t=(0,c.v9)(m.K2).filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{id:"outlined-password-input",label:"Filter contacts by name",type:"text",value:n,onChange:function(n){e((0,w.xO)(n.target.value))}}),(0,x.jsx)(g.Z,{children:t.map((function(n){var t=n.id,a=n.name,r=n.number;return(0,x.jsxs)(y.ZP,{divider:!0,sx:{display:"flex"},disableGutters:!0,secondaryAction:(0,x.jsx)(j.Z,{onClick:function(){return e((0,d._f)(t))},"aria-label":"delete",children:(0,x.jsx)(v.Z,{})}),children:[(0,x.jsx)(b.Z,{}),(0,x.jsx)(C.Z,{primary:"".concat(a,":")}),(0,x.jsx)(b.Z,{}),(0,x.jsx)(C.Z,{primary:"(".concat(r,")")}),(0,x.jsx)(b.Z,{})]},t)}))})]})};function z(){var e=(0,c.I0)(),n=(0,c.v9)(m.Vc);return(0,i.useEffect)((function(){e((0,d.yF)())}),[e]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(h.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,x.jsx)(f.Z,{variant:"h2",sx:{mb:2},children:"Phonebook"}),(0,x.jsx)(p,{}),(0,x.jsx)("div",{children:n&&(0,x.jsx)(Z.Z,{size:60,sx:{zIndex:1}})}),(0,x.jsx)(f.Z,{variant:"h2",sx:{mb:4,mt:4},children:"Contacts"}),(0,x.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=494.65d620a7.chunk.js.map