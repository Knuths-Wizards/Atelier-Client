import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RatingsReviews from './RatingsReviews'
import dummyIO from './test-data/dummyIO.json'


describe('Ratings and Reviews', ()=>{
  const RR = <RatingsReviews productId={0}/>


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
      await userEvent.click(screen.getByText('More Reviews'))
      expect(screen.getAllByTestId('review').length).toBe(4)
    })

    it('Should hide the button if all reviews are displayed', async ()=>{
      render(RR)
      let button = screen.getByText('More Reviews')
      await userEvent.click(button)
      await userEvent.click(button)
      await userEvent.click(button)
      button = screen.queryByText('More Reviews')
      expect(button).not.toBeVisible()
    })
  })

  describe('Review Tile', ()=>{

    it('Should show Star Rating', ()=>{
      render(RR)
      let reviews = screen.getAllByTestId('review')
      reviews.forEach((review)=>{
        expect(within(review).getByTestId('stars')).toBeInTheDocument()
      })
    })

    it('Should display review date', ()=>{
      expect(screen.getByText('2023')).not.toBeNull()
    })
    it('Should display review summary (aka title)', ()=>{
      expect(screen.getByText('Yes')).toBeInTheDocument()
      expect(screen.getByText('Best purchase')).toBeInTheDocument()
    })
    it('Should display review body', ()=>{
      expect(screen.getByText('Yes')).toBeInTheDocument()
      expect(screen.getByText('I loved it')).toBeInTheDocument()
    })
    it('Should display reviewer name', ()=>{
      expect(screen.getByText('JSON')).toBeInTheDocument()
      expect(screen.getByText('hello')).toBeInTheDocument()
    })
    it('Should ask if review was helpful', ()=>{
      expect(screen.getByText('Was this review helpful?')).toBeInTheDocument()
      expect(screen.getByText('Yes (0)')).toBeInTheDocument()
    })

    it('Should update count when "Yes" is clicked', async ()=>{
      var links = screen.getAllByText(/Yes (\d+)/)
      links.forEach((link)=>{
        expect(within(link).getByText('Yes (0)')).toBeInTheDocument()
      })
      await userEvent.click(links[1])
      links = screen.getAllByText(/Yes (\d+)/)
      links.forEach((link, i)=>{
        expect(within(link).getByText(`Yes (${i})`)).toBeInTheDocument()
      })
    })
  })
})