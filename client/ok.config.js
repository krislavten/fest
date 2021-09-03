module.exports = {
  // 应用名称
  name: 'vue-v2-demo',
  entry: 'pages',
  outputPath: '../public',
  plugins: {
    vue: {},
    style: {},
    babel: {
      presets: ['@yuanfudao/babel-preset-vue'],
    },
    'version-v2': {},
  },
};
