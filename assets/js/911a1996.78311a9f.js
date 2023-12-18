"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2e3],{3901:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=d(85893),i=d(11151);const r={id:"EmbeddedContent",title:"Interface: EmbeddedContent",sidebar_label:"EmbeddedContent",sidebar_position:0,custom_edit_url:null},c=void 0,o={id:"reference/core/interfaces/EmbeddedContent",title:"Interface: EmbeddedContent",description:"The embedded content of a chunk of text stored in the database.",source:"@site/docs/reference/core/interfaces/EmbeddedContent.md",sourceDirName:"reference/core/interfaces",slug:"/reference/core/interfaces/EmbeddedContent",permalink:"/chatbot/reference/core/interfaces/EmbeddedContent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EmbeddedContent",title:"Interface: EmbeddedContent",sidebar_label:"EmbeddedContent",sidebar_position:0,custom_edit_url:null},sidebar:"main",previous:{title:"AzureOpenAiServiceConfig",permalink:"/chatbot/reference/core/interfaces/AzureOpenAiServiceConfig"},next:{title:"Readme",permalink:"/chatbot/reference/ingest/"}},s={},a=[{value:"Properties",id:"properties",level:2},{value:"chunkAlgoHash",id:"chunkalgohash",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"chunkIndex",id:"chunkindex",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"embedding",id:"embedding",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"metadata",id:"metadata",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"sourceName",id:"sourcename",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"text",id:"text",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"tokenCount",id:"tokencount",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"updated",id:"updated",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-8",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The embedded content of a chunk of text stored in the database."}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"chunkalgohash",children:"chunkAlgoHash"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"chunkAlgoHash"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"Non-cryptographic hash of the actual chunking function (and its options)\nused to produce this chunk. Used to detect whether the chunk should be\nupdated because the function or options have changed."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L53",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:53"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"chunkindex",children:"chunkIndex"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"chunkIndex"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsx)(n.p,{children:"The order of the chunk if this content was chunked from a larger page."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L46",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:46"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"embedding",children:"embedding"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"embedding"}),": ",(0,t.jsx)(n.code,{children:"number"}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"The vector embedding of the text."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L30",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:30"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"metadata"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"metadata"}),": ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n",(0,t.jsx)(n.p,{children:"Arbitrary metadata associated with the content. If the content text has\nmetadata in Front Matter format, this metadata should match that metadata."}),"\n",(0,t.jsx)(n.h4,{id:"index-signature",children:"Index signature"}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa [k: ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"unknown"})]}),"\n",(0,t.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"tags?"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"string"}),"[]"]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L41",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:41"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"sourcename",children:"sourceName"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"sourceName"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"The name of the data source the page was loaded from."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L15",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:15"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"text",children:"text"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"text"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"The text represented by the vector embedding."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L20",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:20"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tokencount",children:"tokenCount"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"tokenCount"}),": ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsx)(n.p,{children:"The number of embedding tokens in the content."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L25",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:25"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"updated",children:"updated"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"updated"}),": ",(0,t.jsx)(n.code,{children:"Date"})]}),"\n",(0,t.jsx)(n.p,{children:"The date the content was last updated."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L35",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:35"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"url"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"url"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"The URL of the page with the content."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-core/src/EmbeddedContent.ts#L10",children:"packages/mongodb-rag-core/src/EmbeddedContent.ts:10"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>o,a:()=>c});var t=d(67294);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);