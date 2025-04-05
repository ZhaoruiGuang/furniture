import { View, Video, Text } from '@tarojs/components'
import './index.scss'
import Card from '../../components/Card'

export default function ExcellentCases(props) {
  const {style = {}} = props
  return (
    <View className='ExcellentCases' desc='您的满意，是我们前行的动力' style={style}>
      <Card title='优秀案例'>
        <View className='videoContainer'>
          <Video
            src='https://www.aireadall.com/furniture/excellent_case_1.mp4'
            initialTime={0}
            controls
            autoplay={false}
            loop={false}
            muted={false}
          />
          <Video
            src='https://www.aireadall.com/furniture/excellent_case_2.mp4'
            initialTime={0}
            controls
            autoplay={false}
            loop={false}
            muted={false}
          />
        </View>
        <Text className='moreTips'>更多真实客户安装实拍请抖音搜索「冀F在路上」</Text>
      </Card>
    </View>
  )
}
