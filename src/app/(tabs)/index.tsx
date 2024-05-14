import products from '@/assets/data/products';
import { Text, View } from '@/src/components/Themed';

import ProductListItem from '@/src/components/ProductListItem';


export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]}/>
    </View>
    
  );
}
