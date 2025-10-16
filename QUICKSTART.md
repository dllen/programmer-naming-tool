# 快速开始

## 🚀 5 分钟上手

### 步骤 1：克隆项目
```bash
git clone <your-repo-url>
cd programmer-naming-tool
```

### 步骤 2：安装依赖
```bash
npm install
```

### 步骤 3：启动开发服务器
```bash
npm start
```

浏览器会自动打开 http://localhost:3000

### 步骤 4：开始使用
1. 输入中文：`用户管理`
2. 点击"转换命名"
3. 查看五种命名风格的结果
4. 点击"复制"按钮使用

## 📦 部署到 GitHub Pages

### 方法一：自动部署（推荐）

1. 创建 GitHub 仓库
2. 推送代码：
```bash
git remote add origin https://github.com/你的用户名/programmer-naming-tool.git
git branch -M main
git push -u origin main
```
3. GitHub Actions 会自动部署
4. 在仓库 Settings > Pages 中启用 gh-pages 分支
5. 访问：`https://你的用户名.github.io/programmer-naming-tool`

### 方法二：手动部署

```bash
npm run deploy
```

## 🔧 配置 API（可选）

### 使用离线模式（默认）
无需配置，直接使用！

### 使用 Google 免费翻译
选择"Google (免费)"，无需配置！

### 使用 Google Cloud API
1. 获取 API Key：https://console.cloud.google.com/
2. 在工具中选择"Google Cloud"
3. 点击"显示 API 设置"
4. 输入 API Key

### 使用 Microsoft Translator
1. 获取 API Key：https://portal.azure.com/
2. 在工具中选择"Microsoft"
3. 点击"显示 API 设置"
4. 输入 API Key 和区域

详细配置请查看 [API_SETUP.md](./API_SETUP.md)

## 📖 更多文档

- [使用指南](./USAGE.md) - 详细使用说明
- [API 配置](./API_SETUP.md) - API 配置指南
- [部署指南](./DEPLOY.md) - 部署详细步骤

## ❓ 常见问题

**Q: 可以离线使用吗？**
A: 可以！选择"离线词典"模式，支持常用编程术语。

**Q: 需要付费吗？**
A: 不需要！离线模式和 Google 免费版都是免费的。

**Q: 翻译不准确怎么办？**
A: 可以切换到 Google Cloud 或 Microsoft API，翻译质量更高。

**Q: API Key 安全吗？**
A: API Key 只保存在你的浏览器本地，不会上传到服务器。

## 🎯 使用示例

```
输入：用户管理
输出：
  camelCase: userManage
  PascalCase: UserManage
  snake_case: user_manage
  kebab-case: user-manage
  CONSTANT_CASE: USER_MANAGE

输入：获取数据列表
输出：
  camelCase: getDataList
  PascalCase: GetDataList
  snake_case: get_data_list
  kebab-case: get-data-list
  CONSTANT_CASE: GET_DATA_LIST
```

## 💡 提示

- 按 Enter 键快速转换
- 点击"复制"按钮快速复制结果
- API Key 会自动保存，下次访问无需重新输入
- 支持手机和平板访问

## 🤝 需要帮助？

- 查看 [使用指南](./USAGE.md)
- 查看 [API 配置](./API_SETUP.md)
- 提交 Issue：https://github.com/你的用户名/programmer-naming-tool/issues

开始使用吧！🎉
