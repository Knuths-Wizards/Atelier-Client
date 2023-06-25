import axiosAtelier from '../../axiosAtelier.js'
const apiURL = process.env.REACT_APP_API_BASE_URL;

export const fetchAllProducts = async () => {
  try {
    console.log('API URL--- ',apiURL)

    const response = await axiosAtelier.get(`${apiURL}/products`);
    return response.data
  } catch (err) {
    console.log ('FETCH ALL PRODUCT ERR-----', err)
    alert(err);
  }
}

export const fetchProductData = async (productId) => {
  try {
    const response = await axiosAtelier.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};