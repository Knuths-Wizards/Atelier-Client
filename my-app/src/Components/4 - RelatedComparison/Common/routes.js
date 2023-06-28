import axiosAtelier from '../../../axiosAtelier.js';

const baseURL = process.env.REACT_APP_API_BASE_URL

export function getProductDetails(str) {
  return axiosAtelier.get(baseURL + "products/" + str.toString());
}
export function getImages(obj) {
  return axiosAtelier.get(baseURL + "products/" + obj.id.toString() + "/styles");
}
export function getReviews(obj) {
  return axiosAtelier.get(baseURL + "reviews/meta/?product_id=" + obj.id.toString());
}
export function dataMap(response) {
  return response.data;
}
export function getRelated(str) {
  return axiosAtelier.get(baseURL + "products/" + str.toString() + "/related");
}