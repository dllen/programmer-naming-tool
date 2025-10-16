import {
    translate,
    translateWithGoogle,
    translateWithGoogleCloud,
    translateWithMicrosoft
} from './translationService';

// Mock fetch for testing
global.fetch = jest.fn();

describe('translateWithGoogle', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('successfully translates text', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({
        responseData: {
          translatedText: 'user management'
        }
      })
    });

    const result = await translateWithGoogle('用户管理');
    expect(result).toBe('user management');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('throws error on failed translation', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({
        responseData: null
      })
    });

    await expect(translateWithGoogle('测试')).rejects.toThrow('Translation failed');
  });

  test('handles network error', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(translateWithGoogle('测试')).rejects.toThrow();
  });
});

describe('translateWithMicrosoft', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('requires API key', async () => {
    await expect(translateWithMicrosoft('测试', '')).rejects.toThrow('Microsoft API key is required');
  });

  test('successfully translates with valid API key', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ([{
        translations: [{
          text: 'test'
        }]
      }])
    });

    const result = await translateWithMicrosoft('测试', 'fake-api-key');
    expect(result).toBe('test');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('throws error on HTTP error', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 401
    });

    await expect(translateWithMicrosoft('测试', 'invalid-key')).rejects.toThrow();
  });

  test('includes region in request', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ([{
        translations: [{ text: 'test' }]
      }])
    });

    await translateWithMicrosoft('测试', 'fake-key', 'eastasia');
    
    const callArgs = fetch.mock.calls[0];
    expect(callArgs[1].headers['Ocp-Apim-Subscription-Region']).toBe('eastasia');
  });
});

describe('translateWithGoogleCloud', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('requires API key', async () => {
    await expect(translateWithGoogleCloud('测试', '')).rejects.toThrow('Google Cloud API key is required');
  });

  test('successfully translates with valid API key', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: {
          translations: [{
            translatedText: 'test'
          }]
        }
      })
    });

    const result = await translateWithGoogleCloud('测试', 'fake-api-key');
    expect(result).toBe('test');
  });

  test('throws error on HTTP error', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 403
    });

    await expect(translateWithGoogleCloud('测试', 'invalid-key')).rejects.toThrow();
  });
});

describe('translate', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('routes to google-free provider', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({
        responseData: { translatedText: 'test' }
      })
    });

    const result = await translate('测试', 'google-free');
    expect(result).toBe('test');
  });

  test('routes to google-cloud provider', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: { translations: [{ translatedText: 'test' }] }
      })
    });

    const result = await translate('测试', 'google-cloud', { googleCloud: 'key' });
    expect(result).toBe('test');
  });

  test('routes to microsoft provider', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ([{
        translations: [{ text: 'test' }]
      }])
    });

    const result = await translate('测试', 'microsoft', { microsoft: 'key' });
    expect(result).toBe('test');
  });

  test('throws error for invalid provider', async () => {
    await expect(translate('测试', 'invalid-provider')).rejects.toThrow('Invalid translation provider');
  });
});
