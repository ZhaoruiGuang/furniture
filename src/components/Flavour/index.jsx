import { View, Image } from '@tarojs/components'
import './index.scss'

const FlavourData = [
  {
    icon: 'https://www.aireadall.com/furniture/icon_celiang.png',
    title: '上门测量'
  },
  {
    icon: 'https://www.aireadall.com/furniture/icon_dingzhi.png',
    title: '个性定制'
  },
  {
    icon: 'https://www.aireadall.com/furniture/icon_car.png',
    title: '免费送装'
  },
  {
    icon: 'https://www.aireadall.com/furniture/icon_shouhou.png',
    title: '无忧售后'
  },
]

export default function Flavour(props) {
  const { style = {} } = props
  const data = FlavourData
  return (
    <View className='Flavour' style={style}>
      {
        data.map((item, index) => (
          <View className='flavourItem' key={index}>
            <Image className='icon' src={item?.icon} />
            <View className='text'>{item?.title}</View>
          </View>
        ))
      }
    </View>
  )
}
