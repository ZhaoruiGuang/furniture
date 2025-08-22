export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTitleText: '百宏全屋定制工厂',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   // color: '#000', // 未选中时的颜色
  //   // selectedColor: '#6190E8', // 选中时的颜色
  //   // backgroundColor: '#fff', // 背景颜色
  //   // borderStyle: 'black', // 边框颜色
  //   custom: true,
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       // text: '首页',
  //       // iconPath: './assets/tab-home.png',
  //       // selectedIconPath: './assets/tab-home-active.png'
  //     },
  //     {
  //       pagePath: 'pages/category/index',
  //       // text: '分类',
  //       // iconPath: './assets/tab-category.png',
  //       // selectedIconPath: './assets/tab-category-active.png'
  //     },
  //     // {
  //     //   pagePath: 'pages/mine/index',
  //     //   text: '我的',
  //     //   iconPath: './assets/tab-mine.png',
  //     //   selectedIconPath: './assets/tab-mine-active.png'
  //     // }
  //   ]
  // }
})
