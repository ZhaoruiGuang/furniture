import { View } from '@tarojs/components'
import './index.scss'

export default function HorizontalList(props) {
  const { children } = props
  return (
    <View className='HorizontalList'>
      {children}
    </View>
  )
}
