import dummyReviews from './dummyReviews.json'

const dummyIO = {
  fakeReviews: (productId) => {

    return Promise.resolve(dummyReviews.results)
  },

  fakeVote: (reviewId) => {

  },

  fakeReport: (reviewId) => {

  },

  fakeSubmit: (formData) => {

  }
}

export default dummyIO