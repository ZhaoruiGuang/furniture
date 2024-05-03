import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default function CardTitle(props) {
  const { title = '', desc = '', isMore = false, onClickMore, style = {} } = props

  const handleSeeMore = () => {
    if (onClickMore) {
      onClickMore()
    }
  }

  return (
    <>
      {title ? (
        <View className='CardTitle' style={style}>
          <View className='title'>
            <View>{title}</View>
            {desc && <View className='desc'>{desc}</View>}
          </View>
          {isMore ? (
            <Text className='seeMore' onClick={handleSeeMore}>
              查看更多
              <AtIcon value='chevron-right' size='16' color='rgb(153, 153, 153)'></AtIcon>
            </Text>
          ) : null}
        </View>
      ) : (
        <View></View>
      )}
    </>
  )
}
