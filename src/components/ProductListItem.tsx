import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';

import { Product } from '../types';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
} 

const ProductListItem = ({ product }: ProductListItemProps) => {
    
    return (
  <View style={styles.container}>
        <Image source={{uri: product.image || defaultPizzaImage}} style= {styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    )
  } 

  export default ProductListItem;

  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20
      },
      title: {
        fontSize: 20,
        fontWeight: '600',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      price: {
        color: Colors.light.tint,
        fontWeight: 'bold'
      }, 
      image: {
        width: '100%',
        aspectRatio: 1,
      }
  })