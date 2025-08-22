import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import HorizontalList from '../HorizontalList'
import './index.scss'

export default function Kinds(props) {
  const { data = [] } = props

  // 点击跳转到分类页对应的 Tab
  const handleClickKind = item => {
    Taro.navigateTo({
      url: `/pages/category/index?kind=${item.kind}`
    });
  }

  return (
    <>
      {data.length ? (
        <View className='Kinds'>
          <HorizontalList>
            {
              data.map(item =>(
                <View className='kindItem' key={item.kind} onClick={()=> handleClickKind(item)}>
                  <Image className='kindImg' src={item.img} />
                  <Text className='kindTitle'>
                    {item.title}
                  </Text>
                </View>
              ))
            }
            <View className='kindItem kindItemMore' key='kindMore'>
              <View>更多品类</View>
              <View>敬请期待</View>
            </View>
          </HorizontalList>
        </View>
      ) : (
        <View></View>
      )}
    </>
  )
}
