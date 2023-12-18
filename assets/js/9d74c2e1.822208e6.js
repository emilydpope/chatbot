"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2214],{50837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var s=n(85893),i=n(11151);const l={id:"index",title:"Module: index",sidebar_label:"index",sidebar_position:0,custom_edit_url:null},d=void 0,r={id:"reference/ingest/modules/index",title:"Module: index",description:"Type Aliases",source:"@site/docs/reference/ingest/modules/index.md",sourceDirName:"reference/ingest/modules",slug:"/reference/ingest/modules/",permalink:"/chatbot/reference/ingest/modules/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"Module: index",sidebar_label:"index",sidebar_position:0,custom_edit_url:null},sidebar:"main",previous:{title:"Table of Contents",permalink:"/chatbot/reference/ingest/modules"},next:{title:"embed",permalink:"/chatbot/reference/ingest/modules/embed"}},c={},h=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"Config",id:"config",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"IngestMetaEntry",id:"ingestmetaentry",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"IngestMetaStore",id:"ingestmetastore",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"LoadConfigArgs",id:"loadconfigargs",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"ResolvedConfig",id:"resolvedconfig",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Variables",id:"variables",level:2},{value:"INGEST_ENV_VARS",id:"ingest_env_vars",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Functions",id:"functions",level:2},{value:"loadConfig",id:"loadconfig",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"makeIngestMetaStore",id:"makeingestmetastore",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"withConfig",id:"withconfig",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"withConfigOptions",id:"withconfigoptions",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-10",level:4}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(t.p,{children:["\u01ac ",(0,s.jsx)(t.strong,{children:"Config"}),": ",(0,s.jsx)(t.code,{children:"Object"})]}),"\n",(0,s.jsx)(t.p,{children:"The configuration for ingest."}),"\n",(0,s.jsx)(t.p,{children:"You can provide your own configuration to the ingest tool."}),"\n",(0,s.jsx)(t.p,{children:"Every property is a function that constructs an instance (synchronously or\nasynchronously). This allows you to run logic for construction or build async.\nIt also avoids unnecessary construction and cleanup if that field of the\nconfig is overridden by a subsequent config."}),"\n",(0,s.jsx)(t.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"chunkOptions?"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"#constructor",children:(0,s.jsx)(t.code,{children:"Constructor"})}),"<",(0,s.jsx)(t.code,{children:"Partial"}),"<",(0,s.jsx)(t.a,{href:"/chatbot/reference/ingest/modules/embed#chunkoptions",children:(0,s.jsx)(t.code,{children:"ChunkOptions"})}),">>"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Options for the chunker."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"dataSources"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"#constructor",children:(0,s.jsx)(t.code,{children:"Constructor"})}),"<",(0,s.jsx)(t.a,{href:"/chatbot/reference/ingest/modules/sources#datasource",children:(0,s.jsx)(t.code,{children:"DataSource"})}),"[]>"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The data sources that you want ingest to pull content from."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"embeddedContentStore"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"#constructor",children:(0,s.jsx)(t.code,{children:"Constructor"})}),"<",(0,s.jsx)(t.code,{children:"EmbeddedContentStore"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The store that holds the embedded content and vector embeddings for later vector search."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"embedder"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"#constructor",children:(0,s.jsx)(t.code,{children:"Constructor"})}),"<",(0,s.jsx)(t.code,{children:"Embedder"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The embedding function."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ingestMetaStore"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"#constructor",children:(0,s.jsx)(t.code,{children:"Constructor"})}),"<",(0,s.jsx)(t.a,{href:"#ingestmetastore",children:(0,s.jsx)(t.code,{children:"IngestMetaStore"})}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The store that contains the ingest meta document. The ingest meta document stores the date of the last successful run."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"pageStore"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"#constructor",children:(0,s.jsx)(t.code,{children:"Constructor"})}),"<",(0,s.jsx)(t.code,{children:"PageStore"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The store that holds pages downloaded from data sources."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/Config.ts#L16",children:"mongodb-rag-ingest/src/Config.ts:16"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsxs)(t.p,{children:["\u01ac ",(0,s.jsx)(t.strong,{children:"Constructor"}),"<",(0,s.jsx)(t.code,{children:"T"}),">: () => ",(0,s.jsx)(t.code,{children:"T"})," | () => ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(t.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})})})})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/Config.ts#L50",children:"mongodb-rag-ingest/src/Config.ts:50"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"ingestmetaentry",children:"IngestMetaEntry"}),"\n",(0,s.jsxs)(t.p,{children:["\u01ac ",(0,s.jsx)(t.strong,{children:"IngestMetaEntry"}),": ",(0,s.jsx)(t.code,{children:"Object"})]}),"\n",(0,s.jsx)(t.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"_id"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"lastIngestDate"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Date"})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/IngestMetaStore.ts#L40",children:"mongodb-rag-ingest/src/IngestMetaStore.ts:40"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"ingestmetastore",children:"IngestMetaStore"}),"\n",(0,s.jsxs)(t.p,{children:["\u01ac ",(0,s.jsx)(t.strong,{children:"IngestMetaStore"}),": ",(0,s.jsx)(t.code,{children:"Object"})]}),"\n",(0,s.jsx)(t.p,{children:"The ingest meta has information about ingest runs so that the script can\nresume from a known successful run date."}),"\n",(0,s.jsx)(t.p,{children:"If the 'since' date given to the embed command is too late, pages that were\nupdated during a failed run will not be picked up."}),"\n",(0,s.jsx)(t.p,{children:"If too early, more pages and embeddings will be checked than necessary. The\nembed command will not unnecessarily create new embeddings for page updates\nthat it has already created embeddings for, but it would still be wasteful to\nhave to check potentially all pages and embeddings when the date is early\nenough."}),"\n",(0,s.jsx)(t.h4,{id:"type-declaration-2",children:"Type declaration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"entryId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The ID of the specific metadata document this store is associated with. Generally there should be only one document per ingest_meta collection per database."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"close"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"void"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Closes the connection. Must be called when done."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"loadLastSuccessfulRunDate"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"null"})," | ",(0,s.jsx)(t.code,{children:"Date"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Returns the last successful run date for the store's entry."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"updateLastSuccessfulRunDate"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["() => ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"void"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sets the store's entry to the current date."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/IngestMetaStore.ts#L16",children:"mongodb-rag-ingest/src/IngestMetaStore.ts:16"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"loadconfigargs",children:"LoadConfigArgs"}),"\n",(0,s.jsxs)(t.p,{children:["\u01ac ",(0,s.jsx)(t.strong,{children:"LoadConfigArgs"}),": ",(0,s.jsx)(t.code,{children:"Object"})]}),"\n",(0,s.jsx)(t.h4,{id:"type-declaration-3",children:"Type declaration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"config?"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/withConfig.ts#L6",children:"mongodb-rag-ingest/src/withConfig.ts:6"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"resolvedconfig",children:"ResolvedConfig"}),"\n",(0,s.jsxs)(t.p,{children:["\u01ac ",(0,s.jsx)(t.strong,{children:"ResolvedConfig"}),": { [K in keyof Config]: Constructed<Config[K]> }"]}),"\n",(0,s.jsx)(t.p,{children:"Config with promises resolved."}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/withConfig.ts#L96",children:"mongodb-rag-ingest/src/withConfig.ts:96"})}),"\n",(0,s.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsx)(t.h3,{id:"ingest_env_vars",children:"INGEST_ENV_VARS"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.code,{children:"Const"})," ",(0,s.jsx)(t.strong,{children:"INGEST_ENV_VARS"}),": ",(0,s.jsx)(t.code,{children:"Object"})]}),"\n",(0,s.jsx)(t.h4,{id:"type-declaration-4",children:"Type declaration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DEVCENTER_CONNECTION_URI"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"MONGODB_CONNECTION_URI"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"MONGODB_DATABASE_NAME"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"NODE_ENV"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OPENAI_API_KEY"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OPENAI_CHAT_COMPLETION_DEPLOYMENT"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OPENAI_CHAT_COMPLETION_MODEL_VERSION"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OPENAI_EMBEDDING_DEPLOYMENT"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OPENAI_EMBEDDING_MODEL"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OPENAI_EMBEDDING_MODEL_VERSION"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OPENAI_ENDPOINT"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"VECTOR_SEARCH_INDEX_NAME"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/IngestEnvVars.ts#L3",children:"mongodb-rag-ingest/src/IngestEnvVars.ts:3"})}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"loadconfig",children:"loadConfig"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"loadConfig"}),"(",(0,s.jsx)(t.code,{children:"\xabdestructured\xbb"}),"): ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.a,{href:"#config",children:(0,s.jsx)(t.code,{children:"Config"})}),">"]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"\xabdestructured\xbb"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#loadconfigargs",children:(0,s.jsx)(t.code,{children:"LoadConfigArgs"})})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.a,{href:"#config",children:(0,s.jsx)(t.code,{children:"Config"})}),">"]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/withConfig.ts#L10",children:"mongodb-rag-ingest/src/withConfig.ts:10"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"makeingestmetastore",children:"makeIngestMetaStore"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"makeIngestMetaStore"}),"(",(0,s.jsx)(t.code,{children:"\xabdestructured\xbb"}),"): ",(0,s.jsx)(t.a,{href:"#ingestmetastore",children:(0,s.jsx)(t.code,{children:"IngestMetaStore"})})]}),"\n",(0,s.jsx)(t.p,{children:"Creates a connection to ingest meta collection."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"\xabdestructured\xbb"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"Object"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\u203a\xa0",(0,s.jsx)(t.code,{children:"connectionUri"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\u203a\xa0",(0,s.jsx)(t.code,{children:"databaseName"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["\u203a\xa0",(0,s.jsx)(t.code,{children:"entryId"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#ingestmetastore",children:(0,s.jsx)(t.code,{children:"IngestMetaStore"})})}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/IngestMetaStore.ts#L48",children:"mongodb-rag-ingest/src/IngestMetaStore.ts:48"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"withconfig",children:"withConfig"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"withConfig"}),"<",(0,s.jsx)(t.code,{children:"T"}),">(",(0,s.jsx)(t.code,{children:"action"}),", ",(0,s.jsx)(t.code,{children:"args"}),"): ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(t.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})})})})]}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"action"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(t.code,{children:"config"}),": ",(0,s.jsx)(t.a,{href:"#resolvedconfig",children:(0,s.jsx)(t.code,{children:"ResolvedConfig"})}),", ",(0,s.jsx)(t.code,{children:"args"}),": ",(0,s.jsx)(t.code,{children:"T"}),") => ",(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"void"}),">"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"args"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"#loadconfigargs",children:(0,s.jsx)(t.code,{children:"LoadConfigArgs"})})," & ",(0,s.jsx)(t.code,{children:"T"})]})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Promise"}),"<",(0,s.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/withConfig.ts#L60",children:"mongodb-rag-ingest/src/withConfig.ts:60"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"withconfigoptions",children:"withConfigOptions"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"withConfigOptions"}),"<",(0,s.jsx)(t.code,{children:"T"}),">(",(0,s.jsx)(t.code,{children:"args"}),"): ",(0,s.jsx)(t.code,{children:"Argv"}),"<",(0,s.jsx)(t.code,{children:"T"})," & ",(0,s.jsx)(t.a,{href:"#loadconfigargs",children:(0,s.jsx)(t.code,{children:"LoadConfigArgs"})}),">"]}),"\n",(0,s.jsx)(t.p,{children:"Apply config options to CLI command."}),"\n",(0,s.jsx)(t.h4,{id:"type-parameters-2",children:"Type parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})})})})]}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"args"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Argv"}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Argv"}),"<",(0,s.jsx)(t.code,{children:"T"})," & ",(0,s.jsx)(t.a,{href:"#loadconfigargs",children:(0,s.jsx)(t.code,{children:"LoadConfigArgs"})}),">"]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/mongodben/chatbot/blob/c37fa4c/packages/mongodb-rag-ingest/src/withConfig.ts#L84",children:"mongodb-rag-ingest/src/withConfig.ts:84"})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>d});var s=n(67294);const i={},l=s.createContext(i);function d(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);