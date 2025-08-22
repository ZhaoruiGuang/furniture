import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { useState } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default function TabBar() {
  const [currentTab, setCurrentTab] = useState(0)
  const handleTab = (tab) => {
    setCurrentTab(tab)

    if (tab === 2) {
      Taro.makePhoneCall({
        phoneNumber: '18201465719' //仅为示例，并非真实的电话号码
      })
      return
    }
    const pages = [
      '/pages/index/index',
      '/pages/category/index'
    ]
    const path = pages[tab]
    if (path) {
      Taro.navigateTo({ url: path })
    }
  }
  return (
    <View className='TabBar'>
      <AtTabBar
        fixed
        iconSize={18}
        fontSize={12}
        selectedColor='#fa8072'
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '分类', iconType: 'folder' },
          { title: '致电', iconType: 'phone' }
        ]}
        onClick={handleTab}
        current={currentTab}
      />
    </View>
  )
}
