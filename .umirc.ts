import { defineConfig } from 'dumi';
// import style from './docs/siteIndexStyle';

const repo = 'FL-Design'; // 项目名(也就是你的仓库名)

export default defineConfig({
  title: 'Fluent design', // 你的组件库名字
  // 你的网站 tab图片
  favicon: 'https://pic1.imgdb.cn/item/63515c0816f2c2beb1e5525f.png',
  // 你的官网logo
  logo: 'https://pic1.imgdb.cn/item/63515c0816f2c2beb1e5525f.png',
  outputPath: 'docs-dist',
  mode: 'site',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  history: {
    type: 'hash',
  },
  // 配置你想配置一级导航.
  navs: [
    null,
    {
      title: '作者',
      children: [
        {
          title: 'My_Blog',
          path: 'https://nanxiangscholar.github.io/',
        },
        {
          title: 'csdn',
          path: 'https://blog.csdn.net/qq_58459674?spm=1000.2115.3001.5343',
        },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Nanxiangscholar',
    },
  ],
  // styles: [style],
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
  },
  devServer: {
    port: 2022, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
