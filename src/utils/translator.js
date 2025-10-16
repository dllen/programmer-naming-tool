// 简化的中英文翻译映射（常用编程术语）
const dictionary = {
  '用户': 'user',
  '管理': 'manage',
  '管理员': 'admin',
  '系统': 'system',
  '配置': 'config',
  '设置': 'setting',
  '数据': 'data',
  '列表': 'list',
  '详情': 'detail',
  '信息': 'info',
  '服务': 'service',
  '控制器': 'controller',
  '模型': 'model',
  '视图': 'view',
  '工具': 'util',
  '帮助': 'helper',
  '常量': 'constant',
  '接口': 'interface',
  '类': 'class',
  '方法': 'method',
  '函数': 'function',
  '变量': 'variable',
  '参数': 'param',
  '返回': 'return',
  '创建': 'create',
  '添加': 'add',
  '删除': 'delete',
  '修改': 'update',
  '编辑': 'edit',
  '查询': 'query',
  '搜索': 'search',
  '获取': 'get',
  '设定': 'set',
  '保存': 'save',
  '提交': 'submit',
  '取消': 'cancel',
  '确认': 'confirm',
  '登录': 'login',
  '注册': 'register',
  '退出': 'logout',
  '密码': 'password',
  '账号': 'account',
  '名称': 'name',
  '标题': 'title',
  '内容': 'content',
  '描述': 'description',
  '状态': 'status',
  '类型': 'type',
  '时间': 'time',
  '日期': 'date',
  '开始': 'start',
  '结束': 'end',
  '成功': 'success',
  '失败': 'fail',
  '错误': 'error',
  '警告': 'warning',
  '消息': 'message',
  '通知': 'notification',
  '页面': 'page',
  '组件': 'component',
  '按钮': 'button',
  '表单': 'form',
  '表格': 'table',
  '输入': 'input',
  '输出': 'output',
  '文件': 'file',
  '文档': 'document',
  '图片': 'image',
  '视频': 'video',
  '音频': 'audio',
  '上传': 'upload',
  '下载': 'download',
  '导入': 'import',
  '导出': 'export',
  '打印': 'print',
  '预览': 'preview',
  '刷新': 'refresh',
  '加载': 'load',
  '请求': 'request',
  '响应': 'response',
  '客户端': 'client',
  '服务器': 'server',
  '数据库': 'database',
  '缓存': 'cache',
  '会话': 'session',
  '令牌': 'token',
  '权限': 'permission',
  '角色': 'role',
  '菜单': 'menu',
  '导航': 'navigation',
  '路由': 'route',
  '链接': 'link',
  '地址': 'address',
  '电话': 'phone',
  '邮箱': 'email',
  '网站': 'website',
  '公司': 'company',
  '部门': 'department',
  '员工': 'employee',
  '产品': 'product',
  '订单': 'order',
  '支付': 'payment',
  '价格': 'price',
  '数量': 'quantity',
  '总计': 'total',
  '统计': 'statistics',
  '报表': 'report',
  '图表': 'chart',
  '分析': 'analysis',
  '监控': 'monitor',
  '日志': 'log',
  '备份': 'backup',
  '恢复': 'restore',
  '版本': 'version',
  '更新': 'update',
  '升级': 'upgrade',
  '安装': 'install',
  '卸载': 'uninstall',
  '启动': 'start',
  '停止': 'stop',
  '重启': 'restart',
  '暂停': 'pause',
  '继续': 'continue',
  '完成': 'complete',
  '进度': 'progress',
  '百分比': 'percentage',
  '索引': 'index',
  '主页': 'home',
  '关于': 'about',
  '联系': 'contact',
  '反馈': 'feedback',
  '帮助中心': 'help',
  '常见问题': 'faq',
  '隐私': 'privacy',
  '条款': 'terms',
  '协议': 'agreement'
};

