import axios from '../../axiosAtelier'
import path from 'path-browserify'


const serverIO = {
  getReviews: (productId) => {
    return axios({
      url: path.join('reviews'),
      method: 'GET',
      params: {
        product_id: productId,
        sort: 'newest'
      }
    })
    .then((response)=>{
      return response.data.results
    })
    .catch((err)=>{
      console.log('CTRL: Error getting reviews')
      console.error(err.message)
      return []
    })
  },

  getMetadata: (productId) => {
    return axios({
      url: path.join('reviews', 'meta'),
      method: 'GET',
      params: {
        product_id: productId
      }
    })
    .then((response)=>{
      return response.data
    })
    .catch((err)=>{
      console.log('CTRL: Error getting metadata')
      console.error(err.message)
      return []
    })
  },

  castVote: (reviewId) => {
    console.log('PUT', path.join('reviews', reviewId.toString(), 'helpful'))
    return axios({
      url: path.join('reviews', reviewId.toString(), 'helpful'),
      method: 'PUT'
    })
    .catch((err)=>{
      console.log('CTRL: Error casting vote')
    })
  },

  reportReview: (reviewId) => {

    return Promise.resolve(null)
  },

  submitReview: (formData) => {

    return axios({
      url: path.join('reviews'),
      method: 'POST',
      data: formData
    })
    .then((res)=>{
      if (res.status === 201) {
        console.log('Review Posted')
      } else {
        console.log('Server responded with', res.status)
      }
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
}

export default serverIO