import { View, Image, Text } from '@tarojs/components'
import HorizontalList from '../HorizontalList'
import './index.scss'

export default function Kinds(props) {
  const { data = [] } = props

  const handleClickKind = item => {
    console.log(item)
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
