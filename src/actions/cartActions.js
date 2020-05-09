import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'https://roomsofa.herokuapp.com/products/' + productId
    );
    console.log(data);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        brand: data.brand,
        image: data.image,
        price: data.price,
        countInStock: data.isSoldOut,
        qty,
      },
    });
  } catch (error) {}
};

export { addToCart };
