import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get('https://roomsofa.herokuapp.com/products');
    // console.log(data.data);
    const productData = await data.data.filter(
      (data) => productId === data._id
    );
    // console.log('productData', productData[0]._id);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: productData[0]._id,
        name: productData[0].name,
        brand: productData[0].brand,
        image: productData[0].images,
        price: productData[0].price,
        productSoldOut: productData[0].isSoldOut,
        quantity,
      },
    });
  } catch (error) {}
};

export { addToCart };
