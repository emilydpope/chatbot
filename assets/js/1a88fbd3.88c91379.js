"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2055],{92471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(85893),r=t(11151);const s={},i="Retrieve Context Information",c={id:"server/retrieve",title:"Retrieve Context Information",description:"If you're using the MongoDB Chatbot Server to perform RAG, you must retrieve",source:"@site/docs/server/retrieve.md",sourceDirName:"server",slug:"/server/retrieve",permalink:"/chatbot/server/retrieve",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb/chatbot/tree/main/docs/docs/server/retrieve.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Manage Conversations",permalink:"/chatbot/server/conversations"},next:{title:"Chat with an LLM",permalink:"/chatbot/server/llm"}},a={},d=[{value:"The <code>FindContentFunc</code> Function",id:"the-findcontentfunc-function",level:2},{value:"Find Content with Atlas Vector Search",id:"find-content-with-atlas-vector-search",level:2},{value:"Boost Results",id:"boost-results",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"retrieve-context-information",children:"Retrieve Context Information"}),"\n",(0,o.jsx)(n.p,{children:"If you're using the MongoDB Chatbot Server to perform RAG, you must retrieve\ncontext information to include in your answer. The primary way of doing this\nis with semantic search."}),"\n",(0,o.jsxs)(n.p,{children:["You can add the information that you retrieve using the ",(0,o.jsx)(n.a,{href:"/chatbot/ingest/configure",children:"MongoDB RAG Ingest CLI"}),". Information retrieval is the single point of contact between the MongoDB RAG Ingest CLI and the MongoDB Chatbot Server."]}),"\n",(0,o.jsxs)(n.h2,{id:"the-findcontentfunc-function",children:["The ",(0,o.jsx)(n.code,{children:"FindContentFunc"})," Function"]}),"\n",(0,o.jsxs)(n.p,{children:["To perform semantic search, you must implement a ",(0,o.jsx)(n.a,{href:"/chatbot/reference/server/modules#findcontentfunc",children:(0,o.jsx)(n.code,{children:"FindContentFunc"})})," function. To see the default implementation\nusing Atlas Vector Search, refer to the following\n",(0,o.jsx)(n.a,{href:"#configure-atlas-vector-search",children:"Configure Atlas Vector Search"})," section."]}),"\n",(0,o.jsxs)(n.p,{children:["Pass the ",(0,o.jsx)(n.code,{children:"FindContentFunc"})," to the ",(0,o.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/ConversationsRouterParams#findcontent",children:(0,o.jsx)(n.code,{children:"ConversationsRouterParams.findContent"})})," property."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import { FindContentFunc } from "mongodb-chatbot-server";\nimport { someFindContentFunc } from "./someFindContentFunc"; // example\n\nconst appConfig: AppConfig = {\n  // ...other config\n  conversationsRouterParams: {\n    findContent: someFindContentFunc,\n    // ...other config\n  },\n};\n'})}),"\n",(0,o.jsx)(n.h2,{id:"find-content-with-atlas-vector-search",children:"Find Content with Atlas Vector Search"}),"\n",(0,o.jsxs)(n.p,{children:["To use the MongoDB Chatbot Server with Atlas Vector Search for semantic search,\nyou can use the ",(0,o.jsx)(n.a,{href:"/chatbot/reference/server/modules#makedefaultfindcontentfunc",children:(0,o.jsx)(n.code,{children:"makeDefaultFindContentFunc()"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This function retrieves data from an ",(0,o.jsx)(n.a,{href:"/chatbot/reference/core/modules#embeddedcontentstore",children:(0,o.jsx)(n.code,{children:"EmbeddedContentStore"})}),". To learn more about how to add data to an ",(0,o.jsx)(n.code,{children:"EmbeddedContentStore"}),", refer to the ",(0,o.jsx)(n.a,{href:"/chatbot/ingest/configure",children:"Ingest CLI documentation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Pass a ",(0,o.jsx)(n.a,{href:"/chatbot/reference/server/modules#makedefaultfindcontentfuncargs",children:(0,o.jsx)(n.code,{children:"MakeDefaultFindContentFuncArgs"})})," object to the ",(0,o.jsx)(n.code,{children:"makeDefaultFindContentFunc()"})," function."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import {\n  makeMongoDbEmbeddedContentStore,\n  makeOpenAiEmbedder,\n  AppConfig,\n  makeDefaultFindContentFunc,\n  MakeDefaultFindContentFuncArgs,\n} from "mongodb-chatbot-server";\n\n// Create function that creates vector embeddings\n// for user query.\nconst embedder = makeOpenAiEmbedder({\n  openAiClient,\n  deployment: OPENAI_EMBEDDING_DEPLOYMENT,\n  backoffOptions: {\n    numOfAttempts: 3,\n    maxDelay: 5000,\n  },\n});\n\n// Data store that is used to store the vector embeddings.\n// Used to look up matching content.\nconst embeddedContentStore = makeMongoDbEmbeddedContentStore({\n  connectionUri: MONGODB_CONNECTION_URI,\n  databaseName: MONGODB_DATABASE_NAME,\n});\n\nconst args: MakeDefaultFindContentFuncArgs = {\n  embedder,\n  store: embeddedContentStore,\n  findNearestNeighborsOptions: {\n    k: 5,\n    path: "embedding",\n    indexName: VECTOR_SEARCH_INDEX_NAME,\n    minScore: 0.9,\n  },\n};\nconst findContent = makeDefaultFindContentFunc(args);\n\nconst appConfig: AppConfig = {\n  // ...other config\n  conversationsRouterParams: {\n    findContent,\n    // ...other config\n  },\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"boost-results",children:"Boost Results"}),"\n",(0,o.jsxs)(n.p,{children:["You can modify the results returned by the default find content function with\n",(0,o.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/SearchBooster",children:(0,o.jsx)(n.code,{children:"SearchBooster"})})," objects.\n",(0,o.jsx)(n.code,{children:"SearchBooster"}),"s mutate the results returned by the default find content function."]}),"\n",(0,o.jsxs)(n.p,{children:["You could use a ",(0,o.jsx)(n.code,{children:"SearchBooster"})," to do things like:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Always results from a specific data source"}),"\n",(0,o.jsx)(n.li,{children:"Ensure a data source isn't over-represented in the results"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To use one or more ",(0,o.jsx)(n.code,{children:"SearchBooster"}),"s, pass them to the ",(0,o.jsx)(n.code,{children:"MakeDefaultFindContentFuncArgs.searchBoosters"})," property. The ",(0,o.jsx)(n.code,{children:"searchBoosters"})," property is an array of ",(0,o.jsx)(n.code,{children:"SearchBooster"})," objects, which are applied in the order of the array."]}),"\n",(0,o.jsxs)(n.p,{children:["The following is an example of using a ",(0,o.jsx)(n.code,{children:"SearchBooster"})," to ensure that results from a specific data source are always returned."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"/**\n * Ensure that results from data source 'foo' are always returned\n * if query contains 'foo'.\n */\nconst boostFoo: SearchBooster = {\n  async shouldBoostFunc({ text }: { text: string }) {\n    return text.includes(\"foo\");\n  },\n  async boost({\n    embedding,\n    store,\n    existingResults,\n  }: {\n    embedding: number[];\n    store: EmbeddedContentStore;\n    existingResults: WithScore<EmbeddedContent>[];\n  }) {\n    const boostedResults = await store.findNearestNeighbors(\n      embedding,\n      {\n        k: 2,\n        path: \"embedding\",\n        indexName: VECTOR_SEARCH_INDEX_NAME,\n        minScore: 0, // no min score for 'foo'\n      },\n      {\n        filter: {\n          dataSource: \"foo\",\n        },\n      }\n    );\n    const fewerExistingResults = existingResults.slice(0, 3);\n    // No duplicates\n    const newResults = fewerExistingResults.filter((result) =>\n      boostedResults.every((manualResult) => manualResult.text !== result.text)\n    );\n    //\n    return [...boostedResults, ...fewerExistingResults].sort(\n      (a, b) => b.score - a.score\n    );\n  },\n};\n\nconst args: MakeDefaultFindContentFuncArgs = {\n  // ...other args\n  searchBoosters: [boostFoo],\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);