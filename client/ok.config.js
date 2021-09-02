module.exports = {
  // 应用名称
  name: 'vue-v2-demo',
  entry: 'src',
  // 预设配置名称，根据应用类型填写
  presets: ['vue'],
  outputPath: '../dist/client',
  plugins: {
    babel: {
      presets: ['@yuanfudao/babel-preset-vue'],
    },
  },
};
