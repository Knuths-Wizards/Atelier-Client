import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RatingsReviews from './RatingsReviews'
import dummyReviews from './test-data/dummyReviews.json'

describe('Ratings and Reviews', ()=>{
  const RR = <RatingsReviews reviews={dummyReviews.results}/>

  describe('ReviewsList', ()=>{
    it('Should display two reviews', ()=>{
      render(RR)
      expect(screen.getAllByTestId('review').length).toBe(2)
    })

    it('Should show the "more reviews" button', ()=>{
      render(RR)
      let button = screen.getByText('More Reviews')
      expect(button).toBeVisible()
    })

    it('Should display two more reviews when button is clicked', async ()=>{
      render(RR)
      expect(screen.getAllByTestId('review').length).toBe(2)
      // let button = screen.getByText('More Reviews')
      await userEvent.click(screen.getByText('More Reviews'))
      expect(screen.getAllByTestId('review').length).toBe(4)
    })

    xit('Should hide the button if all reviews are displayed', async ()=>{
      render(RR)
      let button = screen.getByText('More Reviews')
      await userEvent.click(button)
      await userEvent.click(button)
      await userEvent.click(button)
      button = screen.queryByText('More Reviews')
      expect(button).not.toBeVisible()
    })
  })
})