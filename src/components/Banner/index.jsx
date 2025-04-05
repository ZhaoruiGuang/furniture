import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

export default function Banner(props) {
  const { data = [], style = {} } = props
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwiperChange = (e) => {
    setActiveIndex(e.detail.current)
  }

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
            autoplay={false}
            style={style}
            onChange={handleSwiperChange}
          >
            {
              data.map((item, index)=> (
                <SwiperItem key={index}>
                  <View className={`swiperItem ${
                    activeIndex === index ? 'active' : ''
                  }`}>
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
