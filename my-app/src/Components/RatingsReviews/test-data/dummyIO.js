import dummyReviews from './dummyReviews.json'

const dummyIO = {
  fakeReviews: (productId) => {

    return new Promise(dummyReviews)
  },

  fakeVote: (reviewId) => {

    return new Promise()
  },

  fakeReport: (reviewId) => {

    return new Promise()
  },

  fakeSubmit: (formData) => {

    return new Promise()
  }
}

export default dummyIO