(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var o=n(7),r=n(0),c=n.n(r),i=n(9),a=n.n(i),u=(n(69),n(70),n(115)),d=n(119),l=n(121),s=n(122),j=n(120),b=n(56),f=n.n(b),O=n(127);function h(e){var t=e.text,n=e.done,r=e.index,c=e.onToggle,i=e.onRemove,a={textDecoration:n?"line-through":"none",overflowWrap:"break-word"},b="checkbox-list-label-".concat(r);return Object(o.jsxs)(u.a,{dense:!0,button:!0,onClick:c,children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(O.a,{checked:n,edge:"start",disableRipple:!0,inputProps:{"aria-labelledby":b}})}),Object(o.jsx)(l.a,{style:a,children:t}),Object(o.jsx)(s.a,{children:Object(o.jsx)(j.a,{onClick:i,children:Object(o.jsx)(f.a,{})})})]},r)}var p="FILTER_ALL",x="FILTER_DONE",g="FILTER_UNDONE",T=n(123);function y(e){var t=e.todoItems,n=e.onRemove,r=e.onToggle,c=e.filter;return Object(o.jsx)(T.a,{children:t.filter((function(e){switch(c){case p:return!0;case x:return e.done;case g:return!e.done;default:return!0}})).map((function(e,t){return Object(o.jsx)(h,{text:e.text,done:e.done,onRemove:function(){return n(t)},onToggle:function(){return r(t)},index:t},t)}))})}var m=n(23),v=n(124),I=n(85);var E=Object(m.b)((function(e){return{filter:e.changeFilter.filter}}),(function(e){return{showAllTodo:function(){return e({type:p})},showDoneTodo:function(){return e({type:x})},showUndoneTodo:function(){return e({type:g})}}}))((function(e){var t=e.showAllTodo,n=e.showDoneTodo,r=e.showUndoneTodo,c=e.filter,i=function(e){return{fontWeight:e===c?"bold":"normal"}};return Object(o.jsxs)(v.a,{variant:"contained",color:"primary",children:[Object(o.jsx)(I.a,{style:i(p),onClick:t,children:"All"}),Object(o.jsx)(I.a,{style:i(x),onClick:n,children:"Done"}),Object(o.jsx)(I.a,{style:i(g),onClick:r,children:"Undone"})]})})),w="INPUT_CHANGE",C=n(126);var D=Object(m.b)((function(e){return{inputText:e.changeInput.inputText}}),(function(e){return{onInputChange:function(t){return e((n=t.target.value,{type:w,payload:n}));var n}}}))((function(e){var t=e.onInputChange,n=e.inputText,r=e.onAdd;return Object(o.jsx)(C.a,{fullWidth:!0,onChange:t,value:n,onKeyUp:function(e){return"Enter"===e.key?r():null}})})),k="ADD_TODO_ITEM",A="REMOVE_TODO_ITEM",R="EDIT_TODO_ITEM",_="TOGGLE_ITEM",F=n(125),L=n(44);var M=Object(m.b)((function(e){return{todoItems:e.editTodoList.todoItems,inputText:e.changeInput.inputText,filter:e.changeFilter.filter}}),(function(e){return{onAdd:function(t){return e({type:k,payload:t})},onRemove:function(t){return e(function(e){return{type:A,payload:e}}(t))},onToggle:function(t){return e(function(e){return{type:_,payload:e}}(t))}}}))((function(e){var t=e.onAdd,n=e.todoItems,r=e.onRemove,c=e.onToggle,i=e.filter,a=e.inputText;return Object(o.jsxs)(F.a,{container:!0,spacing:3,children:[Object(o.jsx)(F.a,{container:!0,item:!0,xs:12,justify:"center",children:Object(o.jsx)(L.a,{variant:"h2",component:"h1",children:"Todo App"})}),Object(o.jsx)(F.a,{container:!0,item:!0,xs:12,justify:"center",children:Object(o.jsx)(E,{})}),Object(o.jsxs)(F.a,{container:!0,item:!0,direction:"row",xs:12,justify:"center",spacing:1,children:[Object(o.jsx)(F.a,{container:!0,item:!0,xs:5,children:Object(o.jsx)(D,{onAdd:function(){return t(a)}})}),Object(o.jsx)(I.a,{onClick:function(){return t(a)},children:"Add"})]}),Object(o.jsx)(F.a,{container:!0,xs:12,justify:"center",children:Object(o.jsx)(F.a,{item:!0,xs:6,children:Object(o.jsx)(y,{todoItems:n,onRemove:r,onToggle:c,filter:i})})})]})})),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))},N=n(37),P=n(19),G=n(12),W={todoItems:[]},B={filter:p},J={inputText:""},S=Object(N.b)({editTodoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case k:return""!==t.payload?Object(G.a)(Object(G.a)({},e),{},{todoItems:[].concat(Object(P.a)(e.todoItems),[{text:t.payload,done:!1}])}):e;case A:return Object(G.a)(Object(G.a)({},e),{},{todoItems:e.todoItems.filter((function(e,n){return n!==t.payload}))});case R:return Object(G.a)(Object(G.a)({},e),{},{todoItems:e.todoItems.map((function(e,n){return n===t.payload.index&&(e.text=t.payload.text),e}))});case _:return Object(G.a)(Object(G.a)({},e),{},{todoItems:e.todoItems.map((function(e,n){return n===t.payload&&(e.done=!e.done),e}))});default:return e}},changeFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object(G.a)(Object(G.a)({},e),{},{filter:p});case x:return Object(G.a)(Object(G.a)({},e),{},{filter:x});case g:return Object(G.a)(Object(G.a)({},e),{},{filter:g});default:return e}},changeInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(G.a)(Object(G.a)({},e),{},{inputText:t.payload});case k:return Object(G.a)(Object(G.a)({},e),{},{inputText:""});default:return e}}}),H=Object(N.c)(S);a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m.a,{store:H,children:Object(o.jsx)(M,{})})}),document.getElementById("root")),U()}},[[83,1,2]]]);
//# sourceMappingURL=main.484069e0.chunk.js.map