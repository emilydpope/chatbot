"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7954],{10398:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=r(85893),n=r(11151);const l={id:"ChatLlm",title:"Interface: ChatLlm",sidebar_label:"ChatLlm",sidebar_position:0,custom_edit_url:null},i=void 0,a={id:"reference/server/interfaces/ChatLlm",title:"Interface: ChatLlm",description:"LLM that responds to user queries. Provides both streaming and awaited options.",source:"@site/docs/reference/server/interfaces/ChatLlm.md",sourceDirName:"reference/server/interfaces",slug:"/reference/server/interfaces/ChatLlm",permalink:"/chatbot/reference/server/interfaces/ChatLlm",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChatLlm",title:"Interface: ChatLlm",sidebar_label:"ChatLlm",sidebar_position:0,custom_edit_url:null},sidebar:"main",previous:{title:"CallToolResponse",permalink:"/chatbot/reference/server/interfaces/CallToolResponse"},next:{title:"CommentMessageParams",permalink:"/chatbot/reference/server/interfaces/CommentMessageParams"}},d={},c=[{value:"Methods",id:"methods",level:2},{value:"answerQuestionAwaited",id:"answerquestionawaited",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"answerQuestionStream",id:"answerquestionstream",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"callTool",id:"calltool",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"LLM that responds to user queries. Provides both streaming and awaited options."}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"answerquestionawaited",children:"answerQuestionAwaited"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"answerQuestionAwaited"}),"(",(0,t.jsx)(s.code,{children:"params"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"ChatRequestAssistantMessage"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"params"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/chatbot/reference/server/interfaces/LlmAnswerQuestionParams",children:(0,t.jsx)(s.code,{children:"LlmAnswerQuestionParams"})})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"ChatRequestAssistantMessage"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/nlarew/chatbot/blob/03a35c9/packages/mongodb-chatbot-server/src/services/ChatLlm.ts#L150",children:"packages/mongodb-chatbot-server/src/services/ChatLlm.ts:150"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"answerquestionstream",children:"answerQuestionStream"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"answerQuestionStream"}),"(",(0,t.jsx)(s.code,{children:"params"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/chatbot/reference/server/modules#openaistreamingresponse",children:(0,t.jsx)(s.code,{children:"OpenAiStreamingResponse"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"params"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/chatbot/reference/server/interfaces/LlmAnswerQuestionParams",children:(0,t.jsx)(s.code,{children:"LlmAnswerQuestionParams"})})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/chatbot/reference/server/modules#openaistreamingresponse",children:(0,t.jsx)(s.code,{children:"OpenAiStreamingResponse"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/nlarew/chatbot/blob/03a35c9/packages/mongodb-chatbot-server/src/services/ChatLlm.ts#L147",children:"packages/mongodb-chatbot-server/src/services/ChatLlm.ts:147"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"calltool",children:"callTool"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"callTool"}),"(",(0,t.jsx)(s.code,{children:"params"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/chatbot/reference/server/interfaces/CallToolResponse",children:(0,t.jsx)(s.code,{children:"CallToolResponse"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"params"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/chatbot/reference/server/interfaces/LlmCallToolParams",children:(0,t.jsx)(s.code,{children:"LlmCallToolParams"})})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/chatbot/reference/server/interfaces/CallToolResponse",children:(0,t.jsx)(s.code,{children:"CallToolResponse"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/nlarew/chatbot/blob/03a35c9/packages/mongodb-chatbot-server/src/services/ChatLlm.ts#L153",children:"packages/mongodb-chatbot-server/src/services/ChatLlm.ts:153"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>i});var t=r(67294);const n={},l=t.createContext(n);function i(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);