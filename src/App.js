import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import { translate } from './services/translationService';
import {
    toCamelCase,
    toConstantCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
    translateChinese
} from './utils/translator';

function App() {
  const [chineseInput, setChineseInput] = useState('');
  const [results, setResults] = useState(null);
  const [translationMode, setTranslationMode] = useState('offline');
  const [apiKeys, setApiKeys] = useState({
    googleCloud: localStorage.getItem('googleCloudApiKey') || '',
    microsoft: localStorage.getItem('microsoftApiKey') || '',
    microsoftRegion: localStorage.getItem('microsoftRegion') || 'global'
  });
  const [showSettings, setShowSettings] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('googleCloudApiKey', apiKeys.googleCloud);
    localStorage.setItem('microsoftApiKey', apiKeys.microsoft);
    localStorage.setItem('microsoftRegion', apiKeys.microsoftRegion);
  }, [apiKeys]);

  const handleTranslate = async () => {
    if (!chineseInput.trim()) {
      setResults(null);
      return;
    }

    setError(null);
    setIsTranslating(true);

    try {
      let baseTranslation;

      if (translationMode === 'offline') {
        baseTranslation = translateChinese(chineseInput);
      } else {
        const translatedText = await translate(chineseInput, translationMode, apiKeys);
        // 清理翻译结果，移除空格和特殊字符
        baseTranslation = translatedText
          .replace(/[^\w\s]/g, '')
          .replace(/\s+/g, '_')
          .toLowerCase();
      }
      
      setResults({
        base: baseTranslation,
        camelCase: toCamelCase(baseTranslation),
        pascalCase: toPascalCase(baseTranslation),
        snakeCase: toSnakeCase(baseTranslation),
        kebabCase: toKebabCase(baseTranslation),
        constantCase: toConstantCase(baseTranslation)
      });
    } catch (err) {
      setError(err.message || '翻译失败，请检查 API 配置或网络连接');
      console.error('Translation error:', err);
    } finally {
      setIsTranslating(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // 可以添加一个提示
  };

  const handleApiKeyChange = (key, value) => {
    setApiKeys(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-4 mb-3">
                <i className="bi bi-code-slash"></i> 程序员命名工具
              </h1>
              <p className="lead text-muted">
                将中文命名快速转换为各种编程命名风格
              </p>
            </div>

            <div className="card shadow-sm mb-3">
              <div className="card-body p-4">
                {/* 翻译模式选择 */}
                <div className="mb-4">
                  <label className="form-label fw-bold">翻译方式</label>
                  <div className="btn-group w-100" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="translationMode"
                      id="offline"
                      value="offline"
                      checked={translationMode === 'offline'}
                      onChange={(e) => setTranslationMode(e.target.value)}
                    />
                    <label className="btn btn-outline-primary" htmlFor="offline">
                      离线词典
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="translationMode"
                      id="google-free"
                      value="google-free"
                      checked={translationMode === 'google-free'}
                      onChange={(e) => setTranslationMode(e.target.value)}
                    />
                    <label className="btn btn-outline-primary" htmlFor="google-free">
                      Google (免费)
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="translationMode"
                      id="google-cloud"
                      value="google-cloud"
                      checked={translationMode === 'google-cloud'}
                      onChange={(e) => setTranslationMode(e.target.value)}
                    />
                    <label className="btn btn-outline-primary" htmlFor="google-cloud">
                      Google Cloud
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="translationMode"
                      id="microsoft"
                      value="microsoft"
                      checked={translationMode === 'microsoft'}
                      onChange={(e) => setTranslationMode(e.target.value)}
                    />
                    <label className="btn btn-outline-primary" htmlFor="microsoft">
                      Microsoft
                    </label>
                  </div>
                  <small className="text-muted d-block mt-2">
                    {translationMode === 'offline' && '使用内置词典，支持常用编程术语'}
                    {translationMode === 'google-free' && '使用免费翻译服务，无需 API Key'}
                    {translationMode === 'google-cloud' && '需要 Google Cloud Translation API Key'}
                    {translationMode === 'microsoft' && '需要 Microsoft Translator API Key'}
                  </small>
                </div>

                {/* API 设置按钮 */}
                {(translationMode === 'google-cloud' || translationMode === 'microsoft') && (
                  <div className="mb-3">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => setShowSettings(!showSettings)}
                    >
                      <i className="bi bi-gear"></i> {showSettings ? '隐藏' : '显示'} API 设置
                    </button>
                  </div>
                )}

                {/* API 设置面板 */}
                {showSettings && (
                  <div className="alert alert-info mb-4">
                    {translationMode === 'google-cloud' && (
                      <div className="mb-3">
                        <label className="form-label">Google Cloud API Key</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="输入你的 Google Cloud Translation API Key"
                          value={apiKeys.googleCloud}
                          onChange={(e) => handleApiKeyChange('googleCloud', e.target.value)}
                        />
                        <small className="text-muted">
                          获取 API Key: <a href="https://cloud.google.com/translate" target="_blank" rel="noopener noreferrer">Google Cloud Console</a>
                        </small>
                      </div>
                    )}

                    {translationMode === 'microsoft' && (
                      <>
                        <div className="mb-3">
                          <label className="form-label">Microsoft Translator API Key</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="输入你的 Microsoft Translator API Key"
                            value={apiKeys.microsoft}
                            onChange={(e) => handleApiKeyChange('microsoft', e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">区域 (Region)</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="例如: eastasia, global"
                            value={apiKeys.microsoftRegion}
                            onChange={(e) => handleApiKeyChange('microsoftRegion', e.target.value)}
                          />
                          <small className="text-muted">
                            获取 API Key: <a href="https://azure.microsoft.com/services/cognitive-services/translator/" target="_blank" rel="noopener noreferrer">Azure Portal</a>
                          </small>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* 错误提示 */}
                {error && (
                  <div className="alert alert-danger mb-4" role="alert">
                    <i className="bi bi-exclamation-triangle"></i> {error}
                  </div>
                )}

                {/* 输入框 */}
                <div className="mb-4">
                  <label htmlFor="chineseInput" className="form-label fw-bold">
                    输入中文名称
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="chineseInput"
                    placeholder="例如：用户管理、获取数据、创建订单"
                    value={chineseInput}
                    onChange={(e) => setChineseInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleTranslate()}
                    disabled={isTranslating}
                  />
                </div>

                {/* 转换按钮 */}
                <button
                  className="btn btn-primary btn-lg w-100 mb-4"
                  onClick={handleTranslate}
                  disabled={isTranslating}
                >
                  {isTranslating ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      翻译中...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-translate"></i> 转换命名
                    </>
                  )}
                </button>

                {/* 结果显示 */}
                {results && (
                  <div className="results">
                    <h5 className="mb-3 text-secondary">转换结果：</h5>
                    
                    <div className="list-group">
                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">camelCase (驼峰命名)</h6>
                            <code className="text-primary">{results.camelCase}</code>
                            <small className="d-block text-muted mt-1">
                              适用于：JavaScript/Java 变量、方法名
                            </small>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(results.camelCase)}
                          >
                            复制
                          </button>
                        </div>
                      </div>

                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">PascalCase (帕斯卡命名)</h6>
                            <code className="text-success">{results.pascalCase}</code>
                            <small className="d-block text-muted mt-1">
                              适用于：类名、组件名、接口名
                            </small>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(results.pascalCase)}
                          >
                            复制
                          </button>
                        </div>
                      </div>

                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">snake_case (蛇形命名)</h6>
                            <code className="text-info">{results.snakeCase}</code>
                            <small className="d-block text-muted mt-1">
                              适用于：Python 变量、函数名、数据库字段
                            </small>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(results.snakeCase)}
                          >
                            复制
                          </button>
                        </div>
                      </div>

                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">kebab-case (短横线命名)</h6>
                            <code className="text-warning">{results.kebabCase}</code>
                            <small className="d-block text-muted mt-1">
                              适用于：CSS 类名、URL、文件名
                            </small>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(results.kebabCase)}
                          >
                            复制
                          </button>
                        </div>
                      </div>

                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">CONSTANT_CASE (常量命名)</h6>
                            <code className="text-danger">{results.constantCase}</code>
                            <small className="d-block text-muted mt-1">
                              适用于：常量、环境变量
                            </small>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => copyToClipboard(results.constantCase)}
                          >
                            复制
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-4">
              <small className="text-muted">
                支持离线词典 + Google + Microsoft 翻译 | 
                <a href="https://github.com" className="text-decoration-none ms-2">
                  GitHub
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
