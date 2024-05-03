import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default function Banner(props) {
  const { data = [], style = {} } = props
  return (
    <>
      {
        data.length ? (
          <Swiper
            className='Banner'
            indicatorDots
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            autoplay
            style={style}
          >
            {
              data.map((item, index)=> (
                <SwiperItem key={index}>
                  <View className={'swiperItem swiperItem-' + index}>
                    <Image className='swiperItemImg' src={item?.img} />
                  </View>
                </SwiperItem>
              ))
            }
          </Swiper>
        ) : (
          <View></View>
        )
      }
    </>
  )
}
