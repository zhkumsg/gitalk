(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{202:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"多个服务共用80端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个服务共用80端口"}},[t._v("#")]),t._v(" 多个服务共用80端口")]),t._v(" "),s("p",[t._v("对于Web而已，80端口和443端口是十分重要的，原则上需要输入http://domain.com:80才可以浏览网页的，但由于默认端口是80，所以‘:80’可以忽略。同理对于https的443端口也一样。")]),t._v(" "),s("p",[t._v("随着服务器性能的提升和业务的需求，一台服务器上往往会同时有多个服务，这些服务都希望监听80端口，比如有vue.msg.com和react.msg.com。这时候我们可以使用nginx的代理转发功能帮我们实现共用80端口的需求。\n"),s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13908708-b6c16f70271cce1a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"http"}})]),t._v(" "),s("p",[t._v("首先我们先在两个空闲的端口上分别部署项目（非80，假设是8080和8081），"),s("em",[t._v("nginx.conf")]),t._v("配置如下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /ect/nginx/nginx.conf\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nginx.conf")]),t._v("\n# vue项目配置\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(";\n    root         /web/vue-base-demo/dist/;\n    index        index.html;\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        try_files $uri $uri/ /index.html; # 路由模式history的修改\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# react项目配置\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v(";\n    root         /web/react-base-demo/build;\n    index        index.html;\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面就是常规的配置，紧接着如果已经做好域名解析，希望vue.msg.com打开vue项目，react.msg.com打开react项目。我们需要再做两个代理，如下:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nginx.conf")]),t._v("\n# nginx "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("端口配置 （监听vue二级域名）\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(";\n    server_name     vue.msg.com;\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass      http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//localhost:8080; # 转发")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# nginx "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("端口配置 （监听react二级域名）\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(";\n    server_name     react.msg.com;\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass      http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//localhost:8081; # 转发")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("nginx如果检测到vue.msg.com的请求，将原样转发请求到本机的8080端口，如果检测到的是react.msg.com请求，也会将请求转发到8081端口。")]),t._v(" "),s("p",[t._v("这样nginx对外就有四个服务，我们只需要公布80端口的就可以了，这样就实现了多个服务共用80端口。")])])}),[],!1,null,null,null);n.default=e.exports}}]);