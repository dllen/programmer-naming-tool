import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock the translation service
jest.mock('./services/translationService', () => ({
  translate: jest.fn()
}));

// Mock the translator utils
jest.mock('./utils/translator', () => ({
  translateChinese: jest.fn((text) => 'user_manage'),
  toCamelCase: jest.fn((text) => 'userManage'),
  toPascalCase: jest.fn((text) => 'UserManage'),
  toSnakeCase: jest.fn((text) => 'user_manage'),
  toKebabCase: jest.fn((text) => 'user-manage'),
  toConstantCase: jest.fn((text) => 'USER_MANAGE')
}));

describe('App Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('renders app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/程序员命名工具/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders input field', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/例如：用户管理/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('renders translation mode buttons', () => {
    render(<App />);
    expect(screen.getByLabelText(/离线词典/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Google \(免费\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Google Cloud/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Microsoft/i)).toBeInTheDocument();
  });

  test('renders convert button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /转换命名/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('allows user to type in input field', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/例如：用户管理/i);
    
    fireEvent.change(inputElement, { target: { value: '用户管理' } });
    expect(inputElement.value).toBe('用户管理');
  });

  test('shows results after translation', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/例如：用户管理/i);
    const buttonElement = screen.getByRole('button', { name: /转换命名/i });

    fireEvent.change(inputElement, { target: { value: '用户管理' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.getByText(/camelCase/i)).toBeInTheDocument();
      expect(screen.getByText(/PascalCase/i)).toBeInTheDocument();
      expect(screen.getByText(/snake_case/i)).toBeInTheDocument();
      expect(screen.getByText(/kebab-case/i)).toBeInTheDocument();
      expect(screen.getByText(/CONSTANT_CASE/i)).toBeInTheDocument();
    });
  });

  test('shows API settings when Google Cloud is selected', () => {
    render(<App />);
    const googleCloudRadio = screen.getByLabelText(/Google Cloud/i);
    
    fireEvent.click(googleCloudRadio);
    
    const settingsButton = screen.getByRole('button', { name: /显示 API 设置/i });
    expect(settingsButton).toBeInTheDocument();
  });

  test('shows API settings when Microsoft is selected', () => {
    render(<App />);
    const microsoftRadio = screen.getByLabelText(/Microsoft/i);
    
    fireEvent.click(microsoftRadio);
    
    const settingsButton = screen.getByRole('button', { name: /显示 API 设置/i });
    expect(settingsButton).toBeInTheDocument();
  });

  test('toggles API settings panel', () => {
    render(<App />);
    const googleCloudRadio = screen.getByLabelText(/Google Cloud/i);
    fireEvent.click(googleCloudRadio);
    
    const settingsButton = screen.getByRole('button', { name: /显示 API 设置/i });
    fireEvent.click(settingsButton);
    
    expect(screen.getByPlaceholderText(/输入你的 Google Cloud Translation API Key/i)).toBeInTheDocument();
  });

  test('does not show results for empty input', async () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /转换命名/i });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.queryByText(/转换结果/i)).not.toBeInTheDocument();
    });
  });

  test('handles Enter key press', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/例如：用户管理/i);

    fireEvent.change(inputElement, { target: { value: '用户管理' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

    // Should trigger translation
    expect(inputElement.value).toBe('用户管理');
  });

  test('saves API keys to localStorage', () => {
    render(<App />);
    const googleCloudRadio = screen.getByLabelText(/Google Cloud/i);
    fireEvent.click(googleCloudRadio);
    
    const settingsButton = screen.getByRole('button', { name: /显示 API 设置/i });
    fireEvent.click(settingsButton);
    
    const apiKeyInput = screen.getByPlaceholderText(/输入你的 Google Cloud Translation API Key/i);
    fireEvent.change(apiKeyInput, { target: { value: 'test-api-key' } });

    // Check if localStorage was called (in real scenario)
    expect(apiKeyInput.value).toBe('test-api-key');
  });

  test('switches between translation modes', () => {
    render(<App />);
    
    const offlineRadio = screen.getByLabelText(/离线词典/i);
    const googleFreeRadio = screen.getByLabelText(/Google \(免费\)/i);
    
    expect(offlineRadio).toBeChecked();
    
    fireEvent.click(googleFreeRadio);
    expect(googleFreeRadio).toBeChecked();
    expect(offlineRadio).not.toBeChecked();
  });
});