// 拼音转换（简化版）
const pinyinMap = {
  '啊': 'a', '阿': 'a', '爱': 'ai', '安': 'an', '按': 'an',
  '八': 'ba', '吧': 'ba', '白': 'bai', '百': 'bai', '班': 'ban', '办': 'ban', '帮': 'bang', '包': 'bao', '保': 'bao', '报': 'bao', '北': 'bei', '本': 'ben', '比': 'bi', '边': 'bian', '变': 'bian', '标': 'biao', '表': 'biao', '别': 'bie', '并': 'bing', '不': 'bu', '部': 'bu', '步': 'bu',
  '才': 'cai', '参': 'can', '操': 'cao', '层': 'ceng', '查': 'cha', '产': 'chan', '常': 'chang', '场': 'chang', '长': 'chang', '超': 'chao', '车': 'che', '成': 'cheng', '程': 'cheng', '吃': 'chi', '出': 'chu', '处': 'chu', '传': 'chuan', '窗': 'chuang', '创': 'chuang', '次': 'ci', '从': 'cong', '存': 'cun',
  '打': 'da', '大': 'da', '代': 'dai', '带': 'dai', '单': 'dan', '当': 'dang', '导': 'dao', '到': 'dao', '道': 'dao', '的': 'de', '得': 'de', '地': 'di', '第': 'di', '点': 'dian', '电': 'dian', '调': 'diao', '定': 'ding', '东': 'dong', '动': 'dong', '都': 'dou', '读': 'du', '度': 'du', '断': 'duan', '对': 'dui', '多': 'duo',
  '而': 'er', '二': 'er',
  '发': 'fa', '法': 'fa', '反': 'fan', '范': 'fan', '返': 'fan', '方': 'fang', '访': 'fang', '放': 'fang', '非': 'fei', '分': 'fen', '风': 'feng', '服': 'fu', '符': 'fu', '负': 'fu', '复': 'fu', '父': 'fu', '付': 'fu', '副': 'fu',
  '改': 'gai', '概': 'gai', '干': 'gan', '感': 'gan', '刚': 'gang', '高': 'gao', '告': 'gao', '个': 'ge', '各': 'ge', '给': 'gei', '根': 'gen', '更': 'geng', '工': 'gong', '公': 'gong', '功': 'gong', '共': 'gong', '关': 'guan', '观': 'guan', '管': 'guan', '广': 'guang', '规': 'gui', '国': 'guo', '过': 'guo',
  '还': 'hai', '好': 'hao', '号': 'hao', '合': 'he', '和': 'he', '很': 'hen', '后': 'hou', '呼': 'hu', '户': 'hu', '护': 'hu', '化': 'hua', '话': 'hua', '画': 'hua', '划': 'hua', '换': 'huan', '环': 'huan', '回': 'hui', '会': 'hui', '活': 'huo', '火': 'huo', '获': 'huo',
  '机': 'ji', '基': 'ji', '级': 'ji', '集': 'ji', '及': 'ji', '几': 'ji', '计': 'ji', '记': 'ji', '技': 'ji', '际': 'ji', '继': 'ji', '加': 'jia', '家': 'jia', '价': 'jia', '架': 'jia', '间': 'jian', '监': 'jian', '检': 'jian', '简': 'jian', '见': 'jian', '建': 'jian', '件': 'jian', '将': 'jiang', '讲': 'jiang', '交': 'jiao', '教': 'jiao', '叫': 'jiao', '接': 'jie', '节': 'jie', '结': 'jie', '解': 'jie', '界': 'jie', '金': 'jin', '进': 'jin', '近': 'jin', '经': 'jing', '精': 'jing', '景': 'jing', '静': 'jing', '究': 'jiu', '就': 'jiu', '局': 'ju', '举': 'ju', '具': 'ju', '据': 'ju', '决': 'jue', '觉': 'jue',
  '开': 'kai', '看': 'kan', '考': 'kao', '可': 'ke', '客': 'ke', '课': 'ke', '空': 'kong', '控': 'kong', '口': 'kou', '块': 'kuai', '快': 'kuai', '宽': 'kuan',
  '来': 'lai', '蓝': 'lan', '览': 'lan', '老': 'lao', '了': 'le', '类': 'lei', '离': 'li', '里': 'li', '理': 'li', '力': 'li', '立': 'li', '例': 'li', '利': 'li', '连': 'lian', '联': 'lian', '量': 'liang', '两': 'liang', '列': 'lie', '林': 'lin', '临': 'lin', '令': 'ling', '另': 'ling', '流': 'liu', '录': 'lu', '路': 'lu', '论': 'lun', '逻': 'luo', '落': 'luo',
  '么': 'me', '没': 'mei', '每': 'mei', '们': 'men', '门': 'men', '面': 'mian', '民': 'min', '名': 'ming', '明': 'ming', '命': 'ming', '模': 'mo', '某': 'mou', '目': 'mu',
  '那': 'na', '哪': 'na', '内': 'nei', '能': 'neng', '你': 'ni', '年': 'nian', '念': 'nian', '您': 'nin', '宁': 'ning',
  '排': 'pai', '判': 'pan', '配': 'pei', '平': 'ping', '评': 'ping', '破': 'po',
  '七': 'qi', '其': 'qi', '期': 'qi', '启': 'qi', '器': 'qi', '前': 'qian', '强': 'qiang', '切': 'qie', '清': 'qing', '情': 'qing', '请': 'qing', '区': 'qu', '取': 'qu', '去': 'qu', '全': 'quan', '权': 'quan', '确': 'que', '群': 'qun',
  '然': 'ran', '让': 'rang', '人': 'ren', '认': 'ren', '任': 'ren', '日': 'ri', '容': 'rong', '如': 'ru', '入': 'ru',
  '三': 'san', '色': 'se', '删': 'shan', '上': 'shang', '少': 'shao', '设': 'she', '社': 'she', '身': 'shen', '深': 'shen', '什': 'shen', '生': 'sheng', '声': 'sheng', '省': 'sheng', '时': 'shi', '实': 'shi', '识': 'shi', '史': 'shi', '使': 'shi', '始': 'shi', '示': 'shi', '事': 'shi', '式': 'shi', '视': 'shi', '试': 'shi', '是': 'shi', '收': 'shou', '手': 'shou', '首': 'shou', '受': 'shou', '书': 'shu', '数': 'shu', '术': 'shu', '树': 'shu', '双': 'shuang', '水': 'shui', '说': 'shuo', '思': 'si', '四': 'si', '速': 'su', '算': 'suan', '随': 'sui', '所': 'suo',
  '他': 'ta', '她': 'ta', '它': 'ta', '台': 'tai', '太': 'tai', '态': 'tai', '谈': 'tan', '特': 'te', '提': 'ti', '体': 'ti', '天': 'tian', '条': 'tiao', '调': 'tiao', '听': 'ting', '停': 'ting', '通': 'tong', '同': 'tong', '统': 'tong', '头': 'tou', '图': 'tu', '推': 'tui', '退': 'tui', '托': 'tuo',
  '外': 'wai', '完': 'wan', '玩': 'wan', '网': 'wang', '往': 'wang', '忘': 'wang', '为': 'wei', '位': 'wei', '未': 'wei', '文': 'wen', '问': 'wen', '我': 'wo', '无': 'wu', '五': 'wu', '物': 'wu', '务': 'wu',
  '西': 'xi', '息': 'xi', '系': 'xi', '细': 'xi', '下': 'xia', '先': 'xian', '现': 'xian', '线': 'xian', '限': 'xian', '相': 'xiang', '想': 'xiang', '向': 'xiang', '项': 'xiang', '象': 'xiang', '消': 'xiao', '小': 'xiao', '效': 'xiao', '些': 'xie', '写': 'xie', '新': 'xin', '信': 'xin', '行': 'xing', '形': 'xing', '型': 'xing', '性': 'xing', '修': 'xiu', '需': 'xu', '续': 'xu', '选': 'xuan', '学': 'xue', '寻': 'xun', '询': 'xun',
  '压': 'ya', '验': 'yan', '样': 'yang', '要': 'yao', '也': 'ye', '页': 'ye', '业': 'ye', '一': 'yi', '以': 'yi', '已': 'yi', '意': 'yi', '义': 'yi', '因': 'yin', '引': 'yin', '应': 'ying', '用': 'yong', '优': 'you', '由': 'you', '有': 'you', '又': 'you', '右': 'you', '于': 'yu', '与': 'yu', '语': 'yu', '预': 'yu', '元': 'yuan', '原': 'yuan', '源': 'yuan', '远': 'yuan', '约': 'yue', '月': 'yue', '越': 'yue', '云': 'yun', '运': 'yun',
  '在': 'zai', '再': 'zai', '则': 'ze', '怎': 'zen', '增': 'zeng', '展': 'zhan', '站': 'zhan', '战': 'zhan', '张': 'zhang', '章': 'zhang', '找': 'zhao', '照': 'zhao', '者': 'zhe', '这': 'zhe', '真': 'zhen', '整': 'zheng', '正': 'zheng', '证': 'zheng', '之': 'zhi', '支': 'zhi', '知': 'zhi', '直': 'zhi', '执': 'zhi', '值': 'zhi', '指': 'zhi', '制': 'zhi', '质': 'zhi', '治': 'zhi', '志': 'zhi', '中': 'zhong', '种': 'zhong', '重': 'zhong', '周': 'zhou', '主': 'zhu', '注': 'zhu', '住': 'zhu', '助': 'zhu', '专': 'zhuan', '转': 'zhuan', '装': 'zhuang', '状': 'zhuang', '准': 'zhun', '资': 'zi', '子': 'zi', '字': 'zi', '自': 'zi', '总': 'zong', '走': 'zou', '组': 'zu', '最': 'zui', '作': 'zuo', '做': 'zuo', '左': 'zuo', '座': 'zuo'
};

