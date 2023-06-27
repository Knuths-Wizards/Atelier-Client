import axios from '../../axiosAtelier'

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