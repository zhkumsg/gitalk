(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{158:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"单点注销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单点注销"}},[t._v("#")]),t._v(" 单点注销")]),t._v(" "),a("p",[t._v("单点登录自然也会有单点注销，在一个子系统中注销，所有子系统的会话都将被销毁。")]),t._v(" "),a("h2",{attrs:{id:"背-景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背-景"}},[t._v("#")]),t._v(" 背 景")]),t._v(" "),a("p",[t._v("接入单点登录后，子应用通过接口可以获取到用户信息，一般情况下子应用会自行维持登录态，即"),a("code",[t._v("只有登录行为")]),t._v("在 sso 完成，其它业务直接从缓存中读取用户信息，不需要考虑其它子应用的登录态，也不受其它子应用影响。")]),t._v(" "),a("p",[t._v("然而在一些业务场景下，需要多个子应用配合使用，如"),a("code",[t._v("微前端")]),t._v("，往往有多个应用，例如：商品项目、订单项目、购物车项目，这些项目抽离出去单独开发，共享同一个用户信息，这时候就需要"),a("code",[t._v("统一登录态")]),t._v("了。")]),t._v(" "),a("h2",{attrs:{id:"接入指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入指南"}},[t._v("#")]),t._v(" 接入指南")]),t._v(" "),a("p",[t._v("接入分为两个步骤，分别是前端修改和后端修改")]),t._v(" "),a("h3",{attrs:{id:"前端修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端修改"}},[t._v("#")]),t._v(" 前端修改")]),t._v(" "),a("p",[t._v("在需要进行单点注销（统一退出）的时候，需要浏览器重定向到 sso 的注销页面，可以直接修改 url 重定向，也可以通过 iframe 的形式进行后台退出，推荐使用后者。")]),t._v(" "),a("p",[t._v("sso 的注销页面默认为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://sso.test.com:3000/logout/${appid}/${callback_url}\n")])])]),a("p",[t._v("其中 appid 和 callback_url 和登录时类似")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("appid")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("应用标识, 在应用类别中可查看")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("callback_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("回调地址，经过 UrlEncode 编码后能正确访问的 url 地址")])])])]),t._v(" "),a("p",[t._v("成功注销后默认重定向到登录页面。")]),t._v(" "),a("p",[a("strong",[t._v("如果使用 iframe 的形式，完成注销后会执行父窗口的 logout 的方法,如果自定义注销后的逻辑，可添加此方法")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内部实现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\twindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"后端修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端修改"}},[t._v("#")]),t._v(" 后端修改")]),t._v(" "),a("p",[t._v("如果希望能接收单点注销的通知，只做前端修改是不够的，还需要在后端做相应的处理。")]),t._v(" "),a("p",[t._v("为了方便开发，我们提供了"),a("code",[t._v("连接器模块")]),t._v("，使用该模块可以实时接收到单点注销通知，下面是使用方法")]),t._v(" "),a("h4",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" node-sso-connect --save\n")])])]),a("h4",{attrs:{id:"使-用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使-用"}},[t._v("#")]),t._v(" 使 用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nodejs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your http server code")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" nsc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node-sso-connect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接sso服务")]),t._v("\nnsc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\turl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://localhost:3001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tappid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appid'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tappsecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appsecret'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLogout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ssokeys")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssokeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("但子应用（自己或其他子应用）注销时，注册了连接的应用都会收到注销通知，通过 ssokeys 即可判断是哪个用户注销了")]),t._v(" "),a("p",[t._v("ssokeys 的主要结构是"),a("code",[t._v("{appid，key}")]),t._v("，其中 "),a("code",[t._v("appid")]),t._v(" 是应用 id，"),a("code",[t._v("key")]),t._v(" 是单点登录时的回调 key，在登录重定向时可获取。")]),t._v(" "),a("p",[a("em",[t._v("和 Apollo 环境变量接入方法一致")])]),t._v(" "),a("p",[t._v("更多功能请看"),a("a",{attrs:{href:"https://www.npmjs.com/package/node-sso-connect",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);