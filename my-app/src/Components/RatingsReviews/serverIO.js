import axios from '../../axiosAtelier'
import path from 'path'

const api = process.env.REACT_APP_API_BASE_URL

const serverIO = {
  getReviews: (productId) => {

    return Promise.resolve([])
  },

  castVote: (reviewId) => {

    return Promise.resolve(null)
  },

  reportReview: (reviewId) => {

    return Promise.resolve(null)
  },

  submitReview: (formData) => {

    return Promise.resolve(null)
  }
}

export default serverIO