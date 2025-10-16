import {
    toCamelCase,
    toConstantCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
    translateChinese
} from './translator';

describe('translateChinese', () => {
  test('translates common programming terms', () => {
    expect(translateChinese('用户')).toBe('user');
    expect(translateChinese('管理')).toBe('manage');
    expect(translateChinese('数据')).toBe('data');
    expect(translateChinese('列表')).toBe('list');
  });

  test('translates compound words', () => {
    expect(translateChinese('用户管理')).toBe('user_manage');
    expect(translateChinese('数据列表')).toBe('data_list');
    expect(translateChinese('创建订单')).toBe('create_order');
  });

  test('handles empty input', () => {
    expect(translateChinese('')).toBe('');
    expect(translateChinese('   ')).toBe('');
  });

  test('handles unknown characters with pinyin', () => {
    const result = translateChinese('测试');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });
});

describe('toCamelCase', () => {
  test('converts snake_case to camelCase', () => {
    expect(toCamelCase('user_manage')).toBe('userManage');
    expect(toCamelCase('get_data_list')).toBe('getDataList');
    expect(toCamelCase('create_new_order')).toBe('createNewOrder');
  });

  test('handles single word', () => {
    expect(toCamelCase('user')).toBe('user');
    expect(toCamelCase('data')).toBe('data');
  });

  test('handles empty input', () => {
    expect(toCamelCase('')).toBe('');
  });

  test('handles multiple underscores', () => {
    expect(toCamelCase('user__manage')).toBe('userManage');
  });
});

describe('toPascalCase', () => {
  test('converts snake_case to PascalCase', () => {
    expect(toPascalCase('user_manage')).toBe('UserManage');
    expect(toPascalCase('get_data_list')).toBe('GetDataList');
    expect(toPascalCase('create_new_order')).toBe('CreateNewOrder');
  });

  test('handles single word', () => {
    expect(toPascalCase('user')).toBe('User');
    expect(toPascalCase('data')).toBe('Data');
  });

  test('handles empty input', () => {
    expect(toPascalCase('')).toBe('');
  });
});

describe('toSnakeCase', () => {
  test('converts to lowercase snake_case', () => {
    expect(toSnakeCase('USER_MANAGE')).toBe('user_manage');
    expect(toSnakeCase('Get_Data_List')).toBe('get_data_list');
  });

  test('handles already lowercase', () => {
    expect(toSnakeCase('user_manage')).toBe('user_manage');
  });

  test('handles empty input', () => {
    expect(toSnakeCase('')).toBe('');
  });
});

describe('toKebabCase', () => {
  test('converts snake_case to kebab-case', () => {
    expect(toKebabCase('user_manage')).toBe('user-manage');
    expect(toKebabCase('get_data_list')).toBe('get-data-list');
  });

  test('converts to lowercase', () => {
    expect(toKebabCase('USER_MANAGE')).toBe('user-manage');
  });

  test('handles empty input', () => {
    expect(toKebabCase('')).toBe('');
  });
});

describe('toConstantCase', () => {
  test('converts to uppercase', () => {
    expect(toConstantCase('user_manage')).toBe('USER_MANAGE');
    expect(toConstantCase('get_data_list')).toBe('GET_DATA_LIST');
  });

  test('handles already uppercase', () => {
    expect(toConstantCase('USER_MANAGE')).toBe('USER_MANAGE');
  });

  test('handles empty input', () => {
    expect(toConstantCase('')).toBe('');
  });
});

describe('Integration tests', () => {
  test('full translation workflow', () => {
    const chinese = '用户管理';
    const base = translateChinese(chinese);
    
    expect(toCamelCase(base)).toBe('userManage');
    expect(toPascalCase(base)).toBe('UserManage');
    expect(toSnakeCase(base)).toBe('user_manage');
    expect(toKebabCase(base)).toBe('user-manage');
    expect(toConstantCase(base)).toBe('USER_MANAGE');
  });

  test('complex phrase translation', () => {
    const chinese = '获取用户信息列表';
    const base = translateChinese(chinese);
    
    expect(base).toBeTruthy();
    expect(toCamelCase(base)).toMatch(/^[a-z][a-zA-Z]*$/);
    expect(toPascalCase(base)).toMatch(/^[A-Z][a-zA-Z]*$/);
    expect(toSnakeCase(base)).toMatch(/^[a-z_]+$/);
    expect(toKebabCase(base)).toMatch(/^[a-z-]+$/);
    expect(toConstantCase(base)).toMatch(/^[A-Z_]+$/);
  });
});
