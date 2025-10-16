# API 配置指南

本工具支持三种翻译方式：

## 1. 离线词典（默认）

无需配置，内置常用编程术语词典，可直接使用。

## 2. Google 翻译（免费版）

使用 MyMemory 翻译 API，无需 API Key，但有使用限制。

**特点：**
- ✅ 完全免费
- ✅ 无需注册
- ⚠️ 每日请求限制
- ⚠️ 翻译质量一般

## 3. Google Cloud Translation API

### 获取 API Key

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 Cloud Translation API
   - 在搜索栏搜索 "Cloud Translation API"
   - 点击"启用"
4. 创建 API 凭据
   - 导航到 "APIs & Services" > "Credentials"
   - 点击 "Create Credentials" > "API Key"
   - 复制生成的 API Key

### 定价

- 前 500,000 字符/月免费
- 超出部分：$20/百万字符

### 配置方法

在工具中：
1. 选择 "Google Cloud" 翻译方式
2. 点击 "显示 API 设置"
3. 输入你的 API Key
4. API Key 会保存在浏览器本地存储中

## 4. Microsoft Translator API

### 获取 API Key

1. 访问 [Azure Portal](https://portal.azure.com/)
2. 创建 Azure 账号（如果还没有）
3. 创建 Translator 资源
   - 搜索 "Translator"
   - 点击 "Create"
   - 选择订阅和资源组
   - 选择区域（例如：East Asia）
   - 选择定价层（F0 免费层）
4. 获取密钥
   - 资源创建后，进入 "Keys and Endpoint"
   - 复制 Key 1 或 Key 2
   - 记录区域（Region）

### 定价

- F0 免费层：2M 字符/月
- S1 标准层：$10/百万字符

### 配置方法

在工具中：
1. 选择 "Microsoft" 翻译方式
2. 点击 "显示 API 设置"
3. 输入你的 API Key
4. 输入区域（例如：eastasia, global）
5. 配置会保存在浏览器本地存储中

## 安全提示

⚠️ **重要：**
- API Key 仅保存在你的浏览器本地存储中
- 不会上传到任何服务器
- 建议使用有限制的 API Key
- 定期检查 API 使用情况
- 不要在公共电脑上保存 API Key

## 推荐使用方式

### 个人使用
- 推荐：**离线词典** 或 **Google 免费版**
- 优点：无需配置，快速便捷

### 团队使用
- 推荐：**Microsoft Translator (F0 免费层)**
- 优点：每月 2M 字符免费额度，翻译质量好

### 高频使用
- 推荐：**Google Cloud Translation API**
- 优点：每月 500K 字符免费，超出部分价格合理

## 故障排除

### Google Cloud API 错误

**错误：API key not valid**
- 检查 API Key 是否正确
- 确认 Cloud Translation API 已启用
- 检查 API Key 的限制设置

**错误：Quota exceeded**
- 已超出免费额度
- 等待下月重置或升级到付费计划

### Microsoft Translator API 错误

**错误：401 Unauthorized**
- 检查 API Key 是否正确
- 确认区域设置是否匹配

**错误：403 Forbidden**
- 检查订阅状态
- 确认 API 配额未超限

### 网络错误

**错误：Failed to fetch**
- 检查网络连接
- 确认防火墙/代理设置
- 尝试切换到离线模式

## 测试 API 配置

配置完成后，输入简单的中文词汇（如"测试"）进行测试：
- 如果返回结果，说明配置成功
- 如果出现错误，查看错误信息并参考上述故障排除

## 隐私说明

- 离线词典：完全本地处理，无网络请求
- Google 免费版：通过 MyMemory API 处理
- Google Cloud：通过 Google Cloud API 处理
- Microsoft：通过 Azure Translator API 处理

所有在线翻译都会将文本发送到相应的服务器进行处理。
