"use strict";(self.webpackChunkbanana_cake_pop=self.webpackChunkbanana_cake_pop||[]).push([[203],{1203:function(e,n,r){r.r(n),r.d(n,{default:function(){return me}});var t=r(37762),o=r(15861),a=r(87757),c=r.n(a),i=r(10597),d=r(27330),s=r(6096),u=r(58831),l=r(47313),f=r(32789);function m(e,n){var r;return e?n?n.expandable?n:null!==(r=n.parent)&&void 0!==r?r:e:e:void 0}function p(e){var n=(0,f.A0)();return e.triggerCreate({name:"",expandable:!1,metadata:{id:n,kind:"document"}})}function v(e){var n=(0,f.NN)();return e.triggerCreate({name:"",expandable:!0,metadata:{id:n,kind:"folder"}})}var x=r(46417),k="root-menu",h=function(e){var n=e.documentId,r=e.workspaceId,t=(0,d._4)(k),a=(0,i.t)(),f=(0,l.useCallback)((0,o.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return n=t.item.treeModel,e.next=4,v(n);case 4:t.hide();case 5:case"end":return e.stop()}}),e)}))),[t]),m=(0,l.useCallback)((0,o.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return n=t.item.treeModel,e.next=4,p(n);case 4:t.hide();case 5:case"end":return e.stop()}}),e)}))),[t]),h=(0,l.useCallback)((0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(a({documentId:n,workspaceId:r}),t.hide());case 1:case"end":return e.stop()}}),e)}))),[t,n,r,a]);return(0,x.jsxs)(s.v2,{id:k,children:[(0,x.jsx)(s.ck,{onClick:m,children:"New document"}),(0,x.jsx)(s.ck,{onClick:f,children:"New folder"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:h,children:"Add file"})]})};var b=r(76016),w=r(26994),C=r(29158),j=r(77268),I=r(43203),g=r(2970),y=r(87373),Z=r(55567),T=r(3189),F=r(68224),N=r(27420),_=r(65640),D=r(21855),A=r(30883),R=r(996),P=r(85554),M=r(5983),H=r(13369),S=r(48548),E=r(35082),W=r(25323),q=r(73253);var G=r(12111),U="delete-node",z=function(e){var n=e.documentId,r=e.workspaceId,t=(0,P.I0)(),a=(0,d._4)(U),i=(0,l.useCallback)((function(){null===a||void 0===a||a.hide()}),[a]),s=(0,l.useCallback)((0,o.Z)(c().mark((function e(){var o,i,s,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=17;break}i=a.item.node,s=i.metadata.id,u=i.metadata.kind,e.t0=u,e.next="document"===e.t0?7:"file"===e.t0?9:"folder"===e.t0?13:15;break;case 7:return t(w.RW.deleteDocument({documentId:s})),e.abrupt("break",15);case 9:return e.next=11,(0,R._I)(s);case 11:return n&&d.CB.filesUpdated(n,r),e.abrupt("break",15);case 13:return t(w.RW.deleteFolder({folderId:s})),e.abrupt("break",15);case 15:(null!==(o=i.parent)&&void 0!==o?o:i.model).remove(i),a.hide();case 17:case"end":return e.stop()}}),e)}))),[a,n,r,t]);return(0,x.jsx)(G.Vq,{id:U,title:a?B(a.item.node):"",showConfirm:!0,confirmText:"Yes",onConfirm:s,showCancel:!0,cancelText:"No",onCancel:i,onClose:i,children:a&&(0,x.jsx)(V,{node:a.item.node})})};function O(){return(0,G.G1)(U)}function B(e){switch(e.metadata.kind){case"document":return"Delete document";case"file":return"Delete file";case"folder":return"Delete folder"}}var V=function(e){var n=e.node,r=n.name;switch(n.metadata.kind){case"document":return(0,x.jsxs)(G.PZ,{children:["Do you really want to delete the document ",(0,x.jsx)("em",{children:r}),"?"]});case"file":return(0,x.jsxs)(G.PZ,{children:["Do you really want to delete the file ",(0,x.jsx)("em",{children:r}),"?"]});case"folder":return(0,x.jsxs)(G.PZ,{children:["Do you really want to delete the folder ",(0,x.jsx)("em",{children:r})," and all it's content?"]})}},L=r(12063),J=r(29439),$=r(96484),K="replace-node";function Q(e){var n=e.workspaceId,r=(0,P.I0)(),t=(0,d._4)(K),o=(0,l.useCallback)((function(){null===t||void 0===t||t.hide()}),[t]),a=(0,l.useCallback)((function(){if(t){var e=t.item,o=e.nodeId,a=e.nodeName,c=e.fromFolderId,i=e.toFolderId;r(b.A.moveAndReplaceNode({id:o,name:a,workspaceId:n,fromFolderId:c,toFolderId:i})),t.hide()}}),[t,n,r]);return(0,x.jsxs)(G.Vq,{id:K,title:"Replace document or folder",showConfirm:!0,confirmText:"Replace",onConfirm:a,showCancel:!0,cancelText:"Cancel",onCancel:o,onClose:o,children:[(0,x.jsxs)(G.PZ,{children:["A file or folder with the name ",(0,x.jsx)("em",{children:null===t||void 0===t?void 0:t.item.nodeName})," ","already exists in the destination folder. Do you want to replace it?"]}),(0,x.jsx)(G.zp,{children:"This action is irreversible!"})]})}var Y="move-node",X=function(e){var n,r,t=e.workspaceId,o=(0,P.I0)(),a=(0,d._4)(Y),c=(0,l.useState)(void 0),i=(0,J.Z)(c,2),s=i[0],u=i[1],f=(0,G.G1)(K),m=(0,l.useCallback)((function(){null===a||void 0===a||a.hide(),u("")}),[a,u]),p=(0,l.useCallback)((function(){if(a){var e=a.item,n=e.nodeId,r=e.nodeName,c=e.fromFolderId;(0,R.Bg)(null!==s&&void 0!==s?s:t,r).then((function(e){e?f({nodeId:n,nodeName:r,fromFolderId:c,toFolderId:s}):o(b.A.moveAndReplaceNode({id:n,name:r,workspaceId:t,fromFolderId:c,toFolderId:s}))})),a.hide(),u(void 0)}}),[a,s,t,o,f,u]),v=(0,l.useCallback)((function(e){u(e)}),[u]);return(0,x.jsx)(G.Vq,{id:Y,title:a?ee(a.item.nodeKind):"",showConfirm:!0,confirmText:"Move",onConfirm:p,showCancel:!0,cancelText:"Cancel",onCancel:m,onClose:m,children:(0,x.jsx)(ne,{id:null!==(n=null===a||void 0===a?void 0:a.item.nodeId)&&void 0!==n?n:"",name:null!==(r=null===a||void 0===a?void 0:a.item.nodeName)&&void 0!==r?r:"",workspaceId:t,fromFolderId:null===a||void 0===a?void 0:a.item.fromFolderId,onFolderChange:v,onPressEnter:p})})};function ee(e){switch(e){case"document":return"Move document";case"file":return"Move file";case"folder":return"Move folder"}}var ne=(0,l.memo)((function(e){var n=e.id,r=e.name,t=e.workspaceId,o=e.fromFolderId,a=e.onFolderChange,c=e.onPressEnter,i=(0,l.useState)([]),d=(0,J.Z)(i,2),s=d[0],u=d[1],f=(0,l.useCallback)((function(e){a(e.currentTarget.value||void 0)}),[a]),m=(0,l.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),c()}),[c]);return(0,l.useEffect)((function(){(0,R.mI)(t).then((function(e){var r;a(o||null===(r=e[0])||void 0===r?void 0:r.id),u(e.filter((function(e){return e.id!==n&&e.id!==o})).map((function(n){return{id:n.id,name:n.path.map((function(n){var r;return null===(r=e.find((function(e){return e.id===n})))||void 0===r?void 0:r.name})).join("/")}})))}))}),[o,n,t,a,u]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(G.PZ,{children:["Choose a new folder for ",(0,x.jsx)("em",{children:r})]}),(0,x.jsx)($.l0,{onSubmit:m,children:(0,x.jsxs)($.ZA,{children:[(0,x.jsx)($.__,{htmlFor:"folder",children:"Folder"}),(0,x.jsxs)($.Ph,{id:"folder",onChange:f,children:[o&&(0,x.jsx)("option",{value:"",children:"/"}),s.map((function(e){var n=e.id,r=e.name;return(0,x.jsx)("option",{value:n,children:r},n)}))]})]})})]})}));function re(e){var n=(0,G.G1)(Y),r=(0,d._4)(e);return(0,l.useCallback)((0,o.Z)(c().mark((function e(){var t,o,a,i,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&(d=r.item.node,n({nodeId:null===(t=d.metadata)||void 0===t?void 0:t.id,nodeName:d.name,nodeKind:null===(o=d.metadata)||void 0===o?void 0:o.kind,fromFolderId:null===(a=d.parent)||void 0===a||null===(i=a.metadata)||void 0===i?void 0:i.id}),r.hide());case 1:case"end":return e.stop()}}),e)}))),[r,n])}function te(e){var n=(0,d._4)(e);return(0,l.useCallback)((0,o.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}if(r=n.item.node,!(t=m(r.model,r))){e.next=6;break}return e.next=6,v(t);case 6:n.hide();case 7:case"end":return e.stop()}}),e)}))),[n])}function oe(e){var n=(0,d._4)(e);return(0,l.useCallback)((0,o.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}if(r=n.item.node,!(t=m(r.model,r))){e.next=6;break}return e.next=6,p(t);case 6:n.hide();case 7:case"end":return e.stop()}}),e)}))),[n])}function ae(e){var n=(0,d._4)(e);return(0,l.useCallback)((0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(n.item.node.triggerRename(),n.hide());case 1:case"end":return e.stop()}}),e)}))),[n])}function ce(e,n,r){var t=(0,d._4)(e),a=(0,i.t)();return(0,l.useCallback)((0,o.Z)(c().mark((function e(){var o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(o=t.item.node,i=m(o.model,o),a({documentId:n,workspaceId:r,parentId:i&&(0,T.Ds)(i)?i.metadata.id:void 0}),t.hide());case 1:case"end":return e.stop()}}),e)}))),[t,n,r,a])}var ie="document-menu",de=function(e){var n=e.documentId,r=e.workspaceId,t=(0,P.I0)(),a=(0,L._4)(ie),i=O(),d=re(ie),f=oe(ie),m=te(ie),p=ae(ie),v=ce(ie,n,r),k=(0,l.useCallback)((0,o.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&(r=a.item.node,t(w.RW.cloneDocument({documentId:null===(n=r.metadata)||void 0===n?void 0:n.id})),a.hide());case 1:case"end":return e.stop()}}),e)}))),[a,t]),h=(0,l.useCallback)((function(){if(a){var e=a.item.node;i({node:e}),a.hide()}}),[a,i]);return(0,x.jsxs)(s.v2,{id:ie,children:[(0,x.jsx)(s.ck,{onClick:f,children:"New document"}),(0,x.jsx)(s.ck,{onClick:m,children:"New folder"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:v,children:"Add file"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:p,children:"Rename"}),(0,x.jsx)(s.ck,{onClick:d,children:"Move to"}),(0,x.jsx)(s.ck,{onClick:k,children:"Clone"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:h,children:"Delete"})]})};var se="file-menu",ue=function(e){var n=e.documentId,r=e.workspaceId,t=(0,L._4)(se),o=O(),a=re(se),c=oe(se),i=te(se),d=ae(se),f=ce(se,n,r),m=(0,l.useCallback)((function(){if(t){var e=t.item.node;o({node:e}),t.hide()}}),[t,o]);return(0,x.jsxs)(s.v2,{id:se,children:[(0,x.jsx)(s.ck,{onClick:c,children:"New document"}),(0,x.jsx)(s.ck,{onClick:i,children:"New folder"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:f,children:"Add file"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:d,children:"Rename"}),(0,x.jsx)(s.ck,{onClick:a,children:"Move to"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:m,children:"Delete"})]})};var le="folder-menu",fe=function(e){var n=e.documentId,r=e.workspaceId,t=(0,L._4)(le),o=O(),a=re(le),c=oe(le),i=te(le),d=ae(le),f=ce(le,n,r),m=(0,l.useCallback)((function(){if(t){var e=t.item.node;o({node:e}),t.hide()}}),[t,o]);return(0,x.jsxs)(s.v2,{id:le,children:[(0,x.jsx)(s.ck,{onClick:c,children:"New document"}),(0,x.jsx)(s.ck,{onClick:i,children:"New folder"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:f,children:"Add file"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:d,children:"Rename"}),(0,x.jsx)(s.ck,{onClick:a,children:"Move to"}),(0,x.jsx)(u.Cl,{}),(0,x.jsx)(s.ck,{onClick:m,children:"Delete"})]})};function me(){var e=(0,P.I0)(),n=(0,P.v9)(w.QN.selectActiveId),r=(0,P.v9)(D.G0.selectIsUserSignedIn),a=(0,P.v9)(D.G0.selectIsFetchingUser),i=(0,P.v9)(A.GR.selectActiveId),d=(0,_.mA)(N.Ut.selectActiveNodeId),u=(0,_.Qn)(b.De.selectSearchTerm),f=(0,l.useRef)([]),G=(0,l.useRef)(),U=(0,s.d5)(ie),O=(0,s.d5)(se),B=(0,s.d5)(le),V=(0,s.d5)(k),L=(0,_.mA)(b.De.selectExpandedFolders),J=function(e,n){return{getNodes:function(r,t,o){return e?(0,W.n)(n.pipe((0,M.q)(1),(0,q.z)((function(n){return(0,R.uD)(e,null===t||void 0===t?void 0:t.metadata.id,o?function(e){return o({name:e})}:void 0).then((function(e){return function(e,n,r){return e.map((function(e){var t=e.id,o=e.name,a=e.kind;return{name:o,expanded:n.includes(t)||r,expandable:"folder"===a,metadata:{id:t,kind:a}}}))}(e,n,!!o)}))})))):Promise.resolve([])},comparer:function(e,n){return"folder"===e.metadata.kind&&"folder"===n.metadata.kind||"folder"!==e.metadata.kind&&"folder"!==n.metadata.kind?e.name.localeCompare(n.name,"en",{sensitivity:"base"}):"folder"===e.metadata.kind&&"folder"!==n.metadata.kind?-1:1},validate:function(n,r){return(0,o.Z)(c().mark((function t(){var o,a,i,d;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(o=T.y$.getSegments(n)).length){t.next=3;break}return t.abrupt("return",Promise.resolve(H.Z.fail("An empty path is invalid.")));case 3:return a=r?r.metadata.id:null!==e&&void 0!==e?e:"",i=o[o.length-1],t.next=7,(0,S.ow)(i,a);case 7:if("invalid"!==(d=t.sent)){t.next=11;break}return(0,E.$J)(i),t.abrupt("return",Promise.resolve(H.Z.fail("Invalid name.")));case 11:if("name-taken"!==d){t.next=14;break}return(0,E.zt)(i),t.abrupt("return",Promise.resolve(H.Z.fail('A document with name "'.concat(o[1],'" already exists.'))));case 14:return t.abrupt("return",Promise.resolve(H.Z.success()));case 15:case"end":return t.stop()}}),t)})))()}}}(i,L),$=(0,l.useCallback)((function(e,n){if(!n.metadata)throw new Error("Metadata should be there.");switch(n.metadata.kind){case"document":U(e,{node:n});break;case"file":O(e,{node:n});break;case"folder":B(e,{node:n})}}),[U,O,B]),K=(0,l.useCallback)((function(e){V(e,{treeModel:G.current})}),[V]),Y=(0,F.Nr)((function(n,r,t){switch(n.preventDefault(),n.stopPropagation(),r.selected||((0,T.gF)(r.model),r.selected=!0),r.metadata.kind){case"document":e(w.RW.activateOrOpenDocument({documentId:r.metadata.id,isHistory:!1,isPreview:t}));break;case"file":e(N._f.activateNode({id:r.metadata.id}));break;case"folder":r.toggleExpanded(),e(N._f.activateNode({id:r.metadata.id}))}}),25,[e]),ee=function(e,n){return Y(e,n,!0)},ne=function(e,n){return Y(e,n,!1)},re=function(e){var n=d.subscribe(function(){var n=(0,o.Z)(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Ce(e,r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),r=e.subscribeFor(function(){var n=(0,o.Z)(c().mark((function n(r){var o,a,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=(0,t.Z)(r),n.prev=1,o.s();case 3:if((a=o.n()).done){n.next=23;break}i=a.value,n.t0=i.kind,n.next="collapsed"===n.t0?8:"created"===n.t0?10:"expanded"===n.t0?13:"renamed"===n.t0?15:"reset-filter"===n.t0?17:"set-filter"===n.t0?19:21;break;case 8:return te(i.node),n.abrupt("break",21);case 10:return n.next=12,oe(i.node);case 12:return n.abrupt("break",21);case 13:return ae(i.node),n.abrupt("break",21);case 15:return ce(i.node),n.abrupt("break",21);case 17:case 19:return me(e),n.abrupt("break",21);case 21:n.next=3;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n.catch(1),o.e(n.t1);case 28:return n.prev=28,o.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[1,25,28,31]])})));return function(e){return n.apply(this,arguments)}}(),"collapsed","created","expanded","renamed","reset-filter","set-filter");u&&u.length>0&&e.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(u.toLowerCase())})),f.current.push((function(){return n.unsubscribe()})),f.current.push((function(){return r()})),G.current=e},te=function(n){e(b.A.collapseFolder({folderId:n.metadata.id}))},oe=function(){var n=(0,o.Z)(c().mark((function n(r){var t,o,a,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"document"===r.metadata.kind?r.metadata.exists?(r.metadata.closeTabAfterCreation?e(w.RW.saveAndCloseNewDocument({documentId:r.metadata.id,documentName:r.name,folderId:null===(t=r.parent)||void 0===t?void 0:t.metadata.id,isHistory:!1})):e(w.RW.saveNewDocument({documentId:r.metadata.id,documentName:r.name,folderId:null===(o=r.parent)||void 0===o?void 0:o.metadata.id,isHistory:!1})),delete r.metadata.exists,delete r.metadata.closeTabAfterCreation):e(w.RW.createAndSaveDocument({documentId:r.metadata.id,documentName:r.name,folderId:null===(a=r.parent)||void 0===a?void 0:a.metadata.id})):e(w.RW.createFolder({folderId:r.metadata.id,folderName:r.name,parentFolderId:null===(i=r.parent)||void 0===i?void 0:i.metadata.id}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ae=function(n){e(b.A.expandFolder({folderId:n.metadata.id}))},ce=function(){var n=(0,o.Z)(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=r.metadata.kind,n.next="document"===n.t0?3:"file"===n.t0||"folder"===n.t0?5:8;break;case 3:return e(w.RW.renameDocument({documentId:r.metadata.id,name:r.name})),n.abrupt("break",8);case 5:return n.next=7,(0,R.w)(r.metadata.id,r.name);case 7:return n.abrupt("break",8);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),me=function(e){d.pipe((0,M.q)(1)).subscribe(function(){var n=(0,o.Z)(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Ce(e,r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},ve=function(){var e=(0,o.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=m(G.current,null===(n=G.current)||void 0===n?void 0:n.selectedNodes[0]))){e.next=4;break}return e.next=4,p(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=(0,o.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=m(G.current,null===(n=G.current)||void 0===n?void 0:n.selectedNodes[0]))){e.next=4;break}return e.next=4,v(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var n=(0,o.Z)(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e(b.A.changeDocumentSearchTerm({searchTerm:r})),!G.current){n.next=9;break}if(!(r.length>0)){n.next=7;break}return n.next=5,G.current.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())}));case 5:n.next=9;break;case 7:return n.next=9,G.current.resetFilter();case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),he=function(){e(D.EJ.signIn())};function be(e){return we.apply(this,arguments)}function we(){return(we=(0,o.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.selected||((0,T.gF)(n.model),n.selected=!0),e.next=3,n.ensureVisible();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(e,n){return je.apply(this,arguments)}function je(){return(je=(0,o.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=10;break}if(!(t=n.find((function(e){return e.metadata&&e.metadata.id&&e.metadata.id===r})))){e.next=7;break}return e.next=5,be(t);case 5:e.next=8;break;case 7:(0,T.gF)(n);case 8:e.next=11;break;case 10:(0,T.gF)(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){var e=f.current;return function(){for(var n;n=e.pop();)n();G.current=void 0}}),[]),(0,x.jsxs)(Z.sg,{children:[(0,x.jsxs)(Z.x8,{children:[(0,x.jsx)(Z.qF,{children:"Documents"}),(0,x.jsx)(Z.Jm,{}),(0,x.jsxs)(C.hE,{children:[(0,x.jsx)(C.hU,{disabled:!r,tooltip:"New document",onClick:ve,children:(0,x.jsx)(y.u_,{})}),(0,x.jsx)(C.hU,{disabled:!r,tooltip:"New folder",onClick:xe,children:(0,x.jsx)(y.wG,{})})]})]}),(0,x.jsx)(Z.F0,{children:(0,x.jsx)(j.k,{searchTerm:u,onSearchTermChange:ke})}),a?(0,x.jsx)(I.N,{}):r?(0,x.jsxs)(Z.f,{children:[(0,x.jsx)(T.mp,{id:"documents",itemHeight:T.C_,provider:J,onContextMenu:K,onInitialized:re,children:function(e){return(0,x.jsx)(T.OF,{id:e.id,depth:e.depth,name:e.name,path:e.path,expanded:e.expanded,expandable:e.expandable,node:e,onClick:ee,onDoubleClick:ne,onContextMenu:$,renderIcon:pe})}}),(0,x.jsx)(de,{documentId:n,workspaceId:i}),(0,x.jsx)(ue,{documentId:n,workspaceId:i}),(0,x.jsx)(fe,{documentId:n,workspaceId:i}),(0,x.jsx)(h,{documentId:n,workspaceId:i}),(0,x.jsx)(z,{documentId:n,workspaceId:i}),(0,x.jsx)(X,{workspaceId:i}),(0,x.jsx)(Q,{workspaceId:i})]}):(0,x.jsx)(g.z,{title:"Sign in to save documents",icon:(0,x.jsx)(y.qD,{}),children:(0,x.jsx)(C.zx,{primary:!0,onClick:he,children:"Sign in"})})]})}function pe(e){switch(e.metadata.kind){case"file":return(0,x.jsx)(T._c,{colorSelector:function(e){return e.mediaIcon},children:(0,x.jsx)(y.Ol,{})});case"document":return(0,x.jsx)(T._c,{colorSelector:function(e){return e.documentIcon},children:"creation"===e.editMode?(0,x.jsx)(y.u_,{}):(0,x.jsx)(y.aA,{})});case"folder":return(0,x.jsx)(T._c,{colorSelector:function(e){return e.folderIcon},children:e.expanded?(0,x.jsx)(y.$q,{}):"creation"===e.editMode?(0,x.jsx)(y.wG,{}):(0,x.jsx)(y.RO,{})});default:throw new Error("Unknown kind")}}},77268:function(e,n,r){r.d(n,{k:function(){return v}});var t,o,a,c,i=r(30168),d=r(68224),s=r(47313),u=r(49184),l=r(2603),f=r(29158),m=r(87373),p=r(46417),v=(0,s.memo)((0,s.forwardRef)((function(e,n){var r=e.searchTerm,t=e.onSearchTermChange,o=(0,s.useRef)(null),a=(0,s.useRef)(null),c=(0,d.Nr)((function(e){t(e.target.value.trim())}),250,[t]),i=(0,s.useCallback)((function(e){c(e),a.current.style.display=e.currentTarget.value.length>0?"flex":"none"}),[c]),u=(0,s.useCallback)((function(){var e;null===(e=o.current)||void 0===e||e.focus()}),[]);return(0,s.useEffect)((function(){var e=o.current,n=a.current;r&&r.length>0?(e.value=r,n.style.display="flex"):n.style.display="none"}),[r]),(0,p.jsx)(x,{ref:n,onClick:u,children:(0,p.jsxs)(b,{children:[(0,p.jsx)(k,{children:(0,p.jsx)(m.W1,{})}),(0,p.jsx)(h,{ref:o,placeholder:"Find...",onChange:i}),(0,p.jsx)(f.hU,{innerRef:a,onClick:function(){t(""),o.current.value="",a.current.style.display="none"},children:(0,p.jsx)(m.Tw,{})})]})})}))),x=u.ZP.div(t||(t=(0,i.Z)(["\n  z-index: 1;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: row;\n  align-items: center;\n"]))),k=u.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  flex: 0 0 24px;\n  align-items: center;\n  justify-content: center;\n  transition: fill 0.2s ease;\n\n  & > svg {\n    fill: "," !important;\n  }\n"])),l.kT.components.fieldText),h=u.ZP.input(a||(a=(0,i.Z)(["\n  flex: 1 1 auto;\n  border: 0 none;\n  padding: 0 9px;\n  color: ",";\n  background-color: ",";\n  transition: background-color 0.2s ease, color 0.2s ease;\n  user-select: initial;\n\n  ::placeholder {\n    color: ",";\n    transition: color 0.2s ease;\n  }\n"])),l.kT.components.fieldText,l.kT.components.field,l.kT.components.fieldPlaceholder),b=u.ZP.div(c||(c=(0,i.Z)(["\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid ",";\n  padding-left: 5px;\n  height: 28px;\n  background-color: ",";\n  transition: background-color 0.2s ease, border-color 0.2s ease;\n  cursor: text;\n\n  &:focus-within,\n  &:hover {\n    border-color: ",";\n    background-color: ",";\n\n    & > "," > svg {\n      fill: ",";\n    }\n\n    & > "," {\n      background-color: ",";\n      color: ",";\n\n      ::placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  &:hover {\n    border-color: ",";\n    background-color: ",";\n\n    & > "," > svg {\n      fill: ",";\n    }\n\n    & > "," {\n      color: ",";\n      background-color: ",";\n    }\n  }\n"])),l.kT.components.fieldBorder,l.kT.components.field,l.kT.components.fieldHoverBorder,l.kT.components.fieldHover,k,l.kT.components.fieldHoverText,h,l.kT.components.fieldHover,l.kT.components.fieldHoverText,l.kT.components.fieldHoverPlaceholder,l.kT.components.fieldHoverBorder,l.kT.components.fieldHover,k,l.kT.components.fieldHoverText,h,l.kT.components.fieldHoverText,l.kT.components.fieldHover)},13369:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(15671),o=r(43144),a=function(){function e(n,r,o){(0,t.Z)(this,e),this._succeeded=n,this._errorMessage=r,this._errorDetails=o}return(0,o.Z)(e,[{key:"succeeded",get:function(){return this._succeeded}},{key:"errorMessage",get:function(){return this._errorMessage}},{key:"errorDetails",get:function(){return this._errorDetails}}],[{key:"fail",value:function(n,r){return new e(!1,n,r)}},{key:"success",value:function(){return new e(!0)}}]),e}()},25323:function(e,n,r){r.d(n,{n:function(){return o}});var t=(0,r(71982).d)((function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}}));function o(e,n){var r="object"===typeof n;return new Promise((function(o,a){var c,i=!1;e.subscribe({next:function(e){c=e,i=!0},error:a,complete:function(){i?o(c):r?o(n.defaultValue):a(new t)}})}))}}}]);