export const translateChinese = (text) => {
  if (!text) return '';
  
  // 移除所有空格和特殊字符
  const cleanText = text.trim();
  
  // 尝试完整匹配字典
  if (dictionary[cleanText]) {
    return dictionary[cleanText];
  }
  
  // 尝试分词匹配
  let result = [];
  let i = 0;
  while (i < cleanText.length) {
    let matched = false;
    // 尝试从最长的词开始匹配
    for (let len = Math.min(4, cleanText.length - i); len > 0; len--) {
      const word = cleanText.substr(i, len);
      if (dictionary[word]) {
        result.push(dictionary[word]);
        i += len;
        matched = true;
        break;
      }
    }
    
    // 如果没有匹配到，使用拼音
    if (!matched) {
      const char = cleanText[i];
      result.push(pinyinMap[char] || char);
      i++;
    }
  }
  
  return result.join('_');
};

export const toCamelCase = (text) => {
  const words = text.split('_').filter(w => w);
  if (words.length === 0) return '';
  return words[0] + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
};

export const toPascalCase = (text) => {
  const words = text.split('_').filter(w => w);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
};

export const toSnakeCase = (text) => {
  return text.toLowerCase();
};

export const toKebabCase = (text) => {
  return text.replace(/_/g, '-').toLowerCase();
};

export const toConstantCase = (text) => {
  return text.toUpperCase();
};
