// 翻译服务集成

// Google Translate API (免费版本使用 MyMemory API)
export const translateWithGoogle = async (text) => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=zh|en`
    );
    const data = await response.json();
    if (data.responseData && data.responseData.translatedText) {
      return data.responseData.translatedText.toLowerCase();
    }
    throw new Error('Translation failed');
  } catch (error) {
    console.error('Google translation error:', error);
    throw error;
  }
};

// Microsoft Translator API
export const translateWithMicrosoft = async (text, apiKey, region = 'global') => {
  if (!apiKey) {
    throw new Error('Microsoft API key is required');
  }

  try {
    const endpoint = 'https://api.cognitive.microsofttranslator.com';
    const response = await fetch(
      `${endpoint}/translate?api-version=3.0&from=zh-Hans&to=en`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
          'Ocp-Apim-Subscription-Region': region,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ text }]),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data && data[0] && data[0].translations && data[0].translations[0]) {
      return data[0].translations[0].text.toLowerCase();
    }
    throw new Error('Translation failed');
  } catch (error) {
    console.error('Microsoft translation error:', error);
    throw error;
  }
};

// Google Cloud Translation API (官方版本，需要 API Key)
export const translateWithGoogleCloud = async (text, apiKey) => {
  if (!apiKey) {
    throw new Error('Google Cloud API key is required');
  }

  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: 'zh-CN',
          target: 'en',
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.data && data.data.translations && data.data.translations[0]) {
      return data.data.translations[0].translatedText.toLowerCase();
    }
    throw new Error('Translation failed');
  } catch (error) {
    console.error('Google Cloud translation error:', error);
    throw error;
  }
};

// 统一的翻译接口
export const translate = async (text, provider = 'offline', apiKeys = {}) => {
  switch (provider) {
    case 'google-free':
      return await translateWithGoogle(text);
    
    case 'google-cloud':
      return await translateWithGoogleCloud(text, apiKeys.googleCloud);
    
    case 'microsoft':
      return await translateWithMicrosoft(text, apiKeys.microsoft, apiKeys.microsoftRegion);
    
    default:
      throw new Error('Invalid translation provider');
  }
};
