import { View, Map, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui'
import './index.scss'
import Card from '../../components/Card'

const longitude = 114.79944705963136 // 经度
const latitude = 38.69408504756835 // 纬度
const makers = [ // 标注点
  {
    id: 1,
    width: '20',
    height: '30',
    longitude: longitude,
    latitude: latitude
  }
]
export default function Address() {
  // 调起导航
  const go = () => {
    Taro.openLocation({
      latitude,
      longitude,
      scale: 18
    })
  }
  return (
    <View className='Address'>
      <Card title='商家地址' desc='我们还很小，但我们正在茁壮成长。'>
        <Map className='map' longitude={longitude} latitude={latitude} markers={makers} />
        <AtList hasBorder={false} className='infoList'>
          <AtListItem
            hasBorder={false}
            title='地址：河北省保定市唐县罗庄乡南罗庄村'
            iconInfo={{ size: 20, color: '#fa8072', value: 'map-pin', }}
            onClick={go}
          />
          <AtListItem
            hasBorder={false}
            title='联系人：赵泽宁'
            iconInfo={{ size: 20, color: '#fa8072', value: 'user', }}
          />
          <AtListItem
            hasBorder={false}
            title='手机号：15130449479'
            iconInfo={{ size: 20, color: '#fa8072', value: 'phone', }}
          />
          <View className='daohang' onClick={go}>
            <Image className='icon' src='https://www.aireadall.com/furniture/icon_daohang.png' />
          </View>
        </AtList>
      </Card>
    </View>
  )
}
