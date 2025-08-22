import { View, Image, Text } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import './index.scss';

const ProductDetail = () => {
  const router = useRouter();
  const { product } = router.params;
  const productData = JSON.parse(decodeURIComponent(product));

  return (
    <View className='product-detail'>
      <View className='product-image-container'>
        <Image src={productData.image} mode='aspectFill' className='product-image' />
      </View>
      <View className='product-info'>
        <View className='product-specs'>
          <View className='spec-item'>
            <Text className='spec-label'>分类</Text>
            <Text className='spec-value'>{productData.category}</Text>
          </View>
          <View className='spec-item'>
            <Text className='spec-label'>风格</Text>
            <View className='spec-value product-style'>
              {productData.style?.split('、').map((item, index) => (
                <View className='product-style-item' key={index}>{item}</View>
              ))}
            </View>
          </View>
          <View className='spec-item'>
            <Text className='spec-label'>尺寸</Text>
            <Text className='spec-value'>非固定，以实际定制尺寸为准</Text>
          </View>
          <View className='spec-item'>
            <Text className='spec-label'>价格</Text>
            <Text className='spec-value'>价格可议，以最终成交价为准</Text>
          </View>
          <View className='spec-item'>
            <Text className='spec-label'>物流</Text>
            <Text className='spec-value'>厂家亲自配送，上门安装</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
