# 部署指南

## GitHub Pages 部署步骤

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个新仓库，例如：`programmer-naming-tool`

### 2. 推送代码到 GitHub

```bash
cd programmer-naming-tool

# 初始化 git（如果还没有）
git init

# 添加远程仓库
git remote add origin https://github.com/你的用户名/programmer-naming-tool.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 3. 配置 GitHub Pages

#### 方法 A：使用 GitHub Actions 自动部署（推荐）

1. 代码推送后，GitHub Actions 会自动运行
2. 等待 Actions 完成（可以在仓库的 Actions 标签页查看进度）
3. 进入仓库的 Settings > Pages
4. 在 "Source" 下选择 `gh-pages` 分支
5. 点击 Save
6. 等待几分钟，访问显示的 URL

#### 方法 B：手动部署

```bash
# 确保已安装依赖
npm install

# 部署到 gh-pages 分支
npm run deploy
```

然后在 GitHub 仓库设置中启用 GitHub Pages（选择 gh-pages 分支）

### 4. 更新 homepage 配置（如果需要）

如果你的仓库名不是根路径，需要更新 `package.json` 中的 `homepage` 字段：

```json
{
  "homepage": "https://你的用户名.github.io/programmer-naming-tool"
}
```

### 5. 访问你的应用

部署完成后，访问：
```
https://你的用户名.github.io/programmer-naming-tool
```

## 常见问题

### Q: 页面显示 404

A: 确保：
1. GitHub Pages 已启用
2. 选择了正确的分支（gh-pages）
3. 等待几分钟让 GitHub 完成部署

### Q: 样式或资源加载失败

A: 检查 `package.json` 中的 `homepage` 配置是否正确

### Q: GitHub Actions 失败

A: 检查：
1. 仓库的 Actions 权限是否启用
2. 查看 Actions 日志了解具体错误
3. 确保 package.json 和 package-lock.json 都已提交

## 本地测试生产构建

在部署前，可以本地测试生产构建：

```bash
# 构建
npm run build

# 使用 serve 预览（需要先安装：npm install -g serve）
npx serve -s build
```

## 更新部署

每次推送到 main 分支，GitHub Actions 会自动重新部署。

或者手动运行：
```bash
npm run deploy
```
