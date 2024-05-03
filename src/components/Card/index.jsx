import { View } from '@tarojs/components'
import './index.scss'
import CardTitle from '../CardTitle'

export default function UICard(props) {
  const { title = '', desc = '', isMore = false, onClickMore,  style = {}, children } = props
  return (
    <View className='UICard' style={style}>
      {title && <CardTitle title={title} desc={desc} isMore={isMore} onClickMore={onClickMore} style={{padding: 0}} />}
      {children}
    </View>
  )
}
