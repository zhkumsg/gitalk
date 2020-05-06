(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{174:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用eslint来规范你的项目源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用eslint来规范你的项目源码"}},[s._v("#")]),s._v(" 使用eslint来规范你的项目源码")]),s._v(" "),a("p",[s._v("在vscode上开发个人项目的时候，代码风格随你定，弄出花也没人说，可是一旦是团队项目，那就得注意代码风格了。举个常见例子来说，A修改了代码，并格式化成2个缩进，B也同时同一份代码，但格式化成4个缩进，这时候代码提交的时候就会存在冲突，需要花费大量的时间在格式上。\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13908708-58a4a68708976111.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),s._v(" "),a("p",[s._v("那么解决方案有三步")]),s._v(" "),a("ol",[a("li",[s._v("使用 "),a("code",[s._v("Settings Sync")]),s._v(" 拓展同步用户设置")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("eslint")]),s._v(" 统一代码风格")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("git预检查工具")]),s._v(" 在提交前检验")])]),s._v(" "),a("h3",{attrs:{id:"使用settings-sync拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用settings-sync拓展"}},[s._v("#")]),s._v(" 使用Settings Sync拓展")]),s._v(" "),a("p",[s._v("在之间的文章说过")]),s._v(" "),a("p",[s._v("不可否者vscode是一款好用的IDE，可是仍存在着一些小缺陷，为了方便在不同设备上使用统一的用户配置（团队协作时特别有用，确保代码风格统一），这里推荐一款vscode 插件 Settings Sync。")]),s._v(" "),a("p",[s._v("在项目开始的时候，我们要求团队成功的用户配置是一样的，这样可以确保代码风格一致。相关教程请移步 "),a("a",{attrs:{href:"https://www.jianshu.com/p/3470c040c050",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Settings Sync同步你的vscode配置"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"使用eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用eslint"}},[s._v("#")]),s._v(" 使用Eslint")]),s._v(" "),a("p",[s._v("使用脚手架创建vue项目的时候会提示是否使用eslint，如果选用了而代码风格不符合规范，将在控制台中输出警告，此时代码仍然可以运行。")]),s._v(" "),a("p",[s._v("如果不是没有选用eslint或者不是vue项目，我们可以在ide中按照eslint拓展来帮助我们定位错误代码。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13908708-04b620c5e5f27082.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"搜索并按照ESLint拓展"}})]),s._v(" "),a("p",[a("code",[s._v("其他非vscode用户也可以安装相关的ide拓展")]),s._v("\n安装完成后将直接在代码上显示提示信息。")]),s._v(" "),a("p",[s._v("eslint有两个重要的配置文件，需要在项目根目录创建")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1   .eslintignore\n2   .eslintrc.js\n")])])]),a("p",[a("code",[s._v(".eslintignore")]),s._v(" eslint需要过滤检查的资源\n"),a("code",[s._v(".eslintrc.js")]),s._v(" eslint 检查规则\n下面是简单的配置")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# .eslintignore\nnode_modules/ # 忽略node_modules文件夹\n/dist/        # 忽略检查dist文件夹\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .eslintrc.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    parserOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-eslint'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        browser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'plugin:vue/essential'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://github.com/standard/standard/blob/master/docs/RULES-en.md")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'standard'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// required to lint *.vue files")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// add your custom rules here")]),s._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// allow async-await")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'generator-star-spacing'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'off'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// allow debugger during development")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-debugger'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'off'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("其中我们需要注意的是 "),a("code",[s._v(".eslintrc.js")]),s._v(" 文件下的 "),a("code",[s._v("rules")]),s._v(" 配置，比如希望关闭eslint的console检测，我们再rules中添加一条规则")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'no-console': 0\n")])])]),a("p",[s._v("具体规则可以看官网或提示，配置属性为 "),a("code",[s._v("0")]),s._v(" 或 "),a("code",[s._v("off")]),s._v(" 可以关闭指定检查。")]),s._v(" "),a("p",[s._v("当然，处理代码检查，eslint还支持代码修复，简单的代码风格eslint可以直接修复，比如我们希望eslint修复src文件夹下的js文件，那么在package.json中添加一条自定义命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装eslint模块")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint --save-dev\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 添加eslint修复命令\n"lint-fix": "eslint --fix --ext .js src/"\n')])])]),a("p",[s._v("执行 "),a("code",[s._v("npm run lint-fix")]),s._v(" 将自动修复。无法修复的将在控制台给出提示。")]),s._v(" "),a("h3",{attrs:{id:"使用git预检查工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用git预检查工具"}},[s._v("#")]),s._v(" 使用git预检查工具")]),s._v(" "),a("p",[s._v("原则上每次 "),a("code",[s._v("git commit")]),s._v(" 前我们都需要先执行一下 "),a("code",[s._v("lint-fix")]),s._v(" 命令的，避免遗忘或者偷懒，我们使用预检查工具进行处理。\n"),a("code",[s._v("husky")]),s._v(" 是一个npm模块，可以在git提交前做拦截，如果拦截返回异常信息，将取消提交。")]),s._v(" "),a("p",[s._v("安装 "),a("code",[s._v("husky")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" husky --save-dev\n")])])]),a("p",[s._v("添加拦截事件 "),a("code",[s._v("precommit")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# package.json\n"precommit": "npm run lint-fix"\n')])])]),a("p",[s._v("在提交前自动执行eslint修复命令，如果成功全部修复就可以正常提交，如果没有全部修复，将取消提交，避免无法团队代码。")]),s._v(" "),a("p",[s._v("愉快的提交代码")]),s._v(" "),a("p",[s._v("这样就确保了开发者本地的代码格式化是统一的，而且提交到线上的代码也是严格要求的。")])])}),[],!1,null,null,null);t.default=e.exports}}]);