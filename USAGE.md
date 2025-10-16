# 使用指南

## 基本使用

### 1. 选择翻译方式

工具提供四种翻译方式：

#### 离线词典（推荐新手）
- 无需任何配置
- 支持 200+ 常用编程术语
- 响应速度最快
- 适合：变量名、函数名、类名等常见场景

#### Google 翻译（免费版）
- 无需 API Key
- 使用 MyMemory 翻译服务
- 有每日请求限制
- 适合：偶尔使用，不想配置 API

#### Google Cloud Translation
- 需要 Google Cloud API Key
- 翻译质量高
- 每月 500,000 字符免费
- 适合：高频使用，需要准确翻译

#### Microsoft Translator
- 需要 Azure API Key
- 翻译质量高
- 免费层每月 2,000,000 字符
- 适合：团队使用，大量翻译需求

### 2. 输入中文

在输入框中输入中文命名，例如：
- 用户管理
- 获取数据列表
- 创建新订单
- 删除用户信息

### 3. 点击转换

点击"转换命名"按钮，或按 Enter 键

### 4. 查看结果

工具会生成五种命名风格：

```
输入：用户管理

输出：
- camelCase: userManage
- PascalCase: UserManage
- snake_case: user_manage
- kebab-case: user-manage
- CONSTANT_CASE: USER_MANAGE
```

### 5. 复制使用

点击每个结果旁边的"复制"按钮，即可复制到剪贴板

## 命名风格说明

### camelCase（驼峰命名）
```javascript
// JavaScript/TypeScript
let userName = 'John';
function getUserInfo() { }

// Java
String userName = "John";
public void getUserInfo() { }
```

### PascalCase（帕斯卡命名）
```javascript
// React 组件
function UserProfile() { }
class UserManager { }

// TypeScript 接口
interface UserInfo { }
```

### snake_case（蛇形命名）
```python
# Python
user_name = 'John'
def get_user_info():
    pass

# 数据库字段
CREATE TABLE users (
    user_name VARCHAR(50),
    created_at TIMESTAMP
);
```

### kebab-case（短横线命名）
```css
/* CSS 类名 */
.user-profile { }
.user-info-card { }

/* URL */
/user-management
/get-user-info
```

### CONSTANT_CASE（常量命名）
```javascript
// JavaScript/TypeScript
const MAX_USER_COUNT = 100;
const API_BASE_URL = 'https://api.example.com';

// Python
MAX_USER_COUNT = 100
API_BASE_URL = 'https://api.example.com'
```

## 高级技巧

### 1. 组合词翻译

输入多个词组合：
```
输入：用户信息管理系统
输出：user_info_manage_system
```

### 2. 快速切换翻译方式

根据场景选择：
- 简单词汇 → 离线词典（最快）
- 复杂句子 → Google/Microsoft API（更准确）

### 3. API Key 管理

- API Key 保存在浏览器本地存储
- 清除浏览器数据会删除 API Key
- 可以随时更新或删除 API Key

### 4. 批量转换

虽然工具一次只能转换一个词，但你可以：
1. 准备好多个中文词
2. 逐个输入转换
3. 快速复制结果

## 常见场景示例

### 前端开发
```
用户登录 → userLogin (函数名)
用户信息 → UserInfo (组件名)
按钮样式 → button-style (CSS 类)
```

### 后端开发
```
获取用户列表 → getUserList (方法名)
用户服务 → UserService (类名)
数据库连接 → database_connection (变量名)
```

### 数据库设计
```
用户表 → user_table
创建时间 → created_at
更新时间 → updated_at
```

### 配置文件
```
最大连接数 → MAX_CONNECTION_COUNT
API密钥 → API_SECRET_KEY
数据库地址 → DATABASE_URL
```

## 最佳实践

### 1. 保持一致性
在同一个项目中使用统一的命名风格

### 2. 见名知意
选择能准确表达含义的中文输入

### 3. 避免过长
如果生成的命名太长，考虑简化中文输入

### 4. 遵循规范
- JavaScript/TypeScript: camelCase (变量/函数), PascalCase (类/组件)
- Python: snake_case
- CSS: kebab-case
- 常量: CONSTANT_CASE

## 故障排除

### 翻译结果不准确
1. 尝试简化中文输入
2. 切换到 Google/Microsoft API
3. 手动调整结果

### API 调用失败
1. 检查网络连接
2. 验证 API Key 是否正确
3. 查看 API 配额是否用完
4. 切换到离线模式

### 复制功能不工作
1. 检查浏览器权限
2. 使用 HTTPS 访问（某些浏览器要求）
3. 手动选择文本复制

## 键盘快捷键

- `Enter` - 执行转换
- `Ctrl/Cmd + A` - 选中输入框文本
- `Ctrl/Cmd + C` - 复制选中文本

## 浏览器兼容性

支持所有现代浏览器：
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 移动端使用

工具完全支持移动设备：
- 响应式布局
- 触摸友好的按钮
- 自动适配屏幕大小
