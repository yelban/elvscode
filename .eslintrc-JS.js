module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    // ecmaVersion: 13,
    // 為指定 parser 時無法自動修正格式
    sourceType: 'module',
  },
  rules: {
  },
};
