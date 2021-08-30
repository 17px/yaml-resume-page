# choi

填写 yaml 配置文件，即可自动化构建一个简单的网页版简历

## 示例

演示地址：[https://resume.mozzie.cn/](https://resume.mozzie.cn)

![演示图片](https://github.com/chenrrrrr/choi/blob/master/demo.png)

## 项目结构

```
├── README.md
├── package.json
├── public
│   ├── conf.yml  # 配置文件
│   ├── favicon.ico # 站点图标
│   └── index.html
└── src
```


### 配置文件

配置文件采用了简单易懂的`yaml`语法，当`yarn`打包后的`dist`文件部署打牌`nginx`之流的服务器上，会自动解析`conf.yml`并且渲染到页面中，可参考本例项目中的`conf.yml`配置

```conf
# 配置
conf:
  # 站点标题
  title: '陈睿 | Web 前端开发'
  # 主题色
  mainThemeColor: '#00b38a'
  # 最后更新时间
  lastModifyTime: 2021年1月19日 14点31分
  # pdf简历url
  pdf: https://www.mozzie.cn/resume.pdf
  # 模块
  modules:
    skill: 技能
    exp: 项目经验
    project: 作品

# 基础信息
basic:
  cnName: 陈睿
  enName: Rui Chen
  sex: 男
  birth: 1994年01月
  objective: Web前端开发
  city: 南京
  overall: 3年前端开发经验 · 2016年毕业
  college: 南京信息工程大学滨江学院 / 本科
  phone: 18061205553
  email: himozzie@foxmail.com
  # 别再前面加https和www
  homepage: mozzie.cn
  # 别再前面加https和www
  git: github.com/chenrrrrrr

# 技能
skill:
  - 3 年多前端工作经验，熟练掌握 Javascript、具备 Typescript 项目经验
  - 熟悉 Vue 全家桶，对`模板引擎`、`AST`等底层原理有一定理解
  - 熟悉 Node、Java，具备 Springboot、Egg、Koa2 项目经验
  - 掌握 Linux 基本命令，了解 nginx 基本配置，具备单机前后端分离应用部署能力
  - 入门过 Electron、Flutter 等新技术

# 项目经验
exp:
  - name: PC/vue • 亚马逊测评系统
    role: 前端TL • (2021.03 ~ 至今)
    bg: 跨境电商测评业务线从零开荒
    des:
      - js全栈项目，重构2个版本，Egg.js 为移动端、pc端，提供服务，前后整体开发架构设计
      - 招聘，带新人，辅助组员解决Bug、业务逻辑梳理、控制研发进度，软著申请
      - 接入层、业务层设计，e.g 环境切换、api网关层(登录鉴权、动态角色路由、全局状态提示)
      - 技术难点疏通，e.g 数据库敏感字段加密算法、邮件、短信SDK、文件上传、excel报表
    ps: 难点：小组整体研发能力有限，解决方案：重构，集中解决硬编码、路由去中心化等问题，使用装饰器，扩展egg.ts，实现类、方法级的路由装饰器
    link: youam.co
    stack: egg vue全家桶 ElementUI

  - name: PC/web · docat文档系统
    role: 核心开发
    des:
      - vue开发的运行时文档应用，对比 vuepress，省去静态编译过程，配合 githooks 实现 markdown 文件同步
      - 引用cdn即可构建，内置代码高亮，扩展 markdown 原生语法，解决公司内部技术沉淀，项目文档交接问题。
    ps: 难点：文档目录与内容的同步滚动
    stack: markdown vue webpack
    link: mozzie.cn

  - name: 小程序/Wepy • 危运超级号
    role: 核心开发
    des:
      - 小程序wepy开发架构设计
      - 全局跨页面消息提示设计、骨架屏的组件便携，网络、持久化等模块封装
    ps: 难点：小程序多入口分发问题，解决方案：
    stack: 小程序API 组件 wepy

  - name: PC/web • 开源博客系统typecho
    role: 贡献者
    des:
      - 基于vue、webpack构建，将typecho二次开发由ssr改造为spa，为社区贡献了3套spa开发框架
      - 开发4个免费主题到社区，github，100+ star
    stack: vue webpack gulp
    link: github.com/chenrrrrr/typecho-theme-Moz/tree/feature1.0

# 作品
project:
  - title: Docat
    link: https://www.mozzie.cn
    des: 一个基于Vue开发的运行时类博客文档，用于代码笔记

  - title: typecho-theme-moz
    link: https://github.com/chenrrrrr/typecho-theme-Moz
    des: 博客typecho系统主题，100+ star

  - title: choi
    link: https://resume.mozzie.cn
    des: 基于yaml，自动化构建响应式简历，适配网页A4打印

  - title: Yuna
    link: https://github.com/chenrrrrr/Yuna
    des: 基于vue、webpack构建，对typecho主题由ssr服务器端渲染，改造成了spa应用，从而使得typecho主题开发、迭代版本、功能时，变得更加得心应手。
```

### 安装依赖

```
yarn install
```

### 打包构建

```
yarn run build / yarn build
```

### 部署到服务器

将dist文件夹的静态文件上传到服务器中

