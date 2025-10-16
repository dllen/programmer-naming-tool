# 程序员命名工具 (Programmer Naming Tool)

一个简单实用的中文到英文命名转换工具，专为程序员设计。支持将中文命名快速转换为各种常见的编程命名风格。

![Two Hard Things](twohardtings.0db8462a.jpg)

## ✨ 功能特性

- 🔤 **多种翻译方式**：
  - 离线词典：内置常用编程术语
  - Google 翻译（免费）：无需 API Key
  - Google Cloud Translation API：高质量翻译
  - Microsoft Translator API：Azure 认知服务
- 🎨 **多种命名风格**：
  - camelCase (驼峰命名)
  - PascalCase (帕斯卡命名)
  - snake_case (蛇形命名)
  - kebab-case (短横线命名)
  - CONSTANT_CASE (常量命名)
- 📋 **一键复制**：快速复制转换结果
- 🎯 **灵活切换**：根据需求选择翻译方式
- 🔐 **本地存储**：API Key 安全保存在浏览器
- 📱 **响应式设计**：支持各种设备访问

## 🚀 快速开始

### 在线使用

访问 [GitHub Pages 部署地址](#) 直接使用

### 本地运行

```bash
# 克隆项目
git clone <your-repo-url>
cd programmer-naming-tool

# 安装依赖
npm install

# 启动开发服务器
npm start

# 访问 http://localhost:3000
```

## 📦 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推荐）

1. 将代码推送到 GitHub 仓库
2. GitHub Actions 会自动构建并部署到 gh-pages 分支
3. 在仓库设置中启用 GitHub Pages，选择 gh-pages 分支

### 方法二：手动部署

```bash
# 构建并部署
npm run deploy
```

## 🛠️ 技术栈

- **React** - 前端框架
- **Bootstrap 5** - UI 组件库
- **Google Cloud Translation API** - 在线翻译
- **Microsoft Translator API** - 在线翻译
- **GitHub Pages** - 静态网站托管

## 🔧 API 配置

工具支持多种翻译方式，详细配置请查看 [API_SETUP.md](./API_SETUP.md)

### 快速开始

1. **离线词典**（默认）：无需配置，直接使用
2. **Google 免费版**：无需配置，有使用限制
3. **Google Cloud API**：需要 API Key，每月 500K 字符免费
4. **Microsoft API**：需要 API Key，每月 2M 字符免费（F0 层）

## 📝 使用示例

输入中文：`用户管理`

输出结果：
- camelCase: `userManage`
- PascalCase: `UserManage`
- snake_case: `user_manage`
- kebab-case: `user-manage`
- CONSTANT_CASE: `USER_MANAGE`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- 翻译词典参考：[Chinese-English-Dictionary](https://github.com/elijahsciam/Chinese-English-Dictionary/)
