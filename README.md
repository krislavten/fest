## Nestjs & vue

> A Nestjs(express) MVC App

### Basic Technology Stack

- template engine - nunjucks
- view - vue. (also supports react)

### Directory

- app 服务端代码
  - src nestjs controller / service / mudule / main
  - plugin 拓展
  - utils 通用工具
  - views 视图
- client 客户端代码
  - pages 多页面目录
  - ok.config.js ok 配置
  - ...
- config 客户端代码打包后版本文件
  - version_css.json css 相关
  - version_js.json js 相关
- dist 服务端构建产物
- public 客户端构建产物
- test 测试代码
- nest-cli.json nest 基本配置

### install

```bash
yarn # install app dependencies

cd client/ # go to the client directory

yarn # install client dependencies
```

### dev

```bash
cd client/ # go to the client directory

yarn dev # 构建生成页面端代码并生成 version 文件

cd .. # back to the root directory

yarn dev # 服务端启动，监听预设端口，页面可访问。 eg: http://127.0.0.1:3000
```