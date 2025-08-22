import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Flavour from '../../components/Flavour'
import Banner from '../../components/Banner'
// import Card from '../../components/Card'
import Address from '../../components/Address'
import TabBar from '../../components/TabBar'
import ExcellentCases from '../../components/ExcellentCases'
import Kinds from '../../components/Kinds'
// import Motto from '../../components/Motto'

const bannerData = [
  {
    "img": "https://www.aireadall.com/furniture/banner_1.jpg",
    "desc": ""
  },
  {
    "img": "https://www.aireadall.com/furniture/banner_2.jpg",
    "desc": ""
  },
  {
    "img": "https://www.aireadall.com/furniture/banner_3.jpg",
    "desc": ""
  },
  {
    "img": "https://www.aireadall.com/furniture/banner_4.jpg",
    "desc": ""
  }
]

const kindData = [
  {
    kind: 'wardrobe',
    img: 'https://www.aireadall.com/furniture/kind_yg.png',
    title: '衣柜'
  },
  {
    kind: 'kitchen',
    img: 'https://www.aireadall.com/furniture/kind_cg.png',
    title: '厨柜'
  },
  {
    kind: 'cabinet',
    img: 'https://www.aireadall.com/furniture/kind_zsg.png',
    title: '展示柜'
  },
  {
    kind: 'bed',
    img: 'https://www.aireadall.com/furniture/kind_chuang.png',
    title: '床'
  },
  {
    kind: 'sofa',
    img: 'https://www.aireadall.com/furniture/kind_shafa.jpeg',
    title: '沙发'
  },
  {
    kind: 'coffeeTable',
    img: 'https://www.aireadall.com/furniture/kind_chaji.jpeg',
    title: '茶几'
  },
  {
    kind: 'table',
    img: 'https://www.aireadall.com/furniture/kind_zhuoyi.jpeg',
    title: '桌椅'
  },
]

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  // 查看更多产品
  // const handleSeeMoreProduct = () => {
  //   console.log('------')
  // }

  return (
    <View className='Index'>
      <Banner data={bannerData} />
      <Flavour style={{marginTop: '30px', marginBottom: '30px'}} />
      {/* <CardTitle title='产品展示' /> */}
      {/* <View>产品展示</View>
      <View>效果预览</View>
      <View>真实案例</View> */}
      {/* <View>衣柜、橱柜、厨柜、桌子、床</View> */}
      {/* 现代、中式、简约、轻奢、简奢、实木、北欧 */}
      <Kinds data={kindData} />

      {/* <Card title='产品展示' desc='您想要的，这里都有。' isMore onClickMore={handleSeeMoreProduct} style={{marginTop: '40px'}}> aaa </Card> */}
      <ExcellentCases />
      <Address />
      <TabBar />
    </View>
  )
}
